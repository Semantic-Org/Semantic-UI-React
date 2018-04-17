module.exports = (theme) => {
  const vars = {}

  /*******************************
               Menu
  *******************************/

  vars.fontFamily = `'Roboto', Arial, sans-serif`
  vars.boxShadow = `0px 1px 6px rgba(0, 0, 0, 0.2)`
  vars.dividerSize = `0px`

  vars.itemVerticalPadding = `${theme.relativeLarge}`
  vars.itemHorizontalPadding = `${theme.relativeLarge}`
  return vars
}
