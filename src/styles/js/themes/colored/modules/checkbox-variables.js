module.exports = (theme) => {
  const vars = {}

  /* Checkbox */
  vars.checkboxActiveBackground = `${theme.primaryColor}`
  vars.checkboxActiveBorderColor = `${theme.primaryColor}`
  vars.checkboxActiveCheckColor = `${theme.white}`

  vars.checkboxActiveFocusBackground = `${theme.primaryColorFocus}`
  vars.checkboxActiveFocusBorderColor = `${theme.primaryColorFocus}`
  vars.checkboxActiveFocusCheckColor = `${theme.white}`

  vars.checkboxTransition = `none`

  /* Radio */
  vars.radioActiveBackground = `${theme.white}`
  vars.radioActiveBorderColor = `${theme.primaryColor}`
  vars.radioActiveBulletColor = `${theme.primaryColor}`

  vars.radioActiveFocusBackground = `${theme.white}`
  vars.radioActiveFocusBorderColor = `${theme.primaryColorFocus}`
  vars.radioActiveFocusBulletColor = `${theme.primaryColorFocus}`

  /* Slider */
  vars.sliderOnLineColor = `${theme.primaryColor}`
  vars.sliderOnFocusLineColor = `${theme.primaryColorFocus}`

  /* Handle */
  vars.handleBackground = `${theme.white} ${theme.subtleGradient}`
  vars.handleBoxShadow = `0px 0px 0px 1px ${theme.selectedBorderColor} inset`

  return vars
}
