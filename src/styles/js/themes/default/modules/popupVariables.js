module.exports = (siteVars) => {
  const vars = {}

  /*******************************
               Popup
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.zIndex = `1900`
  vars.background = `${siteVars.white}`

  vars.maxWidth = `250px`
  vars.borderColor = `${siteVars.solidBorderColor}`
  vars.borderWidth = `1px`
  vars.boxShadow = `${siteVars.floatingShadow}`
  vars.color = `${siteVars.textColor}`

  vars.verticalPadding = `0.833em`
  vars.horizontalPadding = `1em`
  vars.fontWeight = `${siteVars.normal}`
  vars.fontStyle = `${siteVars.normal}`
  vars.borderRadius = `${siteVars.defaultBorderRadius}`

  /*-------------------
         Parts
  --------------------*/

  /* Placement */
  vars.arrowSize = `${siteVars.relative10px}`
  vars.arrowWidth = `1em`
  vars.arrowDistanceFromEdge = `1em`
  vars.boxArrowOffset = `0em`
  vars.popupDistanceAway = `${vars.arrowSize}`


  /* Header */
  vars.headerFontFamily = `${siteVars.headerFont}`
  vars.headerFontWeight = `${siteVars.bold}`
  vars.headerFontSize = `${siteVars.relativeLarge}`
  vars.headerDistance = `${siteVars.relative7px}`
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
  vars.tooltipFontSize = `${siteVars.medium}`
  vars.tooltipLineHeight = `${siteVars.lineHeight}`
  vars.tooltipDistanceAway = `${siteVars.relative7px}`
  vars.tooltipZIndex = `1`
  vars.tooltipDuration = `${siteVars.defaultDuration}`
  vars.tooltipEasing = `${siteVars.defaultEasing}`

  /* Inverted */
  vars.tooltipInvertedBackground = `${siteVars.invertedBackground}`
  vars.tooltipInvertedColor = `${siteVars.invertedColor}`
  vars.tooltipInvertedBorder = `${siteVars.invertedBorder}`
  vars.tooltipInvertedBoxShadow = `${siteVars.invertedBoxShadow}`
  vars.tooltipInvertedHeaderBackground = `${siteVars.invertedHeaderBackground}`
  vars.tooltipInvertedHeaderColor = `${siteVars.invertedHeaderColor}`

  /* Arrow */
  vars.tooltipArrowVerticalOffset = `-${siteVars.absolute2px}`
  vars.tooltipArrowHorizontalOffset = `-${siteVars.absolute1px}`
  vars.tooltipArrowBoxShadow = `${vars.arrowBoxShadow}`
  vars.tooltipArrowBackground = `${vars.arrowBackground}`
  vars.tooltipArrowTopBackground = `${vars.arrowTopBackground}`
  vars.tooltipArrowCenterBackground = `${vars.arrowCenterBackground}`
  vars.tooltipArrowBottomBackground = `${vars.arrowBottomBackground}`

  /*-------------------
         Coupling
  --------------------*/

  /* Grid Inside Popup */
  vars.nestedGridMargin = `-0.7rem -0.875rem` /* (padding * ${siteVars.medium}) */
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
  vars.invertedBackground = `${siteVars.black}`
  vars.invertedColor = `${siteVars.white}`
  vars.invertedBorder = `none`
  vars.invertedBoxShadow = `none`

  vars.invertedHeaderBackground = `none`
  vars.invertedHeaderColor = `${siteVars.white}`
  vars.invertedArrowColor = `${vars.invertedBackground}`

  /* Arrow color by position */
  vars.invertedArrowTopBackground = `${vars.invertedBackground}`
  vars.invertedArrowCenterBackground = `${vars.invertedBackground}`
  vars.invertedArrowBottomBackground = `${vars.invertedBackground}`

  return vars
}
