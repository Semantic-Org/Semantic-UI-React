module.exports = (theme) => {
  const vars = {}

  /*-------------------
     Accordion Variables
  --------------------*/

  vars.iconMargin = `0em 0.5em 0em 0em`

  vars.styledActiveTitleBackground = `${theme.subtleGradient}`
  vars.styledActiveTitleColor = `${theme.primaryColor}`

  vars.styledActiveChildTitleBackground = `transparent`

  vars.styledTitlePadding = `1.25em`
  vars.styledTitleFontWeight = `bold`
  vars.styledContentPadding = `1.5em 3.25em`
  vars.styledChildContentPadding = `${vars.styledContentPadding}`
  return vars
}
