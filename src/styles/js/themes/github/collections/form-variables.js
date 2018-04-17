module.exports = (theme) => {
  const vars = {}

  /*******************************
              Form
  *******************************/

  /*-------------------
         Elements
  --------------------*/

  vars.inputBackground = `#FAFAFA`
  vars.inputBorder = `1px solid #CCCCCC`
  vars.inputBoxShadow = `0 1px 2px rgba(0, 0, 0, 0.075) inset`
  vars.inputBorderRadius = `3px`

  vars.labelFontWeight = `bold`
  vars.labelDistance = `6px`

  /*-------------------
          States
  --------------------*/

  vars.inputFocusBackground = `#FFFFFF`
  vars.inputFocusBoxShadow = `0px 1px 2px rgba(0, 0, 0, 0.075) inset,
    0px 0px 5px rgba(81, 167, 232, 0.5)`
  vars.inputFocusBorderColor = `#51A7E8`
  vars.inputFocusBorderRadius = `${vars.inputBorderRadius}`

  /*-------------------
          Types
  --------------------*/


  /*-------------------
        Variations
  --------------------*/

  /*-------------------
         Groups
  --------------------*/

  return vars
}
