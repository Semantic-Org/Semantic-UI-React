module.exports = (theme) => {
  const vars = {}

  /*-------------------
     Step Variables
  --------------------*/

  /* Stepss */
  vars.stepsBorder = `none`
  vars.stepsBorderRadius = `${theme.circularRadius}`

  /* Step */
  vars.border = `none`
  vars.divider = `none`
  vars.background = `transparent`
  vars.borderRadius = `${theme.circularRadius}`
  vars.iconDistance = `0.8em`
  vars.arrowDisplay = `none`

  vars.activeBackground = `${theme.midWhite}`
  vars.activeArrowDisplay = `none`

  return vars
}
