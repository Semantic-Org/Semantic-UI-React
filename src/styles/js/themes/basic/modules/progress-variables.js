module.exports = (theme) => {
  const vars = {}

  /*******************************
              Progress
  *******************************/

  vars.background = `transparent`
  vars.border = `none`
  vars.padding = `0em`

  vars.progressLeft = `0em`
  vars.progressWidth = `100%`
  vars.progressTextAlign = `center`

  vars.labelFontWeight = `${theme.normal}`
  vars.labelTextAlign = `left`
  vars.labelHeight = `1.5em`

  return vars
}
