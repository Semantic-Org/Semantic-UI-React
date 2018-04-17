module.exports = (theme) => {
  const vars = {}

  /*******************************
              Progress
  *******************************/

  vars.background = `rgba(0, 0, 0, 0.05)`
  vars.boxShadow = `0px 0px 4px rgba(0, 0, 0, 0.1) inset`
  vars.barBackground = `${theme.subtleGradient} #888888`
  vars.border = `1px solid ${theme.borderColor}`
  vars.padding = `${theme.relative3px}`
  return vars
}
