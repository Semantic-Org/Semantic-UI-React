module.exports = (siteVars) => {
  const vars = {}

  /*******************************
               Modal
  *******************************/

  vars.background = `${siteVars.white}`
  vars.border = `none`
  vars.zIndex = `1001`
  vars.borderRadius = `${siteVars.defaultBorderRadius}`
  vars.transformOrigin = `50% 25%`
  vars.boxShadow = `1px 3px 3px 0px rgba(0, 0, 0, 0.2),
    1px 3px 15px 2px rgba(0, 0, 0, 0.2)`

  /* Close Icon */
  vars.closeOpacity = `0.8`
  vars.closeSize = `1.25em`
  vars.closeColor = `${siteVars.white}`

  vars.closeHitbox = `2.25rem`
  vars.closeDistance = `0.25rem`
  vars.closeHitBoxOffset = `(${vars.closeHitbox} - 1rem) / 2`
  vars.closePadding = `${vars.closeHitBoxOffset} 0rem 0rem 0rem`
  vars.closeTop = `-(${vars.closeDistance} + ${vars.closeHitbox})`
  vars.closeRight = `-(${vars.closeDistance} + ${vars.closeHitbox})`

  /* Header */
  vars.headerMargin = `0em`
  vars.headerVerticalPadding = `1.25rem`
  vars.headerHorizontalPadding = `1.5rem`
  vars.headerPadding = `${vars.headerVerticalPadding} ${vars.headerHorizontalPadding}`
  vars.headerBackground = `${siteVars.white}`
  vars.headerColor = `${siteVars.darkTextColor}`
  vars.headerFontSize = `${siteVars.huge}`
  vars.headerBoxShadow = `none`
  vars.headerFontWeight = `${siteVars.bold}`
  vars.headerFontFamily = `${siteVars.headerFont}`
  vars.headerBorder = `1px solid ${siteVars.borderColor}`

  /* Content */
  vars.contentFontSize = `1em`
  vars.contentPadding = `1.5rem`
  vars.contentLineHeight = `1.4`
  vars.contentBackground = `#FFFFFF`

  /* Image / Description */
  vars.imageWidth = `''`
  vars.imageIconSize = `8rem`
  vars.imageVerticalAlign = `top`

  vars.descriptionDistance = `2em`
  vars.descriptionMinWidth = `''`
  vars.descriptionWidth = `auto`
  vars.descriptionVerticalAlign = `top`

  /* Modal Actions */
  vars.actionBorder = `1px solid ${siteVars.borderColor}`
  vars.actionBackground = `${siteVars.offWhite}`
  vars.actionPadding = `1rem 1rem`
  vars.actionAlign = `right`

  vars.buttonDistance = `0.75em`

  /* Inner Close Position (Tablet/Mobile) */
  vars.innerCloseTop = `(${vars.headerVerticalPadding} - ${vars.closeHitBoxOffset} + (${siteVars.lineHeight} - 1em))`
  vars.innerCloseRight = `1rem`
  vars.innerCloseColor = `${siteVars.textColor}`

  /* Mobile Positions */
  vars.mobileHeaderPadding = `0.75rem 1rem`
  vars.mobileContentPadding = `1rem`
  vars.mobileImagePadding = `0rem 0rem 1rem`
  vars.mobileDescriptionPadding = `1rem 0rem`
  vars.mobileButtonDistance = `1rem`
  vars.mobileActionPadding = `1rem 1rem (1rem - ${vars.mobileButtonDistance})`
  vars.mobileImageIconSize = `5rem`
  vars.mobileCloseTop = `0.5rem`
  vars.mobileCloseRight = `0.5rem`

  /* Responsive Widths */
  vars.mobileWidth = `95%`
  vars.tabletWidth = `88%`
  vars.computerWidth = `850px`
  vars.largeMonitorWidth = `900px`
  vars.widescreenMonitorWidth = `950px`

  vars.mobileMargin = `0em 0em 0em 0em`
  vars.tabletMargin = `0em 0em 0em 0em`
  vars.computerMargin = `0em 0em 0em 0em`
  vars.largeMonitorMargin = `0em 0em 0em 0em`
  vars.widescreenMonitorMargin = `0em 0em 0em 0em`

  vars.fullScreenWidth = `95%`
  vars.fullScreenOffset = `0em`
  vars.fullScreenMargin = `1em auto`

  /* Coupling */
  vars.invertedBoxShadow = `1px 3px 10px 2px rgba(0, 0, 0, 0.2)`

  /*-------------------
         States
  --------------------*/

  vars.loadingZIndex = `-1`

  /*-------------------
          Types
  --------------------*/

  /* Basic */
  vars.basicModalHeaderColor = `${siteVars.white}`
  vars.basicModalColor = `${siteVars.white}`
  vars.basicModalCloseTop = `1rem`
  vars.basicModalCloseRight = `1.5rem`
  vars.basicInnerCloseColor = `${siteVars.white}`

  vars.basicInvertedModalColor = `${siteVars.textColor}`
  vars.basicInvertedModalHeaderColor = `${siteVars.darkTextColor}`

  /* Top Aligned */
  vars.topAlignedMargin = `5vh`
  vars.mobileTopAlignedMargin = `1rem`

  /* Scrolling Margin */
  vars.scrollingMargin = `1rem`
  vars.mobileScrollingMargin = `${vars.mobileTopAlignedMargin}`

  /* Scrolling Content */
  vars.scrollingContentMaxHeight = `calc(80vh - 10em)`

  /*-------------------
        Variations
  --------------------*/

  /* Size Widths */
  vars.miniRatio = `0.4`
  vars.tinyRatio = `0.6`
  vars.smallRatio = `0.8`
  vars.largeRatio = `1.2`

  /* Derived Responsive Sizes */
  vars.miniHeaderSize = `1.3em`
  vars.miniMobileWidth = `${vars.mobileWidth}`
  vars.miniTabletWidth = `(${vars.tabletWidth} * ${vars.miniRatio})`
  vars.miniComputerWidth = `(${vars.computerWidth} * ${vars.miniRatio})`
  vars.miniLargeMonitorWidth = `(${vars.largeMonitorWidth} * ${vars.miniRatio})`
  vars.miniWidescreenMonitorWidth = `(${vars.widescreenMonitorWidth} * ${vars.miniRatio})`

  vars.miniMobileMargin = `0em 0em 0em 0em`
  vars.miniTabletMargin = `0em 0em 0em 0em`
  vars.miniComputerMargin = `0em 0em 0em 0em`
  vars.miniLargeMonitorMargin = `0em 0em 0em 0em`
  vars.miniWidescreenMonitorMargin = `0em 0em 0em 0em`

  vars.tinyHeaderSize = `1.3em`
  vars.tinyMobileWidth = `${vars.mobileWidth}`
  vars.tinyTabletWidth = `(${vars.tabletWidth} * ${vars.tinyRatio})`
  vars.tinyComputerWidth = `(${vars.computerWidth} * ${vars.tinyRatio})`
  vars.tinyLargeMonitorWidth = `(${vars.largeMonitorWidth} * ${vars.tinyRatio})`
  vars.tinyWidescreenMonitorWidth = `(${vars.widescreenMonitorWidth} * ${vars.tinyRatio})`

  vars.tinyMobileMargin = `0em 0em 0em 0em`
  vars.tinyTabletMargin = `0em 0em 0em 0em`
  vars.tinyComputerMargin = `0em 0em 0em 0em`
  vars.tinyLargeMonitorMargin = `0em 0em 0em 0em`
  vars.tinyWidescreenMonitorMargin = `0em 0em 0em 0em`

  vars.smallHeaderSize = `1.3em`
  vars.smallMobileWidth = `${vars.mobileWidth}`
  vars.smallTabletWidth = `(${vars.tabletWidth} * ${vars.smallRatio})`
  vars.smallComputerWidth = `(${vars.computerWidth} * ${vars.smallRatio})`
  vars.smallLargeMonitorWidth = `(${vars.largeMonitorWidth} * ${vars.smallRatio})`
  vars.smallWidescreenMonitorWidth = `(${vars.widescreenMonitorWidth} * ${vars.smallRatio})`

  vars.smallMobileMargin = `0em 0em 0em 0em`
  vars.smallTabletMargin = `0em 0em 0em 0em`
  vars.smallComputerMargin = `0em 0em 0em 0em`
  vars.smallLargeMonitorMargin = `0em 0em 0em 0em`
  vars.smallWidescreenMonitorMargin = `0em 0em 0em 0em`

  vars.largeHeaderSize = `1.6em`
  vars.largeMobileWidth = `${vars.mobileWidth}`
  vars.largeTabletWidth = `${vars.tabletWidth}`
  vars.largeComputerWidth = `(${vars.computerWidth} * ${vars.largeRatio})`
  vars.largeLargeMonitorWidth = `(${vars.largeMonitorWidth} * ${vars.largeRatio})`
  vars.largeWidescreenMonitorWidth = `(${vars.widescreenMonitorWidth} * ${vars.largeRatio})`

  vars.largeMobileMargin = `0em 0em 0em 0em`
  vars.largeTabletMargin = `0em 0em 0em 0em`
  vars.largeComputerMargin = `0em 0em 0em 0em`
  vars.largeLargeMonitorMargin = `0em 0em 0em 0em`
  vars.largeWidescreenMonitorMargin = `0em 0em 0em 0em`

  return vars
}
