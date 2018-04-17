module.exports = (theme) => {
  const vars = {}

  /*-------------------
     Form Variables
  --------------------*/

  vars.labelTextTransform = `uppercase`
  vars.labelFontSize = `0.8em`

  vars.inputPadding = `1em 1.2em`
  vars.inputBorder = `2px solid ${theme.borderColor}`
  return vars
}
