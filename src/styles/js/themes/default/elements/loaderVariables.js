module.exports = (siteVars) => {
  const vars = {}

  /*******************************
               Loader
  *******************************/

  /* Some global loader styles defined in site.variables */
  // ${siteVars.loaderSpeed}
  // ${siteVars.loaderLineWidth}
  // ${siteVars.loaderFillColor}
  // ${siteVars.loaderLineColor}
  // ${siteVars.invertedLoaderFillColor}
  // ${siteVars.invertedLoaderLineColor}

  /*-------------------
        Standard
  --------------------*/

  vars.loaderTopOffset = `50%`
  vars.loaderLeftOffset = `50%`

  vars.shapeBorderColor = `${siteVars.loaderLineColor} transparent transparent`
  vars.invertedShapeBorderColor = `${siteVars.invertedLoaderLineColor} transparent transparent`

  /*-------------------
          Types
  --------------------*/

  /* Text */
  vars.textDistance = `${siteVars.relativeMini}`
  vars.loaderTextColor = `${siteVars.textColor}`
  vars.invertedLoaderTextColor = `${siteVars.invertedTextColor}`

  /*-------------------
          States
  --------------------*/

  vars.indeterminateDirection = `reverse`
  vars.indeterminateSpeed = `(2 * ${siteVars.loaderSpeed})`

  /*-------------------
        Variations
  --------------------*/

  vars.inlineVerticalAlign = `middle`
  vars.inlineMargin = `0em`

  /* Exact Sizes (Avoids Rounding Errors) */
  vars.mini = `${siteVars.absolute14px}`
  vars.tiny = `${siteVars.absolute16px}`
  vars.small = `${siteVars.absolute24px}`
  vars.medium = `${siteVars.absolute32px}`
  vars.large = `${siteVars.absolute48px}`
  vars.big = `${siteVars.absolute52px}`
  vars.huge = `${siteVars.absolute58px}`
  vars.massive = `${siteVars.absolute64px}`

  vars.miniOffset = `0em 0em 0em -(${vars.mini} / 2)`
  vars.tinyOffset = `0em 0em 0em -(${vars.tiny} / 2)`
  vars.smallOffset = `0em 0em 0em -(${vars.small} / 2)`
  vars.mediumOffset = `0em 0em 0em -(${vars.medium} / 2)`
  vars.largeOffset = `0em 0em 0em -(${vars.large} / 2)`
  vars.bigOffset = `0em 0em 0em -(${vars.big} / 2)`
  vars.hugeOffset = `0em 0em 0em -(${vars.huge} / 2)`
  vars.massiveOffset = `0em 0em 0em -(${vars.massive} / 2)`

  vars.tinyFontSize = `${siteVars.relativeTiny}`
  vars.miniFontSize = `${siteVars.relativeMini}`
  vars.smallFontSize = `${siteVars.relativeSmall}`
  vars.mediumFontSize = `${siteVars.relativeMedium}`
  vars.largeFontSize = `${siteVars.relativeLarge}`
  vars.bigFontSize = `${siteVars.relativeBig}`
  vars.hugeFontSize = `${siteVars.relativeHuge}`
  vars.massiveFontSize = `${siteVars.relativeMassive}`

  return vars
}
