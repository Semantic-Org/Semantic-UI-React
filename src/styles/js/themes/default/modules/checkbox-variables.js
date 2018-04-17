module.exports = (theme) => {
  const vars = {}

  /*******************************
              Checkbox
  *******************************/

  vars.checkboxSize = `17px`
  vars.checkboxColor = `${theme.textColor}`
  vars.checkboxLineHeight = `${vars.checkboxSize}`


  /* Label */
  vars.labelDistance = `1.85714em` /* 26px @ 14/em */

  /* Checkbox */
  vars.checkboxBackground = `${theme.white}`
  vars.checkboxBorder = `1px solid ${theme.solidBorderColor}`
  vars.checkboxBorderRadius = `${theme.absolute3px}`
  vars.checkboxTransition = `border ${theme.defaultDuration} ${theme.defaultEasing},
    opacity ${theme.defaultDuration} ${theme.defaultEasing},
    transform ${theme.defaultDuration} ${theme.defaultEasing},
    box-shadow ${theme.defaultDuration} ${theme.defaultEasing}`

  /* Checkmark */
  vars.checkboxCheckFontSize = `14px`
  vars.checkboxCheckTop = `0px`
  vars.checkboxCheckLeft = `0px`
  vars.checkboxCheckSize = `${vars.checkboxSize}`

  /* Label */
  vars.labelFontSize = `${theme.relativeMedium}`
  vars.labelColor = `${theme.textColor}`
  vars.labelTransition = `color ${theme.defaultDuration} ${theme.defaultEasing}`

  /*-------------------
          States
  --------------------*/

  /* Hover */
  vars.checkboxHoverBackground = `${vars.checkboxBackground}`
  vars.checkboxHoverBorderColor = `${theme.selectedBorderColor}`
  vars.labelHoverColor = `${theme.hoveredTextColor}`

  /* Pressed */
  vars.checkboxPressedBackground = `${theme.offWhite}`
  vars.checkboxPressedBorderColor = `${theme.selectedBorderColor}`
  vars.checkboxPressedColor = `${theme.selectedTextColor}`
  vars.labelPressedColor = `${theme.selectedTextColor}`

  /* Focus */
  vars.checkboxFocusBackground = `${theme.white}`
  vars.checkboxFocusBorderColor = `${theme.focusedFormMutedBorderColor}`
  vars.checkboxFocusCheckColor = `${theme.selectedTextColor}`
  vars.labelFocusColor = `${theme.selectedTextColor}`

  /* Active */
  vars.labelActiveColor = `${theme.selectedTextColor}`
  vars.checkboxActiveBackground = `${theme.white}`
  vars.checkboxActiveBorderColor = `${theme.selectedBorderColor}`
  vars.checkboxActiveCheckColor = `${theme.selectedTextColor}`
  vars.checkboxActiveCheckOpacity = `1`

  /* Active Focus */
  vars.checkboxActiveFocusBackground = `${theme.white}`
  vars.checkboxActiveFocusBorderColor = `${vars.checkboxFocusBorderColor}`
  vars.checkboxActiveFocusCheckColor = `${theme.selectedTextColor}`

  /* Indeterminate */
  vars.checkboxIndeterminateBackground = `${vars.checkboxActiveBackground}`
  vars.checkboxIndeterminateBorderColor = `${vars.checkboxActiveBorderColor}`
  vars.checkboxIndeterminateCheckOpacity = `1`
  vars.checkboxIndeterminateCheckColor = `${vars.checkboxActiveCheckColor}`

  /* Disabled */
  vars.disabledCheckboxOpacity = `0.5`
  vars.disabledCheckboxLabelColor = `rgba(0, 0, 0, 1)`

  /*-------------------
          Types
  --------------------*/

  /* Radio */
  /* Uses px to avoid rounding issues with circles */

  vars.radioSize = `15px`
  vars.radioTop = `1px`
  vars.radioLeft = `0px`
  vars.radioLabelDistance = `${vars.labelDistance}`

  vars.bulletTop = `1px`
  vars.bulletLeft = `0px`
  vars.bulletScale = `(7 / 15)` /* 7px as unitless value from radio size */
  vars.bulletColor = `${theme.textColor}`
  vars.bulletRadius = `${theme.circularRadius}`

  vars.radioFocusBackground = `${vars.checkboxFocusBackground}`
  vars.radioFocusBulletColor = `${vars.checkboxFocusCheckColor}`

  vars.radioActiveBackground = `${vars.checkboxActiveBackground}`
  vars.radioActiveBulletColor = `${vars.checkboxActiveCheckColor}`

  vars.radioActiveFocusBackground = `${vars.checkboxActiveFocusBackground}`
  vars.radioActiveFocusBulletColor = `${vars.checkboxActiveFocusCheckColor}`

  /* Slider & Toggle Handle */
  vars.handleBackground = `${theme.white} ${theme.subtleGradient}`
  vars.handleBoxShadow = `${theme.subtleShadow},
    0px 0px 0px 1px ${theme.borderColor} inset`

  /* Slider */
  vars.sliderHandleSize = `1.5rem`
  vars.sliderLineWidth = `3.5rem`
  vars.sliderTransitionDuration = `0.3s`

  vars.sliderHandleOffset = `(1rem - ${vars.sliderHandleSize}) / 2`
  vars.sliderHandleTransition = `left ${vars.sliderTransitionDuration} ${theme.defaultEasing}`

  vars.sliderWidth = `${vars.sliderLineWidth}`
  vars.sliderHeight = `(${vars.sliderHandleSize} + ${vars.sliderHandleOffset})`

  vars.sliderLineHeight = `${theme.absolute3px}`
  vars.sliderLineVerticalOffset = `0.4rem`
  vars.sliderLineColor = `${theme.transparentBlack}`
  vars.sliderLineRadius = `${theme.circularRadius}`
  vars.sliderLineTransition = `background ${vars.sliderTransitionDuration} ${theme.defaultEasing}`

  vars.sliderTravelDistance = `${vars.sliderLineWidth} - ${vars.sliderHandleSize}`

  vars.sliderLabelDistance = `${vars.sliderLineWidth} + 1rem`
  vars.sliderOffLabelColor = `${theme.unselectedTextColor}`

  vars.sliderLabelLineHeight = `1rem`

  /* Slider States */
  vars.sliderHoverLaneBackground = `${theme.veryStrongTransparentBlack}`
  vars.sliderHoverLabelColor = `${theme.hoveredTextColor}`

  vars.sliderOnLineColor = `${theme.lightBlack}`
  vars.sliderOnLabelColor = `${theme.selectedTextColor}`

  vars.sliderOnFocusLineColor = `${theme.lightBlackFocus}`
  vars.sliderOnFocusLabelColor = `${vars.sliderOnLabelColor}`



  /* Toggle */
  vars.toggleLaneWidth = `3.5rem`
  vars.toggleHandleSize = `1.5rem`
  vars.toggleTransitionDuration = `0.2s`

  vars.toggleWidth = `${vars.toggleLaneWidth}`
  vars.toggleHeight = `${vars.toggleHandleSize}`

  vars.toggleHandleRadius = `${theme.circularRadius}`
  vars.toggleHandleOffset = `0rem`
  vars.toggleHandleTransition = `background ${vars.sliderTransitionDuration} ${theme.defaultEasing},
    left ${vars.sliderTransitionDuration} ${theme.defaultEasing}`

  vars.toggleLaneBackground = `${theme.transparentBlack}`
  vars.toggleLaneHeight = `${vars.toggleHandleSize}`
  vars.toggleLaneBoxShadow = `none`
  vars.toggleLaneVerticalOffset = `0rem`
  vars.toggleOffOffset = `-0.05rem`
  vars.toggleOnOffset = `(${vars.toggleLaneWidth} - ${vars.toggleHandleSize}) + 0.15rem`

  vars.toggleLabelDistance = `${vars.toggleLaneWidth} + 1rem`
  vars.toggleLabelLineHeight = `1.5rem`
  vars.toggleLabelOffset = `0.15em`


  vars.toggleFocusColor = `${theme.veryStrongTransparentBlack}`
  vars.toggleHoverColor = `${vars.toggleFocusColor}`

  vars.toggleOffLabelColor = `${vars.checkboxColor}`
  vars.toggleOffHandleBoxShadow = `${vars.handleBoxShadow}`

  vars.toggleOnLabelColor = `${theme.selectedTextColor}`
  vars.toggleOnLaneColor = `${theme.primaryColor}`

  vars.toggleOnHandleBoxShadow = `${vars.handleBoxShadow}`

  vars.toggleOnFocusLaneColor = `${theme.primaryColorFocus}`
  vars.toggleOnFocusLabelColor = `${vars.toggleOnLabelColor}`



  /*-------------------
        Variations
  --------------------*/

  return vars
}
