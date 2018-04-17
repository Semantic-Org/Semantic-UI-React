module.exports = (siteVars) => {
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
  vars.borderRadius = `${siteVars.defaultBorderRadius}`
  vars.transition = `background ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.background = `${siteVars.white}`
  vars.color = `${siteVars.textColor}`
  vars.borderWidth = `1px`
  vars.border = `${vars.borderWidth} solid ${siteVars.borderColor}`
  vars.boxShadow = `none`
  vars.textAlign = `left`

  /*--------------
       Parts
  ---------------*/

  /* Table Row */
  vars.rowBorder = `1px solid ${siteVars.internalBorderColor}`

  /* Table Cell */
  vars.cellVerticalPadding = `${siteVars.relativeMini}`
  vars.cellHorizontalPadding = `${siteVars.relativeMini}`
  vars.cellVerticalAlign = `inherit`
  vars.cellTextAlign = `inherit`
  vars.cellBorder = `1px solid ${siteVars.internalBorderColor}`

  /* Table Header */
  vars.headerBorder = `1px solid ${siteVars.internalBorderColor}`
  vars.headerDivider = `none`
  vars.headerBackground = `${siteVars.offWhite}`
  vars.headerAlign = `inherit`
  vars.headerVerticalAlign = `inherit`
  vars.headerColor = `${siteVars.textColor}`
  vars.headerVerticalPadding = `${siteVars.relativeSmall}`
  vars.headerHorizontalPadding = `${vars.cellHorizontalPadding}`
  vars.headerFontStyle = `none`
  vars.headerFontWeight = `${siteVars.bold}`
  vars.headerTextTransform = `none`
  vars.headerBoxShadow = `none`

  /* Table Footer */
  vars.footerBoxShadow = `none`
  vars.footerBorder = `1px solid ${siteVars.borderColor}`
  vars.footerDivider = `none`
  vars.footerBackground = `${siteVars.offWhite}`
  vars.footerAlign = `inherit`
  vars.footerVerticalAlign = `middle`
  vars.footerColor = `${siteVars.textColor}`
  vars.footerVerticalPadding = `${vars.cellVerticalPadding}`
  vars.footerHorizontalPadding = `${vars.cellHorizontalPadding}`
  vars.footerFontStyle = `${siteVars.normal}`
  vars.footerFontWeight = `${siteVars.normal}`
  vars.footerTextTransform = `none`

  /* Responsive Size */
  vars.responsiveHeaderDisplay = `block`
  vars.responsiveFooterDisplay = `block`
  vars.responsiveRowVerticalPadding = `1em`
  vars.responsiveRowBoxShadow = `0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important`
  vars.responsiveCellVerticalPadding = `0.25em`
  vars.responsiveCellHorizontalPadding = `0.75em`
  vars.responsiveCellBoxShadow = `none !important`
  vars.responsiveCellHeaderFontWeight = `${siteVars.bold}`

  /*-------------------
         Types
  --------------------*/

  /* Definition */
  vars.definitionPageBackground = `${siteVars.white}`

  vars.definitionHeaderBackground = `transparent`
  vars.definitionHeaderColor = `${siteVars.unselectedTextColor}`
  vars.definitionHeaderFontWeight = `${siteVars.normal}`

  vars.definitionFooterBackground = `${vars.definitionHeaderBackground}`
  vars.definitionFooterColor = `${vars.definitionHeaderColor}`
  vars.definitionFooterFontWeight = `${vars.definitionHeaderFontWeight}`

  vars.definitionColumnBackground = `${siteVars.subtleTransparentBlack}`
  vars.definitionColumnFontWeight = `${siteVars.bold}`
  vars.definitionColumnColor = `${siteVars.selectedTextColor}`
  vars.definitionColumnFontSize = `${siteVars.relativeMedium}`
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
  vars.positiveColor = `${siteVars.positiveTextColor}`
  vars.positiveBoxShadow = `${vars.stateMarkerWidth} 0px 0px ${siteVars.positiveBorderColor} inset`
  vars.positiveBackgroundHover = `darken(${siteVars.positiveBackgroundColor}, 3)`
  vars.positiveColorHover = `darken(${vars.positiveColor}, 3)`

  /* Negative */
  vars.negativeColor = `${siteVars.negativeTextColor}`
  vars.negativeBoxShadow = `${vars.stateMarkerWidth} 0px 0px ${siteVars.negativeBorderColor} inset`
  vars.negativeBackgroundHover = `darken(${siteVars.negativeBackgroundColor}, 3)`
  vars.negativeColorHover = `darken(${vars.negativeColor}, 3)`

  /* Error */
  vars.errorColor = `${siteVars.errorTextColor}`
  vars.errorBoxShadow = `${vars.stateMarkerWidth} 0px 0px ${siteVars.errorBorderColor} inset`
  vars.errorBackgroundHover = `darken(${siteVars.errorBackgroundColor}, 3)`
  vars.errorColorHover = `darken(${vars.errorColor}, 3)`

  /* Warning */
  vars.warningColor = `${siteVars.warningTextColor}`
  vars.warningBoxShadow = `${vars.stateMarkerWidth} 0px 0px ${siteVars.warningBorderColor} inset`
  vars.warningBackgroundHover = `darken(${siteVars.warningBackgroundColor}, 3)`
  vars.warningColorHover = `darken(${vars.warningColor}, 3)`

  /* Active */
  vars.activeColor = `${siteVars.textColor}`
  vars.activeBackgroundColor = `#E0E0E0`
  vars.activeBoxShadow = `${vars.stateMarkerWidth} 0px 0px ${vars.activeColor} inset`

  vars.activeBackgroundHover = `#EFEFEF`
  vars.activeColorHover = `${siteVars.selectedTextColor}`

  /*--------------
       Types
  ---------------*/

  /* Attached */
  vars.attachedTopOffset = `0px`
  vars.attachedBottomOffset = `0px`
  vars.attachedHorizontalOffset = `-${vars.borderWidth}`
  vars.attachedWidth = `~"calc(100% + "-${vars.attachedHorizontalOffset} * 2~")"`
  vars.attachedBoxShadow = `none`
  vars.attachedBorder = `${vars.borderWidth} solid ${siteVars.solidBorderColor}`
  vars.attachedBottomBoxShadow = `${vars.boxShadow},
    ${vars.attachedBoxShadow}`

  /* Striped */
  vars.stripedBackground = `rgba(0, 0, 50, 0.02)`
  vars.invertedStripedBackground = `rgba(255, 255, 255, 0.05)`

  /* Selectable */
  vars.selectableBackground = `${siteVars.transparentBlack}`
  vars.selectableTextColor = `${siteVars.selectedTextColor}`
  vars.selectableInvertedBackground = `${siteVars.transparentWhite}`
  vars.selectableInvertedTextColor = `${siteVars.invertedSelectedTextColor}`

  /* Sortable */
  vars.sortableBackground = `''`
  vars.sortableColor = `${siteVars.textColor}`

  vars.sortableBorder = `1px solid ${siteVars.borderColor}`
  vars.sortableIconWidth = `auto`
  vars.sortableIconDistance = `0.5em`
  vars.sortableIconOpacity = `0.8`
  vars.sortableIconFont = `'Icons'`
  vars.sortableIconAscending = `'\f0d8'`
  vars.sortableIconDescending = `'\f0d7'`
  vars.sortableDisabledColor = `${siteVars.disabledTextColor}`

  vars.sortableHoverBackground = `${siteVars.transparentBlack}`
  vars.sortableHoverColor = `${siteVars.hoveredTextColor}`

  vars.sortableActiveBackground = `${siteVars.transparentBlack}`
  vars.sortableActiveColor = `${siteVars.selectedTextColor}`

  vars.sortableActiveHoverBackground = `${siteVars.transparentBlack}`
  vars.sortableActiveHoverColor = `${siteVars.selectedTextColor}`

  vars.sortableInvertedBorderColor = `transparent`
  vars.sortableInvertedHoverBackground = `${siteVars.transparentWhite} ${siteVars.subtleGradient}`
  vars.sortableInvertedHoverColor = `${siteVars.invertedHoveredTextColor}`
  vars.sortableInvertedActiveBackground = `${siteVars.strongTransparentWhite} ${siteVars.subtleGradient}`
  vars.sortableInvertedActiveColor = `${siteVars.invertedSelectedTextColor}`

  /* Colors */
  vars.coloredBorderSize = `0.2em`
  vars.coloredBorderRadius = `0em 0em ${vars.borderRadius} ${vars.borderRadius}`

  /* Inverted */
  vars.invertedBackground = `#333333`
  vars.invertedBorder = `none`
  vars.invertedCellBorderColor = `${siteVars.whiteBorderColor}`
  vars.invertedCellColor = `${siteVars.invertedTextColor}`

  vars.invertedHeaderBackground = `${siteVars.veryStrongTransparentBlack}`
  vars.invertedHeaderColor = `${siteVars.invertedTextColor}`
  vars.invertedHeaderBorderColor = `${vars.invertedCellBorderColor}`

  vars.invertedDefinitionColumnBackground = `${siteVars.subtleTransparentWhite}`
  vars.invertedDefinitionColumnColor = `${siteVars.invertedSelectedTextColor}`
  vars.invertedDefinitionColumnFontWeight = `${siteVars.bold}`

  /* Basic */
  vars.basicTableBackground = `transparent`
  vars.basicTableBorder = `${vars.borderWidth} solid ${siteVars.borderColor}`
  vars.basicBoxShadow = `none`

  vars.basicTableHeaderBackground = `transparent`
  vars.basicTableCellBackground = `transparent`
  vars.basicTableHeaderDivider = `none`
  vars.basicTableCellBorder = `1px solid rgba(0, 0, 0, 0.1)`
  vars.basicTableCellPadding = `''`
  vars.basicTableStripedBackground = `${siteVars.transparentBlack}`

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
