import _ from 'lodash'
import isBrowser from './isBrowser'

const DEFAULT_FONT_SIZE_IN_PX = 16
const DEFAULT_REM_SIZE_IN_PX = 10
let _htmlFontSizeInPx: number = null

const getComputedFontSize = (): number => {
  return isBrowser()
    ? getFontSizeValue(getComputedStyle(document.documentElement).fontSize) ||
        DEFAULT_REM_SIZE_IN_PX
    : DEFAULT_FONT_SIZE_IN_PX
}

const getFontSizeValue = (size: string): number => {
  return (size && parseFloat(size)) || null
}

/**
 * Converts the provided px size to rem based on the default font size of 10px unless
 * the HTML font size has been previously defined with setHTMLFontSize().
 * @param {number} value The px value to convert to rem.
 * @example
 * // Returns '1rem'
 * pxToRem(10)
 * @returns {string} The value converted to the rem.
 */
export const pxToRem = (value: number = 0): string => {
  if (!_htmlFontSizeInPx) {
    _htmlFontSizeInPx = getComputedFontSize()
  }

  if (process.env.NODE_ENV !== 'production') {
    if (value < 0) {
      throw new Error(`Invalid value of: '${value}'.`)
    }
  }
  const convertedValueInRems = value / _htmlFontSizeInPx

  return `${_.round(convertedValueInRems, 4)}rem`
}

/**
 * Sets the HTML font size for use for px to rem conversion.
 * Providing null for fontSize will get the computed font size based on the document, or set it to DEFAULT_REM_SIZE_IN_PX.
 * @param {string} [fontSize] The font size in px, to set as the HTML font size in the fontSizeUtility.
 * @example
 * // Sets the HTML font size to 10px.
 * setHTMLFontSize('10px')
 * @example
 * // Sets the HTML font size based on document.fontSize.
 * setHTMLFontSize()
 */
export const setHTMLFontSize = (fontSize?: string): void => {
  const htmlFontSizeValue = getFontSizeValue(fontSize) || 0
  const htmlFontSizeUnit = fontSize.replace(htmlFontSizeValue.toString(), '')

  if (process.env.NODE_ENV !== 'production') {
    if (htmlFontSizeValue <= 0) {
      throw new Error(`Invalid htmlFontSizeValue of: '${htmlFontSizeValue}'.`)
    }

    if (htmlFontSizeUnit !== 'px') {
      throw new Error(`Expected htmlFontSize to be in px, but got: '${htmlFontSizeUnit}'.`)
    }
  }

  _htmlFontSizeInPx = htmlFontSizeValue || getComputedFontSize()
}
