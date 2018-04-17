module.exports = (theme) => {
  const vars = {}

  /*******************************
              Button
  *******************************/

  /*-------------------
         Element
  --------------------*/

  /* Shadow */
  vars.shadowDistance = `0em`
  vars.shadowOffset = `(${vars.shadowDistance} / 2)`
  vars.shadowBoxShadow = `0px -${vars.shadowDistance} 0px 0px ${theme.borderColor} inset`
  vars.backgroundColor = `#FAFAFA`
  vars.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.09))`
  vars.boxShadow = `0px 0px 0px 1px ${theme.borderColor} inset,
    ${vars.shadowBoxShadow}`

  /* Padding */
  vars.verticalPadding = `0.8em`
  vars.horizontalPadding = `1.5em`


  /*-------------------
          Group
  --------------------*/

  vars.groupBoxShadow = `none`
  vars.groupButtonBoxShadow = `0px 0px 0px 1px ${theme.borderColor} inset,
    ${vars.shadowBoxShadow}`
  vars.verticalBoxShadow = `0px 0px 0px 1px ${theme.borderColor} inset`
  vars.groupButtonOffset = `0px 0px 0px -1px`
  vars.verticalGroupOffset = `0px 0px -1px 0px`

  /*-------------------
          States
  --------------------*/

  /* Hovered */
  vars.hoverBackgroundColor = `''`
  vars.hoverBackgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.13))`
  vars.hoverBoxShadow = `''`
  vars.hoverColor = `${theme.hoveredTextColor}`
  vars.iconHoverOpacity = `0.85`

  /* Focused */
  vars.focusBackgroundColor = `''`
  vars.focusBackgroundImage = `''`
  vars.focusBoxShadow = `0px 0px 1px rgba(81, 167, 232, 0.8) inset,
    0px 0px 3px 2px rgba(81, 167, 232, 0.8)`
  vars.focusColor = `${theme.hoveredTextColor}`
  vars.iconFocusOpacity = `0.85`

  /* Pressed Down */
  vars.downBackgroundColor = `#F1F1F1`
  vars.downBackgroundImage = `''`
  vars.downBoxShadow = `0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset,
    0px 1px 4px 0px rgba(0, 0, 0, 0.1) inset !important`
  vars.downColor = `${theme.pressedTextColor}`

  /* Active */
  vars.activeBackgroundColor = `#DADADA`
  vars.activeBackgroundImage = `none`
  vars.activeColor = `${theme.selectedTextColor}`
  vars.activeBoxShadow = `0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset,
    0px 1px 4px 0px rgba(0, 0, 0, 0.1) inset !important`

  /* Active + Hovered */
  vars.activeHoverBackgroundColor = `#DADADA`
  vars.activeHoverBackgroundImage = `none`
  vars.activeHoverBoxShadow = `0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset,
    0px 1px 4px 0px rgba(0, 0, 0, 0.1) inset !important`
  vars.activeHoverColor = `${theme.selectedTextColor}`

  /* Loading */
  vars.loadingBackgroundColor = `#FFFFFF`

  /*-------------------
          Types
  --------------------*/

  /* Labeled Icon */
  vars.labeledIconBackgroundColor = `rgba(0, 0, 0, 0.05)`
  vars.labeledIconLeftShadow = `-1px 0px 0px 0px ${theme.labeledIconBorder} inset`
  vars.labeledIconRightShadow = `1px 0px 0px 0px ${theme.labeledIconBorder} inset`

  return vars
}
