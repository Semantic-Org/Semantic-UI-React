module.exports = (theme) => {
  const vars = {}

  /*******************************
               Loader
  *******************************/

  /* Some global loader styles defined in site.variables */
  // ${theme.loaderSpeed}
  // ${theme.loaderLineWidth}
  // ${theme.loaderFillColor}
  // ${theme.loaderLineColor}
  // ${theme.invertedLoaderFillColor}
  // ${theme.invertedLoaderLineColor}

  /*-------------------
        Standard
  --------------------*/

  vars.loaderTopOffset = `50%`
  vars.loaderLeftOffset = `50%`

  vars.shapeBorderColor = `${theme.loaderLineColor} transparent transparent`
  vars.invertedShapeBorderColor = `${theme.invertedLoaderLineColor} transparent transparent`

  /*-------------------
          Types
  --------------------*/

  /* Text */
  vars.textDistance = `${theme.relativeMini}`
  vars.loaderTextColor = `${theme.textColor}`
  vars.invertedLoaderTextColor = `${theme.invertedTextColor}`

  /*-------------------
          States
  --------------------*/

  vars.indeterminateDirection = `reverse`
  vars.indeterminateSpeed = `(2 * ${theme.loaderSpeed})`

  /*-------------------
        Variations
  --------------------*/

  vars.inlineVerticalAlign = `middle`
  vars.inlineMargin = `0em`

  /* Exact Sizes (Avoids Rounding Errors) */
  vars.mini = `${theme.absolute14px}`
  vars.tiny = `${theme.absolute16px}`
  vars.small = `${theme.absolute24px}`
  vars.medium = `${theme.absolute32px}`
  vars.large = `${theme.absolute48px}`
  vars.big = `${theme.absolute52px}`
  vars.huge = `${theme.absolute58px}`
  vars.massive = `${theme.absolute64px}`

  vars.miniOffset = `0em 0em 0em -(${vars.mini} / 2)`
  vars.tinyOffset = `0em 0em 0em -(${vars.tiny} / 2)`
  vars.smallOffset = `0em 0em 0em -(${vars.small} / 2)`
  vars.mediumOffset = `0em 0em 0em -(${vars.medium} / 2)`
  vars.largeOffset = `0em 0em 0em -(${vars.large} / 2)`
  vars.bigOffset = `0em 0em 0em -(${vars.big} / 2)`
  vars.hugeOffset = `0em 0em 0em -(${vars.huge} / 2)`
  vars.massiveOffset = `0em 0em 0em -(${vars.massive} / 2)`

  vars.tinyFontSize = `${theme.relativeTiny}`
  vars.miniFontSize = `${theme.relativeMini}`
  vars.smallFontSize = `${theme.relativeSmall}`
  vars.mediumFontSize = `${theme.relativeMedium}`
  vars.largeFontSize = `${theme.relativeLarge}`
  vars.bigFontSize = `${theme.relativeBig}`
  vars.hugeFontSize = `${theme.relativeHuge}`
  vars.massiveFontSize = `${theme.relativeMassive}`

  return vars
}
