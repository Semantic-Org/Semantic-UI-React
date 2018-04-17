module.exports = (theme) => {
  const vars = {}

  /*******************************
               Card
  *******************************/

  /*-------------------
           View
  --------------------*/

  vars.width = `250px`
  vars.background = `transparent`
  vars.border = `none`
  vars.boxShadow = `none`

  vars.contentPadding = `1em 0em`

  vars.rowSpacing = `1.5em`
  vars.groupCardMargin = `0em ${theme.horizontalSpacing} ${vars.rowSpacing}`

  vars.extraBackground = `transparent`
  vars.extraDivider = `none`
  vars.extraBoxShadow = `none`
  vars.extraPadding = `0.5em 0em`

  vars.extraLinkColor = `${theme.textColor}`
  vars.extraLinkHoverColor = `${theme.linkHoverColor}`

  vars.headerFontSize = `${theme.relativeLarge}`
  vars.headerLinkColor = `${theme.textColor}`
  vars.headerLinkHoverColor = `${theme.linkHoverColor}`

  vars.imageBorderRadius = `${theme.borderRadius}`
  vars.imageBorder = `1px solid ${theme.borderColor}`

  vars.linkHoverBackground = `transparent`
  vars.linkHoverBoxShadow = `none`
  return vars
}
