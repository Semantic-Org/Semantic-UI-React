module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Divider
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.margin = `1rem 0rem`

  vars.highlightWidth = `1px`
  vars.highlightColor = `${siteVars.whiteBorderColor}`

  vars.shadowWidth = `1px`
  vars.shadowColor = `${siteVars.borderColor}`

  /* Text */
  vars.letterSpacing = `0.05em`
  vars.fontWeight = `${siteVars.bold}`
  vars.color = `${siteVars.darkTextColor}`
  vars.textTransform = `uppercase`

  /*-------------------
         Coupling
  --------------------*/

  /* Icon */
  vars.dividerIconSize = `1rem`
  vars.dividerIconMargin = `0rem`


  /*******************************
           Variations
  *******************************/

  /* Horizontal / Vertical */
  vars.horizontalMargin = `''`
  vars.horizontalDividerMargin = `1em`
  vars.horizontalRulerOffset = `~"calc(-50% - "(${vars.horizontalDividerMargin})~")"`

  vars.verticalDividerMargin = `1rem`
  vars.verticalDividerHeight = `~"calc(100% - "(${vars.verticalDividerMargin})~")"`

  /* Inverted */
  vars.invertedTextColor = `${siteVars.white}`
  vars.invertedHighlightColor = `rgba(255, 255, 255, 0.15)`
  vars.invertedShadowColor = `${siteVars.borderColor}`

  /* Section */
  vars.sectionMargin = `2rem`

  /* Sizes */
  vars.medium = `1rem`

  return vars
}
