module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Sticky
  *******************************/

  vars.transitionDuration = `${siteVars.defaultDuration}`
  vars.transition = `none`
  vars.zIndex = `800`
  return vars
}
