module.exports = (siteVars) => {
  const vars = {}

  /*******************************
               Menu
  *******************************/

  /*-------------------
        Collection
  --------------------*/

  /* Menu */
  vars.verticalMargin = `${siteVars.medium}`
  vars.horizontalMargin = `0em`
  vars.margin = `${vars.verticalMargin} ${vars.horizontalMargin}`
  vars.background = `#FFFFFF`
  vars.fontFamily = `${siteVars.pageFont}`
  vars.itemBackground = `none`
  vars.fontWeight = `${siteVars.normal}`
  vars.borderWidth = `1px`
  vars.border = `${vars.borderWidth} solid ${siteVars.borderColor}`
  vars.boxShadow = `${siteVars.subtleShadow}`
  vars.borderRadius = `${siteVars.defaultBorderRadius}`
  vars.minHeight = `(${siteVars.itemVerticalPadding} * 2) + 1em`

  /* Menu Item */
  vars.itemVerticalPadding = `${siteVars.relativeSmall}`
  vars.itemHorizontalPadding = `${siteVars.relativeLarge}`
  vars.itemTextTransform = `none`
  vars.itemTransition = `background ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    box-shadow ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.itemFontWeight = `${siteVars.normal}`
  vars.itemTextColor = `${siteVars.textColor}`

  /* Divider */
  vars.dividerSize = `1px`
  vars.dividerBackground = `${siteVars.internalBorderColor}`

  /* Sub Menu */
  vars.subMenuDistance = `0.5em`
  vars.subMenuMargin = `${vars.subMenuDistance} -${vars.itemHorizontalPadding} 0em`
  vars.subMenuFontSize = `${siteVars.relativeTiny}`
  vars.subMenuTextColor = `rgba(0, 0, 0, 0.5)`

  vars.subMenuIndent = `0em`
  vars.subMenuHorizontalPadding = `(${vars.itemHorizontalPadding} / ${siteVars.tinySize}) + ${vars.subMenuIndent}`
  vars.subMenuVerticalPadding = `0.5em`

  /* Text Item */
  vars.textLineHeight = `1.3`

  /*--------------
      Elements
  ---------------*/

  /* Icon */
  vars.iconFloat = `none`
  vars.iconMargin = `0em ${siteVars.relative5px} 0em 0em`
  vars.iconOpacity = `0.9`

  /* Dropdown Icon */
  vars.dropdownIconFloat = `right`
  vars.dropdownIconDistance = `1em`

  /* Header */
  vars.headerBackground = `''`
  vars.headerWeight = `${siteVars.bold}`
  vars.headerTextTransform = `${siteVars.normal}`

  /* Vertical Icon */
  vars.verticalIconFloat = `right`
  vars.verticalIconMargin = `0em 0em 0em 0.5em`

  /* Vertical Header */
  vars.verticalHeaderMargin = `0em 0em 0.5em`
  vars.verticalHeaderFontSize = `${siteVars.relativeMedium}`
  vars.verticalHeaderFontWeight = `${siteVars.bold}`

  /* Pointing Arrow */
  vars.arrowSize = `${siteVars.relative8px}`
  vars.arrowBorderWidth = `1px`
  vars.arrowBorder = `${vars.arrowBorderWidth} solid ${siteVars.solidBorderColor}`
  vars.arrowTransition = `background ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.arrowZIndex = `2`

  vars.arrowHoverColor = `#F2F2F2`
  vars.arrowActiveColor = `${vars.arrowHoverColor}`
  vars.arrowActiveHoverColor = `${vars.arrowActiveColor}`

  vars.arrowVerticalHoverColor = `${vars.arrowHoverColor}`
  vars.arrowVerticalActiveColor = `${vars.arrowActiveColor}`
  vars.arrowVerticalSubMenuColor = `${siteVars.white}`

  /*--------------
      Couplings
  ---------------*/

  /* Button */
  vars.buttonSize = `${siteVars.relativeMedium}`
  vars.buttonOffset = `0em`
  vars.buttonMargin = `-0.5em 0em`
  vars.buttonVerticalPadding = `${siteVars.relativeMini}`

  /* Input */
  vars.inputSize = `${siteVars.relativeMedium}`
  vars.inputVerticalMargin = `-0.5em`
  vars.inputOffset = `0em`
  vars.inputVerticalPadding = `${siteVars.relative8px}`

  /* Image */
  vars.imageMargin = `-0.3em 0em`
  vars.imageWidth = `2.5em`
  vars.verticalImageWidth = `auto`

  /* Label */
  vars.labelOffset = `-0.15em`
  vars.labelBackground = `#999999`
  vars.labelTextColor = `${siteVars.white}`

  vars.labelTextMargin = `1em`
  vars.labelVerticalPadding = `0.3em`
  vars.labelHorizontalPadding = `${siteVars.relativeMini}`

  vars.labelAndIconFloat = `none`
  vars.labelAndIconMargin = `0em 0.5em 0em 0em`

  /* Dropdown in Menu */
  vars.dropdownMenuBoxShadow = `0px 1px 3px 0px rgba(0, 0, 0, 0.08)`

  vars.dropdownBackground = `#FFFFFF`
  vars.dropdownMenuDistance = `0em`
  vars.dropdownMenuBorderRadius = `${vars.borderRadius}`

  vars.dropdownItemFontSize = `${siteVars.relativeMedium}`
  vars.dropdownItemPadding = `${siteVars.relativeMini} ${siteVars.relativeLarge}`
  vars.dropdownItemBackground = `transparent`
  vars.dropdownItemColor = `${siteVars.textColor}`
  vars.dropdownItemTextTransform = `none`
  vars.dropdownItemFontWeight = `${siteVars.normal}`
  vars.dropdownItemBoxShadow = `none`
  vars.dropdownItemTransition = `none`

  vars.dropdownItemIconFloat = `none`
  vars.dropdownItemIconFontSize = `${siteVars.relativeMedium}`
  vars.dropdownItemIconMargin = `0em 0.75em 0em 0em`

  vars.dropdownHoveredItemBackground = `${siteVars.transparentBlack}`
  vars.dropdownHoveredItemColor = `${siteVars.selectedTextColor}`

  /* Dropdown Variations */
  vars.dropdownVerticalMenuBoxShadow = `0 1px 3px 0px rgba(0, 0, 0, 0.08)`
  vars.secondaryDropdownMenuDistance = `${siteVars.relative5px}`
  vars.pointingDropdownMenuDistance = `0.75em`
  vars.invertedSelectionDropdownColor = `${siteVars.invertedTextColor}`

  /*--------------
       States
  ---------------*/

  /* Hovered Item */
  vars.hoverItemBackground = `${siteVars.subtleTransparentBlack}`
  vars.hoverItemTextColor = `${siteVars.selectedTextColor}`

  /* Pressed Item */
  vars.pressedItemBackground = `${siteVars.subtleTransparentBlack}`
  vars.pressedItemTextColor = `${vars.hoverItemTextColor}`


  /* Active Item */
  vars.activeItemBackground = `${siteVars.transparentBlack}`
  vars.activeItemTextColor = `${siteVars.selectedTextColor}`
  vars.activeItemFontWeight = `${siteVars.normal}`
  vars.activeIconOpacity = `1`
  vars.activeItemBoxShadow = `none`

  /* Active Hovered Item */
  vars.activeHoverItemBackground = `${siteVars.transparentBlack}`
  vars.activeHoverItemColor = `${siteVars.selectedTextColor}`

  /* Selected Dropdown */
  vars.dropdownSelectedItemBackground = `${siteVars.transparentBlack}`
  vars.dropdownSelectedItemColor = `${siteVars.selectedTextColor}`

  /* Active Dropdown */
  vars.dropdownActiveItemBackground = `${siteVars.subtleTransparentBlack}`
  vars.dropdownActiveItemColor = `${siteVars.selectedTextColor}`
  vars.dropdownActiveItemFontWeight = `${siteVars.bold}`

  /* Active Sub Menu */
  vars.subMenuActiveBackground = `transparent`
  vars.subMenuActiveTextColor = `${vars.activeItemTextColor}`
  vars.subMenuActiveFontWeight = `${siteVars.bold}`


  /*--------------
       Types
  ---------------*/

  /* Vertical */
  vars.verticalBoxShadow = `${vars.boxShadow}`
  vars.verticalPointerWidth = `2px`
  vars.verticalBackground = `#FFFFFF`
  vars.verticalItemBackground = `none`
  vars.verticalDividerBackground = `${vars.dividerBackground}`

  vars.verticalActiveBoxShadow = `none`


  /* Secondary */
  vars.secondaryBackground = `none`
  vars.secondaryMargin = `0em -${siteVars.secondaryItemSpacing}`
  vars.secondaryItemBackground = `none`
  vars.secondaryItemSpacing = `${siteVars.relative5px}`
  vars.secondaryItemMargin = `0em ${vars.secondaryItemSpacing}`
  vars.secondaryItemVerticalPadding = `${siteVars.relativeMini}`
  vars.secondaryItemHorizontalPadding = `${siteVars.relativeSmall}`
  vars.secondaryItemPadding = `${siteVars.relativeMini} ${siteVars.relativeSmall}`
  vars.secondaryItemBorderRadius = `${siteVars.defaultBorderRadius}`
  vars.secondaryItemTransition = `color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.secondaryItemColor = `${siteVars.unselectedTextColor}`

  vars.secondaryHoverItemBackground = `${siteVars.transparentBlack}`
  vars.secondaryHoverItemColor = `${siteVars.selectedTextColor}`

  vars.secondaryActiveItemBackground = `${siteVars.transparentBlack}`
  vars.secondaryActiveItemColor = `${siteVars.selectedTextColor}`
  vars.secondaryActiveHoverItemBackground = `${siteVars.transparentBlack}`
  vars.secondaryActiveHoverItemColor = `${siteVars.selectedTextColor}`

  vars.secondaryActiveHoveredItemBackground = `${siteVars.transparentBlack}`
  vars.secondaryActiveHoveredItemColor = `${siteVars.selectedTextColor}`

  vars.secondaryHeaderBackground = `none transparent`
  vars.secondaryHeaderBorder = `none`

  vars.secondaryItemVerticalSpacing = `${vars.secondaryItemSpacing}`
  vars.secondaryVerticalItemMargin = `0em 0em ${vars.secondaryItemVerticalSpacing}`
  vars.secondaryVerticalItemBorderRadius = `${siteVars.defaultBorderRadius}`

  vars.secondaryMenuSubMenuMargin = `0em -${vars.secondaryItemHorizontalPadding}`
  vars.secondaryMenuSubMenuItemMargin = `0em`
  vars.secondarySubMenuHorizontalPadding = `(${vars.itemHorizontalPadding} / ${siteVars.tinySize}) + ${vars.subMenuIndent}`
  vars.secondaryMenuSubMenuItemPadding = `${siteVars.relative7px} ${vars.secondarySubMenuHorizontalPadding}`

  /* Pointing */
  vars.secondaryPointingBorderWidth = `2px`
  vars.secondaryPointingBorderColor = `${siteVars.borderColor}`
  vars.secondaryPointingItemVerticalPadding = `${siteVars.relativeTiny}`
  vars.secondaryPointingItemHorizontalPadding = `${siteVars.relativeLarge}`

  vars.secondaryPointingHoverTextColor = `${siteVars.textColor}`

  vars.secondaryPointingActiveBorderColor = `${siteVars.black}`
  vars.secondaryPointingActiveTextColor = `${siteVars.selectedTextColor}`
  vars.secondaryPointingActiveFontWeight = `${siteVars.bold}`

  vars.secondaryPointingActiveDropdownBorderColor = `transparent`

  vars.secondaryPointingActiveHoverBorderColor = `${vars.secondaryPointingActiveBorderColor}`
  vars.secondaryPointingActiveHoverTextColor = `${vars.secondaryPointingActiveTextColor}`

  vars.secondaryPointingHeaderColor = `${siteVars.darkTextColor}`
  vars.secondaryVerticalPointingItemMargin = `0em -${vars.secondaryPointingBorderWidth} 0em 0em`


  /* Inverted Secondary */
  vars.secondaryInvertedColor = `${siteVars.invertedLightTextColor}`

  vars.secondaryInvertedHoverBackground = `${siteVars.transparentWhite}`
  vars.secondaryInvertedHoverColor = `${siteVars.invertedSelectedTextColor}`

  vars.secondaryInvertedActiveBackground = `${siteVars.strongTransparentWhite}`
  vars.secondaryInvertedActiveColor = `${siteVars.invertedSelectedTextColor}`

  /* Inverted Pointing */
  vars.secondaryPointingInvertedBorderColor = `${siteVars.whiteBorderColor}`
  vars.secondaryPointingInvertedItemTextColor = `${siteVars.invertedTextColor}`
  vars.secondaryPointingInvertedItemHeaderColor = `${siteVars.white}`
  vars.secondaryPointingInvertedItemHoverTextColor = `${siteVars.selectedTextColor}`
  vars.secondaryPointingInvertedActiveBorderColor = `${siteVars.white}`
  vars.secondaryPointingInvertedActiveColor = `${siteVars.invertedSelectedTextColor}`


  /* Tiered */
  vars.tieredActiveItemBackground = `#FCFCFC`
  vars.tieredActiveMenuBackground = `#FCFCFC`

  vars.tieredSubMenuTextTransform = `${siteVars.normal}`
  vars.tieredSubMenuFontWeight = `${siteVars.normal}`

  vars.tieredSubMenuColor = `${siteVars.lightTextColor}`

  vars.tieredSubMenuHoverBackground = `none transparent`
  vars.tieredSubMenuHoverColor = `${siteVars.hoveredTextColor}`

  vars.tieredSubMenuActiveBackground = `none transparent`
  vars.tieredSubMenuActiveColor = `${siteVars.selectedTextColor}`

  vars.tieredInvertedSubMenuBackground = `rgba(0, 0, 0, 0.2)`


  /* Icon */
  vars.iconMenuTextAlign = `center`
  vars.iconMenuItemColor = `${siteVars.black}`
  vars.iconMenuInvertedItemColor = `${siteVars.white}`


  /* Tabular */
  vars.tabularBorderColor = `${siteVars.solidBorderColor}`
  vars.tabularBackgroundColor = `transparent`
  vars.tabularBackground = `none ${vars.tabularBackgroundColor}`
  vars.tabularBorderWidth = `1px`
  vars.tabularOppositeBorderWidth = `${vars.tabularBorderWidth} + 1px`
  vars.tabularVerticalPadding = `${vars.itemVerticalPadding}`
  vars.tabularHorizontalPadding = `${siteVars.relativeHuge}`
  vars.tabularBorderRadius = `${siteVars.defaultBorderRadius}`
  vars.tabularTextColor = `${vars.itemTextColor}`

  vars.tabularHoveredTextColor = `${siteVars.hoveredTextColor}`

  vars.tabularVerticalBackground = `none ${vars.tabularBackgroundColor}`

  vars.tabularFluidOffset = `1px`
  vars.tabularFluidWidth = `~"calc(100% + "(${vars.tabularFluidOffset} * 2)~")"`

  vars.tabularActiveBackground = `none ${siteVars.white}`
  vars.tabularActiveColor = `${siteVars.selectedTextColor}`
  vars.tabularActiveBoxShadow = `none`
  vars.tabularActiveWeight = `${siteVars.bold}`



  /* Pagination */
  vars.paginationMinWidth = `3em`
  vars.paginationActiveBackground = `${siteVars.transparentBlack}`
  vars.paginationActiveTextColor = `${siteVars.selectedTextColor}`

  /* Labeled Icon */
  vars.labeledIconItemHorizontalPadding = `${siteVars.relativeMassive}`
  vars.labeledIconSize = `${siteVars.relativeMassive}`
  vars.labeledIconMinWidth = `6em`
  vars.labeledIconTextMargin = `0.5rem`


  /* Text */
  vars.textMenuItemSpacing = `${siteVars.relative7px}`
  vars.textMenuMargin = `${siteVars.relativeMedium} -(${vars.textMenuItemSpacing})`
  vars.textMenuItemColor = `${siteVars.mutedTextColor}`
  vars.textMenuItemFontWeight = `${siteVars.normal}`
  vars.textMenuItemMargin = `0em 0em`
  vars.textMenuItemPadding = `${siteVars.relative5px} ${vars.textMenuItemSpacing}`
  vars.textMenuItemTransition = `opacity ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

  vars.textMenuSubMenuMargin = `0em`
  vars.textMenuSubMenuItemMargin = `0em`
  vars.textMenuSubMenuItemPadding = `${siteVars.relative7px} 0em`

  vars.textMenuActiveItemFontWeight = `${siteVars.normal}`
  vars.textMenuActiveItemColor = `${siteVars.selectedTextColor}`

  vars.textMenuHeaderSize = `${siteVars.relativeSmall}`
  vars.textMenuHeaderColor = `${siteVars.darkTextColor}`
  vars.textMenuHeaderFontWeight = `${siteVars.bold}`
  vars.textMenuHeaderTextTransform = `uppercase`

  vars.textVerticalMenuMargin = `${siteVars.relativeMedium} 0em`
  vars.textVerticalMenuHeaderMargin = `${siteVars.relative8px} 0em ${siteVars.relative10px}`
  vars.textVerticalMenuItemMargin = `${siteVars.relative8px} 0em`

  vars.textVerticalMenuIconFloat = `none`
  vars.textVerticalMenuIconMargin = `${vars.iconMargin}`


  /*--------------
     Variations
  ---------------*/

  /* Inverted */
  vars.invertedBackground = `${siteVars.black}`
  vars.invertedBoxShadow = `none`
  vars.invertedBorder = `0px solid transparent`
  vars.invertedHeaderBackground = `transparent`

  vars.invertedItemBackground = `transparent`
  vars.invertedItemTextColor = `${siteVars.invertedTextColor}`

  /* Inverted Sub Menu */
  vars.invertedSubMenuBackground = `transparent`
  vars.invertedSubMenuColor = `${siteVars.invertedUnselectedTextColor}`

  /* Inverted Hover */
  vars.invertedHoverBackground = `${siteVars.transparentWhite}`
  vars.invertedHoverColor = `${siteVars.invertedSelectedTextColor}`

  vars.invertedSubMenuHoverBackground = `transparent`
  vars.invertedSubMenuHoverColor = `${siteVars.invertedSelectedTextColor}`

  /* Pressed */
  vars.invertedMenuPressedBackground = `${siteVars.transparentWhite}`
  vars.invertedMenuPressedColor = `${siteVars.invertedSelectedTextColor}`

  /* Inverted Active */
  vars.invertedActiveBackground = `${siteVars.strongTransparentWhite}`
  vars.invertedActiveColor = `${siteVars.invertedSelectedTextColor}`
  vars.invertedArrowActiveColor = `#3D3E3F`

  /* Inverted Active Hover  */
  vars.invertedActiveHoverBackground = `${vars.invertedActiveBackground}`
  vars.invertedActiveHoverColor = `${siteVars.white}`
  vars.invertedArrowActiveHoverColor = `${vars.invertedArrowActiveColor}`

  vars.invertedSubMenuActiveBackground = `transparent`
  vars.invertedSubMenuActiveColor = `${siteVars.white}`

  /* Inverted Menu Divider */
  vars.invertedDividerBackground = `rgba(255, 255, 255, 0.08)`
  vars.invertedVerticalDividerBackground = `${vars.invertedDividerBackground}`

  /* Inverted Colored */
  vars.invertedColoredDividerBackground = `${vars.dividerBackground}`
  vars.invertedColoredActiveBackground = `${siteVars.strongTransparentBlack}`

  /* Fixed */
  vars.fixedPrecedingGridMargin = `2.75rem`

  /* Floated */
  vars.floatedDistance = `0.5rem`

  /* Attached */
  vars.attachedTopOffset = `0px`
  vars.attachedBottomOffset = `0px`
  vars.attachedHorizontalOffset = `-${vars.borderWidth}`
  vars.attachedWidth = `~"calc(100% + "-${vars.attachedHorizontalOffset} * 2~")"`
  vars.attachedBoxShadow = `none`
  vars.attachedBorder = `${vars.borderWidth} solid ${siteVars.solidBorderColor}`
  vars.attachedBottomBoxShadow = `${vars.boxShadow},
    ${vars.attachedBoxShadow}`

  /* Resize large sizes */
  vars.mini = `${siteVars.absolute11px}`
  vars.tiny = `${siteVars.absolute12px}`
  vars.small = `${siteVars.absolute13px}`
  vars.large = `${siteVars.absolute15px}`
  vars.big = `${siteVars.absolute16px}`
  vars.huge = `${siteVars.absolute17px}`
  vars.massive = `${siteVars.absolute18px}`

  /* Sizes */
  vars.miniWidth = `9rem`
  vars.tinyWidth = `11rem`
  vars.smallWidth = `13rem`
  vars.mediumWidth = `15rem`
  vars.largeWidth = `18rem`
  vars.bigWidth = `20rem`
  vars.hugeWidth = `22rem`
  vars.massiveWidth = `25rem`

  return vars
}
