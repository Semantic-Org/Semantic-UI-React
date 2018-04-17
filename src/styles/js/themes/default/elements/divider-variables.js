module.exports = (theme) => {
  const vars = {}

  /*******************************
              Divider
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.margin = `1rem 0rem`

  vars.highlightWidth = `1px`
  vars.highlightColor = `${theme.whiteBorderColor}`

  vars.shadowWidth = `1px`
  vars.shadowColor = `${theme.borderColor}`

  /* Text */
  vars.letterSpacing = `0.05em`
  vars.fontWeight = `${theme.bold}`
  vars.color = `${theme.darkTextColor}`
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
  vars.invertedTextColor = `${theme.white}`
  vars.invertedHighlightColor = `rgba(255, 255, 255, 0.15)`
  vars.invertedShadowColor = `${theme.borderColor}`

  /* Section */
  vars.sectionMargin = `2rem`

  /* Sizes */
  vars.medium = `1rem`

  return vars
}
