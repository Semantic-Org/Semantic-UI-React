module.exports = (theme) => {
  const vars = {}

  /*******************************
               Menu
  *******************************/

  /*-------------------
        Collection
  --------------------*/

  /* Menu */
  vars.verticalMargin = `${theme.medium}`
  vars.horizontalMargin = `0em`
  vars.margin = `${vars.verticalMargin} ${vars.horizontalMargin}`
  vars.background = `#FFFFFF`
  vars.fontFamily = `${theme.pageFont}`
  vars.itemBackground = `none`
  vars.fontWeight = `${theme.normal}`
  vars.borderWidth = `1px`
  vars.border = `${vars.borderWidth} solid ${theme.borderColor}`
  vars.boxShadow = `${theme.subtleShadow}`
  vars.borderRadius = `${theme.defaultBorderRadius}`
  vars.minHeight = `(${theme.itemVerticalPadding} * 2) + 1em`

  /* Menu Item */
  vars.itemVerticalPadding = `${theme.relativeSmall}`
  vars.itemHorizontalPadding = `${theme.relativeLarge}`
  vars.itemTextTransform = `none`
  vars.itemTransition = `background ${theme.defaultDuration} ${theme.defaultEasing},
    box-shadow ${theme.defaultDuration} ${theme.defaultEasing},
    color ${theme.defaultDuration} ${theme.defaultEasing}`
  vars.itemFontWeight = `${theme.normal}`
  vars.itemTextColor = `${theme.textColor}`

  /* Divider */
  vars.dividerSize = `1px`
  vars.dividerBackground = `${theme.internalBorderColor}`

  /* Sub Menu */
  vars.subMenuDistance = `0.5em`
  vars.subMenuMargin = `${vars.subMenuDistance} -${vars.itemHorizontalPadding} 0em`
  vars.subMenuFontSize = `${theme.relativeTiny}`
  vars.subMenuTextColor = `rgba(0, 0, 0, 0.5)`

  vars.subMenuIndent = `0em`
  vars.subMenuHorizontalPadding = `(${vars.itemHorizontalPadding} / ${theme.tinySize}) + ${vars.subMenuIndent}`
  vars.subMenuVerticalPadding = `0.5em`

  /* Text Item */
  vars.textLineHeight = `1.3`

  /*--------------
      Elements
  ---------------*/

  /* Icon */
  vars.iconFloat = `none`
  vars.iconMargin = `0em ${theme.relative5px} 0em 0em`
  vars.iconOpacity = `0.9`

  /* Dropdown Icon */
  vars.dropdownIconFloat = `right`
  vars.dropdownIconDistance = `1em`

  /* Header */
  vars.headerBackground = `''`
  vars.headerWeight = `${theme.bold}`
  vars.headerTextTransform = `${theme.normal}`

  /* Vertical Icon */
  vars.verticalIconFloat = `right`
  vars.verticalIconMargin = `0em 0em 0em 0.5em`

  /* Vertical Header */
  vars.verticalHeaderMargin = `0em 0em 0.5em`
  vars.verticalHeaderFontSize = `${theme.relativeMedium}`
  vars.verticalHeaderFontWeight = `${theme.bold}`

  /* Pointing Arrow */
  vars.arrowSize = `${theme.relative8px}`
  vars.arrowBorderWidth = `1px`
  vars.arrowBorder = `${vars.arrowBorderWidth} solid ${theme.solidBorderColor}`
  vars.arrowTransition = `background ${theme.defaultDuration} ${theme.defaultEasing}`
  vars.arrowZIndex = `2`

  vars.arrowHoverColor = `#F2F2F2`
  vars.arrowActiveColor = `${vars.arrowHoverColor}`
  vars.arrowActiveHoverColor = `${vars.arrowActiveColor}`

  vars.arrowVerticalHoverColor = `${vars.arrowHoverColor}`
  vars.arrowVerticalActiveColor = `${vars.arrowActiveColor}`
  vars.arrowVerticalSubMenuColor = `${theme.white}`

  /*--------------
      Couplings
  ---------------*/

  /* Button */
  vars.buttonSize = `${theme.relativeMedium}`
  vars.buttonOffset = `0em`
  vars.buttonMargin = `-0.5em 0em`
  vars.buttonVerticalPadding = `${theme.relativeMini}`

  /* Input */
  vars.inputSize = `${theme.relativeMedium}`
  vars.inputVerticalMargin = `-0.5em`
  vars.inputOffset = `0em`
  vars.inputVerticalPadding = `${theme.relative8px}`

  /* Image */
  vars.imageMargin = `-0.3em 0em`
  vars.imageWidth = `2.5em`
  vars.verticalImageWidth = `auto`

  /* Label */
  vars.labelOffset = `-0.15em`
  vars.labelBackground = `#999999`
  vars.labelTextColor = `${theme.white}`

  vars.labelTextMargin = `1em`
  vars.labelVerticalPadding = `0.3em`
  vars.labelHorizontalPadding = `${theme.relativeMini}`

  vars.labelAndIconFloat = `none`
  vars.labelAndIconMargin = `0em 0.5em 0em 0em`

  /* Dropdown in Menu */
  vars.dropdownMenuBoxShadow = `0px 1px 3px 0px rgba(0, 0, 0, 0.08)`

  vars.dropdownBackground = `#FFFFFF`
  vars.dropdownMenuDistance = `0em`
  vars.dropdownMenuBorderRadius = `${vars.borderRadius}`

  vars.dropdownItemFontSize = `${theme.relativeMedium}`
  vars.dropdownItemPadding = `${theme.relativeMini} ${theme.relativeLarge}`
  vars.dropdownItemBackground = `transparent`
  vars.dropdownItemColor = `${theme.textColor}`
  vars.dropdownItemTextTransform = `none`
  vars.dropdownItemFontWeight = `${theme.normal}`
  vars.dropdownItemBoxShadow = `none`
  vars.dropdownItemTransition = `none`

  vars.dropdownItemIconFloat = `none`
  vars.dropdownItemIconFontSize = `${theme.relativeMedium}`
  vars.dropdownItemIconMargin = `0em 0.75em 0em 0em`

  vars.dropdownHoveredItemBackground = `${theme.transparentBlack}`
  vars.dropdownHoveredItemColor = `${theme.selectedTextColor}`

  /* Dropdown Variations */
  vars.dropdownVerticalMenuBoxShadow = `0 1px 3px 0px rgba(0, 0, 0, 0.08)`
  vars.secondaryDropdownMenuDistance = `${theme.relative5px}`
  vars.pointingDropdownMenuDistance = `0.75em`
  vars.invertedSelectionDropdownColor = `${theme.invertedTextColor}`

  /*--------------
       States
  ---------------*/

  /* Hovered Item */
  vars.hoverItemBackground = `${theme.subtleTransparentBlack}`
  vars.hoverItemTextColor = `${theme.selectedTextColor}`

  /* Pressed Item */
  vars.pressedItemBackground = `${theme.subtleTransparentBlack}`
  vars.pressedItemTextColor = `${vars.hoverItemTextColor}`


  /* Active Item */
  vars.activeItemBackground = `${theme.transparentBlack}`
  vars.activeItemTextColor = `${theme.selectedTextColor}`
  vars.activeItemFontWeight = `${theme.normal}`
  vars.activeIconOpacity = `1`
  vars.activeItemBoxShadow = `none`

  /* Active Hovered Item */
  vars.activeHoverItemBackground = `${theme.transparentBlack}`
  vars.activeHoverItemColor = `${theme.selectedTextColor}`

  /* Selected Dropdown */
  vars.dropdownSelectedItemBackground = `${theme.transparentBlack}`
  vars.dropdownSelectedItemColor = `${theme.selectedTextColor}`

  /* Active Dropdown */
  vars.dropdownActiveItemBackground = `${theme.subtleTransparentBlack}`
  vars.dropdownActiveItemColor = `${theme.selectedTextColor}`
  vars.dropdownActiveItemFontWeight = `${theme.bold}`

  /* Active Sub Menu */
  vars.subMenuActiveBackground = `transparent`
  vars.subMenuActiveTextColor = `${vars.activeItemTextColor}`
  vars.subMenuActiveFontWeight = `${theme.bold}`


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
  vars.secondaryMargin = `0em -${theme.secondaryItemSpacing}`
  vars.secondaryItemBackground = `none`
  vars.secondaryItemSpacing = `${theme.relative5px}`
  vars.secondaryItemMargin = `0em ${vars.secondaryItemSpacing}`
  vars.secondaryItemVerticalPadding = `${theme.relativeMini}`
  vars.secondaryItemHorizontalPadding = `${theme.relativeSmall}`
  vars.secondaryItemPadding = `${theme.relativeMini} ${theme.relativeSmall}`
  vars.secondaryItemBorderRadius = `${theme.defaultBorderRadius}`
  vars.secondaryItemTransition = `color ${theme.defaultDuration} ${theme.defaultEasing}`
  vars.secondaryItemColor = `${theme.unselectedTextColor}`

  vars.secondaryHoverItemBackground = `${theme.transparentBlack}`
  vars.secondaryHoverItemColor = `${theme.selectedTextColor}`

  vars.secondaryActiveItemBackground = `${theme.transparentBlack}`
  vars.secondaryActiveItemColor = `${theme.selectedTextColor}`
  vars.secondaryActiveHoverItemBackground = `${theme.transparentBlack}`
  vars.secondaryActiveHoverItemColor = `${theme.selectedTextColor}`

  vars.secondaryActiveHoveredItemBackground = `${theme.transparentBlack}`
  vars.secondaryActiveHoveredItemColor = `${theme.selectedTextColor}`

  vars.secondaryHeaderBackground = `none transparent`
  vars.secondaryHeaderBorder = `none`

  vars.secondaryItemVerticalSpacing = `${vars.secondaryItemSpacing}`
  vars.secondaryVerticalItemMargin = `0em 0em ${vars.secondaryItemVerticalSpacing}`
  vars.secondaryVerticalItemBorderRadius = `${theme.defaultBorderRadius}`

  vars.secondaryMenuSubMenuMargin = `0em -${vars.secondaryItemHorizontalPadding}`
  vars.secondaryMenuSubMenuItemMargin = `0em`
  vars.secondarySubMenuHorizontalPadding = `(${vars.itemHorizontalPadding} / ${theme.tinySize}) + ${vars.subMenuIndent}`
  vars.secondaryMenuSubMenuItemPadding = `${theme.relative7px} ${vars.secondarySubMenuHorizontalPadding}`

  /* Pointing */
  vars.secondaryPointingBorderWidth = `2px`
  vars.secondaryPointingBorderColor = `${theme.borderColor}`
  vars.secondaryPointingItemVerticalPadding = `${theme.relativeTiny}`
  vars.secondaryPointingItemHorizontalPadding = `${theme.relativeLarge}`

  vars.secondaryPointingHoverTextColor = `${theme.textColor}`

  vars.secondaryPointingActiveBorderColor = `${theme.black}`
  vars.secondaryPointingActiveTextColor = `${theme.selectedTextColor}`
  vars.secondaryPointingActiveFontWeight = `${theme.bold}`

  vars.secondaryPointingActiveDropdownBorderColor = `transparent`

  vars.secondaryPointingActiveHoverBorderColor = `${vars.secondaryPointingActiveBorderColor}`
  vars.secondaryPointingActiveHoverTextColor = `${vars.secondaryPointingActiveTextColor}`

  vars.secondaryPointingHeaderColor = `${theme.darkTextColor}`
  vars.secondaryVerticalPointingItemMargin = `0em -${vars.secondaryPointingBorderWidth} 0em 0em`


  /* Inverted Secondary */
  vars.secondaryInvertedColor = `${theme.invertedLightTextColor}`

  vars.secondaryInvertedHoverBackground = `${theme.transparentWhite}`
  vars.secondaryInvertedHoverColor = `${theme.invertedSelectedTextColor}`

  vars.secondaryInvertedActiveBackground = `${theme.strongTransparentWhite}`
  vars.secondaryInvertedActiveColor = `${theme.invertedSelectedTextColor}`

  /* Inverted Pointing */
  vars.secondaryPointingInvertedBorderColor = `${theme.whiteBorderColor}`
  vars.secondaryPointingInvertedItemTextColor = `${theme.invertedTextColor}`
  vars.secondaryPointingInvertedItemHeaderColor = `${theme.white}`
  vars.secondaryPointingInvertedItemHoverTextColor = `${theme.selectedTextColor}`
  vars.secondaryPointingInvertedActiveBorderColor = `${theme.white}`
  vars.secondaryPointingInvertedActiveColor = `${theme.invertedSelectedTextColor}`


  /* Tiered */
  vars.tieredActiveItemBackground = `#FCFCFC`
  vars.tieredActiveMenuBackground = `#FCFCFC`

  vars.tieredSubMenuTextTransform = `${theme.normal}`
  vars.tieredSubMenuFontWeight = `${theme.normal}`

  vars.tieredSubMenuColor = `${theme.lightTextColor}`

  vars.tieredSubMenuHoverBackground = `none transparent`
  vars.tieredSubMenuHoverColor = `${theme.hoveredTextColor}`

  vars.tieredSubMenuActiveBackground = `none transparent`
  vars.tieredSubMenuActiveColor = `${theme.selectedTextColor}`

  vars.tieredInvertedSubMenuBackground = `rgba(0, 0, 0, 0.2)`


  /* Icon */
  vars.iconMenuTextAlign = `center`
  vars.iconMenuItemColor = `${theme.black}`
  vars.iconMenuInvertedItemColor = `${theme.white}`


  /* Tabular */
  vars.tabularBorderColor = `${theme.solidBorderColor}`
  vars.tabularBackgroundColor = `transparent`
  vars.tabularBackground = `none ${vars.tabularBackgroundColor}`
  vars.tabularBorderWidth = `1px`
  vars.tabularOppositeBorderWidth = `${vars.tabularBorderWidth} + 1px`
  vars.tabularVerticalPadding = `${vars.itemVerticalPadding}`
  vars.tabularHorizontalPadding = `${theme.relativeHuge}`
  vars.tabularBorderRadius = `${theme.defaultBorderRadius}`
  vars.tabularTextColor = `${vars.itemTextColor}`

  vars.tabularHoveredTextColor = `${theme.hoveredTextColor}`

  vars.tabularVerticalBackground = `none ${vars.tabularBackgroundColor}`

  vars.tabularFluidOffset = `1px`
  vars.tabularFluidWidth = `~"calc(100% + "(${vars.tabularFluidOffset} * 2)~")"`

  vars.tabularActiveBackground = `none ${theme.white}`
  vars.tabularActiveColor = `${theme.selectedTextColor}`
  vars.tabularActiveBoxShadow = `none`
  vars.tabularActiveWeight = `${theme.bold}`



  /* Pagination */
  vars.paginationMinWidth = `3em`
  vars.paginationActiveBackground = `${theme.transparentBlack}`
  vars.paginationActiveTextColor = `${theme.selectedTextColor}`

  /* Labeled Icon */
  vars.labeledIconItemHorizontalPadding = `${theme.relativeMassive}`
  vars.labeledIconSize = `${theme.relativeMassive}`
  vars.labeledIconMinWidth = `6em`
  vars.labeledIconTextMargin = `0.5rem`


  /* Text */
  vars.textMenuItemSpacing = `${theme.relative7px}`
  vars.textMenuMargin = `${theme.relativeMedium} -(${vars.textMenuItemSpacing})`
  vars.textMenuItemColor = `${theme.mutedTextColor}`
  vars.textMenuItemFontWeight = `${theme.normal}`
  vars.textMenuItemMargin = `0em 0em`
  vars.textMenuItemPadding = `${theme.relative5px} ${vars.textMenuItemSpacing}`
  vars.textMenuItemTransition = `opacity ${theme.defaultDuration} ${theme.defaultEasing}`

  vars.textMenuSubMenuMargin = `0em`
  vars.textMenuSubMenuItemMargin = `0em`
  vars.textMenuSubMenuItemPadding = `${theme.relative7px} 0em`

  vars.textMenuActiveItemFontWeight = `${theme.normal}`
  vars.textMenuActiveItemColor = `${theme.selectedTextColor}`

  vars.textMenuHeaderSize = `${theme.relativeSmall}`
  vars.textMenuHeaderColor = `${theme.darkTextColor}`
  vars.textMenuHeaderFontWeight = `${theme.bold}`
  vars.textMenuHeaderTextTransform = `uppercase`

  vars.textVerticalMenuMargin = `${theme.relativeMedium} 0em`
  vars.textVerticalMenuHeaderMargin = `${theme.relative8px} 0em ${theme.relative10px}`
  vars.textVerticalMenuItemMargin = `${theme.relative8px} 0em`

  vars.textVerticalMenuIconFloat = `none`
  vars.textVerticalMenuIconMargin = `${vars.iconMargin}`


  /*--------------
     Variations
  ---------------*/

  /* Inverted */
  vars.invertedBackground = `${theme.black}`
  vars.invertedBoxShadow = `none`
  vars.invertedBorder = `0px solid transparent`
  vars.invertedHeaderBackground = `transparent`

  vars.invertedItemBackground = `transparent`
  vars.invertedItemTextColor = `${theme.invertedTextColor}`

  /* Inverted Sub Menu */
  vars.invertedSubMenuBackground = `transparent`
  vars.invertedSubMenuColor = `${theme.invertedUnselectedTextColor}`

  /* Inverted Hover */
  vars.invertedHoverBackground = `${theme.transparentWhite}`
  vars.invertedHoverColor = `${theme.invertedSelectedTextColor}`

  vars.invertedSubMenuHoverBackground = `transparent`
  vars.invertedSubMenuHoverColor = `${theme.invertedSelectedTextColor}`

  /* Pressed */
  vars.invertedMenuPressedBackground = `${theme.transparentWhite}`
  vars.invertedMenuPressedColor = `${theme.invertedSelectedTextColor}`

  /* Inverted Active */
  vars.invertedActiveBackground = `${theme.strongTransparentWhite}`
  vars.invertedActiveColor = `${theme.invertedSelectedTextColor}`
  vars.invertedArrowActiveColor = `#3D3E3F`

  /* Inverted Active Hover  */
  vars.invertedActiveHoverBackground = `${vars.invertedActiveBackground}`
  vars.invertedActiveHoverColor = `${theme.white}`
  vars.invertedArrowActiveHoverColor = `${vars.invertedArrowActiveColor}`

  vars.invertedSubMenuActiveBackground = `transparent`
  vars.invertedSubMenuActiveColor = `${theme.white}`

  /* Inverted Menu Divider */
  vars.invertedDividerBackground = `rgba(255, 255, 255, 0.08)`
  vars.invertedVerticalDividerBackground = `${vars.invertedDividerBackground}`

  /* Inverted Colored */
  vars.invertedColoredDividerBackground = `${vars.dividerBackground}`
  vars.invertedColoredActiveBackground = `${theme.strongTransparentBlack}`

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
  vars.attachedBorder = `${vars.borderWidth} solid ${theme.solidBorderColor}`
  vars.attachedBottomBoxShadow = `${vars.boxShadow},
    ${vars.attachedBoxShadow}`

  /* Resize large sizes */
  vars.mini = `${theme.absolute11px}`
  vars.tiny = `${theme.absolute12px}`
  vars.small = `${theme.absolute13px}`
  vars.large = `${theme.absolute15px}`
  vars.big = `${theme.absolute16px}`
  vars.huge = `${theme.absolute17px}`
  vars.massive = `${theme.absolute18px}`

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
