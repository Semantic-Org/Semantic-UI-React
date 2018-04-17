module.exports = (theme) => {
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

  vars.dividerSpacing = `${theme.absolute3px}`
  vars.dividerOpacity = `0.7`
  vars.dividerColor = `${theme.lightTextColor}`

  vars.dividerSize = `${theme.relativeSmall}`
  vars.dividerVerticalAlign = `baseline`

  vars.iconDividerSize = `${theme.relativeTiny}`
  vars.iconDividerVerticalAlign = `baseline`

  vars.sectionMargin = `0em`
  vars.sectionPadding = `0em`

  /* Coupling */
  vars.segmentPadding = `${theme.relativeMini} ${theme.relativeMedium}`

  /*-------------------
         States
  --------------------*/

  vars.activeFontWeight = `${theme.bold}`

  return vars
}
