import _ from 'lodash'
import isBrowser from './isBrowser'

const DEFAULT_FONT_SIZE = '16px'
const DEFAULT_REM_SIZE_IN_PX = 10

let _htmlFontSize: string = DEFAULT_FONT_SIZE

export default class fontSizeUtility {
  static pxToRem = (value: number = 0): string => {
    const htmlFontSizeValue = parseFloat(_htmlFontSize) || 0
    const htmlFontSizeUnit = _htmlFontSize.replace(htmlFontSizeValue.toString(), '')

    const convertedValueInRems = value / DEFAULT_REM_SIZE_IN_PX

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

  static setHTMLFontSize = (fontSize?: string) => {
    _htmlFontSize = fontSize || fontSizeUtility.getComputedFontSize()
  }

  static getComputedFontSize = () => {
    return isBrowser()
      ? getComputedStyle(document.documentElement).fontSize || DEFAULT_FONT_SIZE
      : DEFAULT_FONT_SIZE
  }
}
