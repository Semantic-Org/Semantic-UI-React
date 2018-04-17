module.exports = (theme) => {
  const vars = {}

  /*******************************
              Table
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.boxShadow = `${theme.subtleGradient}`

  vars.headerBackground = `${theme.subtleGradient}`
  vars.headerBoxShadow = `${theme.subtleShadow}`
  vars.footerBoxShadow = `0px -1px 1px 0px rgba(0, 0, 0, 0.05)`
  vars.footerBackground = `rgba(0, 0, 0, 0.05)`

  return vars
}
