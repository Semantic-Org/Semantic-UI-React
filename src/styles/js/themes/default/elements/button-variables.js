module.exports = (theme) => {
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
  vars.verticalPadding = `${theme.inputVerticalPadding}`
  vars.horizontalPadding = `1.5em`

  /* Text */
  vars.textTransform = `none`
  vars.tapColor = `transparent`
  vars.fontFamily = `${theme.pageFont}`
  vars.fontWeight = `${theme.bold}`
  vars.textColor = `rgba(0, 0, 0, 0.6)`
  vars.textShadow = `none`
  vars.invertedTextShadow = `${vars.textShadow}`
  vars.borderRadius = `${theme.defaultBorderRadius}`
  vars.verticalAlign = `baseline`

  /* Internal Shadow */
  vars.shadowDistance = `0em`
  vars.shadowOffset = `(${vars.shadowDistance} / 2)`
  vars.shadowBoxShadow = `0px -${vars.shadowDistance} 0px 0px ${theme.borderColor} inset`

  /* Box Shadow */
  vars.borderBoxShadowColor = `transparent`
  vars.borderBoxShadowWidth = `1px`
  vars.borderBoxShadow = `0px 0px 0px ${vars.borderBoxShadowWidth} ${vars.borderBoxShadowColor} inset`
  vars.boxShadow = `${vars.borderBoxShadow},
    ${vars.shadowBoxShadow}`

  /* Icon */
  vars.iconHeight = `${theme.relativeTiny}`
  vars.iconOpacity = `0.8`
  vars.iconDistance = `${theme.relative6px}`
  vars.iconColor = `''`
  vars.iconTransition = `opacity ${theme.defaultDuration} ${theme.defaultEasing}`
  vars.iconVerticalAlign = `''`

  vars.iconMargin = `0em ${vars.iconDistance} 0em -(${vars.iconDistance} / 2)`
  vars.rightIconMargin = `0em -(${vars.iconDistance} / 2) 0em ${vars.iconDistance}`

  /* Loader */
  vars.invertedLoaderFillColor = `rgba(0, 0, 0, 0.15)`

  vars.transition = `opacity ${theme.defaultDuration} ${theme.defaultEasing},
    background-color ${theme.defaultDuration} ${theme.defaultEasing},
    color ${theme.defaultDuration} ${theme.defaultEasing},
    box-shadow ${theme.defaultDuration} ${theme.defaultEasing},
    background ${theme.defaultDuration} ${theme.defaultEasing}`
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
  vars.hoverColor = `${theme.hoveredTextColor}`
  vars.iconHoverOpacity = `0.85`

  /* Focused */
  vars.focusBackgroundColor = `${vars.hoverBackgroundColor}`
  vars.focusBackgroundImage = `''`
  vars.focusBoxShadow = `''`
  vars.focusColor = `${theme.hoveredTextColor}`
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
  vars.downColor = `${theme.pressedTextColor}`

  /* Active */
  vars.activeBackgroundColor = `#C0C1C2`
  vars.activeBackgroundImage = `none`
  vars.activeColor = `${theme.selectedTextColor}`
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
    opacity ${theme.defaultDuration} ${theme.defaultEasing}`

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

  vars.orBackgroundColor = `${theme.white}`
  vars.orTextShadow = `${vars.invertedTextShadow}`
  vars.orTextStyle = `${theme.normal}`
  vars.orTextWeight = `${theme.bold}`
  vars.orTextColor = `${theme.lightTextColor}`


  vars.orSpacerHeight = `${vars.verticalPadding}`
  vars.orSpacerColor = `transparent`

  /* Icon */
  vars.iconButtonOpacity = `0.9`

  /* Labeled */
  vars.labeledLabelFontSize = `${theme.medium}`
  vars.labeledLabelAlign = `center`
  vars.labeledLabelPadding = `''`
  vars.labeledLabelFontSize = `${theme.relativeMedium}`
  vars.labeledLabelBorderColor = `${theme.borderColor}`
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
  vars.invertedTextColor = `${theme.white}`
  vars.invertedTextHoverColor = `${vars.hoverColor}`
  vars.invertedGroupButtonOffset = `0px 0px 0px -(${vars.invertedBorderSize})`
  vars.invertedVerticalGroupButtonOffset = `0px 0px -(${vars.invertedBorderSize}) 0px`

  /* Basic */
  vars.basicBorderRadius = `${vars.borderRadius}`
  vars.basicBorderSize = `1px`
  vars.basicTextColor = `${vars.textColor}`
  vars.basicColoredBorderSize = `1px`

  vars.basicBackground = `transparent none`
  vars.basicFontWeight = `${theme.normal}`
  vars.basicBorder = `1px solid ${theme.borderColor}`
  vars.basicBoxShadow = `0px 0px 0px ${vars.basicBorderSize} ${theme.borderColor} inset`
  vars.basicLoadingColor = `${theme.offWhite}`
  vars.basicTextTransform = `none`

  /* Basic Hover */
  vars.basicHoverBackground = `#FFFFFF`
  vars.basicHoverTextColor = `${theme.hoveredTextColor}`
  vars.basicHoverBoxShadow = `0px 0px 0px ${vars.basicBorderSize} ${theme.selectedBorderColor} inset,
    0px 0px 0px 0px ${theme.borderColor} inset`
  /* Basic Focus */
  vars.basicFocusBackground = `${vars.basicHoverBackground}`
  vars.basicFocusTextColor = `${vars.basicHoverTextColor}`
  vars.basicFocusBoxShadow = `${vars.basicHoverBoxShadow}`

  /* Basic Down */
  vars.basicDownBackground = `#F8F8F8`
  vars.basicDownTextColor = `${theme.pressedTextColor}`
  vars.basicDownBoxShadow = `0px 0px 0px ${vars.basicBorderSize} rgba(0, 0, 0, 0.15) inset,
    0px 1px 4px 0px ${theme.borderColor} inset`
  /* Basic Active */
  vars.basicActiveBackground = `${theme.transparentBlack}`
  vars.basicActiveBoxShadow = `''`
  vars.basicActiveTextColor = `${theme.selectedTextColor}`

  /* Basic Inverted */
  vars.basicInvertedBackground = `transparent`
  vars.basicInvertedFocusBackground = `transparent`
  vars.basicInvertedDownBackground = `${theme.transparentWhite}`
  vars.basicInvertedActiveBackground = `${theme.transparentWhite}`

  vars.basicInvertedBoxShadow = `0px 0px 0px ${vars.invertedBorderSize} rgba(255, 255, 255, 0.5) inset`
  vars.basicInvertedHoverBoxShadow = `0px 0px 0px ${vars.invertedBorderSize} rgba(255, 255, 255, 1) inset`
  vars.basicInvertedFocusBoxShadow = `0px 0px 0px ${vars.invertedBorderSize} rgba(255, 255, 255, 1) inset`
  vars.basicInvertedDownBoxShadow = `0px 0px 0px ${vars.invertedBorderSize} rgba(255, 255, 255, 0.9) inset`
  vars.basicInvertedActiveBoxShadow = `0px 0px 0px ${vars.invertedBorderSize} rgba(255, 255, 255, 0.7) inset`

  vars.basicInvertedColor = `${theme.darkWhite}`
  vars.basicInvertedHoverColor = `${theme.darkWhiteHover}`
  vars.basicInvertedDownColor = `${theme.darkWhiteActive}`
  vars.basicInvertedActiveColor = `${vars.invertedTextColor}`


  /* Basic Group */
  vars.basicGroupBorder = `${vars.basicBorderSize} solid ${theme.borderColor}`
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
  vars.attachedBoxShadow = `0px 0px 0px 1px ${theme.borderColor}`
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
