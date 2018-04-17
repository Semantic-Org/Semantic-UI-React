module.exports = (theme) => {
  const vars = {}

  /*-------------------
     Button Variables
  --------------------*/

  /* Button Variables */
  vars.pageFont = `'Source Sans Pro', Arial, sans-serif`

  vars.textTransform = `none`
  vars.fontWeight = `${theme.normal}`
  vars.textColor = `#333333`

  vars.verticalPadding = `1.1em`
  vars.horizontalPadding = `2.5em`
  vars.invertedBorderSize = `3px`

  vars.basicBorderRadius = `0.4em`
  vars.basicFontWeight = `bold`
  vars.basicTextTransform = `uppercase`

  vars.blue = `#4A88CB`
  vars.primaryColor = `${vars.blue}`

  vars.borderRadius = `0.25em`

  vars.backgroundColor = `#E6EAED`
  vars.backgroundImage = `none`
  vars.boxShadow = `none`

  vars.hoverBackgroundColor = `#DDDDDD`
  vars.hoverBackgroundImage = `none`
  vars.hoverBoxShadow = `none`

  vars.downBackgroundColor = `#D0D0D0`
  vars.downBackgroundImage = `none`
  vars.downBoxShadow = `none`

  vars.activeBackgroundColor = `#CCCCCC`
  vars.activeBackgroundImage = `none`
  vars.activeBoxShadow = `none`

  vars.verticalBoxShadow = `none`

  vars.loadingBackgroundColor = `#F0F0F0`

  vars.compactVerticalPadding = `(${vars.verticalPadding} * 0.5)`
  vars.compactHorizontalPadding = `(${vars.horizontalPadding} * 0.5)`

  vars.labeledIconBackgroundColor = `transparent`

  vars.mini = `0.7rem`
  vars.tiny = `0.75rem`
  vars.small = `0.8rem`
  vars.medium = `0.92rem`
  vars.large = `1rem`
  vars.big = `1.125rem`
  vars.huge = `1.2rem`
  vars.massive = `1.3rem`

  return vars
}
