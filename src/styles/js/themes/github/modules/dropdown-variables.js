module.exports = (theme) => {
  const vars = {}

  /*******************************
      User Variable Overrides
  *******************************/

  vars.transition = `width ${theme.defaultDuration} ${theme.defaultEasing}`

  vars.menuPadding = `0px`

  vars.itemVerticalPadding = `${theme.relative8px}`
  vars.itemHorizontalPadding = `${theme.relative14px}`

  vars.dropdownIconMargin = `0em 0em 0em 2px`

  vars.raisedBoxShadow = `0px 3px 12px rgba(0, 0, 0, 0.15)`

  vars.menuPadding = `${theme.relative5px} 0px`

  vars.menuHeaderMargin = `0em`
  vars.menuHeaderPadding = `${theme.relative6px} ${vars.itemHorizontalPadding}`
  vars.menuHeaderFontSize = `${theme.relative12px}`
  vars.menuHeaderTextTransform = `none`
  vars.menuHeaderFontWeight = `normal`
  vars.menuHeaderColor = `#767676`

  vars.menuDividerMargin = `${theme.relative8px} 0em`

  vars.disabledOpacity = `0.6`

  /* States */
  vars.hoveredItemBackground = `#4078C0`
  vars.hoveredItemColor = `${theme.white}`

  vars.pointingArrowSize = `${theme.relative9px}`

  return vars
}
