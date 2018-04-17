module.exports = (siteVars) => {
  const vars = {}

  /*******************************
               Icon
  *******************************/

  /*--------------
     Font Files
  ---------------*/

  vars.fontName = `'icons'`
  vars.src = `url("${siteVars.fontPath}/${vars.fontName}.eot?#iefix") format('embedded-opentype'),
    url("${siteVars.fontPath}/${vars.fontName}.woff2") format('woff2'),
    url("${siteVars.fontPath}/${vars.fontName}.woff") format('woff'),
    url("${siteVars.fontPath}/${vars.fontName}.ttf") format('truetype'),
    url("${siteVars.fontPath}/${vars.fontName}.svg#icons") format('svg')`
  vars.fallbackSRC = `url("${siteVars.fontPath}/${vars.fontName}.eot")`

  /*--------------
   Optional Files
  ---------------*/

  /* Outline Icons */
  vars.importOutlineIcons = `true`
  vars.outlineFontName = `'outline-icons'`
  vars.outlineSrc = `url("${siteVars.fontPath}/${vars.outlineFontName}.eot?#iefix") format('embedded-opentype'),
    url("${siteVars.fontPath}/${vars.outlineFontName}.woff2") format('woff2'),
    url("${siteVars.fontPath}/${vars.outlineFontName}.woff") format('woff'),
    url("${siteVars.fontPath}/${vars.outlineFontName}.ttf") format('truetype'),
    url("${siteVars.fontPath}/${vars.outlineFontName}.svg#icons") format('svg')`
  vars.outlineFallbackSRC = `url("${siteVars.fontPath}/${vars.outlineFontName}.eot")`

  /* Brand Icons */
  vars.importBrandIcons = `true`
  vars.brandFontName = `'brand-icons'`
  vars.brandSrc = `url("${siteVars.fontPath}/${vars.brandFontName}.eot?#iefix") format('embedded-opentype'),
    url("${siteVars.fontPath}/${vars.brandFontName}.woff2") format('woff2'),
    url("${siteVars.fontPath}/${vars.brandFontName}.woff") format('woff'),
    url("${siteVars.fontPath}/${vars.brandFontName}.ttf") format('truetype'),
    url("${siteVars.fontPath}/${vars.brandFontName}.svg#icons") format('svg')`
  vars.brandFallbackSRC = `url("${siteVars.fontPath}/${vars.brandFontName}.eot")`

  /*--------------
     Definition
  ---------------*/

  /* Icon Variables */
  vars.opacity = `1`
  vars.width = `${siteVars.iconWidth}`
  vars.height = `1em`
  vars.distanceFromText = `0.25rem`


  /* Variations */
  vars.linkOpacity = `0.8`
  vars.linkDuration = `0.3s`
  vars.loadingDuration = `2s`

  vars.circularSize = `2em`
  vars.circularPadding = `0.5em 0em`
  vars.circularShadow = `0em 0em 0em 0.1em rgba(0, 0, 0, 0.1) inset`

  vars.borderedSize = `2em`
  vars.borderedVerticalPadding = `((${vars.borderedSize} - ${vars.height}) / 2)`
  vars.borderedHorizontalPadding = `0em`
  vars.borderedShadow = `0em 0em 0em 0.1em rgba(0, 0, 0, 0.1) inset`

  vars.cornerIconSize = `0.45em`
  vars.cornerIconStroke = `1px`
  vars.cornerIconShadow = `-${vars.cornerIconStroke} -${vars.cornerIconStroke} 0 ${siteVars.white},
     ${vars.cornerIconStroke} -${vars.cornerIconStroke} 0 ${siteVars.white},
    -${vars.cornerIconStroke}  ${vars.cornerIconStroke} 0 ${siteVars.white},
     ${vars.cornerIconStroke}  ${vars.cornerIconStroke} 0 ${siteVars.white}`
  vars.cornerIconInvertedShadow = `-${vars.cornerIconStroke} -${vars.cornerIconStroke} 0 ${siteVars.black},
     ${vars.cornerIconStroke} -${vars.cornerIconStroke} 0 ${siteVars.black},
    -${vars.cornerIconStroke}  ${vars.cornerIconStroke} 0 ${siteVars.black},
     ${vars.cornerIconStroke}  ${vars.cornerIconStroke} 0 ${siteVars.black}`

  vars.mini = `0.4em`
  vars.tiny = `0.5em`
  vars.small = `0.75em`
  vars.medium = `1em`
  vars.large = `1.5em`
  vars.big = `2em`
  vars.huge = `4em`
  vars.massive = `8em`

  return vars
}
