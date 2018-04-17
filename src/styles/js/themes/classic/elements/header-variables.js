module.exports = (theme) => {
  const vars = {}

  /*******************************
              Button
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.headerFont = `'Open Sans', Arial, sans-serif`

  vars.blockBackground = `${theme.offWhite} ${theme.subtleGradient}`
  vars.blockBoxShadow = `${theme.subtleShadow}`
  return vars
}
