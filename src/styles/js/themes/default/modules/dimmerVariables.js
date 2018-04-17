module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Dimmer
  *******************************/

  vars.dimmablePosition = `relative`
  vars.dimmerPosition = `absolute`

  vars.backgroundColor = `rgba(0, 0, 0 , 0.85)`
  vars.lineHeight = `1`
  vars.perspective = `2000px`
  vars.padding = `1em`

  vars.duration = `0.5s`
  vars.transition = `background-color ${vars.duration} linear`
  vars.zIndex = `1000`
  vars.textAlign = `center`
  vars.verticalAlign = `middle`
  vars.textColor = `${siteVars.white}`
  vars.overflow = `hidden`

  vars.blurredStartFilter = `~"blur(0px) grayscale(0)"`
  vars.blurredEndFilter = `~"blur(5px) grayscale(0.7)"`
  vars.blurredTransition = `800ms filter ${siteVars.defaultEasing}`

  vars.blurredBackgroundColor = `rgba(0, 0, 0, 0.6)`
  vars.blurredInvertedBackgroundColor = `rgba(255, 255, 255, 0.6)`

  /* Hidden (Default) */
  vars.hiddenOpacity = `0`

  /* Visible */
  vars.visibleOpacity = `1`

  /*-------------------
          Types
  --------------------*/

  /* Page Dimmer*/
  vars.transformStyle = `''`
  vars.pageDimmerPosition = `fixed`


  /*-------------------
        Variations
  --------------------*/

  /* Inverted */
  vars.invertedBackgroundColor = `rgba(255, 255, 255, 0.85)`
  vars.invertedTextColor = `${vars.textColor}`

  /* Simple */
  vars.simpleZIndex = `1`
  vars.simpleStartBackgroundColor = `rgba(0, 0, 0, 0)`
  vars.simpleEndBackgroundColor = `${vars.backgroundColor}`
  vars.simpleInvertedStartBackgroundColor = `rgba(255, 255, 255, 0)`
  vars.simpleInvertedEndBackgroundColor = `${vars.invertedBackgroundColor}`

  return vars
}
