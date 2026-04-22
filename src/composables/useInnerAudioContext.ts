type Options = {
  src?: string
  startTime?: number
  autoplay?: boolean
  loop?: boolean
  obeyMuteSwitch?: boolean
  volume?: number
  playbackRate?: number
}

export function useInnerAudioContext(options?: Options) {
  const { src, startTime = 0, autoplay = false, loop = false, obeyMuteSwitch = true, volume = 1, playbackRate = 1 } = options ?? {}

  const audioContext = uni.createInnerAudioContext()

  audioContext.startTime = startTime
  audioContext.autoplay = autoplay
  audioContext.loop = loop
  audioContext.obeyMuteSwitch = obeyMuteSwitch
  audioContext.volume = volume
  audioContext.playbackRate = playbackRate

  if (src) {
    audioContext.src = src
  }

  const currentTime = ref(0)
  const duration = ref(0)
  const isPlaying = ref(false)
  const isPaused = ref(false)
  const isEnded = ref(false)
  const isWaiting = ref(false)

  const formattedCurrentTime = computed(() => formatTime(currentTime.value))
  const formattedDuration = computed(() => formatTime(duration.value))
  const progress = computed(() =>
    duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0,
  )

  function formatTime(seconds: number) {
    if (!seconds || Number.isNaN(seconds))
      return '00:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  function setSrc(src: string) {
    audioContext.stop()
    resetState()
    audioContext.src = src
  }
  function play(src?: string) {
    if (src) {
      setSrc(src)
    }
    audioContext.play()
  }

  function pause() {
    audioContext.pause()
  }
  function resume() {
    audioContext.play()
  }

  function stop() {
    audioContext.stop()
  }

  function seek(position: number) {
    audioContext.seek(position)
  }

  function destroy() {
    audioContext.destroy()
  }

  function resetState() {
    currentTime.value = 0
    isPlaying.value = false
    isPaused.value = false
    isEnded.value = false
    isWaiting.value = false
  }

  // 事件处理
  function onCanplay() {
    if (duration.value === 0 || Number.isNaN(duration.value)) {
      duration.value = audioContext.duration
    }
  }

  function onPlay() {
    isPlaying.value = true
    isPaused.value = false
    isEnded.value = false
  }

  function onPause() {
    isPlaying.value = false
    isPaused.value = true
  }

  function onStop() {
    resetState()
  }

  function onEnded() {
    isPlaying.value = false
    isPaused.value = false
    isEnded.value = true
  }

  function onTimeUpdate() {
    currentTime.value = audioContext.currentTime
  }

  function onWaiting() {
    isWaiting.value = true
  }

  function onError(err: any) {
    console.error('[Audio Error]', err)
    resetState()
  }

  // 绑定事件
  audioContext.onCanplay(onCanplay)
  audioContext.onPlay(onPlay)
  audioContext.onPause(onPause)
  audioContext.onStop(onStop)
  audioContext.onEnded(onEnded)
  audioContext.onTimeUpdate(onTimeUpdate)
  audioContext.onWaiting(onWaiting)
  audioContext.onError(onError)

  // 组件卸载时清理
  onUnmounted(() => {
    audioContext.offCanplay(onCanplay)
    audioContext.offPlay(onPlay)
    audioContext.offPause(onPause)
    audioContext.offStop(onStop)
    audioContext.offEnded(onEnded)
    audioContext.offTimeUpdate(onTimeUpdate)
    audioContext.offWaiting(onWaiting)
    audioContext.offError(onError)
    audioContext.destroy()
  })

  return {
    audioContext,
    // 状态
    currentTime,
    duration,
    isPlaying,
    isPaused,
    isEnded,
    isWaiting,
    // 计算属性
    progress,
    formattedCurrentTime,
    formattedDuration,
    setSrc,
    play,
    pause,
    resume,
    stop,
    seek,
    destroy,
  }
}
