module.exports = (siteVars) => {
  const vars = {}

  /*******************************
               Label
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.verticalAlign = `baseline`
  vars.verticalMargin = `0em`
  vars.horizontalMargin = `${siteVars.relative2px}`
  vars.backgroundColor = `#E8E8E8`
  vars.color = `${siteVars.mutedTextColor}`
  vars.backgroundImage = `none`
  vars.verticalPadding = `0.5833em` /* medium is not ${siteVars.emSize} custom value required */
  vars.horizontalPadding = `0.833em`
  vars.borderRadius = `${siteVars.absoluteBorderRadius}`
  vars.textTransform = `none`
  vars.fontWeight = `${siteVars.bold}`
  vars.borderWidth = `1px`
  vars.border = `0px solid transparent`

  vars.lineHeightOffset = `-(${vars.verticalPadding} / 2)`

  vars.labelTransitionDuration = `${siteVars.defaultDuration}`
  vars.labelTransitionEasing = `${siteVars.defaultEasing}`
  vars.transition = `background ${vars.labelTransitionDuration} ${vars.labelTransitionEasing}`

  /* Group */
  vars.groupVerticalMargin = `0.5em`
  vars.groupHorizontalMargin = `0.5em`

  /*-------------------
          Parts
  --------------------*/

  /* Link */
  vars.linkOpacity = `0.5`
  vars.linkTransition = `${vars.labelTransitionDuration} opacity ${vars.labelTransitionEasing}`

  /* Icon */
  vars.iconDistance = `0.75em`

  /* Image */
  vars.imageHeight = `(1em + ${vars.verticalPadding} * 2)`

  /* Detail */
  vars.detailFontWeight = `${siteVars.bold}`
  vars.detailOpacity = `0.8`
  vars.detailIconDistance = `0.25em`
  vars.detailMargin = `1em`

  /* Delete */
  vars.deleteOpacity = `${vars.linkOpacity}`
  vars.deleteSize = `${siteVars.relativeSmall}`
  vars.deleteMargin = `0.5em`
  vars.deleteTransition = `background ${vars.labelTransitionDuration} ${vars.labelTransitionEasing}`

  /*-------------------
          Types
  --------------------*/

  /* Image Label */
  vars.imageLabelBackground = `${vars.backgroundColor}`
  vars.imageLabelVerticalPadding = `${vars.verticalPadding}`
  vars.imageLabelHorizontalPadding = `${vars.horizontalPadding}`
  vars.imageLabelTextDistance = `0.5em`
  vars.imageLabelDetailDistance = `${vars.imageLabelTextDistance}`
  vars.imageLabelBorderRadius = `${vars.borderRadius}`
  vars.imageLabelBoxShadow = `none`
  vars.imageLabelPadding = `${vars.imageLabelVerticalPadding} ${vars.imageLabelHorizontalPadding} ${vars.imageLabelVerticalPadding} ${vars.imageLabelTextDistance}`

  vars.imageLabelImageMargin = `-${vars.verticalPadding} ${vars.imageLabelTextDistance} -${vars.verticalPadding} -${vars.imageLabelTextDistance}`
  vars.imageLabelImageBorderRadius = `${vars.imageLabelBorderRadius} 0em 0em ${vars.imageLabelBorderRadius}`
  vars.imageLabelImageHeight = `${vars.imageHeight}`

  vars.imageLabelDetailBackground = `${siteVars.strongTransparentBlack}`
  vars.imageLabelDetailPadding = `${vars.imageLabelVerticalPadding} ${vars.imageLabelHorizontalPadding}`
  vars.imageLabelDetailMargin = `-${vars.imageLabelVerticalPadding} -${vars.imageLabelHorizontalPadding} -${vars.imageLabelVerticalPadding} ${vars.imageLabelDetailDistance}`

  /*-------------------
          States
  --------------------*/

  /* Hover */
  vars.labelHoverBackgroundColor = `#E0E0E0`
  vars.labelHoverBackgroundImage = `none`
  vars.labelHoverTextColor = `${siteVars.hoveredTextColor}`

  /* Active */
  vars.labelActiveBackgroundColor = `#D0D0D0`
  vars.labelActiveBackgroundImage = `none`
  vars.labelActiveTextColor = `${siteVars.selectedTextColor}`

  /* Active Hover */
  vars.labelActiveHoverBackgroundColor = `#C8C8C8`
  vars.labelActiveHoverBackgroundImage = `none`
  vars.labelActiveHoverTextColor = `${siteVars.selectedTextColor}`


  /*-------------------
        Variations
  --------------------*/

  /* Basic */
  vars.basicBackground = `none ${siteVars.white}`
  vars.basicBorderWidth = `1px`
  vars.basicBorder = `${vars.basicBorderWidth} solid ${siteVars.borderColor}`
  vars.basicColor = `${siteVars.textColor}`
  vars.basicBoxShadow = `none`

  vars.basicHoverBackground = `${vars.basicBackground}`
  vars.basicHoverColor = `${siteVars.linkHoverColor}`
  vars.basicHoverBorder = `${vars.basicBorder}`
  vars.basicHoverBoxShadow = `${vars.basicBoxShadow}`

  /* Tag */
  vars.tagCircleColor = `${siteVars.white}`
  vars.tagCircleSize = `0.5em`
  vars.tagHorizontalPadding = `1.5em`
  vars.tagCircleBoxShadow = `0 -1px 1px 0 rgba(0, 0, 0, 0.3)`
  vars.tagTriangleRightOffset = `100%`
  vars.tagTriangleTopOffset = `50%`
  vars.tagTriangleSize = `1.56em`
  vars.tagTriangleBackgroundImage = `none`
  vars.tagTransition = `none` /* Avoids error with background: inherit on animation */

  /* Ribbon */
  vars.ribbonTriangleSize = `1.2em`
  vars.ribbonShadowColor = `rgba(0, 0, 0, 0.15)`

  vars.ribbonMargin = `1rem`
  vars.ribbonOffset = `~"calc("-${vars.ribbonMargin}~" - "${vars.ribbonTriangleSize}~")"`
  vars.ribbonDistance = `~"calc("${vars.ribbonMargin}~" + "${vars.ribbonTriangleSize}~")"`
  vars.rightRibbonOffset = `~"calc(100% + "${vars.ribbonMargin}~" + "${vars.ribbonTriangleSize}~")"`

  vars.ribbonImageTopDistance = `1rem`
  vars.ribbonImageMargin = `-0.05rem` /* Rounding Offset on Triangle */
  vars.ribbonImageOffset = `~"calc("-${vars.ribbonImageMargin}~" - "${vars.ribbonTriangleSize}~")"`
  vars.rightRibbonImageOffset = `~"calc(100% + "${vars.ribbonImageMargin}~" + "${vars.ribbonTriangleSize}~")"`

  vars.ribbonTableMargin = `${siteVars.relativeMini}` /* Rounding Offset on Triangle */
  vars.ribbonTableOffset = `~"calc("-${vars.ribbonTableMargin}~" - "${vars.ribbonTriangleSize}~")"`
  vars.rightRibbonTableOffset = `~"calc(100% + "${vars.ribbonTableMargin}~" + "${vars.ribbonTriangleSize}~")"`


  /* Colors */
  vars.redTextColor = `${siteVars.white}`
  vars.orangeTextColor = `${siteVars.white}`
  vars.yellowTextColor = `${siteVars.white}`
  vars.oliveTextColor = `${siteVars.white}`
  vars.greenTextColor = `${siteVars.white}`
  vars.tealTextColor = `${siteVars.white}`
  vars.blueTextColor = `${siteVars.white}`
  vars.violetTextColor = `${siteVars.white}`
  vars.purpleTextColor = `${siteVars.white}`
  vars.pinkTextColor = `${siteVars.white}`
  vars.brownTextColor = `${siteVars.white}`
  vars.greyTextColor = `${siteVars.white}`
  vars.blackTextColor = `${siteVars.white}`

  vars.redHoverTextColor = `${siteVars.white}`
  vars.orangeHoverTextColor = `${siteVars.white}`
  vars.yellowHoverTextColor = `${siteVars.white}`
  vars.oliveHoverTextColor = `${siteVars.white}`
  vars.greenHoverTextColor = `${siteVars.white}`
  vars.tealHoverTextColor = `${siteVars.white}`
  vars.blueHoverTextColor = `${siteVars.white}`
  vars.violetHoverTextColor = `${siteVars.white}`
  vars.purpleHoverTextColor = `${siteVars.white}`
  vars.pinkHoverTextColor = `${siteVars.white}`
  vars.brownHoverTextColor = `${siteVars.white}`
  vars.greyHoverTextColor = `${siteVars.white}`
  vars.blackHoverTextColor = `${siteVars.white}`

  vars.redRibbonShadow = `darken(${siteVars.red}, 10)`
  vars.orangeRibbonShadow = `darken(${siteVars.orange}, 10)`
  vars.yellowRibbonShadow = `darken(${siteVars.yellow}, 10)`
  vars.oliveRibbonShadow = `darken(${siteVars.olive}, 10)`
  vars.greenRibbonShadow = `darken(${siteVars.green}, 10)`
  vars.tealRibbonShadow = `darken(${siteVars.teal}, 10)`
  vars.blueRibbonShadow = `darken(${siteVars.blue}, 10)`
  vars.violetRibbonShadow = `darken(${siteVars.violet}, 10)`
  vars.purpleRibbonShadow = `darken(${siteVars.purple}, 10)`
  vars.pinkRibbonShadow = `darken(${siteVars.pink}, 10)`
  vars.brownRibbonShadow = `darken(${siteVars.brown}, 10)`
  vars.greyRibbonShadow = `darken(${siteVars.grey}, 10)`
  vars.blackRibbonShadow = `darken(${siteVars.black}, 10)`

  /* Attached */
  vars.attachedSegmentPadding = `2rem`
  vars.attachedVerticalPadding = `0.75em`
  vars.attachedHorizontalPadding = `1em`

  vars.attachedCornerBorderRadius = `${siteVars.absolute3px}`
  vars.attachedBorderRadius = `${vars.borderRadius}`

  /* Corner */
  vars.cornerSizeRatio = `1`
  vars.cornerTransition = `color ${vars.labelTransitionDuration} ${vars.labelTransitionEasing}`
  vars.cornerTriangleSize = `4em`
  vars.cornerTriangleTransition = `border-color ${vars.labelTransitionDuration} ${vars.labelTransitionEasing}`
  vars.cornerTriangleZIndex = `1`

  vars.cornerIconSize = `${siteVars.relativeLarge}`
  vars.cornerIconTopOffset = `${siteVars.relative9px}`
  vars.cornerIconLeftOffset = `${siteVars.relative11px}`

  /* Corner Text */
  vars.cornerTextWidth = `3em`
  vars.cornerTextWeight = `${siteVars.bold}`
  vars.cornerTextSize = `1em`

  /* Horizontal */
  vars.horizontalLabelMinWidth = `3em`
  vars.horizontalLabelMargin = `0.5em`
  vars.horizontalLabelVerticalPadding = `0.4em`

  /* Circular Padding */
  vars.circularPadding = `0.5em`
  vars.circularMinSize = `2em`
  vars.emptyCircleSize = `0.5em`

  /* Pointing */
  vars.pointingBorderColor = `inherit`
  vars.pointingBorderWidth = `${vars.borderWidth}`
  vars.pointingVerticalDistance = `1em`
  vars.pointingTriangleSize = `0.6666em`
  vars.pointingHorizontalDistance = `${vars.pointingTriangleSize}`

  vars.pointingTriangleTransition = `background ${vars.labelTransitionDuration} ${vars.labelTransitionEasing}`
  vars.pointingTriangleZIndex = `2`

  /* Basic Pointing */
  vars.basicPointingTriangleOffset = `-${vars.pointingBorderWidth}`

  /* Floating */
  vars.floatingTopOffset = `-1em`
  vars.floatingLeftOffset = `-1.5em`
  vars.floatingZIndex = `100`

  /*-------------------
          Group
  --------------------*/

  /* Sizing */
  vars.mini = `${siteVars.absolute9px}`
  vars.tiny = `${siteVars.absolute10px}`
  vars.small = `${siteVars.absolute11px}`
  vars.medium = `${siteVars.absolute12px}`
  vars.large = `${siteVars.absoluteMedium}`
  vars.big = `${siteVars.absoluteBig}`
  vars.huge = `${siteVars.absoluteHuge}`
  vars.massive = `${siteVars.absoluteMassive}`

  return vars
}
