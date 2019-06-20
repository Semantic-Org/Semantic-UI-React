import isNil from 'lodash/isNil'

const fitsMaxWidth = (width, maxWidth) => (isNil(maxWidth) ? true : width <= maxWidth)

const fitsMinWidth = (width, minWidth) => (isNil(minWidth) ? true : width >= minWidth)

const isVisible = (width, { maxWidth, minWidth }) =>
  fitsMinWidth(width, minWidth) && fitsMaxWidth(width, maxWidth)

export default isVisible
