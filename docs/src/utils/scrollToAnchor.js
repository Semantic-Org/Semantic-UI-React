const mathSign =
  Math.sign ||
  function mathSign(x) {
    const val = +x

    if (val === 0 || Number.isNaN(val)) return val
    return val > 0 ? 1 : -1
  }

const scrollToAnchor = (lastOffsetY, lastAcceleration = 0.1) => {
  const anchor = window.location.hash && document.querySelector(window.location.hash)
  const offsetY = window.scrollY || window.pageYOffset

  // no scroll to target, stop
  if (!anchor) return

  const elementTop = Math.round(anchor.getBoundingClientRect().top)
  const scrollStep = Math.ceil(Math.abs(elementTop / 8)) * mathSign(elementTop)
  const acceleration = Math.min(1, (lastAcceleration * 100) ** 1.1 / 100)

  // if our last step was not applied, stop
  // we've either hit the top, bottom, or arrived at the element
  if (lastOffsetY === offsetY) return

  // more scrolling to do!
  window.scrollBy(0, scrollStep * acceleration)
  requestAnimationFrame(() => scrollToAnchor(offsetY, acceleration))
}

export default scrollToAnchor
