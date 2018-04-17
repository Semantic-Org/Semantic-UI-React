module.exports = (theme) => {
  const vars = {}

  /*******************************
               Shape
  *******************************/

  vars.display = `inline-block`

  /* Animating */
  vars.perspective = `2000px`

  vars.duration = `0.6s`
  vars.easing = `ease-in-out`

  vars.hiddenSideOpacity = `0.6`
  vars.animatingZIndex = `100`

  vars.transition = `transform ${vars.duration} ${vars.easing},
    left ${vars.duration} ${vars.easing},
    width ${vars.duration} ${vars.easing},
    height ${vars.duration} ${vars.easing}`
  vars.sideTransition = `opacity ${vars.duration} ${vars.easing}`
  vars.backfaceVisibility = `hidden`

  /* Side */
  vars.sideMargin = `0em`

  /*--------------
        Types
  ---------------*/

  /* Cube */
  vars.cubeSize = `15em`
  vars.cubeBackground = `#E6E6E6`
  vars.cubePadding = `2em`
  vars.cubeTextColor = `${theme.textColor}`
  vars.cubeBoxShadow = `0px 0px 2px rgba(0, 0, 0, 0.3)`

  vars.cubeTextAlign = `center`
  vars.cubeFontSize = `2em`

  return vars
}
