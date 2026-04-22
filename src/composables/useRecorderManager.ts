type RecordManager = UniApp.RecorderManager & {
  onResume: (options: () => void) => void
}

type OnStopResult = {
  tempFilePath: string
}

type OnFrameRecordedResult = {
  frameBuffer: ArrayBuffer
  isLastFrame: boolean
}

export function useRecorderManager() {
  const recorderManager = uni.getRecorderManager() as RecordManager
  const running = ref(false)
  const paused = ref(false)
  const stopped = ref(false)
  const duration = ref(0)
  const tempFilePath = ref<string>()
  const volumes = ref([0.1, 0.1, 0.1, 0.1, 0.1])

  let timer: ReturnType<typeof setInterval> | null = null

  function startTimer() {
    stopTimer()
    timer = setInterval(() => {
      duration.value++
    }, 1000)
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  function formatDuration(seconds: number) {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  /**
   * Calculate volume from PCM16LE frame buffer safely.
   * Use a capped normalization to avoid overly large waveforms on very small signals.
   */
  function calculateVolume(buffer: ArrayBuffer): number {
    if (!buffer || buffer.byteLength < 2)
      return 0
    const view = new DataView(buffer)
    const sampleCount = Math.floor(buffer.byteLength / 2)
    if (sampleCount <= 0)
      return 0
    let sum = 0
    for (let i = 0; i < sampleCount; i++) {
      const sample = view.getInt16(i * 2, true)
      sum += Math.abs(sample)
    }
    const avg = sum / sampleCount
    // Normalize to [0,1], cap to avoid excessive gain
    const norm = Math.min(avg / 32768, 0.5)
    return norm
  }

  let lastVolume = 0

  function updateVolumes(volume: number) {
    // clamp volume to a sane range to avoid oversized waveforms
    const v = Math.max(0, Math.min(volume, 0.5))
    // 平滑过渡
    const smoothFactor = 0.25
    const smoothVolume = lastVolume + (v - lastVolume) * smoothFactor
    lastVolume = smoothVolume

    volumes.value = [
      Math.max(0.05, smoothVolume * 0.75),
      Math.max(0.05, smoothVolume * 0.9),
      Math.max(0.05, smoothVolume * 1.0),
      Math.max(0.05, smoothVolume * 0.9),
      Math.max(0.05, smoothVolume * 0.75),
    ]
  }

  function reset() {
    stopTimer()
    duration.value = 0
    lastVolume = 0
    volumes.value = [0.05, 0.05, 0.05, 0.05, 0.05]
  }

  const onStartEvent = createEventHook<[]>()
  recorderManager.onStart(() => {
    running.value = true
    paused.value = false
    stopped.value = false
    duration.value = 0
    startTimer()
    onStartEvent.trigger()
  })

  const onPauseEvent = createEventHook<[]>()
  recorderManager.onPause(() => {
    running.value = false
    paused.value = true
    stopped.value = false
    stopTimer()
    onPauseEvent.trigger()
  })

  const onResumeEvent = createEventHook<[]>()
  recorderManager.onResume(() => {
    running.value = true
    paused.value = false
    stopped.value = false
    startTimer()
    onResumeEvent.trigger()
  })

  const onStopEvent = createEventHook<[payload: OnStopResult & { duration: number }]>()
  recorderManager.onStop((res: OnStopResult) => {
    running.value = false
    paused.value = false
    stopped.value = true
    tempFilePath.value = res.tempFilePath
    stopTimer()
    volumes.value = [0.1, 0.1, 0.1, 0.1, 0.1]
    onStopEvent.trigger({ ...res, duration: duration.value })
  })

  const onFrameRecordedEvent = createEventHook<[payload: OnFrameRecordedResult]>()
  recorderManager.onFrameRecorded((res: OnFrameRecordedResult) => {
    if (res.frameBuffer && res.frameBuffer.byteLength > 0) {
      const volume = calculateVolume(res.frameBuffer)
      updateVolumes(volume)
    }
    onFrameRecordedEvent.trigger(res)
  })

  const onErrorEvent = createEventHook<[payload: any]>()
  recorderManager.onError((err) => {
    console.error(err)
    onErrorEvent.trigger(err)
  })

  function start(options: UniApp.RecorderManagerStartOptions) {
    recorderManager.start(options)
  }

  function pause() {
    recorderManager.pause()
  }

  function resume() {
    recorderManager.resume()
  }

  function stop() {
    recorderManager.stop()
  }

  return {
    recorderManager,
    start,
    pause,
    resume,
    stop,
    reset,
    running,
    paused,
    stopped,
    duration,
    tempFilePath,
    volumes,
    formattedDuration: computed(() => formatDuration(duration.value)),
    onStart: onStartEvent.on,
    onPause: onPauseEvent.on,
    onResume: onResumeEvent.on,
    onStop: onStopEvent.on,
    onFrameRecorded: onFrameRecordedEvent.on,
    onError: onErrorEvent.on,
  }
}
