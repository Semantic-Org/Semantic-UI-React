module.exports = (theme) => {
  const vars = {}

  /*******************************
               Step
  *******************************/

  /*-------------------
         Group
  --------------------*/

  vars.stepMargin = `1em 0em`
  vars.stepsBorderRadius = `${theme.defaultBorderRadius}`
  vars.stepsBackground = `''`
  vars.stepsBoxShadow = `none`
  vars.stepsBorder = `1px solid ${theme.borderColor}`

  /*-------------------
        Element
  --------------------*/

  vars.verticalMargin = `0em`
  vars.horizontalMargin = `0em`

  vars.arrowSize = `${theme.relativeLarge}`
  vars.verticalPadding = `${theme.relativeLarge}`
  vars.horizontalPadding = `2em`

  vars.transition = `background-color ${theme.defaultDuration} ${theme.defaultEasing},
    opacity ${theme.defaultDuration} ${theme.defaultEasing},
    color ${theme.defaultDuration} ${theme.defaultEasing},
    box-shadow ${theme.defaultDuration} ${theme.defaultEasing}`
  vars.lineHeight = `${theme.relativeLarge}`
  vars.alignItems = `center`
  vars.justifyContent = `center`
  vars.backgroundColor = `${theme.white}`
  vars.background = `${vars.backgroundColor}`
  vars.borderRadius = `0em`
  vars.borderWidth = `1px`
  vars.boxShadow = `none`
  vars.border = `none`
  vars.divider = `${vars.borderWidth} solid ${theme.borderColor}`

  /* Icon */
  vars.iconDistance = `1rem`
  vars.iconSize = `2.5em`
  vars.iconAlign = `middle`

  /* Title */
  vars.titleFontFamily = `${theme.headerFont}`
  vars.titleFontWeight = `${theme.bold}`
  vars.titleFontSize = `${theme.relativeLarge}`
  vars.titleColor = `${theme.darkTextColor}`

  /* Description */
  vars.descriptionDistance = `0.25em`
  vars.descriptionFontSize = `${theme.relativeSmall}`
  vars.descriptionFontWeight = `${theme.normal}`
  vars.descriptionColor = `${theme.textColor}`


  /* Arrow */
  vars.arrowBackgroundColor = `${vars.backgroundColor}`
  vars.arrowTopOffset = `50%`
  vars.arrowRightOffset = `0%`
  vars.arrowBorderWidth = `0px ${vars.borderWidth} ${vars.borderWidth} 0px`

  vars.arrowDisplay = `block`
  vars.lastArrowDisplay = `none`

  vars.activeArrowDisplay = `block`
  vars.activeLastArrowDisplay = `none`

  /* Mobile */
  vars.mobileIconDistance = `${vars.iconDistance}`

  /*-------------------
         Types
  --------------------*/

  /* Vertical */
  vars.verticalDivider = `${vars.divider}`
  vars.verticalArrowTopOffset = `50%`
  vars.verticalArrowRightOffset = `0%`
  vars.verticalArrowBorderWidth = `0px ${vars.borderWidth} ${vars.borderWidth} 0px`

  vars.verticalArrowDisplay = `none`
  vars.verticalLastArrowDisplay = `${vars.verticalArrowDisplay}`

  vars.verticalActiveArrowDisplay = `block`
  vars.verticalActiveLastArrowDisplay = `block`

  /*-------------------
        Variations
  --------------------*/

  vars.attachedHorizontalOffset = `-${vars.borderWidth}`
  vars.attachedVerticalOffset = `0`
  vars.attachedWidth = `~"calc(100% + "-${vars.attachedHorizontalOffset} * 2~")"`

  vars.orderedFontFamily = `inherit`
  vars.orderedFontWeight = `${theme.bold}`

  /*-------------------
         States
  --------------------*/

  /* Completed */
  vars.completedColor = `${theme.positiveColor}`

  /* Hover */
  vars.hoverBackground = `${theme.offWhite}`
  vars.hoverColor = `${theme.hoveredTextColor}`

  /* Down */
  vars.downBackground = `${theme.darkWhite}`
  vars.downColor = `${theme.pressedTextColor}`

  /* Active */
  vars.activeBackground = `${theme.darkWhite}`
  vars.activeColor = `${theme.linkColor}`
  vars.activeIconColor = `${theme.darkTextColor}`

  /* Active + Hover */
  vars.activeHoverBackground = `${theme.lightGrey}`
  vars.activeHoverColor = `${theme.textColor}`


  /* Disabled */
  vars.disabledBackground = `${vars.background}`
  vars.disabledColor = `${theme.disabledTextColor}`

  return vars
}
