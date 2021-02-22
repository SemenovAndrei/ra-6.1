export function checkValid(obj) {
  if (obj.value) {
    return false
  }

  obj.style.borderColor = 'red'
  setTimeout(() => obj.removeAttribute('style'), 1000)
  return true
}
export default checkValid
