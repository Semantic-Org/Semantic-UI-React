module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Checkbox
  *******************************/

  vars.checkboxSize = `17px`
  vars.checkboxColor = `${siteVars.textColor}`
  vars.checkboxLineHeight = `${vars.checkboxSize}`


  /* Label */
  vars.labelDistance = `1.85714em` /* 26px @ 14/em */

  /* Checkbox */
  vars.checkboxBackground = `${siteVars.white}`
  vars.checkboxBorder = `1px solid ${siteVars.solidBorderColor}`
  vars.checkboxBorderRadius = `${siteVars.absolute3px}`
  vars.checkboxTransition = `border ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    opacity ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    transform ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    box-shadow ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

  /* Checkmark */
  vars.checkboxCheckFontSize = `14px`
  vars.checkboxCheckTop = `0px`
  vars.checkboxCheckLeft = `0px`
  vars.checkboxCheckSize = `${vars.checkboxSize}`

  /* Label */
  vars.labelFontSize = `${siteVars.relativeMedium}`
  vars.labelColor = `${siteVars.textColor}`
  vars.labelTransition = `color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

  /*-------------------
          States
  --------------------*/

  /* Hover */
  vars.checkboxHoverBackground = `${vars.checkboxBackground}`
  vars.checkboxHoverBorderColor = `${siteVars.selectedBorderColor}`
  vars.labelHoverColor = `${siteVars.hoveredTextColor}`

  /* Pressed */
  vars.checkboxPressedBackground = `${siteVars.offWhite}`
  vars.checkboxPressedBorderColor = `${siteVars.selectedBorderColor}`
  vars.checkboxPressedColor = `${siteVars.selectedTextColor}`
  vars.labelPressedColor = `${siteVars.selectedTextColor}`

  /* Focus */
  vars.checkboxFocusBackground = `${siteVars.white}`
  vars.checkboxFocusBorderColor = `${siteVars.focusedFormMutedBorderColor}`
  vars.checkboxFocusCheckColor = `${siteVars.selectedTextColor}`
  vars.labelFocusColor = `${siteVars.selectedTextColor}`

  /* Active */
  vars.labelActiveColor = `${siteVars.selectedTextColor}`
  vars.checkboxActiveBackground = `${siteVars.white}`
  vars.checkboxActiveBorderColor = `${siteVars.selectedBorderColor}`
  vars.checkboxActiveCheckColor = `${siteVars.selectedTextColor}`
  vars.checkboxActiveCheckOpacity = `1`

  /* Active Focus */
  vars.checkboxActiveFocusBackground = `${siteVars.white}`
  vars.checkboxActiveFocusBorderColor = `${vars.checkboxFocusBorderColor}`
  vars.checkboxActiveFocusCheckColor = `${siteVars.selectedTextColor}`

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
  vars.bulletColor = `${siteVars.textColor}`
  vars.bulletRadius = `${siteVars.circularRadius}`

  vars.radioFocusBackground = `${vars.checkboxFocusBackground}`
  vars.radioFocusBulletColor = `${vars.checkboxFocusCheckColor}`

  vars.radioActiveBackground = `${vars.checkboxActiveBackground}`
  vars.radioActiveBulletColor = `${vars.checkboxActiveCheckColor}`

  vars.radioActiveFocusBackground = `${vars.checkboxActiveFocusBackground}`
  vars.radioActiveFocusBulletColor = `${vars.checkboxActiveFocusCheckColor}`

  /* Slider & Toggle Handle */
  vars.handleBackground = `${siteVars.white} ${siteVars.subtleGradient}`
  vars.handleBoxShadow = `${siteVars.subtleShadow},
    0px 0px 0px 1px ${siteVars.borderColor} inset`

  /* Slider */
  vars.sliderHandleSize = `1.5rem`
  vars.sliderLineWidth = `3.5rem`
  vars.sliderTransitionDuration = `0.3s`

  vars.sliderHandleOffset = `(1rem - ${vars.sliderHandleSize}) / 2`
  vars.sliderHandleTransition = `left ${vars.sliderTransitionDuration} ${siteVars.defaultEasing}`

  vars.sliderWidth = `${vars.sliderLineWidth}`
  vars.sliderHeight = `(${vars.sliderHandleSize} + ${vars.sliderHandleOffset})`

  vars.sliderLineHeight = `${siteVars.absolute3px}`
  vars.sliderLineVerticalOffset = `0.4rem`
  vars.sliderLineColor = `${siteVars.transparentBlack}`
  vars.sliderLineRadius = `${siteVars.circularRadius}`
  vars.sliderLineTransition = `background ${vars.sliderTransitionDuration} ${siteVars.defaultEasing}`

  vars.sliderTravelDistance = `${vars.sliderLineWidth} - ${vars.sliderHandleSize}`

  vars.sliderLabelDistance = `${vars.sliderLineWidth} + 1rem`
  vars.sliderOffLabelColor = `${siteVars.unselectedTextColor}`

  vars.sliderLabelLineHeight = `1rem`

  /* Slider States */
  vars.sliderHoverLaneBackground = `${siteVars.veryStrongTransparentBlack}`
  vars.sliderHoverLabelColor = `${siteVars.hoveredTextColor}`

  vars.sliderOnLineColor = `${siteVars.lightBlack}`
  vars.sliderOnLabelColor = `${siteVars.selectedTextColor}`

  vars.sliderOnFocusLineColor = `${siteVars.lightBlackFocus}`
  vars.sliderOnFocusLabelColor = `${vars.sliderOnLabelColor}`



  /* Toggle */
  vars.toggleLaneWidth = `3.5rem`
  vars.toggleHandleSize = `1.5rem`
  vars.toggleTransitionDuration = `0.2s`

  vars.toggleWidth = `${vars.toggleLaneWidth}`
  vars.toggleHeight = `${vars.toggleHandleSize}`

  vars.toggleHandleRadius = `${siteVars.circularRadius}`
  vars.toggleHandleOffset = `0rem`
  vars.toggleHandleTransition = `background ${vars.sliderTransitionDuration} ${siteVars.defaultEasing},
    left ${vars.sliderTransitionDuration} ${siteVars.defaultEasing}`

  vars.toggleLaneBackground = `${siteVars.transparentBlack}`
  vars.toggleLaneHeight = `${vars.toggleHandleSize}`
  vars.toggleLaneBoxShadow = `none`
  vars.toggleLaneVerticalOffset = `0rem`
  vars.toggleOffOffset = `-0.05rem`
  vars.toggleOnOffset = `(${vars.toggleLaneWidth} - ${vars.toggleHandleSize}) + 0.15rem`

  vars.toggleLabelDistance = `${vars.toggleLaneWidth} + 1rem`
  vars.toggleLabelLineHeight = `1.5rem`
  vars.toggleLabelOffset = `0.15em`


  vars.toggleFocusColor = `${siteVars.veryStrongTransparentBlack}`
  vars.toggleHoverColor = `${vars.toggleFocusColor}`

  vars.toggleOffLabelColor = `${vars.checkboxColor}`
  vars.toggleOffHandleBoxShadow = `${vars.handleBoxShadow}`

  vars.toggleOnLabelColor = `${siteVars.selectedTextColor}`
  vars.toggleOnLaneColor = `${siteVars.primaryColor}`

  vars.toggleOnHandleBoxShadow = `${vars.handleBoxShadow}`

  vars.toggleOnFocusLaneColor = `${siteVars.primaryColorFocus}`
  vars.toggleOnFocusLabelColor = `${vars.toggleOnLabelColor}`



  /*-------------------
        Variations
  --------------------*/

  return vars
}
