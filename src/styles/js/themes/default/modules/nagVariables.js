module.exports = (siteVars) => {
  const vars = {}

  /*******************************
               Nag
  *******************************/

  /*--------------
     Collection
  ---------------*/

  vars.position = `relative`
  vars.width = `100%`
  vars.zIndex = `999`
  vars.margin = `0em`

  vars.background = `#555555`
  vars.opacity = `0.95`
  vars.minHeight = `0em`
  vars.padding = `0.75em 1em`
  vars.lineHeight = `1em`
  vars.boxShadow = `0px 1px 2px 0px rgba(0, 0, 0, 0.2)`

  vars.fontSize = `1rem`
  vars.textAlign = `center`
  vars.color = `${siteVars.textColor}`

  vars.transition = `0.2s background ease`


  /*--------------
      Elements
  ---------------*/

  /* Title */
  vars.titleColor = `${siteVars.white}`
  vars.titleMargin = `0em 0.5em`

  vars.closeSize = `1em`
  vars.closeMargin = `(-${vars.closeSize} / 2) 0em 0em`
  vars.closeTop = `50%`
  vars.closeRight = `1em`
  vars.closeColor = `${siteVars.white}`
  vars.closeTransition = `opacity 0.2s ease`
  vars.closeOpacity = `0.4`


  /*--------------
        States
  ---------------*/

  /* Hover */
  vars.nagHoverBackground = `${vars.background}`
  vars.nagHoverOpacity = `1`

  vars.closeHoverOpacity = `1`

  /*--------------
     Variations
  ---------------*/

  /* Top / Bottom */
  vars.top = `0em`
  vars.bottom = `0em`
  vars.borderRadius = `${siteVars.defaultBorderRadius}`
  vars.topBorderRadius = `0em 0em ${vars.borderRadius} ${vars.borderRadius}`
  vars.bottomBorderRadius = `${vars.borderRadius} ${vars.borderRadius} 0em 0em`

  /* Inverted */
  vars.invertedBackground = `${siteVars.darkWhite}`

  /*--------------
        Plural
  ---------------*/

  vars.groupedBorderRadius = `0em`


  return vars
}
