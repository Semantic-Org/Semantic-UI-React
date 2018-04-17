module.exports = (theme) => {
  const vars = {}

  /*******************************
               Feed
  *******************************/

  /*-------------------
        Elements
  --------------------*/

  vars.eventMargin = `0em`
  vars.eventDivider = `none`
  vars.eventPadding = `0em`

  /* Event Label */
  vars.labelWidth = `3em`
  vars.labelHeight = `auto`

  vars.labeledContentMargin = `0.75em 0em 2em 0.75em`

  /* Icon */
  vars.iconLabelBackground = `${theme.primaryColor}`
  vars.iconLabelBorderRadius = `${theme.circularRadius}`
  vars.iconLabelColor = `${theme.white}`

  /* Metadata Group */
  vars.metadataDisplay = `inline-block`
  vars.metadataMargin = `1em 0em 0em`
  vars.metadataBackground = `${theme.white} ${theme.subtleGradient}`
  vars.metadataBorder = `1px solid ${theme.solidBorderColor}`
  vars.metadataBorderRadius = `0.25em`
  vars.metadataBoxShadow = `0 1px 1px rgba(0, 0, 0, 0.05)`
  vars.metadataPadding = `0.5em 1em`
  vars.metadataColor = `rgba(0, 0, 0, 0.6)`

  /*-------------------
        Variations
  --------------------*/

  return vars
}
