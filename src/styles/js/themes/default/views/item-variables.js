module.exports = (theme) => {
  const vars = {}

  /*******************************
               Item
  *******************************/

  /*-------------------
           View
  --------------------*/

  /* Group */
  vars.groupMargin = `1.5em 0em`

  /* Item */
  vars.display = `flex`
  vars.background = `transparent`
  vars.borderRadius = `0rem`
  vars.minHeight = `0px`
  vars.padding = `0em`
  vars.width = `100%`
  vars.boxShadow = `none`
  vars.border = `none`
  vars.zIndex = `''`
  vars.transition = `box-shadow ${theme.defaultDuration} ${theme.defaultEasing}`

  /* Responsive */
  vars.itemSpacing = `1em`
  vars.imageWidth = `175px`
  vars.contentImageDistance = `1.5em`

  vars.tabletItemSpacing = `1em`
  vars.tabletImageWidth = `150px`
  vars.tabletContentImageDistance = `1em`

  vars.mobileItemSpacing = `2em`
  vars.mobileImageWidth = `auto`
  vars.mobileImageMaxHeight = `250px`
  vars.mobileContentImageDistance = `1.5em`


  /*-------------------
         Content
  --------------------*/

  /* Image */
  vars.imageDisplay = `block`
  vars.imageFloat = `none`
  vars.imageMaxHeight = `''`
  vars.imageVerticalAlign = `top`
  vars.imageMargin = `0em`
  vars.imagePadding = `0em`
  vars.imageBorder = `none`
  vars.imageBorderRadius = `0.125rem`
  vars.imageBoxShadow = `none`
  vars.imageBorder = `none`

  /* Content */
  vars.contentDisplay = `block`
  vars.contentVerticalAlign = `top`

  vars.contentWidth = `auto`
  vars.contentOffset = `0em`
  vars.contentBackground = `none`
  vars.contentMargin = `0em`
  vars.contentPadding = `0em`
  vars.contentFontSize = `1em`
  vars.contentBorder = `none`
  vars.contentBorderRadius = `0em`
  vars.contentBoxShadow = `none`

  /* Header */
  vars.headerMargin = `-${theme.lineHeightOffset} 0em 0em`
  vars.headerFontWeight = `${theme.bold}`
  vars.headerFontSize = `${theme.relativeBig}`
  vars.headerColor = `${theme.darkTextColor}`

  /* Metadata */
  vars.metaMargin = `0.5em 0em 0.5em`
  vars.metaFontSize = `1em`
  vars.metaLineHeight = `1em`
  vars.metaSpacing = `0.3em`
  vars.metaColor = `rgba(0, 0, 0, 0.6)`

  /* Icons */
  vars.actionOpacity = `0.75`
  vars.actionHoverOpacity = `1`
  vars.actionTransition = `color ${theme.defaultDuration} ${theme.defaultEasing}`

  /* Actions */
  vars.favoriteColor = `#FFB70A`
  vars.favoriteActiveColor = `#FFE623`
  vars.likeColor = `#FF2733`
  vars.likeActiveColor = `#FF2733`

  /* Links */
  vars.headerLinkColor = `${vars.headerColor}`
  vars.headerLinkHoverColor = `${theme.linkHoverColor}`
  vars.metaLinkColor = `${theme.lightTextColor}`
  vars.metaLinkHoverColor = `${theme.textColor}`
  vars.contentLinkColor = `''`
  vars.contentLinkHoverColor = `''`
  vars.contentLinkTransition = `color ${theme.defaultDuration} ${theme.defaultEasing}`


  /* Description */
  vars.descriptionDistance = `0.6em`
  vars.descriptionMaxWidth = `auto`
  vars.descriptionFontSize = `1em`
  vars.descriptionLineHeight = `${theme.lineHeight}`
  vars.descriptionColor = `${theme.textColor}`

  /* Content Image */
  vars.contentImageWidth = `''`
  vars.contentImageVerticalAlign = `middle`

  /* Avatar Image */
  vars.avatarSize = `${vars.contentImageWidth}`
  vars.avatarBorderRadius = `${theme.circularRadius}`

  /* Paragraph */
  vars.paragraphDistance = `0.5em`

  /* Additional Content */
  vars.extraDivider = `none`
  vars.extraHorizontalSpacing = `0.5rem`
  vars.extraRowSpacing = `0.5rem`

  vars.extraBackground = `none`
  vars.extraDisplay = `block`
  vars.extraPosition = `relative`
  vars.extraMargin = `(1rem - ${vars.extraRowSpacing}) 0em 0em`
  vars.extraTop = `0em`
  vars.extraLeft = `0em`
  vars.extraWidth = `100%`
  vars.extraPadding = `0em 0em 0em`
  vars.extraBoxShadow = `none`
  vars.extraColor = `${theme.lightTextColor}`
  vars.extraTransition = `color ${theme.defaultDuration} ${theme.defaultEasing}`

  /*-------------------
        Variations
  --------------------*/

  /* Relaxed */
  vars.relaxedItemSpacing = `1.5em`
  vars.veryRelaxedItemSpacing = `2em`

  /* Divided */
  vars.dividedBorder = `1px solid ${theme.borderColor}`
  vars.dividedMargin = `0em`
  vars.dividedPadding = `1em 0em`

  vars.dividedFirstLastMargin = `0em`
  vars.dividedFirstLastPadding = `0em`


  /* Unstackable */
  vars.unstackableMobileImageWidth = `125px`


  return vars
}
