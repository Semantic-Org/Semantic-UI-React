module.exports = (theme) => {
  const vars = {}

  /*******************************
               Label
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.verticalAlign = `baseline`
  vars.verticalMargin = `0em`
  vars.horizontalMargin = `${theme.relative2px}`
  vars.backgroundColor = `#E8E8E8`
  vars.color = `${theme.mutedTextColor}`
  vars.backgroundImage = `none`
  vars.verticalPadding = `0.5833em` /* medium is not ${theme.emSize} custom value required */
  vars.horizontalPadding = `0.833em`
  vars.borderRadius = `${theme.absoluteBorderRadius}`
  vars.textTransform = `none`
  vars.fontWeight = `${theme.bold}`
  vars.borderWidth = `1px`
  vars.border = `0px solid transparent`

  vars.lineHeightOffset = `-(${vars.verticalPadding} / 2)`

  vars.labelTransitionDuration = `${theme.defaultDuration}`
  vars.labelTransitionEasing = `${theme.defaultEasing}`
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
  vars.detailFontWeight = `${theme.bold}`
  vars.detailOpacity = `0.8`
  vars.detailIconDistance = `0.25em`
  vars.detailMargin = `1em`

  /* Delete */
  vars.deleteOpacity = `${vars.linkOpacity}`
  vars.deleteSize = `${theme.relativeSmall}`
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

  vars.imageLabelDetailBackground = `${theme.strongTransparentBlack}`
  vars.imageLabelDetailPadding = `${vars.imageLabelVerticalPadding} ${vars.imageLabelHorizontalPadding}`
  vars.imageLabelDetailMargin = `-${vars.imageLabelVerticalPadding} -${vars.imageLabelHorizontalPadding} -${vars.imageLabelVerticalPadding} ${vars.imageLabelDetailDistance}`

  /*-------------------
          States
  --------------------*/

  /* Hover */
  vars.labelHoverBackgroundColor = `#E0E0E0`
  vars.labelHoverBackgroundImage = `none`
  vars.labelHoverTextColor = `${theme.hoveredTextColor}`

  /* Active */
  vars.labelActiveBackgroundColor = `#D0D0D0`
  vars.labelActiveBackgroundImage = `none`
  vars.labelActiveTextColor = `${theme.selectedTextColor}`

  /* Active Hover */
  vars.labelActiveHoverBackgroundColor = `#C8C8C8`
  vars.labelActiveHoverBackgroundImage = `none`
  vars.labelActiveHoverTextColor = `${theme.selectedTextColor}`


  /*-------------------
        Variations
  --------------------*/

  /* Basic */
  vars.basicBackground = `none ${theme.white}`
  vars.basicBorderWidth = `1px`
  vars.basicBorder = `${vars.basicBorderWidth} solid ${theme.borderColor}`
  vars.basicColor = `${theme.textColor}`
  vars.basicBoxShadow = `none`

  vars.basicHoverBackground = `${vars.basicBackground}`
  vars.basicHoverColor = `${theme.linkHoverColor}`
  vars.basicHoverBorder = `${vars.basicBorder}`
  vars.basicHoverBoxShadow = `${vars.basicBoxShadow}`

  /* Tag */
  vars.tagCircleColor = `${theme.white}`
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

  vars.ribbonTableMargin = `${theme.relativeMini}` /* Rounding Offset on Triangle */
  vars.ribbonTableOffset = `~"calc("-${vars.ribbonTableMargin}~" - "${vars.ribbonTriangleSize}~")"`
  vars.rightRibbonTableOffset = `~"calc(100% + "${vars.ribbonTableMargin}~" + "${vars.ribbonTriangleSize}~")"`


  /* Colors */
  vars.redTextColor = `${theme.white}`
  vars.orangeTextColor = `${theme.white}`
  vars.yellowTextColor = `${theme.white}`
  vars.oliveTextColor = `${theme.white}`
  vars.greenTextColor = `${theme.white}`
  vars.tealTextColor = `${theme.white}`
  vars.blueTextColor = `${theme.white}`
  vars.violetTextColor = `${theme.white}`
  vars.purpleTextColor = `${theme.white}`
  vars.pinkTextColor = `${theme.white}`
  vars.brownTextColor = `${theme.white}`
  vars.greyTextColor = `${theme.white}`
  vars.blackTextColor = `${theme.white}`

  vars.redHoverTextColor = `${theme.white}`
  vars.orangeHoverTextColor = `${theme.white}`
  vars.yellowHoverTextColor = `${theme.white}`
  vars.oliveHoverTextColor = `${theme.white}`
  vars.greenHoverTextColor = `${theme.white}`
  vars.tealHoverTextColor = `${theme.white}`
  vars.blueHoverTextColor = `${theme.white}`
  vars.violetHoverTextColor = `${theme.white}`
  vars.purpleHoverTextColor = `${theme.white}`
  vars.pinkHoverTextColor = `${theme.white}`
  vars.brownHoverTextColor = `${theme.white}`
  vars.greyHoverTextColor = `${theme.white}`
  vars.blackHoverTextColor = `${theme.white}`

  vars.redRibbonShadow = `darken(${theme.red}, 10)`
  vars.orangeRibbonShadow = `darken(${theme.orange}, 10)`
  vars.yellowRibbonShadow = `darken(${theme.yellow}, 10)`
  vars.oliveRibbonShadow = `darken(${theme.olive}, 10)`
  vars.greenRibbonShadow = `darken(${theme.green}, 10)`
  vars.tealRibbonShadow = `darken(${theme.teal}, 10)`
  vars.blueRibbonShadow = `darken(${theme.blue}, 10)`
  vars.violetRibbonShadow = `darken(${theme.violet}, 10)`
  vars.purpleRibbonShadow = `darken(${theme.purple}, 10)`
  vars.pinkRibbonShadow = `darken(${theme.pink}, 10)`
  vars.brownRibbonShadow = `darken(${theme.brown}, 10)`
  vars.greyRibbonShadow = `darken(${theme.grey}, 10)`
  vars.blackRibbonShadow = `darken(${theme.black}, 10)`

  /* Attached */
  vars.attachedSegmentPadding = `2rem`
  vars.attachedVerticalPadding = `0.75em`
  vars.attachedHorizontalPadding = `1em`

  vars.attachedCornerBorderRadius = `${theme.absolute3px}`
  vars.attachedBorderRadius = `${vars.borderRadius}`

  /* Corner */
  vars.cornerSizeRatio = `1`
  vars.cornerTransition = `color ${vars.labelTransitionDuration} ${vars.labelTransitionEasing}`
  vars.cornerTriangleSize = `4em`
  vars.cornerTriangleTransition = `border-color ${vars.labelTransitionDuration} ${vars.labelTransitionEasing}`
  vars.cornerTriangleZIndex = `1`

  vars.cornerIconSize = `${theme.relativeLarge}`
  vars.cornerIconTopOffset = `${theme.relative9px}`
  vars.cornerIconLeftOffset = `${theme.relative11px}`

  /* Corner Text */
  vars.cornerTextWidth = `3em`
  vars.cornerTextWeight = `${theme.bold}`
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
  vars.mini = `${theme.absolute9px}`
  vars.tiny = `${theme.absolute10px}`
  vars.small = `${theme.absolute11px}`
  vars.medium = `${theme.absolute12px}`
  vars.large = `${theme.absoluteMedium}`
  vars.big = `${theme.absoluteBig}`
  vars.huge = `${theme.absoluteHuge}`
  vars.massive = `${theme.absoluteMassive}`

  return vars
}
