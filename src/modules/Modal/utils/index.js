// https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L956
const OFFSET = 0
// https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L990
const PADDING = 50

/**
 * Ensures that modal can fit viewport without scroll.
 *
 * @param modalRect {DOMRect}
 *
 * @see https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L608
 */
export const canFit = (modalRect) => {
  // original: scrollHeight = $module.prop('scrollHeight'),
  // is replaced by .height because scrollHeight provides integer which produces glitches
  // https://github.com/Semantic-Org/Semantic-UI-React/issues/2221
  const scrollHeight = modalRect.height + OFFSET
  // $module.outerHeight() + settings.offset
  const height = modalRect.height + OFFSET

  // original: $(window).height()
  const contextHeight = window.innerHeight
  const verticalCenter = contextHeight / 2
  const topOffset = -(height / 2)

  // padding with edge of page
  const paddingHeight = PADDING
  const startPosition = verticalCenter + topOffset // 0

  // original: scrollHeight > height
  //     ? startPosition + scrollHeight + paddingHeight < contextHeight
  //     : height + paddingHeight * 2 < contextHeight
  return startPosition + scrollHeight + paddingHeight < contextHeight
}

/**
 * Creates legacy styles for IE11.
 *
 * @param isFitted {Boolean}
 * @param centered {Boolean}
 * @param modalRect {DOMRect}
 *
 * @see https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L718
 */
export const getLegacyStyles = (isFitted, centered, modalRect) => {
  const marginTop = centered && isFitted ? -(modalRect.height / 2) : 0
  const marginLeft = -(modalRect.width / 2)

  return { marginLeft, marginTop }
}

// https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L631
/* istanbul ignore next */
export const isLegacy = () => !window.ActiveXObject && 'ActiveXObject' in window
