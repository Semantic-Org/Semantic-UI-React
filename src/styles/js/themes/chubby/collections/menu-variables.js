module.exports = (theme) => {
  const vars = {}

  /*******************************
               Menu
  *******************************/

  vars.background = `${theme.darkWhite}`
  vars.boxShadow = `none`
  vars.dividerSize = `0px`

  vars.verticalBoxShadow = `0px 0px 0px 2px ${theme.borderColor} inset`
  vars.verticalActiveBoxShadow = `none`

  vars.itemVerticalPadding = `1.25em`
  vars.itemHorizontalPadding = `2em`
  vars.itemFontWeight = `bold`

  vars.activeItemBackground = `${theme.primaryColor}`
  vars.activeItemTextColor = `${theme.white}`
  vars.activeHoverItemBackground = `${theme.primaryColorHover}`
  vars.activeHoverItemColor = `${theme.white}`

  vars.secondaryItemPadding = `${theme.relativeSmall} ${theme.relativeMedium}`

  vars.secondaryActiveItemBackground = `${theme.primaryColor}`
  vars.secondaryActiveItemColor = `${theme.white}`
  vars.secondaryActiveHoverItemBackground = `${theme.primaryColorHover}`
  vars.secondaryActiveHoverItemColor = `${theme.white}`

  vars.secondaryPointingBorderWidth = `4px`
  vars.secondaryPointingActiveBorderColor = `${theme.primaryColor}`
  vars.secondaryPointingActiveTextColor = `${theme.primaryColor}`

  vars.arrowSize = `1em`
  vars.arrowActiveColor = `${theme.primaryColor}`
  vars.arrowActiveHoverColor = `${theme.primaryColorHover}`
  vars.arrowBorder = `transparent`

  vars.paginationActiveBackground = `${theme.lightGrey}`

  vars.borderColor = `${theme.darkWhite}`
  vars.tabularBorderWidth = `2px`
  return vars
}
