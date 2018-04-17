module.exports = (theme) => {
  const vars = {}

  /*******************************
              Input
  *******************************/

  vars.boxShadow = `0 1px 2px rgba(0, 0, 0, 0.075) inset`

  vars.verticalPadding = `${theme.relative7px}`
  vars.horizontalPadding = `${theme.relative8px}`

  vars.borderColor = `#CCCCCC`

  vars.focusBorderColor = `#51A7E8`
  vars.focusBoxShadow = `0 1px 2px rgba(0, 0, 0, 0.075) inset,
    0 0 5px rgba(81, 167, 232, 0.5)`
  return vars
}
