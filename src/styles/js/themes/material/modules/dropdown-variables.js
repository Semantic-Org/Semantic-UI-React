module.exports = (theme) => {
  const vars = {}

  /*******************************
               Menu
  *******************************/

  vars.menuBorderRadius = `${theme.borderRadius}`
  vars.menuBorderColor = `#DADADA`
  vars.menuBoxShadow = `0px 2px 4px rgba(0, 0, 0, 0.2)`

  vars.menuPadding = `${theme.relative8px} 0em`
  vars.itemVerticalPadding = `1em`
  vars.itemHorizontalPadding = `1.5em`

  vars.menuHeaderFontSize = `${theme.small}`
  vars.menuHeaderFontWeight = `bold`
  vars.menuHeaderTextTransform = `none`

  vars.selectionBorderEmWidth = `0em`
  vars.selectionItemDivider = `none`

  vars.labelBoxShadow = `none`
  return vars
}
