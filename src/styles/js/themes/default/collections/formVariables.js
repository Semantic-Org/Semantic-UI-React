module.exports = (siteVars) => {
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
  vars.labelDistance = `${siteVars.absolute4px}`
  vars.labelMargin = `0em 0em ${vars.labelDistance} 0em`
  vars.labelFontSize = `${siteVars.relativeSmall}`
  vars.labelFontWeight = `${siteVars.bold}`
  vars.labelTextTransform = `none`
  vars.labelColor = `${siteVars.textColor}`

  /* Input */
  vars.inputFont = `${siteVars.pageFont}`
  vars.inputWidth = `100%`
  vars.inputFontSize = `1em`
  vars.inputPadding = `(${siteVars.inputVerticalPadding} + ((1em - ${siteVars.inputLineHeight}) / 2)) ${siteVars.inputHorizontalPadding}`
  vars.inputBorder = `1px solid ${siteVars.borderColor}`
  vars.inputBorderRadius = `${siteVars.absoluteBorderRadius}`
  vars.inputColor = `${siteVars.textColor}`
  vars.inputTransition = `color ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    border-color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.inputBoxShadow = `0em 0em 0em 0em transparent inset`

  /* Select */
  vars.selectBackground = `${siteVars.white}`
  vars.selectBorderRadius = `${vars.inputBorderRadius}`
  vars.selectBorder = `${vars.inputBorder}`
  vars.selectPadding = `0.62em ${siteVars.inputHorizontalPadding}`
  vars.selectBoxShadow = `${vars.inputBoxShadow}`
  vars.selectTransition = `${vars.inputTransition}`
  vars.selectColor = `${vars.inputColor}`

  /* Text Area */
  vars.textAreaPadding = `${siteVars.inputVerticalPadding} ${siteVars.inputHorizontalPadding}`
  vars.textAreaHeight = `12em`
  vars.textAreaResize = `vertical`
  vars.textAreaLineHeight = `1.2857`
  vars.textAreaMinHeight = `8em`
  vars.textAreaMaxHeight = `24em`
  vars.textAreaBackground = `${siteVars.inputBackground}`
  vars.textAreaBorder = `${vars.inputBorder}`
  vars.textAreaFontSize = `${vars.inputFontSize}`
  vars.textAreaTransition = `${vars.inputTransition}`

  /* Checkbox */
  vars.checkboxVerticalAlign = `top`
  vars.checkboxLabelFontSize = `1em`
  vars.checkboxLabelTextTransform = `${vars.labelTextTransform}`

  /* Inline Validation Prompt */
  vars.promptBackground = `${siteVars.white}`
  vars.promptBorderColor = `${siteVars.formErrorBorder}`
  vars.promptBorder = `1px solid ${vars.promptBorderColor}`
  vars.promptTextColor = `${siteVars.formErrorColor}`
  vars.inlinePromptMargin = `-0.25em 0em -0.5em 0.5em`
  vars.inlinePromptBorderWidth = `1px`

  /*-------------------
          States
  --------------------*/

  /* Focus */
  vars.inputFocusPointerSize = `0px`

  /* Input Focus */
  vars.inputFocusBackground = `${siteVars.inputBackground}`
  vars.inputFocusBorderColor = `${siteVars.focusedFormBorderColor}`
  vars.inputFocusColor = `${siteVars.selectedTextColor}`
  vars.inputFocusBoxShadow = `${vars.inputFocusPointerSize} 0em 0em 0em ${siteVars.selectedBorderColor} inset`
  vars.inputFocusBorderRadius = `${vars.inputBorderRadius}`

  /* Text Area Focus */
  vars.textAreaFocusBackground = `${vars.inputFocusBackground}`
  vars.textAreaFocusBorderColor = `${vars.inputFocusBorderColor}`
  vars.textAreaFocusColor = `${vars.inputFocusColor}`
  vars.textAreaFocusBoxShadow = `${vars.inputFocusBoxShadow}`
  vars.textAreaFocusBorderRadius = `${vars.inputFocusBorderRadius}`

  /* Disabled */
  vars.disabledLabelOpacity = `${siteVars.disabledOpacity}`

  /* Errored Input */
  vars.formErrorColor = `${siteVars.negativeTextColor}`
  vars.formErrorBorder = `${siteVars.negativeBorderColor}`
  vars.formErrorBackground = `${siteVars.negativeBackgroundColor}`

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
  vars.dropdownErrorLabelColor = `${siteVars.errorTextColor}`

  /* Focused Error */
  vars.inputErrorFocusBackground = `${siteVars.negativeBackgroundColor}`
  vars.inputErrorFocusColor = `${siteVars.negativeTextColor}`
  vars.inputErrorFocusBorder = `${siteVars.negativeBorderColor}`
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
  vars.requiredColor = `${siteVars.negativeColor}`
  vars.requiredVerticalOffset = `-0.2em`
  vars.requiredDistance = `0.2em`
  vars.requiredMargin = `${vars.requiredVerticalOffset} 0em 0em ${vars.requiredDistance}`

  /* Inverted */
  vars.invertedInputBackground = `${siteVars.inputBackground}`
  vars.invertedInputBorderColor = `${siteVars.whiteBorderColor}`
  vars.invertedInputBoxShadow = `${vars.inputBoxShadow}`
  vars.invertedInputColor = `${vars.inputColor}`
  vars.invertedLabelColor = `${siteVars.invertedTextColor}`
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
  vars.inlineInputSize = `${siteVars.relativeMedium}`

  vars.inlineLabelDistance = `${siteVars.relativeTiny}`
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
