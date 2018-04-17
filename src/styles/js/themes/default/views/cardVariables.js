module.exports = (siteVars) => {
  const vars = {}

  /*******************************
               Card
  *******************************/

  /*-------------------
           View
  --------------------*/

  /* Shadow */
  vars.shadowDistance = `1px`
  vars.shadowBoxShadow = `0px ${vars.shadowDistance} 3px 0px ${siteVars.solidBorderColor}`

  /* Card */
  vars.fontFamily = `${siteVars.pageFont}`
  vars.display = `flex`
  vars.background = `${siteVars.white}`
  vars.borderRadius = `${siteVars.defaultBorderRadius}`
  vars.margin = `1em 0em`
  vars.minHeight = `0px`
  vars.padding = `0em`
  vars.width = `290px`
  vars.borderWidth = `1px`
  vars.borderShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.solidBorderColor}`
  vars.boxShadow = `${vars.shadowBoxShadow},
    ${vars.borderShadow}`
  vars.border = `none`
  vars.zIndex = `''`
  vars.transition = `box-shadow ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    transform ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

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
  vars.imageBackground = `${siteVars.transparentBlack}`
  vars.imagePadding = `0em`
  vars.imageBorder = `none`
  vars.imageBoxShadow = `none`
  vars.imageBorder = `none`

  /* Content */
  vars.contentDivider = `${vars.borderWidth} solid ${siteVars.internalBorderColor}`
  vars.contentMargin = `0em`
  vars.contentBackground = `none`
  vars.contentPadding = `1em 1em`
  vars.contentFontSize = `1em`
  vars.contentBorderRadius = `0em`
  vars.contentBoxShadow = `none`
  vars.contentBorder = `none`


  /* Header */
  vars.headerMargin = `''`
  vars.headerFontWeight = `${siteVars.bold}`
  vars.headerFontSize = `${siteVars.relativeBig}`
  vars.headerLineHeightOffset = `-(${siteVars.lineHeight} - 1em) / 2`
  vars.headerColor = `${siteVars.darkTextColor}`

  /* Metadata */
  vars.metaFontSize = `${siteVars.relativeMedium}`
  vars.metaSpacing = `0.3em`
  vars.metaColor = `${siteVars.lightTextColor}`

  /* Icons */
  vars.actionOpacity = `0.75`
  vars.actionHoverOpacity = `1`
  vars.actionTransition = `color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

  vars.starColor = `#FFB70A`
  vars.starActiveColor = `#FFE623`

  vars.likeColor = `#FF2733`
  vars.likeActiveColor = `#FF2733`

  /* Links */
  vars.contentLinkColor = `''`
  vars.contentLinkHoverColor = `''`
  vars.contentLinkTransition = `color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

  vars.headerLinkColor = `${vars.headerColor}`
  vars.headerLinkHoverColor = `${siteVars.linkHoverColor}`

  vars.metaLinkColor = `${siteVars.lightTextColor}`
  vars.metaLinkHoverColor = `${siteVars.textColor}`

  /* Description */
  vars.descriptionDistance = `0.5em`
  vars.descriptionColor = `rgba(0, 0, 0, 0.68)`

  /* Content Image */
  vars.contentImageWidth = `''`
  vars.contentImageVerticalAlign = `middle`

  /* Avatar Image */
  vars.avatarSize = `2em`
  vars.avatarBorderRadius = `${siteVars.circularRadius}`

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
  vars.extraColor = `${siteVars.lightTextColor}`
  vars.extraTransition = `color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

  /* Extra Links */
  vars.extraLinkColor = `${siteVars.unselectedTextColor}`
  vars.extraLinkHoverColor = `${siteVars.linkHoverColor}`

  /* Buttons */
  vars.buttonMargin = `0px -${vars.borderWidth}`
  vars.buttonWidth = `~"calc(100% + "(${vars.borderWidth} * 2)~")"`

  /*-------------------
        Variations
  --------------------*/

  /* Link */
  vars.linkHoverBackground = `${siteVars.white}`
  vars.linkHoverBorder = `${vars.border}`
  vars.linkHoverZIndex = `5`
  vars.linkHoverRaiseDistance = `3px`
  vars.linkHoverTransform = `translateY(-${vars.linkHoverRaiseDistance})`

  vars.shadowHoverBoxShadow = `0px ${vars.shadowDistance} ${vars.linkHoverRaiseDistance} 0px ${siteVars.solidSelectedBorderColor}`
  vars.linkHoverBoxShadow = `${vars.shadowHoverBoxShadow},
    ${vars.borderShadow}`


  /* Raised */
  vars.raisedShadow = `${vars.borderShadow},
    ${siteVars.floatingShadow}`
  vars.raisedShadowHover = `${vars.borderShadow},
    ${siteVars.floatingShadowHover}`

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

  vars.oneCard = `${siteVars.oneColumn}`
  vars.oneCardOffset = `0em`
  vars.twoCard = `~"calc("${siteVars.twoColumn}~" - "(${vars.twoCardSpacing} * 2)~")"`
  vars.twoCardOffset = `-${vars.twoCardSpacing}`
  vars.threeCard = `~"calc("${siteVars.threeColumn}~" - "(${vars.threeCardSpacing} * 2)~")"`
  vars.threeCardOffset = `-${vars.threeCardSpacing}`
  vars.fourCard = `~"calc("${siteVars.fourColumn}~" - "(${vars.fourCardSpacing} * 2)~")"`
  vars.fourCardOffset = `-${vars.fourCardSpacing}`
  vars.fiveCard = `~"calc("${siteVars.fiveColumn}~" - "(${vars.fiveCardSpacing} * 2)~")"`
  vars.fiveCardOffset = `-${vars.fiveCardSpacing}`
  vars.sixCard = `~"calc("${siteVars.sixColumn}~" - "(${vars.sixCardSpacing} * 2)~")"`
  vars.sixCardOffset = `-${vars.sixCardSpacing}`
  vars.sevenCard = `~"calc("${siteVars.sevenColumn}~" - "(${vars.sevenCardSpacing} * 2)~")"`
  vars.sevenCardOffset = `-${vars.sevenCardSpacing}`
  vars.eightCard = `~"calc("${siteVars.eightColumn}~" - "(${vars.sevenCardSpacing} * 2)~")"`
  vars.eightCardOffset = `-${vars.sevenCardSpacing}`
  vars.nineCard = `~"calc("${siteVars.nineColumn}~" - "(${vars.nineCardSpacing} * 2)~")"`
  vars.nineCardOffset = `-${vars.nineCardSpacing}`
  vars.tenCard = `~"calc("${siteVars.tenColumn}~" - "(${vars.tenCardSpacing} * 2)~")"`
  vars.tenCardOffset = `-${vars.tenCardSpacing}`

  /* Stackable */
  vars.stackableRowSpacing = `1em`
  vars.stackableCardSpacing = `1em`
  vars.stackableMargin = `~"calc("${siteVars.oneColumn}~" - "(${vars.stackableCardSpacing} * 2)~")"`

  /* Sizes */
  vars.medium = `1em`

  /* Colored */
  vars.coloredShadowDistance = `2px`

  return vars
}
