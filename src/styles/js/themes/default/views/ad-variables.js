module.exports = (theme) => {
  const vars = {}

  /*******************************
            Advertisement
  *******************************/

  vars.margin = `1em 0em`
  vars.overflow = `hidden`

  vars.testBackground = `${theme.lightBlack}`
  vars.testColor = `${theme.white}`
  vars.testFontWeight = `${theme.bold}`
  vars.testText = `'Ad'`
  vars.testFontSize = `${theme.relativeMedium}`
  vars.testMobileFontSize = `${theme.relativeTiny}`

  return vars
}
