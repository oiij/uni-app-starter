export function useLocation() {
  const location = ref<UniApp.GetLocationSuccess>()
  function getLocation() {
    uni.getLocation({
      success: (res) => {
        location.value = res
      },
    })
  }
  getLocation()
  return {
    location,
  }
}
