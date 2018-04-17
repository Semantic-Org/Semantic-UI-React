module.exports = (siteVars) => {
  const vars = {}

  /*******************************
             Accordion
  *******************************/

  vars.boxShadow = `none`

  /* Title */
  vars.titleFont = `${siteVars.headerFont}`
  vars.titlePadding = `0.5em 0em`
  vars.titleFontSize = `1em`
  vars.titleColor = `${siteVars.textColor}`

  /* Icon */
  vars.iconOpacity = `1`
  vars.iconFontSize = `1em`
  vars.iconFloat = `none`
  vars.iconWidth = `1.25em`
  vars.iconHeight = `1em`
  vars.iconDisplay = `inline-block`
  vars.iconMargin = `0em 0.25rem 0em 0rem`
  vars.iconPadding = `0em`
  vars.iconTransition = `transform ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    opacity ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.iconVerticalAlign = `baseline`
  vars.iconTransform = `none`

  /* Child Accordion */
  vars.childAccordionMargin = `1em 0em 0em`
  vars.childAccordionPadding = `0em`

  /* Content */
  vars.contentMargin = `''`
  vars.contentPadding = `0.5em 0em 1em`

  /*-------------------
         Coupling
  --------------------*/

  vars.menuTitlePadding = `0em`
  vars.menuIconFloat = `right`
  vars.menuIconMargin = `${siteVars.lineHeightOffset} 0em 0em 1em`
  vars.menuIconTransform = `rotate(180deg)`


  /*-------------------
         States
  --------------------*/

  vars.activeIconTransform = `rotate(90deg)`

  /*-------------------
        Variations
  --------------------*/

  /* Styled */
  vars.styledWidth = `600px`
  vars.styledBackground = `${siteVars.white}`
  vars.styledBorderRadius = `${siteVars.defaultBorderRadius}`
  vars.styledBoxShadow = `${siteVars.subtleShadow},
    0px 0px 0px 1px ${siteVars.borderColor}`

  /* Content */
  vars.styledContentMargin = `0em`
  vars.styledContentPadding = `0.5em 1em 1.5em`

  /* Child Content */
  vars.styledChildContentMargin = `0em`
  vars.styledChildContentPadding = `${vars.styledContentPadding}`

  /* Styled Title */
  vars.styledTitleMargin = `0em`
  vars.styledTitlePadding = `0.75em 1em`
  vars.styledTitleFontWeight = `${siteVars.bold}`
  vars.styledTitleColor = `${siteVars.unselectedTextColor}`
  vars.styledTitleTransition = `background-color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.styledTitleBorder = `1px solid ${siteVars.borderColor}`
  vars.styledTitleTransition = `background ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

  /* Styled Title States */
  vars.styledTitleHoverBackground = `transparent`
  vars.styledTitleHoverColor = `${siteVars.textColor}`
  vars.styledActiveTitleBackground = `transparent`
  vars.styledActiveTitleColor = `${siteVars.selectedTextColor}`

  /* Styled Child Title States */
  vars.styledHoverChildTitleBackground = `${vars.styledTitleHoverBackground}`
  vars.styledHoverChildTitleColor = `${vars.styledTitleHoverColor}`
  vars.styledActiveChildTitleBackground = `${vars.styledActiveTitleBackground}`
  vars.styledActiveChildTitleColor = `${vars.styledActiveTitleColor}`

  /* Inverted */
  vars.invertedTitleColor = `${siteVars.invertedTextColor}`


  return vars
}
