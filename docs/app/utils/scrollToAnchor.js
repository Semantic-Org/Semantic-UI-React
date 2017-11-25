const mathSign = Math.sign || function (x) {
  const val = +x

  if (val === 0 || isNaN(val)) return val
  return val > 0 ? 1 : -1
}

const scrollToAnchor = (lastOffsetY) => {
  const anchor = location.hash && document.querySelector(location.hash)
  const offsetY = window.scrollY || window.pageYOffset

  // no scroll to target, stop
  if (!anchor) return

  const elementTop = Math.round(anchor.getBoundingClientRect().top)
  const scrollStep = Math.ceil((Math.abs(elementTop / 8))) * mathSign(elementTop)

  // if our last step was not applied, stop
  // we've either hit the top, bottom, or arrived at the element
  if (lastOffsetY === offsetY) return

  // more scrolling to do!
  scrollBy(0, scrollStep)
  requestAnimationFrame(() => scrollToAnchor(offsetY))
}

export default scrollToAnchor
