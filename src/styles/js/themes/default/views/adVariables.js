module.exports = (siteVars) => {
  const vars = {}

  /*******************************
            Advertisement
  *******************************/

  vars.margin = `1em 0em`
  vars.overflow = `hidden`

  vars.testBackground = `${siteVars.lightBlack}`
  vars.testColor = `${siteVars.white}`
  vars.testFontWeight = `${siteVars.bold}`
  vars.testText = `'Ad'`
  vars.testFontSize = `${siteVars.relativeMedium}`
  vars.testMobileFontSize = `${siteVars.relativeTiny}`

  return vars
}
