module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Flag
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.spritePath = `"${siteVars.imagePath}/flags.png"`
  vars.width = `16px`
  vars.height = `11px`
  vars.verticalAlign = `baseline`
  vars.margin = `0.5em`
  return vars
}
