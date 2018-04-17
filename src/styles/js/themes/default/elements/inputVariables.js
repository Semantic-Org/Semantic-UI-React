module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Input
  *******************************/

  /*-------------------
        Element
  --------------------*/

  vars.inputFont = `${siteVars.pageFont}`
  vars.verticalPadding = `${siteVars.inputVerticalPadding}`
  vars.horizontalPadding = `${siteVars.inputHorizontalPadding}`

  vars.lineHeight = `${siteVars.inputLineHeight}`
  vars.lineHeightOffset = `((${vars.lineHeight} - 1em) / 2)`

  vars.padding = `(${vars.verticalPadding} - ${vars.lineHeightOffset}) ${vars.horizontalPadding}`

  vars.textAlign = `left`
  vars.background = `${siteVars.inputBackground}`
  vars.borderWidth = `1px`
  vars.border = `${vars.borderWidth} solid ${siteVars.borderColor}`
  vars.boxShadow = `none`

  vars.borderRadius = `${siteVars.defaultBorderRadius}`
  vars.transition = `box-shadow ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    border-color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

  /*-------------------
          Types
  --------------------*/

  /* Icon Input */
  vars.iconWidth = `(${vars.verticalPadding} * 2) + ${siteVars.glyphWidth}`
  vars.iconOpacity = `0.5`
  vars.iconFocusOpacity = `1`
  vars.iconOffset = `-0.5em`

  vars.iconDistance = `0em`
  vars.iconMargin = `${vars.iconWidth} + ${vars.iconDistance}`
  vars.iconTransition = `opacity 0.3s ${siteVars.defaultEasing}`

  vars.transparentIconWidth = `${siteVars.glyphWidth}`
  vars.transparentIconMargin = `2em`

  /* Circular Icon Input */
  vars.circularIconVerticalOffset = `0.35em`
  vars.circularIconHorizontalOffset = `0.5em`

  /* Labeled Input */
  vars.labelCornerTop = `${vars.borderWidth}`
  vars.labelCornerRight = `${vars.borderWidth}`
  vars.labelCornerSize = `${siteVars.relative9px}`
  vars.labelSize = `1em`
  vars.labelVerticalPadding = `(${vars.verticalPadding} - ${vars.lineHeightOffset})`

  vars.labeledMargin = `2.5em`
  vars.labeledIconInputMargin = `3.25em`
  vars.labeledIconMargin = `1.25em`

  /*-------------------
          States
  --------------------*/

  /* Placeholder */
  vars.placeholderColor = `${siteVars.inputPlaceholderColor}`
  vars.placeholderFocusColor = `${siteVars.inputPlaceholderFocusColor}`

  /* Down */
  vars.downBorderColor = `rgba(0, 0, 0, 0.3)`
  vars.downBackground = `#FAFAFA`
  vars.downColor = `${siteVars.textColor}`
  vars.downBoxShadow = `none`

  /* Focus */
  vars.focusBorderColor = `${siteVars.focusedFormBorderColor}`
  vars.focusBackground = `${vars.background}`
  vars.focusColor = `${siteVars.hoveredTextColor}`
  vars.focusBoxShadow = `none`

  /* Error */
  vars.errorBackground = `${siteVars.negativeBackgroundColor}`
  vars.errorColor = `${siteVars.negativeTextColor}`
  vars.errorBorder = `${siteVars.negativeBorderColor}`
  vars.errorBoxShadow = `none`

  vars.placeholderErrorColor = `lighten(${vars.errorColor}, 40)`
  vars.placeholderErrorFocusColor = `lighten(${vars.errorColor}, 30)`

  /* Loader */
  vars.invertedLoaderFillColor = `rgba(0, 0, 0, 0.15)`

  /*-------------------
        Variations
  --------------------*/

  /* Inverted */
  vars.transparentInvertedPlaceholderColor = `${siteVars.invertedUnselectedTextColor}`
  vars.transparentInvertedColor = `${siteVars.white}`


  return vars
}
