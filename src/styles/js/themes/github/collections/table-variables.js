module.exports = (theme) => {
  const vars = {}

  /*******************************
      User Variable Overrides
  *******************************/

  vars.background = `#F8F8F8`

  vars.cellVerticalPadding = `${theme.relative6px}`
  vars.cellHorizontalPadding = `${theme.relative8px}`
  return vars
}
