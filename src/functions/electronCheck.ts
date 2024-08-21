export function electronCheck() {
  if (typeof navigator !== 'undefined') {
    return navigator.userAgent.toLowerCase().includes('electron')
  }

  return false
}
