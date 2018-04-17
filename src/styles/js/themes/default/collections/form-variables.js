module.exports = (theme) => {
  const vars = {}

  /*******************************
               Form
  *******************************/

  /*-------------------
         Elements
  --------------------*/

  /* Form */
  vars.gutterWidth = `1em`
  vars.rowDistance = `1em`

  /* Text */
  vars.paragraphMargin = `${vars.rowDistance} 0em`

  /* Field */
  vars.fieldMargin = `0em 0em ${vars.rowDistance}`

  /* Fields */
  vars.fieldsMargin = `0em -(${vars.gutterWidth} / 2) ${vars.rowDistance}`

  /* Form Label */
  vars.labelDistance = `${theme.absolute4px}`
  vars.labelMargin = `0em 0em ${vars.labelDistance} 0em`
  vars.labelFontSize = `${theme.relativeSmall}`
  vars.labelFontWeight = `${theme.bold}`
  vars.labelTextTransform = `none`
  vars.labelColor = `${theme.textColor}`

  /* Input */
  vars.inputFont = `${theme.pageFont}`
  vars.inputWidth = `100%`
  vars.inputFontSize = `1em`
  vars.inputPadding = `(${theme.inputVerticalPadding} + ((1em - ${theme.inputLineHeight}) / 2)) ${theme.inputHorizontalPadding}`
  vars.inputBorder = `1px solid ${theme.borderColor}`
  vars.inputBorderRadius = `${theme.absoluteBorderRadius}`
  vars.inputColor = `${theme.textColor}`
  vars.inputTransition = `color ${theme.defaultDuration} ${theme.defaultEasing},
    border-color ${theme.defaultDuration} ${theme.defaultEasing}`
  vars.inputBoxShadow = `0em 0em 0em 0em transparent inset`

  /* Select */
  vars.selectBackground = `${theme.white}`
  vars.selectBorderRadius = `${vars.inputBorderRadius}`
  vars.selectBorder = `${vars.inputBorder}`
  vars.selectPadding = `0.62em ${theme.inputHorizontalPadding}`
  vars.selectBoxShadow = `${vars.inputBoxShadow}`
  vars.selectTransition = `${vars.inputTransition}`
  vars.selectColor = `${vars.inputColor}`

  /* Text Area */
  vars.textAreaPadding = `${theme.inputVerticalPadding} ${theme.inputHorizontalPadding}`
  vars.textAreaHeight = `12em`
  vars.textAreaResize = `vertical`
  vars.textAreaLineHeight = `1.2857`
  vars.textAreaMinHeight = `8em`
  vars.textAreaMaxHeight = `24em`
  vars.textAreaBackground = `${theme.inputBackground}`
  vars.textAreaBorder = `${vars.inputBorder}`
  vars.textAreaFontSize = `${vars.inputFontSize}`
  vars.textAreaTransition = `${vars.inputTransition}`

  /* Checkbox */
  vars.checkboxVerticalAlign = `top`
  vars.checkboxLabelFontSize = `1em`
  vars.checkboxLabelTextTransform = `${vars.labelTextTransform}`

  /* Inline Validation Prompt */
  vars.promptBackground = `${theme.white}`
  vars.promptBorderColor = `${theme.formErrorBorder}`
  vars.promptBorder = `1px solid ${vars.promptBorderColor}`
  vars.promptTextColor = `${theme.formErrorColor}`
  vars.inlinePromptMargin = `-0.25em 0em -0.5em 0.5em`
  vars.inlinePromptBorderWidth = `1px`

  /*-------------------
          States
  --------------------*/

  /* Focus */
  vars.inputFocusPointerSize = `0px`

  /* Input Focus */
  vars.inputFocusBackground = `${theme.inputBackground}`
  vars.inputFocusBorderColor = `${theme.focusedFormBorderColor}`
  vars.inputFocusColor = `${theme.selectedTextColor}`
  vars.inputFocusBoxShadow = `${vars.inputFocusPointerSize} 0em 0em 0em ${theme.selectedBorderColor} inset`
  vars.inputFocusBorderRadius = `${vars.inputBorderRadius}`

  /* Text Area Focus */
  vars.textAreaFocusBackground = `${vars.inputFocusBackground}`
  vars.textAreaFocusBorderColor = `${vars.inputFocusBorderColor}`
  vars.textAreaFocusColor = `${vars.inputFocusColor}`
  vars.textAreaFocusBoxShadow = `${vars.inputFocusBoxShadow}`
  vars.textAreaFocusBorderRadius = `${vars.inputFocusBorderRadius}`

  /* Disabled */
  vars.disabledLabelOpacity = `${theme.disabledOpacity}`

  /* Errored Input */
  vars.formErrorColor = `${theme.negativeTextColor}`
  vars.formErrorBorder = `${theme.negativeBorderColor}`
  vars.formErrorBackground = `${theme.negativeBackgroundColor}`

  /* AutoFill */
  vars.inputAutoFillBackground = `#FFFFF0`
  vars.inputAutoFillBorder = `#E5DFA1`
  vars.inputAutoFillFocusBackground = `${vars.inputAutoFillBackground}`
  vars.inputAutoFillFocusBorder = `#D5C315`
  vars.inputAutoFillErrorBackground = `#FFFAF0`
  vars.inputAutoFillErrorBorder = `#E0B4B4`


  /* Input Error */
  vars.inputErrorBorderRadius = `''`
  vars.inputErrorBoxShadow = `none`

  /* Dropdown Error */
  vars.dropdownErrorHoverBackground = `#FBE7E7`
  vars.dropdownErrorSelectedBackground = `${vars.dropdownErrorHoverBackground}`
  vars.dropdownErrorActiveBackground = `#FDCFCF`
  vars.dropdownErrorLabelBackground = `#EACBCB`
  vars.dropdownErrorLabelColor = `${theme.errorTextColor}`

  /* Focused Error */
  vars.inputErrorFocusBackground = `${theme.negativeBackgroundColor}`
  vars.inputErrorFocusColor = `${theme.negativeTextColor}`
  vars.inputErrorFocusBorder = `${theme.negativeBorderColor}`
  vars.inputErrorFocusBoxShadow = `none`

  /* Placeholder Error */
  vars.inputErrorPlaceholderColor = `lighten(${vars.formErrorColor}, 40)`
  vars.inputErrorPlaceholderFocusColor = `lighten(${vars.formErrorColor}, 30)`

  /* Loading Dimmer */
  vars.loaderDimmerColor = `rgba(255, 255, 255, 0.8)`
  vars.loaderDimmerZIndex = `100`

  /* Loading Spinner */
  vars.loaderSize = `3em`
  vars.loaderLineZIndex = `101`

  /*-------------------
          Types
  --------------------*/

  /* Required */
  vars.requiredContent = `'*'`
  vars.requiredColor = `${theme.negativeColor}`
  vars.requiredVerticalOffset = `-0.2em`
  vars.requiredDistance = `0.2em`
  vars.requiredMargin = `${vars.requiredVerticalOffset} 0em 0em ${vars.requiredDistance}`

  /* Inverted */
  vars.invertedInputBackground = `${theme.inputBackground}`
  vars.invertedInputBorderColor = `${theme.whiteBorderColor}`
  vars.invertedInputBoxShadow = `${vars.inputBoxShadow}`
  vars.invertedInputColor = `${vars.inputColor}`
  vars.invertedLabelColor = `${theme.invertedTextColor}`
  vars.invertedInputBoxShadow = `none`

  /*-------------------
        Variations
  --------------------*/

  /* Grouped Fields */
  vars.groupedMargin = `${vars.fieldMargin}`
  vars.groupedFieldMargin = `0.5em 0em`

  vars.groupedLabelDistance = `${vars.labelDistance}`
  vars.groupedLabelColor = `${vars.labelColor}`
  vars.groupedLabelMargin = `${vars.labelMargin}`
  vars.groupedLabelFontSize = `${vars.labelFontSize}`
  vars.groupedLabelFontWeight = `${vars.labelFontWeight}`
  vars.groupedLabelTextTransform = `${vars.labelTextTransform}`


  /* Inline */
  vars.inlineInputSize = `${theme.relativeMedium}`

  vars.inlineLabelDistance = `${theme.relativeTiny}`
  vars.inlineLabelColor = `${vars.labelColor}`
  vars.inlineLabelFontSize = `${vars.labelFontSize}`
  vars.inlineLabelFontWeight = `${vars.labelFontWeight}`
  vars.inlineLabelTextTransform = `${vars.labelTextTransform}`

  vars.groupedInlineLabelMargin = `0.035714em 1em 0em 0em`

  /*-------------------
         Groups
  --------------------*/

  vars.inlineFieldsMargin = `0em 1em 0em 0em`

  return vars
}
