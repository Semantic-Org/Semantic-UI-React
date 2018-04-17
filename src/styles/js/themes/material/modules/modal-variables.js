module.exports = (theme) => {
  const vars = {}

  vars.boxShadow = `0px 10px 18px rgba(0, 0, 0, 0.22)`
  vars.borderRadius = `0em`


  vars.headerBackground = `${theme.white}`
  vars.headerVerticalPadding = `1.7142rem`
  vars.headerHorizontalPadding = `1.7142rem`
  vars.headerFontWeight = `400`
  vars.headerFontFamily = `'Roboto', "Helvetica Neue", Arial, sans-serif`
  vars.headerBorder = `none`

  vars.contentPadding = `1rem 2rem 2rem`

  vars.actionBorder = `none`
  vars.actionBackground = `${theme.white}`
  return vars
}
