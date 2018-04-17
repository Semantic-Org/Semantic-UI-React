module.exports = (theme) => {
  const vars = {}

  /*******************************
               Popup
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.zIndex = `1900`
  vars.background = `${theme.white}`

  vars.maxWidth = `250px`
  vars.borderColor = `${theme.solidBorderColor}`
  vars.borderWidth = `1px`
  vars.boxShadow = `${theme.floatingShadow}`
  vars.color = `${theme.textColor}`

  vars.verticalPadding = `0.833em`
  vars.horizontalPadding = `1em`
  vars.fontWeight = `${theme.normal}`
  vars.fontStyle = `${theme.normal}`
  vars.borderRadius = `${theme.defaultBorderRadius}`

  /*-------------------
         Parts
  --------------------*/

  /* Placement */
  vars.arrowSize = `${theme.relative10px}`
  vars.arrowWidth = `1em`
  vars.arrowDistanceFromEdge = `1em`
  vars.boxArrowOffset = `0em`
  vars.popupDistanceAway = `${vars.arrowSize}`


  /* Header */
  vars.headerFontFamily = `${theme.headerFont}`
  vars.headerFontWeight = `${theme.bold}`
  vars.headerFontSize = `${theme.relativeLarge}`
  vars.headerDistance = `${theme.relative7px}`
  vars.headerLineHeight = `1.2`

  /* Content Border */
  vars.border = `${vars.borderWidth} solid ${vars.borderColor}`

  /* Arrow */
  vars.arrowBackground = `${vars.background}`
  vars.arrowZIndex = `2`
  vars.arrowJitter = `0.05em`
  vars.arrowOffset = `-(${vars.arrowSize} / 2) + ${vars.arrowJitter}`

  vars.arrowStroke = `${vars.borderWidth}`
  vars.arrowColor = `darken(${vars.borderColor}, 10)`

  /* Arrow color by position */
  vars.arrowTopBackground = `${vars.arrowBackground}`
  vars.arrowCenterBackground = `${vars.arrowBackground}`
  vars.arrowBottomBackground = `${vars.arrowBackground}`

  vars.arrowBoxShadow = `${vars.arrowStroke} ${vars.arrowStroke} 0px 0px ${vars.arrowColor}`
  vars.leftArrowBoxShadow = `${vars.arrowStroke} -${vars.arrowStroke} 0px 0px ${vars.arrowColor}`
  vars.rightArrowBoxShadow = `-${vars.arrowStroke} ${vars.arrowStroke} 0px 0px ${vars.arrowColor}`
  vars.bottomArrowBoxShadow = `-${vars.arrowStroke} -${vars.arrowStroke} 0px 0px ${vars.arrowColor}`

  /*-------------------
         Types
  --------------------*/

  /* Tooltip */
  vars.tooltipBackground = `${vars.background}`
  vars.tooltipBorderRadius = `${vars.borderRadius}`
  vars.tooltipPadding = `${vars.verticalPadding} ${vars.horizontalPadding}`
  vars.tooltipFontWeight = `${vars.fontWeight}`
  vars.tooltipFontStyle = `${vars.fontStyle}`
  vars.tooltipColor = `${vars.color}`
  vars.tooltipBorder = `${vars.border}`
  vars.tooltipBoxShadow = `${vars.boxShadow}`
  vars.tooltipMaxWidth = `none`
  vars.tooltipFontSize = `${theme.medium}`
  vars.tooltipLineHeight = `${theme.lineHeight}`
  vars.tooltipDistanceAway = `${theme.relative7px}`
  vars.tooltipZIndex = `1`
  vars.tooltipDuration = `${theme.defaultDuration}`
  vars.tooltipEasing = `${theme.defaultEasing}`

  /* Inverted */
  vars.tooltipInvertedBackground = `${theme.invertedBackground}`
  vars.tooltipInvertedColor = `${theme.invertedColor}`
  vars.tooltipInvertedBorder = `${theme.invertedBorder}`
  vars.tooltipInvertedBoxShadow = `${theme.invertedBoxShadow}`
  vars.tooltipInvertedHeaderBackground = `${theme.invertedHeaderBackground}`
  vars.tooltipInvertedHeaderColor = `${theme.invertedHeaderColor}`

  /* Arrow */
  vars.tooltipArrowVerticalOffset = `-${theme.absolute2px}`
  vars.tooltipArrowHorizontalOffset = `-${theme.absolute1px}`
  vars.tooltipArrowBoxShadow = `${vars.arrowBoxShadow}`
  vars.tooltipArrowBackground = `${vars.arrowBackground}`
  vars.tooltipArrowTopBackground = `${vars.arrowTopBackground}`
  vars.tooltipArrowCenterBackground = `${vars.arrowCenterBackground}`
  vars.tooltipArrowBottomBackground = `${vars.arrowBottomBackground}`

  /*-------------------
         Coupling
  --------------------*/

  /* Grid Inside Popup */
  vars.nestedGridMargin = `-0.7rem -0.875rem` /* (padding * ${theme.medium}) */
  vars.nestedGridWidth = `~"calc(100% + 1.75rem)"`

  /*-------------------
         States
  --------------------*/

  vars.loadingZIndex = `-1`

  /*-------------------
         Variations
  --------------------*/

  /* Wide */
  vars.wideWidth = `350px`
  vars.veryWideWidth = `550px`

  /* Inverted */
  vars.invertedBackground = `${theme.black}`
  vars.invertedColor = `${theme.white}`
  vars.invertedBorder = `none`
  vars.invertedBoxShadow = `none`

  vars.invertedHeaderBackground = `none`
  vars.invertedHeaderColor = `${theme.white}`
  vars.invertedArrowColor = `${vars.invertedBackground}`

  /* Arrow color by position */
  vars.invertedArrowTopBackground = `${vars.invertedBackground}`
  vars.invertedArrowCenterBackground = `${vars.invertedBackground}`
  vars.invertedArrowBottomBackground = `${vars.invertedBackground}`

  return vars
}
