import _ from 'lodash'
import isBrowser from './isBrowser'

const DEFAULT_FONT_SIZE = '16px'
const DEFAULT1_REM_SIZE_IN_PX = 10

let _htmlFontSize: string = DEFAULT_FONT_SIZE

const getComputedFontSize = () => {
  return isBrowser()
    ? getComputedStyle(document.documentElement).fontSize || DEFAULT_FONT_SIZE
    : DEFAULT_FONT_SIZE
}

/**
 * Converts the provided rem size to a rem value based on the htmlFontSize provided in the theme's siteVariables.
 * When providing a value to the rem function assume the base font-size is 10px.  Therefore 10px equals 1rem.
 * @param {number} value The rem value to convert to rems based on the HTML font size.
 * @returns {string} The value converted to the rem value based on the htmlFontSize.
 */
const rem: any = (value: number = 0): string => {
  const htmlFontSizeValue = parseFloat(_htmlFontSize) || 0
  const htmlFontSizeUnit = _htmlFontSize.replace(htmlFontSizeValue.toString(), '')

  const fontSizeMultiplier = DEFAULT1_REM_SIZE_IN_PX / htmlFontSizeValue
  const convertedValueInRems = fontSizeMultiplier * value

  if (process.env.NODE_ENV !== 'production') {
    if (htmlFontSizeValue <= 0) {
      throw new Error(`Invalid htmlFontSizeValue of: '${_htmlFontSize}'.`)
    }

    if (htmlFontSizeUnit !== 'px') {
      throw new Error(`Expected htmlFontSize to be in px, but got: '${htmlFontSizeUnit}'.`)
    }
  }

  return `${_.round(convertedValueInRems, 4)}rem`
}

rem.setHTMLFontSize = (fontSize?: string) => {
  _htmlFontSize = fontSize || getComputedFontSize()
}

export default rem
