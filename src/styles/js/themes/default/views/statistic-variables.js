module.exports = (theme) => {
  const vars = {}

  /*******************************
             Statistic
  *******************************/

  /*-------------------
           View
  --------------------*/

  vars.margin = `1em 0em`
  vars.textAlign = `center`
  vars.maxWidth = `auto`

  /* Group */
  vars.horizontalSpacing = `1.5em`
  vars.rowSpacing = `2em`
  vars.groupMargin = `1em -${vars.horizontalSpacing} -${vars.rowSpacing}`

  /* Group Element */
  vars.elementMargin = `0em ${vars.horizontalSpacing} ${vars.rowSpacing}`
  vars.elementMaxWidth = `${vars.maxWidth}`

  /*-------------------
         Content
  --------------------*/

  /* Value */
  vars.valueFont = `${theme.pageFont}`
  vars.valueFontWeight = `${theme.normal}`
  vars.valueLineHeight = `1em`
  vars.valueColor = `${theme.black}`
  vars.valueTextTransform = `uppercase`

  /* Label */
  vars.labelSize = `${theme.relativeMedium}`
  vars.topLabelDistance = `0rem`
  vars.bottomLabelDistance = `0rem`
  vars.labelFont = `${theme.headerFont}`
  vars.labelFontWeight = `${theme.bold}`
  vars.labelColor = `${theme.textColor}`
  vars.labelLineHeight = `${theme.relativeLarge}`
  vars.labelTextTransform = `uppercase`

  /* Text */
  vars.textValueLineHeight = `1em`
  vars.textValueMinHeight = `2em`
  vars.textValueFontWeight = `${theme.bold}`

  /* Label Image */
  vars.imageHeight = `3rem`
  vars.imageVerticalAlign = `baseline`

  /*-------------------
        Types
  --------------------*/

  vars.horizontalGroupElementMargin = `1em 0em`
  vars.horizontalLabelDistance = `0.75em`

  /*-------------------
        Variations
  --------------------*/

  /* Floated */
  vars.leftFloatedMargin = `0em 2em 1em 0em`
  vars.rightFloatedMargin = `0em 0em 1em 2em`

  /* Inverted */
  vars.invertedValueColor = `${theme.white}`
  vars.invertedLabelColor = `${theme.invertedTextColor}`

  /* Item Width */
  vars.itemGroupMargin = `0em 0em -${vars.rowSpacing}`
  vars.itemMargin = `0em 0em ${vars.rowSpacing}`

  /* Size */
  vars.miniTextValueSize = `1rem`
  vars.miniValueSize = `1.5rem`
  vars.miniHorizontalValueSize = `1.5rem`

  vars.tinyTextValueSize = `1rem`
  vars.tinyValueSize = `2rem`
  vars.tinyHorizontalValueSize = `2rem`

  vars.smallTextValueSize = `1rem`
  vars.smallValueSize = `3rem`
  vars.smallHorizontalValueSize = `2rem`

  vars.textValueSize = `2rem`
  vars.valueSize = `4rem`
  vars.horizontalValueSize = `3rem`

  vars.largeTextValueSize = `2.5rem`
  vars.largeValueSize = `5rem`
  vars.largeHorizontalValueSize = `4rem`

  vars.hugeTextValueSize = `2.5rem`
  vars.hugeValueSize = `6rem`
  vars.hugeHorizontalValueSize = `5rem`

  return vars
}
