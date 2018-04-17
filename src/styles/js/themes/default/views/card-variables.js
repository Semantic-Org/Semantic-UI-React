module.exports = (theme) => {
  const vars = {}

  /*******************************
               Card
  *******************************/

  /*-------------------
           View
  --------------------*/

  /* Shadow */
  vars.shadowDistance = `1px`
  vars.shadowBoxShadow = `0px ${vars.shadowDistance} 3px 0px ${theme.solidBorderColor}`

  /* Card */
  vars.fontFamily = `${theme.pageFont}`
  vars.display = `flex`
  vars.background = `${theme.white}`
  vars.borderRadius = `${theme.defaultBorderRadius}`
  vars.margin = `1em 0em`
  vars.minHeight = `0px`
  vars.padding = `0em`
  vars.width = `290px`
  vars.borderWidth = `1px`
  vars.borderShadow = `0px 0px 0px ${vars.borderWidth} ${theme.solidBorderColor}`
  vars.boxShadow = `${vars.shadowBoxShadow},
    ${vars.borderShadow}`
  vars.border = `none`
  vars.zIndex = `''`
  vars.transition = `box-shadow ${theme.defaultDuration} ${theme.defaultEasing},
    transform ${theme.defaultDuration} ${theme.defaultEasing}`

  /* Card Group */
  vars.horizontalSpacing = `1em`
  vars.rowSpacing = `1.75em`

  vars.groupMargin = `-(${vars.rowSpacing} / 2) -(${vars.horizontalSpacing} / 2)`
  vars.groupDisplay = `flex`

  vars.groupCardFloat = `none`
  vars.groupCardDisplay = `flex`
  vars.groupCardMargin = `(${vars.rowSpacing} / 2) (${vars.horizontalSpacing} / 2)`

  /* Consecutive Cards */
  vars.consecutiveGroupDistance = `(${vars.rowSpacing} / 2)`

  /*-------------------
         Content
  --------------------*/


  /* Image */
  vars.imageBackground = `${theme.transparentBlack}`
  vars.imagePadding = `0em`
  vars.imageBorder = `none`
  vars.imageBoxShadow = `none`
  vars.imageBorder = `none`

  /* Content */
  vars.contentDivider = `${vars.borderWidth} solid ${theme.internalBorderColor}`
  vars.contentMargin = `0em`
  vars.contentBackground = `none`
  vars.contentPadding = `1em 1em`
  vars.contentFontSize = `1em`
  vars.contentBorderRadius = `0em`
  vars.contentBoxShadow = `none`
  vars.contentBorder = `none`


  /* Header */
  vars.headerMargin = `''`
  vars.headerFontWeight = `${theme.bold}`
  vars.headerFontSize = `${theme.relativeBig}`
  vars.headerLineHeightOffset = `-(${theme.lineHeight} - 1em) / 2`
  vars.headerColor = `${theme.darkTextColor}`

  /* Metadata */
  vars.metaFontSize = `${theme.relativeMedium}`
  vars.metaSpacing = `0.3em`
  vars.metaColor = `${theme.lightTextColor}`

  /* Icons */
  vars.actionOpacity = `0.75`
  vars.actionHoverOpacity = `1`
  vars.actionTransition = `color ${theme.defaultDuration} ${theme.defaultEasing}`

  vars.starColor = `#FFB70A`
  vars.starActiveColor = `#FFE623`

  vars.likeColor = `#FF2733`
  vars.likeActiveColor = `#FF2733`

  /* Links */
  vars.contentLinkColor = `''`
  vars.contentLinkHoverColor = `''`
  vars.contentLinkTransition = `color ${theme.defaultDuration} ${theme.defaultEasing}`

  vars.headerLinkColor = `${vars.headerColor}`
  vars.headerLinkHoverColor = `${theme.linkHoverColor}`

  vars.metaLinkColor = `${theme.lightTextColor}`
  vars.metaLinkHoverColor = `${theme.textColor}`

  /* Description */
  vars.descriptionDistance = `0.5em`
  vars.descriptionColor = `rgba(0, 0, 0, 0.68)`

  /* Content Image */
  vars.contentImageWidth = `''`
  vars.contentImageVerticalAlign = `middle`

  /* Avatar Image */
  vars.avatarSize = `2em`
  vars.avatarBorderRadius = `${theme.circularRadius}`

  /* Paragraph */
  vars.paragraphDistance = `0.5em`

  /* Dimmer */
  vars.dimmerZIndex = `10`
  vars.dimmerColor = `''`

  /* Additional Content */
  vars.extraDivider = `1px solid rgba(0, 0, 0, 0.05)`
  vars.extraBackground = `none`
  vars.extraPosition = `static`
  vars.extraWidth = `auto`
  vars.extraTop = `0em`
  vars.extraLeft = `0em`
  vars.extraMargin = `0em 0em`
  vars.extraPadding = `0.75em 1em`
  vars.extraBoxShadow = `none`
  vars.extraColor = `${theme.lightTextColor}`
  vars.extraTransition = `color ${theme.defaultDuration} ${theme.defaultEasing}`

  /* Extra Links */
  vars.extraLinkColor = `${theme.unselectedTextColor}`
  vars.extraLinkHoverColor = `${theme.linkHoverColor}`

  /* Buttons */
  vars.buttonMargin = `0px -${vars.borderWidth}`
  vars.buttonWidth = `~"calc(100% + "(${vars.borderWidth} * 2)~")"`

  /*-------------------
        Variations
  --------------------*/

  /* Link */
  vars.linkHoverBackground = `${theme.white}`
  vars.linkHoverBorder = `${vars.border}`
  vars.linkHoverZIndex = `5`
  vars.linkHoverRaiseDistance = `3px`
  vars.linkHoverTransform = `translateY(-${vars.linkHoverRaiseDistance})`

  vars.shadowHoverBoxShadow = `0px ${vars.shadowDistance} ${vars.linkHoverRaiseDistance} 0px ${theme.solidSelectedBorderColor}`
  vars.linkHoverBoxShadow = `${vars.shadowHoverBoxShadow},
    ${vars.borderShadow}`


  /* Raised */
  vars.raisedShadow = `${vars.borderShadow},
    ${theme.floatingShadow}`
  vars.raisedShadowHover = `${vars.borderShadow},
    ${theme.floatingShadowHover}`

  /* Card Count */
  vars.wideCardSpacing = `1em`
  vars.cardSpacing = `0.75em`
  vars.smallCardSpacing = `0.5em`

  vars.oneCardSpacing = `0em`
  vars.twoCardSpacing = `${vars.wideCardSpacing}`
  vars.threeCardSpacing = `${vars.wideCardSpacing}`
  vars.fourCardSpacing = `${vars.cardSpacing}`
  vars.fiveCardSpacing = `${vars.cardSpacing}`
  vars.sixCardSpacing = `${vars.cardSpacing}`
  vars.sevenCardSpacing = `${vars.smallCardSpacing}`
  vars.eightCardSpacing = `${vars.smallCardSpacing}`
  vars.nineCardSpacing = `${vars.smallCardSpacing}`
  vars.tenCardSpacing = `${vars.smallCardSpacing}`

  vars.oneCard = `${theme.oneColumn}`
  vars.oneCardOffset = `0em`
  vars.twoCard = `~"calc("${theme.twoColumn}~" - "(${vars.twoCardSpacing} * 2)~")"`
  vars.twoCardOffset = `-${vars.twoCardSpacing}`
  vars.threeCard = `~"calc("${theme.threeColumn}~" - "(${vars.threeCardSpacing} * 2)~")"`
  vars.threeCardOffset = `-${vars.threeCardSpacing}`
  vars.fourCard = `~"calc("${theme.fourColumn}~" - "(${vars.fourCardSpacing} * 2)~")"`
  vars.fourCardOffset = `-${vars.fourCardSpacing}`
  vars.fiveCard = `~"calc("${theme.fiveColumn}~" - "(${vars.fiveCardSpacing} * 2)~")"`
  vars.fiveCardOffset = `-${vars.fiveCardSpacing}`
  vars.sixCard = `~"calc("${theme.sixColumn}~" - "(${vars.sixCardSpacing} * 2)~")"`
  vars.sixCardOffset = `-${vars.sixCardSpacing}`
  vars.sevenCard = `~"calc("${theme.sevenColumn}~" - "(${vars.sevenCardSpacing} * 2)~")"`
  vars.sevenCardOffset = `-${vars.sevenCardSpacing}`
  vars.eightCard = `~"calc("${theme.eightColumn}~" - "(${vars.sevenCardSpacing} * 2)~")"`
  vars.eightCardOffset = `-${vars.sevenCardSpacing}`
  vars.nineCard = `~"calc("${theme.nineColumn}~" - "(${vars.nineCardSpacing} * 2)~")"`
  vars.nineCardOffset = `-${vars.nineCardSpacing}`
  vars.tenCard = `~"calc("${theme.tenColumn}~" - "(${vars.tenCardSpacing} * 2)~")"`
  vars.tenCardOffset = `-${vars.tenCardSpacing}`

  /* Stackable */
  vars.stackableRowSpacing = `1em`
  vars.stackableCardSpacing = `1em`
  vars.stackableMargin = `~"calc("${theme.oneColumn}~" - "(${vars.stackableCardSpacing} * 2)~")"`

  /* Sizes */
  vars.medium = `1em`

  /* Colored */
  vars.coloredShadowDistance = `2px`

  return vars
}
