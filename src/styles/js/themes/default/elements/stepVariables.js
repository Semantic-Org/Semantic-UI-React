module.exports = (siteVars) => {
  const vars = {}

  /*******************************
               Step
  *******************************/

  /*-------------------
         Group
  --------------------*/

  vars.stepMargin = `1em 0em`
  vars.stepsBorderRadius = `${siteVars.defaultBorderRadius}`
  vars.stepsBackground = `''`
  vars.stepsBoxShadow = `none`
  vars.stepsBorder = `1px solid ${siteVars.borderColor}`

  /*-------------------
        Element
  --------------------*/

  vars.verticalMargin = `0em`
  vars.horizontalMargin = `0em`

  vars.arrowSize = `${siteVars.relativeLarge}`
  vars.verticalPadding = `${siteVars.relativeLarge}`
  vars.horizontalPadding = `2em`

  vars.transition = `background-color ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    opacity ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    color ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    box-shadow ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.lineHeight = `${siteVars.relativeLarge}`
  vars.alignItems = `center`
  vars.justifyContent = `center`
  vars.backgroundColor = `${siteVars.white}`
  vars.background = `${vars.backgroundColor}`
  vars.borderRadius = `0em`
  vars.borderWidth = `1px`
  vars.boxShadow = `none`
  vars.border = `none`
  vars.divider = `${vars.borderWidth} solid ${siteVars.borderColor}`

  /* Icon */
  vars.iconDistance = `1rem`
  vars.iconSize = `2.5em`
  vars.iconAlign = `middle`

  /* Title */
  vars.titleFontFamily = `${siteVars.headerFont}`
  vars.titleFontWeight = `${siteVars.bold}`
  vars.titleFontSize = `${siteVars.relativeLarge}`
  vars.titleColor = `${siteVars.darkTextColor}`

  /* Description */
  vars.descriptionDistance = `0.25em`
  vars.descriptionFontSize = `${siteVars.relativeSmall}`
  vars.descriptionFontWeight = `${siteVars.normal}`
  vars.descriptionColor = `${siteVars.textColor}`


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
  vars.orderedFontWeight = `${siteVars.bold}`

  /*-------------------
         States
  --------------------*/

  /* Completed */
  vars.completedColor = `${siteVars.positiveColor}`

  /* Hover */
  vars.hoverBackground = `${siteVars.offWhite}`
  vars.hoverColor = `${siteVars.hoveredTextColor}`

  /* Down */
  vars.downBackground = `${siteVars.darkWhite}`
  vars.downColor = `${siteVars.pressedTextColor}`

  /* Active */
  vars.activeBackground = `${siteVars.darkWhite}`
  vars.activeColor = `${siteVars.linkColor}`
  vars.activeIconColor = `${siteVars.darkTextColor}`

  /* Active + Hover */
  vars.activeHoverBackground = `${siteVars.lightGrey}`
  vars.activeHoverColor = `${siteVars.textColor}`


  /* Disabled */
  vars.disabledBackground = `${vars.background}`
  vars.disabledColor = `${siteVars.disabledTextColor}`

  return vars
}
