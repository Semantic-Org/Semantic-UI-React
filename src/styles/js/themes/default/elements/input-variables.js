module.exports = (theme) => {
  const vars = {}

  /*******************************
              Input
  *******************************/

  /*-------------------
        Element
  --------------------*/

  vars.inputFont = `${theme.pageFont}`
  vars.verticalPadding = `${theme.inputVerticalPadding}`
  vars.horizontalPadding = `${theme.inputHorizontalPadding}`

  vars.lineHeight = `${theme.inputLineHeight}`
  vars.lineHeightOffset = `((${vars.lineHeight} - 1em) / 2)`

  vars.padding = `(${vars.verticalPadding} - ${vars.lineHeightOffset}) ${vars.horizontalPadding}`

  vars.textAlign = `left`
  vars.background = `${theme.inputBackground}`
  vars.borderWidth = `1px`
  vars.border = `${vars.borderWidth} solid ${theme.borderColor}`
  vars.boxShadow = `none`

  vars.borderRadius = `${theme.defaultBorderRadius}`
  vars.transition = `box-shadow ${theme.defaultDuration} ${theme.defaultEasing},
    border-color ${theme.defaultDuration} ${theme.defaultEasing}`

  /*-------------------
          Types
  --------------------*/

  /* Icon Input */
  vars.iconWidth = `(${vars.verticalPadding} * 2) + ${theme.glyphWidth}`
  vars.iconOpacity = `0.5`
  vars.iconFocusOpacity = `1`
  vars.iconOffset = `-0.5em`

  vars.iconDistance = `0em`
  vars.iconMargin = `${vars.iconWidth} + ${vars.iconDistance}`
  vars.iconTransition = `opacity 0.3s ${theme.defaultEasing}`

  vars.transparentIconWidth = `${theme.glyphWidth}`
  vars.transparentIconMargin = `2em`

  /* Circular Icon Input */
  vars.circularIconVerticalOffset = `0.35em`
  vars.circularIconHorizontalOffset = `0.5em`

  /* Labeled Input */
  vars.labelCornerTop = `${vars.borderWidth}`
  vars.labelCornerRight = `${vars.borderWidth}`
  vars.labelCornerSize = `${theme.relative9px}`
  vars.labelSize = `1em`
  vars.labelVerticalPadding = `(${vars.verticalPadding} - ${vars.lineHeightOffset})`

  vars.labeledMargin = `2.5em`
  vars.labeledIconInputMargin = `3.25em`
  vars.labeledIconMargin = `1.25em`

  /*-------------------
          States
  --------------------*/

  /* Placeholder */
  vars.placeholderColor = `${theme.inputPlaceholderColor}`
  vars.placeholderFocusColor = `${theme.inputPlaceholderFocusColor}`

  /* Down */
  vars.downBorderColor = `rgba(0, 0, 0, 0.3)`
  vars.downBackground = `#FAFAFA`
  vars.downColor = `${theme.textColor}`
  vars.downBoxShadow = `none`

  /* Focus */
  vars.focusBorderColor = `${theme.focusedFormBorderColor}`
  vars.focusBackground = `${vars.background}`
  vars.focusColor = `${theme.hoveredTextColor}`
  vars.focusBoxShadow = `none`

  /* Error */
  vars.errorBackground = `${theme.negativeBackgroundColor}`
  vars.errorColor = `${theme.negativeTextColor}`
  vars.errorBorder = `${theme.negativeBorderColor}`
  vars.errorBoxShadow = `none`

  vars.placeholderErrorColor = `lighten(${vars.errorColor}, 40)`
  vars.placeholderErrorFocusColor = `lighten(${vars.errorColor}, 30)`

  /* Loader */
  vars.invertedLoaderFillColor = `rgba(0, 0, 0, 0.15)`

  /*-------------------
        Variations
  --------------------*/

  /* Inverted */
  vars.transparentInvertedPlaceholderColor = `${theme.invertedUnselectedTextColor}`
  vars.transparentInvertedColor = `${theme.white}`


  return vars
}
