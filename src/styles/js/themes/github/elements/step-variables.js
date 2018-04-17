module.exports = (theme) => {
  const vars = {}

  /*-------------------
     Step Variables
  --------------------*/

  /* Step */
  vars.background = `transparent linear-gradient(transparent, rgba(0, 0, 0, 0.07))`
  vars.verticalPadding = `1em`

  vars.arrowDisplay = `none`
  vars.lastArrowDisplay = `none`
  vars.activeArrowDisplay = `block`
  vars.activeLastArrowDisplay = `block`

  /* Group */
  vars.stepsBackground = `#FFFFFF`
  vars.stepsBoxShadow = `0px 0px 1px 0px rgba(0, 0, 0, 0.15)`

  /* States */
  vars.activeBackground = `#FFFFFF`
  vars.activeIconColor = `${theme.darkTextColor}`

  /* Arrow */
  vars.arrowTopOffset = `100%`
  vars.arrowRightOffset = `50%`
  vars.arrowBorderColor = `rgba(0, 0, 0, 0.2)`
  vars.arrowBorderWidth = `0px 0px ${theme.borderWidth} ${theme.borderWidth}`

  return vars
}
