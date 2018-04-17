module.exports = (theme) => {
  const vars = {}

  /*******************************
               Form
  *******************************/

  /*-------------------
         Elements
  --------------------*/


  /* Text */
  vars.paragraphMargin = `1em 0em`

  /* Field */
  vars.fieldMargin = `0em 0em 1em`

  /* Form Label */
  vars.labelFontSize = `${theme.relative11px}`
  vars.labelTextTransform = `uppercase`

  vars.groupedLabelTextTransform = `none`

  /* Input */
  vars.inputHorizontalPadding = `0.5em`
  vars.inputBackground = `transparent`
  vars.inputBorder = `none`
  vars.inputBorderRadius = `0em`
  vars.inputBoxShadow = `none`
  vars.invertedInputColor = `${theme.invertedTextColor}`

  vars.textAreaPadding = `1em`
  vars.textAreaBackground = `transparent`
  vars.textAreaFocusBackground = `#EEEEEE`
  vars.textAreaBorder = `1px solid #DDDDDD`

  /* Divider */
  vars.dividerMargin = `1em 0em`

  /* Validation Prompt */
  vars.validationMargin = `0em 0em 0em 1em`
  vars.validationArrowOffset = `-0.3em`

  /*-------------------
          States
  --------------------*/

  /* Disabled */

  /* Focus */
  vars.inputFocusPointerSize = `0px`
  vars.inputErrorPointerSize = `0px`

  /* Dropdown Error */
  vars.dropdownErrorHoverBackground = `#FFF2F2`
  vars.dropdownErrorActiveBackground = `#FDCFCF`

  /* Focused Error */
  vars.inputErrorFocusBackground = `${theme.negativeBackgroundColor}`
  vars.inputErrorFocusColor = `${theme.negativeColorHover}`
  vars.inputErrorFocusBorder = `${theme.negativeBorderColor}`
  vars.inputErrorFocusBoxShadow = `${vars.inputErrorPointerSize} 0em 0em 0em ${theme.negativeColorHover} inset`

  /* Placeholder */
  vars.inputPlaceholderColor = `lighten(${theme.inputColor}, 55)`
  vars.inputPlaceholderFocusColor = `lighten(${theme.inputColor}, 35)`
  vars.inputErrorPlaceholderColor = `lighten(${theme.formErrorColor}, 10)`
  vars.inputErrorPlaceholderFocusColor = `lighten(${theme.formErrorColor}, 5)`

  /* Loading */
  vars.formLoaderDimmerColor = `rgba(255, 255, 255, 0.6)`
  vars.formLoaderPath = `"${theme.imagePath}/loader-large.gif"`
  vars.formLoaderPosition = `50% 50%`

  /* (x) Wide Field */
  vars.gutterWidth = `1.5em`

  return vars
}
