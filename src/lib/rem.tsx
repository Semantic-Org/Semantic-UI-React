import _ from 'lodash'
import isBrowser from 'stardust/lib/isBrowser'

// TODO - This doesn't support theme switching, other themes, and doesn't support user changes to html base font size.
const htmlFontSize = isBrowser() ? getComputedStyle(document.documentElement).fontSize : '16px'

/**
 * Converts the provided rem size to a rem value based on the htmlFontSize provided in the theme's siteVariables.
 * When providing a value to the rem function assume the base font-size is 10px.  Therefore 10px equals 1rem.
 * @param {number} value The rem value to convert to rems based on the HTML font size.
 * @returns {string} The value converted to the rem value based on the htmlFontSize.
 */
const rem = (value?: number) => {
  const default1RemSizeInPx = 10

  if (_.isUndefined(value)) {
    return '0rem'
  }

  const htmlFontSizeValue = parseFloat(htmlFontSize) || 0
  const htmlFontSizeUnit = htmlFontSize.replace(htmlFontSizeValue.toString(), '')

  const fontSizeMultiplier = default1RemSizeInPx / htmlFontSizeValue
  const convertedValueInRems = fontSizeMultiplier * value

  if (process.env.NODE_ENV !== 'production') {
    if (!_.isNumber(value)) {
      throw new Error(`Expected number, but got: '${typeof value}'.`)
    }

    if (htmlFontSizeValue <= 0) {
      throw new Error(`Invalid htmlFontSizeValue of: '${htmlFontSize}'.`)
    }

    if (!_.isString(htmlFontSize)) {
      throw new Error(`Expected htmlFontSize to be a string, but got: '${htmlFontSize}'.`)
    }

    if (htmlFontSizeUnit !== 'px') {
      throw new Error(`Expected htmlFontSize to be in px, but got: '${htmlFontSizeUnit}'.`)
    }

    if (!_.isNumber(convertedValueInRems)) {
      throw new Error(
        `Unable to convert value: '${value}' to rems, got: '${convertedValueInRems}'.`,
      )
    }
  }

  return `${_.round(convertedValueInRems, 4)}rem`
}

export default rem
