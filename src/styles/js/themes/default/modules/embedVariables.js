module.exports = (siteVars) => {
  const vars = {}

  /*******************************
               Video
  *******************************/

  /*-------------------
         Element
  --------------------*/

  /* Simple */
  vars.background = `${siteVars.lightGrey}`
  vars.transitionDuration = `0.5s`
  vars.transitionEasing = `${siteVars.defaultEasing}`

  /* Placeholder */
  vars.placeholderUnderlay = `${vars.background}`

  /* Placeholder Overlayed Background */
  vars.placeholderBackground = `radial-gradient(transparent 45%, rgba(0, 0, 0, 0.3))`
  vars.placeholderBackgroundOpacity = `0.5`
  vars.placeholderBackgroundTransition = `opacity ${vars.transitionDuration} ${vars.transitionEasing}`

  /* Icon */
  vars.iconBackground = `${siteVars.veryStrongTransparentBlack}`
  vars.iconSize = `6rem`
  vars.iconTransition = `opacity ${vars.transitionDuration} ${vars.transitionEasing},
    color ${vars.transitionDuration} ${vars.transitionEasing}`
  vars.iconColor = `${siteVars.white}`
  vars.iconShadow = `0px 2px 10px rgba(34, 36, 38, 0.2)`
  vars.iconZIndex = `10`

  /*-------------------
         States
  --------------------*/

  /* Hover */
  vars.hoverPlaceholderBackground = `${vars.placeholderBackground}`
  vars.hoverPlaceholderBackgroundOpacity = `1`
  vars.hoverIconColor = `${siteVars.white}`


  /*-------------------
        Variations
  --------------------*/

  /* Aspect Ratios */
  vars.squareRatio = `(1/1) * 100%`
  vars.widescreenRatio = `(9/16) * 100%`
  vars.ultraWidescreenRatio = `(9/21) * 100%`
  vars.standardRatio = `(3/4) * 100%`
  return vars
}
