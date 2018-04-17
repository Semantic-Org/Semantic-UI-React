module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Header
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.textTransform = `none`
  vars.fontFamily = `${siteVars.headerFont}`
  vars.fontWeight = `${siteVars.headerFontWeight}`
  vars.lineHeight = `${siteVars.headerLineHeight}`
  vars.lineHeightOffset = `${siteVars.headerLineHeightOffset}`

  vars.topMargin = `${siteVars.headerTopMargin}`
  vars.bottomMargin = `${siteVars.headerBottomMargin}`
  vars.margin = `${vars.topMargin} 0em ${vars.bottomMargin}`

  vars.firstMargin = `-${vars.lineHeightOffset}`
  vars.lastMargin = `0em`
  vars.horizontalPadding = `0em`
  vars.verticalPadding = `0em`

  /* Sub Heading */
  vars.subHeadingDistance = `${siteVars.absolute2px}`
  vars.subHeadingFontSize = `${siteVars.relativeTiny}`
  vars.subHeadingFontWeight = `${siteVars.bold}`
  vars.subHeadingTextTransform = `uppercase`
  vars.subHeadingColor = `''`

  vars.smallSubHeadingSize = `${siteVars.relativeMini}`
  vars.largeSubHeadingSize = `${siteVars.relativeSmall}`
  vars.hugeSubHeadingSize = `${siteVars.relativeMedium}`

  /* Sub Header */
  vars.subHeaderMargin = `0em`
  vars.subHeaderLineHeight = `1.2em`
  vars.subHeaderColor = `${siteVars.mutedTextColor}`

  /* Icon */
  vars.iconOpacity = `1`
  vars.iconSize = `1.5em`
  vars.iconOffset = `0em`
  vars.iconMargin = `0.75rem`
  vars.iconAlignment = `middle`

  /* Image */
  vars.imageWidth = `2.5em`
  vars.imageHeight = `auto`
  vars.imageOffset = `${vars.lineHeightOffset}`
  vars.imageMargin = `${vars.iconMargin}`
  vars.imageAlignment = `middle`

  /* Label */
  vars.labelSize = `''`
  vars.labelDistance = `0.5rem`
  vars.labelVerticalAlign = `middle`

  /* Content */
  vars.contentAlignment = `top`
  vars.contentIconAlignment = `middle`
  vars.contentImageAlignment = `middle`

  /* Paragraph after Header */
  vars.nextParagraphDistance = `0em`

  /*-------------------
        Variations
  --------------------*/

  /* Sizing */
  vars.hugeFontSize = `unit(${siteVars.h1}, em)`
  vars.largeFontSize = `unit(${siteVars.h2}, em)`
  vars.mediumFontSize = `unit(${siteVars.h3}, em)`
  vars.smallFontSize = `unit(${siteVars.h4}, em)`
  vars.tinyFontSize = `unit(${siteVars.h5}, em)`

  /* Sub Header */
  vars.h1SubHeaderFontSize = `${siteVars.large}`
  vars.h2SubHeaderFontSize = `${siteVars.large}`
  vars.h3SubHeaderFontSize = `${siteVars.medium}`
  vars.h4SubHeaderFontSize = `${siteVars.medium}`
  vars.h5SubHeaderFontSize = `${siteVars.small}`

  vars.hugeSubHeaderFontSize = `${vars.h1SubHeaderFontSize}`
  vars.largeSubHeaderFontSize = `${vars.h2SubHeaderFontSize}`
  vars.subHeaderFontSize = `${vars.h3SubHeaderFontSize}`
  vars.smallSubHeaderFontSize = `${vars.h4SubHeaderFontSize}`
  vars.tinySubHeaderFontSize = `${vars.h5SubHeaderFontSize}`

  /* Icon Header */
  vars.iconHeaderSize = `3em`
  vars.iconHeaderOpacity = `1`
  vars.iconHeaderMargin = `0.5rem`
  vars.circularHeaderIconSize = `2em`
  vars.squareHeaderIconSize = `2em`

  /* No Line Height Offset */
  vars.iconHeaderTopMargin = `2rem`
  vars.iconHeaderBottomMargin = `${vars.bottomMargin}`
  vars.iconHeaderFirstMargin = `0em`

  /* Divided */
  vars.dividedBorderWidth = `1px`
  vars.dividedBorder = `${vars.dividedBorderWidth} solid ${siteVars.borderColor}`
  vars.dividedColoredBorderWidth = `2px`

  vars.dividedBorderPadding = `${siteVars.absolute3px}`
  vars.dividedSubHeaderPadding = `${siteVars.absolute3px}`
  vars.dividedIconPadding = `0em`

  /* Block */
  vars.blockBackground = `${siteVars.darkWhite}`
  vars.blockBoxShadow = `none`
  vars.blockBorderWidth = `1px`
  vars.blockBorder = `${vars.blockBorderWidth} solid ${siteVars.solidBorderColor}`
  vars.blockHorizontalPadding = `${siteVars.medium}`
  vars.blockVerticalPadding = `${siteVars.mini}`
  vars.blockBorderRadius = `${siteVars.defaultBorderRadius}`

  vars.tinyBlock = `${siteVars.tiny}`
  vars.smallBlock = `${siteVars.small}`
  vars.mediumBlock = `${siteVars.medium}`
  vars.largeBlock = `${siteVars.large}`
  vars.hugeBlock = `${siteVars.huge}`

  /* Attached */
  vars.attachedOffset = `-1px`
  vars.attachedBoxShadow = `none`
  vars.attachedBorder = `1px solid ${siteVars.solidBorderColor}`
  vars.attachedVerticalPadding = `${vars.blockVerticalPadding}`
  vars.attachedHorizontalPadding = `${vars.blockHorizontalPadding}`
  vars.attachedBackground = `${siteVars.white}`
  vars.attachedBorderRadius = `${vars.blockBorderRadius}`

  vars.tinyAttachedSize = `${siteVars.relativeTiny}`
  vars.smallAttachedSize = `${siteVars.relativeSmall}`
  vars.mediumAttachedSize = `${siteVars.relativeMedium}`
  vars.largeAttachedSize = `${siteVars.relativeLarge}`
  vars.bigAttachedSize = `${siteVars.relativeBig}`
  vars.hugeAttachedSize = `${siteVars.relativeHuge}`

  /* Inverted */
  vars.invertedColor = `${siteVars.white}`
  vars.invertedSubHeaderColor = `${siteVars.invertedMutedTextColor}`
  vars.invertedDividedBorderColor = `${siteVars.whiteBorderColor}`
  vars.invertedBlockBackground = `${siteVars.lightBlack} ${siteVars.subtleGradient}`
  vars.invertedAttachedBackground = `${vars.invertedBlockBackground}`

  /* Floated */
  vars.floatedMargin = `0.5em`

  return vars
}
