module.exports = (theme) => {
  const vars = {}

  /*******************************
               Table
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.verticalMargin = `1em`
  vars.horizontalMargin = `0em`
  vars.margin = `${vars.verticalMargin} ${vars.horizontalMargin}`
  vars.borderCollapse = `separate`
  vars.borderSpacing = `0px`
  vars.borderRadius = `${theme.defaultBorderRadius}`
  vars.transition = `background ${theme.defaultDuration} ${theme.defaultEasing},
    color ${theme.defaultDuration} ${theme.defaultEasing}`
  vars.background = `${theme.white}`
  vars.color = `${theme.textColor}`
  vars.borderWidth = `1px`
  vars.border = `${vars.borderWidth} solid ${theme.borderColor}`
  vars.boxShadow = `none`
  vars.textAlign = `left`

  /*--------------
       Parts
  ---------------*/

  /* Table Row */
  vars.rowBorder = `1px solid ${theme.internalBorderColor}`

  /* Table Cell */
  vars.cellVerticalPadding = `${theme.relativeMini}`
  vars.cellHorizontalPadding = `${theme.relativeMini}`
  vars.cellVerticalAlign = `inherit`
  vars.cellTextAlign = `inherit`
  vars.cellBorder = `1px solid ${theme.internalBorderColor}`

  /* Table Header */
  vars.headerBorder = `1px solid ${theme.internalBorderColor}`
  vars.headerDivider = `none`
  vars.headerBackground = `${theme.offWhite}`
  vars.headerAlign = `inherit`
  vars.headerVerticalAlign = `inherit`
  vars.headerColor = `${theme.textColor}`
  vars.headerVerticalPadding = `${theme.relativeSmall}`
  vars.headerHorizontalPadding = `${vars.cellHorizontalPadding}`
  vars.headerFontStyle = `none`
  vars.headerFontWeight = `${theme.bold}`
  vars.headerTextTransform = `none`
  vars.headerBoxShadow = `none`

  /* Table Footer */
  vars.footerBoxShadow = `none`
  vars.footerBorder = `1px solid ${theme.borderColor}`
  vars.footerDivider = `none`
  vars.footerBackground = `${theme.offWhite}`
  vars.footerAlign = `inherit`
  vars.footerVerticalAlign = `middle`
  vars.footerColor = `${theme.textColor}`
  vars.footerVerticalPadding = `${vars.cellVerticalPadding}`
  vars.footerHorizontalPadding = `${vars.cellHorizontalPadding}`
  vars.footerFontStyle = `${theme.normal}`
  vars.footerFontWeight = `${theme.normal}`
  vars.footerTextTransform = `none`

  /* Responsive Size */
  vars.responsiveHeaderDisplay = `block`
  vars.responsiveFooterDisplay = `block`
  vars.responsiveRowVerticalPadding = `1em`
  vars.responsiveRowBoxShadow = `0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important`
  vars.responsiveCellVerticalPadding = `0.25em`
  vars.responsiveCellHorizontalPadding = `0.75em`
  vars.responsiveCellBoxShadow = `none !important`
  vars.responsiveCellHeaderFontWeight = `${theme.bold}`

  /*-------------------
         Types
  --------------------*/

  /* Definition */
  vars.definitionPageBackground = `${theme.white}`

  vars.definitionHeaderBackground = `transparent`
  vars.definitionHeaderColor = `${theme.unselectedTextColor}`
  vars.definitionHeaderFontWeight = `${theme.normal}`

  vars.definitionFooterBackground = `${vars.definitionHeaderBackground}`
  vars.definitionFooterColor = `${vars.definitionHeaderColor}`
  vars.definitionFooterFontWeight = `${vars.definitionHeaderFontWeight}`

  vars.definitionColumnBackground = `${theme.subtleTransparentBlack}`
  vars.definitionColumnFontWeight = `${theme.bold}`
  vars.definitionColumnColor = `${theme.selectedTextColor}`
  vars.definitionColumnFontSize = `${theme.relativeMedium}`
  vars.definitionColumnTextTransform = `''`
  vars.definitionColumnBoxShadow = `''`
  vars.definitionColumnTextAlign = `''`
  vars.definitionColumnHorizontalPadding = `''`


  /*--------------
      Couplings
  ---------------*/

  vars.iconVerticalAlign = `baseline`

  /*--------------
       States
  ---------------*/

  vars.stateMarkerWidth = `0px`

  /* Positive */
  vars.positiveColor = `${theme.positiveTextColor}`
  vars.positiveBoxShadow = `${vars.stateMarkerWidth} 0px 0px ${theme.positiveBorderColor} inset`
  vars.positiveBackgroundHover = `darken(${theme.positiveBackgroundColor}, 3)`
  vars.positiveColorHover = `darken(${vars.positiveColor}, 3)`

  /* Negative */
  vars.negativeColor = `${theme.negativeTextColor}`
  vars.negativeBoxShadow = `${vars.stateMarkerWidth} 0px 0px ${theme.negativeBorderColor} inset`
  vars.negativeBackgroundHover = `darken(${theme.negativeBackgroundColor}, 3)`
  vars.negativeColorHover = `darken(${vars.negativeColor}, 3)`

  /* Error */
  vars.errorColor = `${theme.errorTextColor}`
  vars.errorBoxShadow = `${vars.stateMarkerWidth} 0px 0px ${theme.errorBorderColor} inset`
  vars.errorBackgroundHover = `darken(${theme.errorBackgroundColor}, 3)`
  vars.errorColorHover = `darken(${vars.errorColor}, 3)`

  /* Warning */
  vars.warningColor = `${theme.warningTextColor}`
  vars.warningBoxShadow = `${vars.stateMarkerWidth} 0px 0px ${theme.warningBorderColor} inset`
  vars.warningBackgroundHover = `darken(${theme.warningBackgroundColor}, 3)`
  vars.warningColorHover = `darken(${vars.warningColor}, 3)`

  /* Active */
  vars.activeColor = `${theme.textColor}`
  vars.activeBackgroundColor = `#E0E0E0`
  vars.activeBoxShadow = `${vars.stateMarkerWidth} 0px 0px ${vars.activeColor} inset`

  vars.activeBackgroundHover = `#EFEFEF`
  vars.activeColorHover = `${theme.selectedTextColor}`

  /*--------------
       Types
  ---------------*/

  /* Attached */
  vars.attachedTopOffset = `0px`
  vars.attachedBottomOffset = `0px`
  vars.attachedHorizontalOffset = `-${vars.borderWidth}`
  vars.attachedWidth = `~"calc(100% + "-${vars.attachedHorizontalOffset} * 2~")"`
  vars.attachedBoxShadow = `none`
  vars.attachedBorder = `${vars.borderWidth} solid ${theme.solidBorderColor}`
  vars.attachedBottomBoxShadow = `${vars.boxShadow},
    ${vars.attachedBoxShadow}`

  /* Striped */
  vars.stripedBackground = `rgba(0, 0, 50, 0.02)`
  vars.invertedStripedBackground = `rgba(255, 255, 255, 0.05)`

  /* Selectable */
  vars.selectableBackground = `${theme.transparentBlack}`
  vars.selectableTextColor = `${theme.selectedTextColor}`
  vars.selectableInvertedBackground = `${theme.transparentWhite}`
  vars.selectableInvertedTextColor = `${theme.invertedSelectedTextColor}`

  /* Sortable */
  vars.sortableBackground = `''`
  vars.sortableColor = `${theme.textColor}`

  vars.sortableBorder = `1px solid ${theme.borderColor}`
  vars.sortableIconWidth = `auto`
  vars.sortableIconDistance = `0.5em`
  vars.sortableIconOpacity = `0.8`
  vars.sortableIconFont = `'Icons'`
  vars.sortableIconAscending = `'\f0d8'`
  vars.sortableIconDescending = `'\f0d7'`
  vars.sortableDisabledColor = `${theme.disabledTextColor}`

  vars.sortableHoverBackground = `${theme.transparentBlack}`
  vars.sortableHoverColor = `${theme.hoveredTextColor}`

  vars.sortableActiveBackground = `${theme.transparentBlack}`
  vars.sortableActiveColor = `${theme.selectedTextColor}`

  vars.sortableActiveHoverBackground = `${theme.transparentBlack}`
  vars.sortableActiveHoverColor = `${theme.selectedTextColor}`

  vars.sortableInvertedBorderColor = `transparent`
  vars.sortableInvertedHoverBackground = `${theme.transparentWhite} ${theme.subtleGradient}`
  vars.sortableInvertedHoverColor = `${theme.invertedHoveredTextColor}`
  vars.sortableInvertedActiveBackground = `${theme.strongTransparentWhite} ${theme.subtleGradient}`
  vars.sortableInvertedActiveColor = `${theme.invertedSelectedTextColor}`

  /* Colors */
  vars.coloredBorderSize = `0.2em`
  vars.coloredBorderRadius = `0em 0em ${vars.borderRadius} ${vars.borderRadius}`

  /* Inverted */
  vars.invertedBackground = `#333333`
  vars.invertedBorder = `none`
  vars.invertedCellBorderColor = `${theme.whiteBorderColor}`
  vars.invertedCellColor = `${theme.invertedTextColor}`

  vars.invertedHeaderBackground = `${theme.veryStrongTransparentBlack}`
  vars.invertedHeaderColor = `${theme.invertedTextColor}`
  vars.invertedHeaderBorderColor = `${vars.invertedCellBorderColor}`

  vars.invertedDefinitionColumnBackground = `${theme.subtleTransparentWhite}`
  vars.invertedDefinitionColumnColor = `${theme.invertedSelectedTextColor}`
  vars.invertedDefinitionColumnFontWeight = `${theme.bold}`

  /* Basic */
  vars.basicTableBackground = `transparent`
  vars.basicTableBorder = `${vars.borderWidth} solid ${theme.borderColor}`
  vars.basicBoxShadow = `none`

  vars.basicTableHeaderBackground = `transparent`
  vars.basicTableCellBackground = `transparent`
  vars.basicTableHeaderDivider = `none`
  vars.basicTableCellBorder = `1px solid rgba(0, 0, 0, 0.1)`
  vars.basicTableCellPadding = `''`
  vars.basicTableStripedBackground = `${theme.transparentBlack}`

  /* Padded */
  vars.paddedVerticalPadding = `1em`
  vars.paddedHorizontalPadding = `1em`
  vars.veryPaddedVerticalPadding = `1.5em`
  vars.veryPaddedHorizontalPadding = `1.5em`

  /* Compact */
  vars.compactVerticalPadding = `0.5em`
  vars.compactHorizontalPadding = `0.7em`
  vars.veryCompactVerticalPadding = `0.4em`
  vars.veryCompactHorizontalPadding = `0.6em`


  /* Sizes */
  vars.small = `0.9em`
  vars.medium = `1em`
  vars.large = `1.1em`

  return vars
}
