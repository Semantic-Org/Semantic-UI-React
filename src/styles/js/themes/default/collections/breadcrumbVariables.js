module.exports = (siteVars) => {
  const vars = {}

  /*******************************
            Breadcrumb
  *******************************/

  /*-------------------
       Breadcrumb
  --------------------*/

  vars.verticalMargin = `0em`
  vars.display = `inline-block`
  vars.verticalAlign = `middle`

  vars.dividerSpacing = `${siteVars.absolute3px}`
  vars.dividerOpacity = `0.7`
  vars.dividerColor = `${siteVars.lightTextColor}`

  vars.dividerSize = `${siteVars.relativeSmall}`
  vars.dividerVerticalAlign = `baseline`

  vars.iconDividerSize = `${siteVars.relativeTiny}`
  vars.iconDividerVerticalAlign = `baseline`

  vars.sectionMargin = `0em`
  vars.sectionPadding = `0em`

  /* Coupling */
  vars.segmentPadding = `${siteVars.relativeMini} ${siteVars.relativeMedium}`

  /*-------------------
         States
  --------------------*/

  vars.activeFontWeight = `${siteVars.bold}`

  return vars
}
