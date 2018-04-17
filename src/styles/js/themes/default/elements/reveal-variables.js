module.exports = (theme) => {
  const vars = {}

  /*******************************
              Reveal
  *******************************/

  vars.transitionDelay = `0.1s`
  vars.transitionDuration = `0.5s`
  vars.transitionEasing = `cubic-bezier(0.175, 0.885, 0.320, 1)`
  vars.transition = `all ${vars.transitionDuration} ${theme.defaultEasing} ${vars.transitionDelay}`

  vars.bottomZIndex = `2`
  vars.topZIndex = `3`
  vars.activeZIndex = `4`
  vars.overlayZIndex = `5`

  /* Types */
  vars.rotateDegrees = `110deg`
  vars.moveTransition = `transform ${vars.transitionDuration} ${vars.transitionEasing} ${vars.transitionDelay}`
  vars.slideTransition = `transform ${vars.transitionDuration} ${theme.defaultEasing} ${vars.transitionDelay}`

  return vars
}
