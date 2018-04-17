module.exports = (siteVars) => {
  const vars = {}

  /*******************************
            Transition
  *******************************/

  vars.transitionDefaultEasing = `${siteVars.defaultEasing}`
  vars.transitionDefaultFill = `both`
  vars.transitionDefaultDuration = `300ms`

  vars.use3DAcceleration = `translateZ(0)`
  vars.backfaceVisibility = `hidden`
  return vars
}
