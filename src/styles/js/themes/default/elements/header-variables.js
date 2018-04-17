module.exports = (theme) => {
  const vars = {}

  /*******************************
              Header
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.textTransform = `none`
  vars.fontFamily = `${theme.headerFont}`
  vars.fontWeight = `${theme.headerFontWeight}`
  vars.lineHeight = `${theme.headerLineHeight}`
  vars.lineHeightOffset = `${theme.headerLineHeightOffset}`

  vars.topMargin = `${theme.headerTopMargin}`
  vars.bottomMargin = `${theme.headerBottomMargin}`
  vars.margin = `${vars.topMargin} 0em ${vars.bottomMargin}`

  vars.firstMargin = `-${vars.lineHeightOffset}`
  vars.lastMargin = `0em`
  vars.horizontalPadding = `0em`
  vars.verticalPadding = `0em`

  /* Sub Heading */
  vars.subHeadingDistance = `${theme.absolute2px}`
  vars.subHeadingFontSize = `${theme.relativeTiny}`
  vars.subHeadingFontWeight = `${theme.bold}`
  vars.subHeadingTextTransform = `uppercase`
  vars.subHeadingColor = `''`

  vars.smallSubHeadingSize = `${theme.relativeMini}`
  vars.largeSubHeadingSize = `${theme.relativeSmall}`
  vars.hugeSubHeadingSize = `${theme.relativeMedium}`

  /* Sub Header */
  vars.subHeaderMargin = `0em`
  vars.subHeaderLineHeight = `1.2em`
  vars.subHeaderColor = `${theme.mutedTextColor}`

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
  vars.hugeFontSize = `unit(${theme.h1}, em)`
  vars.largeFontSize = `unit(${theme.h2}, em)`
  vars.mediumFontSize = `unit(${theme.h3}, em)`
  vars.smallFontSize = `unit(${theme.h4}, em)`
  vars.tinyFontSize = `unit(${theme.h5}, em)`

  /* Sub Header */
  vars.h1SubHeaderFontSize = `${theme.large}`
  vars.h2SubHeaderFontSize = `${theme.large}`
  vars.h3SubHeaderFontSize = `${theme.medium}`
  vars.h4SubHeaderFontSize = `${theme.medium}`
  vars.h5SubHeaderFontSize = `${theme.small}`

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
  vars.dividedBorder = `${vars.dividedBorderWidth} solid ${theme.borderColor}`
  vars.dividedColoredBorderWidth = `2px`

  vars.dividedBorderPadding = `${theme.absolute3px}`
  vars.dividedSubHeaderPadding = `${theme.absolute3px}`
  vars.dividedIconPadding = `0em`

  /* Block */
  vars.blockBackground = `${theme.darkWhite}`
  vars.blockBoxShadow = `none`
  vars.blockBorderWidth = `1px`
  vars.blockBorder = `${vars.blockBorderWidth} solid ${theme.solidBorderColor}`
  vars.blockHorizontalPadding = `${theme.medium}`
  vars.blockVerticalPadding = `${theme.mini}`
  vars.blockBorderRadius = `${theme.defaultBorderRadius}`

  vars.tinyBlock = `${theme.tiny}`
  vars.smallBlock = `${theme.small}`
  vars.mediumBlock = `${theme.medium}`
  vars.largeBlock = `${theme.large}`
  vars.hugeBlock = `${theme.huge}`

  /* Attached */
  vars.attachedOffset = `-1px`
  vars.attachedBoxShadow = `none`
  vars.attachedBorder = `1px solid ${theme.solidBorderColor}`
  vars.attachedVerticalPadding = `${vars.blockVerticalPadding}`
  vars.attachedHorizontalPadding = `${vars.blockHorizontalPadding}`
  vars.attachedBackground = `${theme.white}`
  vars.attachedBorderRadius = `${vars.blockBorderRadius}`

  vars.tinyAttachedSize = `${theme.relativeTiny}`
  vars.smallAttachedSize = `${theme.relativeSmall}`
  vars.mediumAttachedSize = `${theme.relativeMedium}`
  vars.largeAttachedSize = `${theme.relativeLarge}`
  vars.bigAttachedSize = `${theme.relativeBig}`
  vars.hugeAttachedSize = `${theme.relativeHuge}`

  /* Inverted */
  vars.invertedColor = `${theme.white}`
  vars.invertedSubHeaderColor = `${theme.invertedMutedTextColor}`
  vars.invertedDividedBorderColor = `${theme.whiteBorderColor}`
  vars.invertedBlockBackground = `${theme.lightBlack} ${theme.subtleGradient}`
  vars.invertedAttachedBackground = `${vars.invertedBlockBackground}`

  /* Floated */
  vars.floatedMargin = `0.5em`

  return vars
}
