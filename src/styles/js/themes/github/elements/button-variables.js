module.exports = (theme) => {
  const vars = {}

  /*-------------------
     Button Variables
  --------------------*/

  /* Button Variables */
  vars.pageFont = `Helvetica Neue, Helvetica, Arial, sans-serif`
  vars.textTransform = `none`
  vars.fontWeight = `bold`
  vars.textColor = `#333333`

  vars.textShadow = `0px 1px 0px rgba(255, 255, 255, 0.9)`
  vars.invertedTextShadow = `0px -1px 0px rgba(0, 0, 0, 0.25)`

  vars.borderRadius = `${theme.relativeBorderRadius}`

  vars.verticalPadding = `0.75em`
  vars.horizontalPadding = `1.15em`

  vars.backgroundColor = `#FAFAFA`
  vars.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0.1))`
  vars.boxShadow = `0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
    0 0 0 1px rgba(0, 0, 0, 0.13) inset,
    0 1px 3px rgba(0, 0, 0, 0.05)`

  vars.coloredBackgroundImage = `linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2))`
  vars.coloredBoxShadow = `0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
    0 0 0 1px rgba(0, 0, 0, 0.1) inset,
    0 1px 3px rgba(0, 0, 0, 0.05)`

  vars.hoverBackgroundColor = `#E0E0E0`
  vars.hoverBackgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.08))`
  vars.hoverBoxShadow = `${vars.boxShadow}`

  vars.downBackgroundColor = `''`
  vars.downBackgroundImage = `''`
  vars.downBoxShadow = `0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
    0 0 0 1px rgba(0, 0, 0, 0.13) inset,
    0 3px 5px rgba(0, 0, 0, 0.15) inset !important`
  vars.activeBackgroundColor = `#DFDFDF`
  vars.activeBackgroundImage = `none`
  vars.activeBoxShadow = `0 -1px 0 0 rgba(0, 0, 0, 0.05) inset,
    0 0 0 1px rgba(0, 0, 0, 0.13) inset,
    0 3px 5px rgba(0, 0, 0, 0.1) inset !important`

  vars.labeledIconBackgroundColor = `transparent`
  vars.labeledIconBorder = `transparent`
  vars.labeledIconPadding = `(${vars.horizontalPadding} + 2.25em)`

  vars.basicFontWeight = `bold`
  vars.basicTextColor = `${theme.linkColor}`
  vars.basicHoverTextColor = `${theme.linkHoverColor}`

  vars.basicHoverBackground = `#E0E0E0`

  vars.blue = `#3072B3`
  vars.green = `#60B044`
  vars.black = `#5D5D5D`

  vars.primaryColor = `${vars.blue}`
  vars.secondaryColor = `${vars.black}`

  vars.mini = `0.6rem`
  vars.tiny = `0.7rem`
  vars.small = `0.85rem`
  vars.medium = `0.92rem`
  vars.large = `1rem`
  vars.big = `1.125rem`
  vars.huge = `1.25rem`
  vars.massive = `1.3rem`

  return vars
}
