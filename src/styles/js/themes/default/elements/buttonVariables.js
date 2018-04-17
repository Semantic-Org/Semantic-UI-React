module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Button
  *******************************/

  /*-------------------
         Element
  --------------------*/

  /* Button */
  vars.verticalMargin = `0em`
  vars.horizontalMargin = `0.25em`
  vars.backgroundColor = `#E0E1E2`
  vars.backgroundImage = `none`
  vars.background = `${vars.backgroundColor} ${vars.backgroundImage}`
  vars.lineHeight = `1em`

  /* Button defaults to using same height as input globally */
  vars.verticalPadding = `${siteVars.inputVerticalPadding}`
  vars.horizontalPadding = `1.5em`

  /* Text */
  vars.textTransform = `none`
  vars.tapColor = `transparent`
  vars.fontFamily = `${siteVars.pageFont}`
  vars.fontWeight = `${siteVars.bold}`
  vars.textColor = `rgba(0, 0, 0, 0.6)`
  vars.textShadow = `none`
  vars.invertedTextShadow = `${vars.textShadow}`
  vars.borderRadius = `${siteVars.defaultBorderRadius}`
  vars.verticalAlign = `baseline`

  /* Internal Shadow */
  vars.shadowDistance = `0em`
  vars.shadowOffset = `(${vars.shadowDistance} / 2)`
  vars.shadowBoxShadow = `0px -${vars.shadowDistance} 0px 0px ${siteVars.borderColor} inset`

  /* Box Shadow */
  vars.borderBoxShadowColor = `transparent`
  vars.borderBoxShadowWidth = `1px`
  vars.borderBoxShadow = `0px 0px 0px ${vars.borderBoxShadowWidth} ${vars.borderBoxShadowColor} inset`
  vars.boxShadow = `${vars.borderBoxShadow},
    ${vars.shadowBoxShadow}`

  /* Icon */
  vars.iconHeight = `${siteVars.relativeTiny}`
  vars.iconOpacity = `0.8`
  vars.iconDistance = `${siteVars.relative6px}`
  vars.iconColor = `''`
  vars.iconTransition = `opacity ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.iconVerticalAlign = `''`

  vars.iconMargin = `0em ${vars.iconDistance} 0em -(${vars.iconDistance} / 2)`
  vars.rightIconMargin = `0em -(${vars.iconDistance} / 2) 0em ${vars.iconDistance}`

  /* Loader */
  vars.invertedLoaderFillColor = `rgba(0, 0, 0, 0.15)`

  vars.transition = `opacity ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    background-color ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    color ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    box-shadow ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    background ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  /*
  vars.willChange = `box-shadow, transform, opacity, color, background`
  */
  vars.willChange = `''`

  /*-------------------
          Group
  --------------------*/

  vars.groupBoxShadow = `none`
  vars.groupButtonBoxShadow = `${vars.boxShadow}`
  vars.verticalBoxShadow = `none`
  vars.groupButtonOffset = `0px 0px 0px 0px`
  vars.verticalGroupOffset = `0px 0px 0px 0px`

  /*-------------------
          States
  --------------------*/

  /* Hovered */
  vars.hoverBackgroundColor = `#CACBCD`
  vars.hoverBackgroundImage = `${vars.backgroundImage}`
  vars.hoverBoxShadow = `${vars.boxShadow}`
  vars.hoverColor = `${siteVars.hoveredTextColor}`
  vars.iconHoverOpacity = `0.85`

  /* Focused */
  vars.focusBackgroundColor = `${vars.hoverBackgroundColor}`
  vars.focusBackgroundImage = `''`
  vars.focusBoxShadow = `''`
  vars.focusColor = `${siteVars.hoveredTextColor}`
  vars.iconFocusOpacity = `0.85`

  /* Disabled */
  vars.disabledBackgroundImage = `none`
  vars.disabledBoxShadow = `none`

  /* Pressed Down */
  vars.downBackgroundColor = `#BABBBC`
  vars.downBackgroundImage = `''`
  vars.downPressedShadow = `none`
  vars.downBoxShadow = `${vars.borderBoxShadow},
    ${vars.downPressedShadow}`
  vars.downColor = `${siteVars.pressedTextColor}`

  /* Active */
  vars.activeBackgroundColor = `#C0C1C2`
  vars.activeBackgroundImage = `none`
  vars.activeColor = `${siteVars.selectedTextColor}`
  vars.activeBoxShadow = `${vars.borderBoxShadow}`

  /* Active + Hovered */
  vars.activeHoverBackgroundColor = `${vars.activeBackgroundColor}`
  vars.activeHoverBackgroundImage = `none`
  vars.activeHoverColor = `${vars.activeColor}`
  vars.activeHoverBoxShadow = `${vars.activeBoxShadow}`

  /* Loading */
  vars.loadingOpacity = `1`
  vars.loadingPointerEvents = `auto`
  vars.loadingTransition = `all 0s linear,
    opacity ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

  /*-------------------
          Types
  --------------------*/

  /* Or */
  vars.orText = `'or'`

  vars.orGap = `0.3em`
  vars.orHeight = `(${vars.verticalPadding} * 2) + 1em`
  vars.orZIndex = `3`

  vars.orCircleDistanceToEdge = `(${vars.verticalPadding})`
  vars.orCircleSize = `${vars.orHeight} - ${vars.orCircleDistanceToEdge}`
  vars.orLineHeight = `(${vars.orCircleSize})`
  vars.orBoxShadow = `${vars.borderBoxShadow}`

  vars.orVerticalOffset = `-(${vars.orCircleSize} / 2)`
  vars.orHorizontalOffset = `-(${vars.orCircleSize} / 2)`

  vars.orBackgroundColor = `${siteVars.white}`
  vars.orTextShadow = `${vars.invertedTextShadow}`
  vars.orTextStyle = `${siteVars.normal}`
  vars.orTextWeight = `${siteVars.bold}`
  vars.orTextColor = `${siteVars.lightTextColor}`


  vars.orSpacerHeight = `${vars.verticalPadding}`
  vars.orSpacerColor = `transparent`

  /* Icon */
  vars.iconButtonOpacity = `0.9`

  /* Labeled */
  vars.labeledLabelFontSize = `${siteVars.medium}`
  vars.labeledLabelAlign = `center`
  vars.labeledLabelPadding = `''`
  vars.labeledLabelFontSize = `${siteVars.relativeMedium}`
  vars.labeledLabelBorderColor = `${siteVars.borderColor}`
  vars.labeledLabelBorderOffset = `-${vars.borderBoxShadowWidth}`
  vars.labeledTagLabelSize = `1.85em` /* hypotenuse of triangle */
  vars.labeledIconMargin = `0em`

  /* Labeled Icon */
  vars.labeledIconWidth = `1em + (${vars.verticalPadding} * 2)`
  vars.labeledIconBackgroundColor = `rgba(0, 0, 0, 0.05)`
  vars.labeledIconPadding = `(${vars.horizontalPadding} + ${vars.labeledIconWidth})`
  vars.labeledIconBorder = `transparent`
  vars.labeledIconColor = `''`

  vars.labeledIconLeftShadow = `-1px 0px 0px 0px ${vars.labeledIconBorder} inset`
  vars.labeledIconRightShadow = `1px 0px 0px 0px ${vars.labeledIconBorder} inset`


  /* Inverted */
  vars.invertedBorderSize = `2px`
  vars.invertedTextColor = `${siteVars.white}`
  vars.invertedTextHoverColor = `${vars.hoverColor}`
  vars.invertedGroupButtonOffset = `0px 0px 0px -(${vars.invertedBorderSize})`
  vars.invertedVerticalGroupButtonOffset = `0px 0px -(${vars.invertedBorderSize}) 0px`

  /* Basic */
  vars.basicBorderRadius = `${vars.borderRadius}`
  vars.basicBorderSize = `1px`
  vars.basicTextColor = `${vars.textColor}`
  vars.basicColoredBorderSize = `1px`

  vars.basicBackground = `transparent none`
  vars.basicFontWeight = `${siteVars.normal}`
  vars.basicBorder = `1px solid ${siteVars.borderColor}`
  vars.basicBoxShadow = `0px 0px 0px ${vars.basicBorderSize} ${siteVars.borderColor} inset`
  vars.basicLoadingColor = `${siteVars.offWhite}`
  vars.basicTextTransform = `none`

  /* Basic Hover */
  vars.basicHoverBackground = `#FFFFFF`
  vars.basicHoverTextColor = `${siteVars.hoveredTextColor}`
  vars.basicHoverBoxShadow = `0px 0px 0px ${vars.basicBorderSize} ${siteVars.selectedBorderColor} inset,
    0px 0px 0px 0px ${siteVars.borderColor} inset`
  /* Basic Focus */
  vars.basicFocusBackground = `${vars.basicHoverBackground}`
  vars.basicFocusTextColor = `${vars.basicHoverTextColor}`
  vars.basicFocusBoxShadow = `${vars.basicHoverBoxShadow}`

  /* Basic Down */
  vars.basicDownBackground = `#F8F8F8`
  vars.basicDownTextColor = `${siteVars.pressedTextColor}`
  vars.basicDownBoxShadow = `0px 0px 0px ${vars.basicBorderSize} rgba(0, 0, 0, 0.15) inset,
    0px 1px 4px 0px ${siteVars.borderColor} inset`
  /* Basic Active */
  vars.basicActiveBackground = `${siteVars.transparentBlack}`
  vars.basicActiveBoxShadow = `''`
  vars.basicActiveTextColor = `${siteVars.selectedTextColor}`

  /* Basic Inverted */
  vars.basicInvertedBackground = `transparent`
  vars.basicInvertedFocusBackground = `transparent`
  vars.basicInvertedDownBackground = `${siteVars.transparentWhite}`
  vars.basicInvertedActiveBackground = `${siteVars.transparentWhite}`

  vars.basicInvertedBoxShadow = `0px 0px 0px ${vars.invertedBorderSize} rgba(255, 255, 255, 0.5) inset`
  vars.basicInvertedHoverBoxShadow = `0px 0px 0px ${vars.invertedBorderSize} rgba(255, 255, 255, 1) inset`
  vars.basicInvertedFocusBoxShadow = `0px 0px 0px ${vars.invertedBorderSize} rgba(255, 255, 255, 1) inset`
  vars.basicInvertedDownBoxShadow = `0px 0px 0px ${vars.invertedBorderSize} rgba(255, 255, 255, 0.9) inset`
  vars.basicInvertedActiveBoxShadow = `0px 0px 0px ${vars.invertedBorderSize} rgba(255, 255, 255, 0.7) inset`

  vars.basicInvertedColor = `${siteVars.darkWhite}`
  vars.basicInvertedHoverColor = `${siteVars.darkWhiteHover}`
  vars.basicInvertedDownColor = `${siteVars.darkWhiteActive}`
  vars.basicInvertedActiveColor = `${vars.invertedTextColor}`


  /* Basic Group */
  vars.basicGroupBorder = `${vars.basicBorderSize} solid ${siteVars.borderColor}`
  vars.basicGroupBoxShadow = `none`

  /*-------------------
        Variations
  --------------------*/

  /* Colors */
  vars.coloredBackgroundImage = `none`
  vars.coloredBoxShadow = `${vars.shadowBoxShadow}`

  /* Colored */
  vars.brownTextColor = `${vars.invertedTextColor}`
  vars.brownTextShadow = `${vars.invertedTextShadow}`
  vars.redTextColor = `${vars.invertedTextColor}`
  vars.redTextShadow = `${vars.invertedTextShadow}`
  vars.orangeTextColor = `${vars.invertedTextColor}`
  vars.orangeTextShadow = `${vars.invertedTextShadow}`
  vars.greenTextColor = `${vars.invertedTextColor}`
  vars.greenTextShadow = `${vars.invertedTextShadow}`
  vars.blueTextColor = `${vars.invertedTextColor}`
  vars.blueTextShadow = `${vars.invertedTextShadow}`
  vars.violetTextColor = `${vars.invertedTextColor}`
  vars.violetTextShadow = `${vars.invertedTextShadow}`
  vars.purpleTextColor = `${vars.invertedTextColor}`
  vars.purpleTextShadow = `${vars.invertedTextShadow}`
  vars.pinkTextColor = `${vars.invertedTextColor}`
  vars.pinkTextShadow = `${vars.invertedTextShadow}`
  vars.blackTextColor = `${vars.invertedTextColor}`
  vars.blackTextShadow = `${vars.invertedTextShadow}`
  vars.oliveTextColor = `${vars.invertedTextColor}`
  vars.oliveTextShadow = `${vars.invertedTextShadow}`
  vars.yellowTextColor = `${vars.invertedTextColor}`
  vars.yellowTextShadow = `${vars.invertedTextShadow}`
  vars.tealTextColor = `${vars.invertedTextColor}`
  vars.tealTextShadow = `${vars.invertedTextShadow}`
  vars.greyTextColor = `${vars.invertedTextColor}`
  vars.greyTextShadow = `${vars.invertedTextShadow}`

  /* Inverted */
  vars.lightBrownTextColor = `${vars.invertedTextColor}`
  vars.lightBrownTextShadow = `${vars.invertedTextShadow}`
  vars.lightRedTextColor = `${vars.invertedTextColor}`
  vars.lightRedTextShadow = `${vars.invertedTextShadow}`
  vars.lightOrangeTextColor = `${vars.invertedTextColor}`
  vars.lightOrangeTextShadow = `${vars.invertedTextShadow}`
  vars.lightGreenTextColor = `${vars.invertedTextColor}`
  vars.lightGreenTextShadow = `${vars.invertedTextShadow}`
  vars.lightBlueTextColor = `${vars.invertedTextColor}`
  vars.lightBlueTextShadow = `${vars.invertedTextShadow}`
  vars.lightVioletTextColor = `${vars.invertedTextColor}`
  vars.lightVioletTextShadow = `${vars.invertedTextShadow}`
  vars.lightPurpleTextColor = `${vars.invertedTextColor}`
  vars.lightPurpleTextShadow = `${vars.invertedTextShadow}`
  vars.lightPinkTextColor = `${vars.invertedTextColor}`
  vars.lightPinkTextShadow = `${vars.invertedTextShadow}`
  vars.lightBlackTextColor = `${vars.invertedTextColor}`
  vars.lightBlackTextShadow = `${vars.invertedTextShadow}`
  vars.lightOliveTextColor = `${vars.textColor}`
  vars.lightOliveTextShadow = `${vars.textShadow}`
  vars.lightYellowTextColor = `${vars.textColor}`
  vars.lightYellowTextShadow = `${vars.textShadow}`
  vars.lightTealTextColor = `${vars.textColor}`
  vars.lightTealTextShadow = `${vars.textShadow}`
  vars.lightGreyTextColor = `${vars.textColor}`
  vars.lightGreyTextShadow = `${vars.textShadow}`


  /* Ordinality */
  vars.primaryBackgroundImage = `${vars.coloredBackgroundImage}`
  vars.primaryTextColor = `${vars.invertedTextColor}`
  vars.primaryTextShadow = `${vars.invertedTextShadow}`
  vars.primaryBoxShadow = `${vars.coloredBoxShadow}`

  vars.secondaryBackgroundImage = `${vars.coloredBackgroundImage}`
  vars.secondaryTextColor = `${vars.invertedTextColor}`
  vars.secondaryTextShadow = `${vars.invertedTextShadow}`
  vars.secondaryBoxShadow = `${vars.coloredBoxShadow}`

  vars.positiveBackgroundImage = `${vars.coloredBackgroundImage}`
  vars.positiveTextColor = `${vars.invertedTextColor}`
  vars.positiveTextShadow = `${vars.invertedTextShadow}`
  vars.positiveBoxShadow = `${vars.coloredBoxShadow}`

  vars.negativeBackgroundImage = `${vars.coloredBackgroundImage}`
  vars.negativeTextColor = `${vars.invertedTextColor}`
  vars.negativeTextShadow = `${vars.invertedTextShadow}`
  vars.negativeBoxShadow = `${vars.coloredBoxShadow}`

  /* Compact */
  vars.compactVerticalPadding = `(${vars.verticalPadding} * 0.75)`
  vars.compactHorizontalPadding = `(${vars.horizontalPadding} * 0.75)`

  /* Attached */
  vars.attachedOffset = `-1px`
  vars.attachedBoxShadow = `0px 0px 0px 1px ${siteVars.borderColor}`
  vars.attachedHorizontalPadding = `0.75em`
  vars.attachedZIndex = `2`

  /* Floated */
  vars.floatedMargin = `0.25em`

  /* Animated */
  vars.animatedVerticalAlign = `middle`
  vars.animatedZIndex = `1`
  vars.animationDuration = `0.3s`
  vars.animationEasing = `ease`
  vars.fadeScaleHigh = `1.5`
  vars.fadeScaleLow = `0.75`

  return vars
}
