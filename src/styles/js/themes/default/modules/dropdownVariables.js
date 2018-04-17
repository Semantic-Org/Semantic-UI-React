module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Dropdown
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.transition = `box-shadow ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    width ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.borderRadius = `${siteVars.defaultBorderRadius}`

  vars.raisedShadow = `0px 2px 3px 0px ${siteVars.borderColor}`

  /*-------------------
         Content
  --------------------*/

  /* Icon */
  vars.dropdownIconSize = `${siteVars.relative12px}`
  vars.dropdownIconMargin = `0em 0em 0em 1em`

  /* Current Text */
  vars.textTransition = `none`

  /* Menu */
  vars.menuBackground = `#FFFFFF`
  vars.menuMargin = `0em`
  vars.menuPadding = `0em 0em`
  vars.menuTop = `100%`
  vars.menuTextAlign = `left`

  vars.menuBorderWidth = `1px`
  vars.menuBorderColor = `${siteVars.borderColor}`
  vars.menuBorder = `${vars.menuBorderWidth} solid ${vars.menuBorderColor}`
  vars.menuBoxShadow = `${vars.raisedShadow}`
  vars.menuBorderRadius = `${vars.borderRadius}`
  vars.menuTransition = `opacity ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.menuMinWidth = `~"calc(100% + "(${vars.menuBorderWidth} * 2)~")"`
  vars.menuZIndex = `11`

  /* Text */
  vars.textLineHeight = `1em`
  vars.textLineHeightOffset = `(${vars.textLineHeight} - 1em)`
  vars.textCursorSpacing = `1px`

  /* Menu Item */
  vars.itemFontSize = `${siteVars.medium}`
  vars.itemTextAlign = `left`
  vars.itemBorder = `none`
  vars.itemHeight = `auto`
  vars.itemDivider = `none`
  vars.itemColor = `${siteVars.textColor}`
  vars.itemVerticalPadding = `${siteVars.mini}`
  vars.itemHorizontalPadding = `${siteVars.large}`
  vars.itemPadding = `${vars.itemVerticalPadding} ${vars.itemHorizontalPadding}`
  vars.itemFontWeight = `${siteVars.normal}`
  vars.itemLineHeight = `1em`
  vars.itemLineHeightOffset = `(${vars.itemLineHeight} - 1em)`
  vars.itemTextTransform = `none`
  vars.itemBoxShadow = `none`

  /* Sub Menu */
  vars.subMenuTop = `0%`
  vars.subMenuLeft = `100%`
  vars.subMenuRight = `auto`
  vars.subMenuDistanceAway = `-0.5em`
  vars.subMenuMargin = `0em 0em 0em ${vars.subMenuDistanceAway}`
  vars.subMenuBorderRadius = `${vars.borderRadius}`
  vars.subMenuZIndex = `21`

  /* Menu Header */
  vars.menuHeaderColor = `${siteVars.darkTextColor}`
  vars.menuHeaderFontSize = `${siteVars.relative11px}`
  vars.menuHeaderFontWeight = `${siteVars.bold}`
  vars.menuHeaderTextTransform = `uppercase`
  vars.menuHeaderMargin = `1rem 0rem 0.75rem`
  vars.menuHeaderPadding = `0em ${vars.itemHorizontalPadding}`

  /* Menu Divider */
  vars.menuDividerMargin = `0.5em 0em`
  vars.menuDividerColor = `${siteVars.internalBorderColor}`
  vars.menuDividerSize = `1px`
  vars.menuDividerBorder = `${vars.menuDividerSize} solid ${vars.menuDividerColor}`

  /* Menu Input */
  vars.menuInputMargin = `${siteVars.large} ${siteVars.mini}`
  vars.menuInputMinWidth = `10rem`
  vars.menuInputVerticalPadding = `0.5em`
  vars.menuInputHorizontalPadding = `${siteVars.inputHorizontalPadding}`
  vars.menuInputPadding = `${vars.menuInputVerticalPadding} ${vars.menuInputHorizontalPadding}`

  /* Menu Image */
  vars.menuImageMaxHeight = `2em`
  vars.menuImageVerticalMargin = `-(${vars.menuImageMaxHeight} - 1em) / 2`

  /* Item Sub-Element */
  vars.itemElementFloat = `none`
  vars.itemElementDistance = `${siteVars.mini}`

  /* Sub-Menu Dropdown Icon */
  vars.itemDropdownIconDistance = `1em`
  vars.itemDropdownIconFloat = `right`
  vars.itemDropdownIconMargin = `${vars.itemLineHeightOffset} 0em 0em ${vars.itemDropdownIconDistance}`

  /* Description */
  vars.itemDescriptionFloat = `right`
  vars.itemDescriptionMargin = `0em 0em 0em 1em`
  vars.itemDescriptionColor = `${siteVars.lightTextColor}`

  /* Message */
  vars.messagePadding = `${siteVars.selectionItemPadding}`
  vars.messageFontWeight = `${siteVars.normal}`
  vars.messageColor = `${siteVars.unselectedTextColor}`

  /* Floated Content */
  vars.floatedDistance = `1em`

  /*-------------------
          Types
  --------------------*/

  /*------------
     Selection
  --------------*/

  vars.selectionMinWidth = `14em`
  vars.selectionVerticalPadding = `${siteVars.inputVerticalPadding}`
  vars.selectionHorizontalPadding = `${siteVars.inputHorizontalPadding}`
  vars.selectionBorderEmWidth = `${siteVars.relative1px}`
  vars.selectionMinHeight = `${siteVars.inputLineHeight} + (${vars.selectionVerticalPadding} * 2) - ${vars.selectionBorderEmWidth}`
  vars.selectionBackground = `${siteVars.inputBackground}`
  vars.selectionDisplay = `inline-block`
  vars.selectionIconDistance = `${siteVars.inputHorizontalPadding} + ${siteVars.glyphWidth}`
  vars.selectionPadding = `${vars.selectionVerticalPadding} ${vars.selectionIconDistance} ${vars.selectionVerticalPadding} ${vars.selectionHorizontalPadding}`
  vars.selectionZIndex = `10`

  vars.selectionItemDivider = `1px solid ${siteVars.solidInternalBorderColor}`
  vars.selectionMessagePadding = `${siteVars.selectionItemPadding}`

  /* <select> */
  vars.selectBorder = `1px solid ${siteVars.borderColor}`
  vars.selectPadding = `0.5em`
  vars.selectVisibility = `visible`
  vars.selectHeight = `38px`

  vars.selectionTextColor = `${siteVars.textColor}`

  vars.selectionTextUnderlayIconOpacity = `${siteVars.disabledOpacity}`
  vars.selectionTextUnderlayColor = `${siteVars.inputPlaceholderFocusColor}`

  vars.selectionBoxShadow = `none`
  vars.selectionBorderColor = `${siteVars.borderColor}`
  vars.selectionBorder = `1px solid ${vars.selectionBorderColor}`
  vars.selectionBorderRadius = `${vars.borderRadius}`

  vars.selectionIconOpacity = `0.8`
  vars.selectionIconZIndex = `3`
  vars.selectionIconHitbox = `${vars.selectionVerticalPadding}`
  vars.selectionIconMargin = `-${vars.selectionIconHitbox}`
  vars.selectionIconPadding = `${vars.selectionIconHitbox} / ${vars.dropdownIconSize}`
  vars.selectionIconTransition = `opacity ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

  vars.selectionMenuBorderRadius = `0em 0em ${vars.borderRadius} ${vars.borderRadius}`
  vars.selectionMenuBoxShadow = `${vars.raisedShadow}`
  vars.selectionMenuItemBoxShadow = `none`

  vars.selectionItemHorizontalPadding = `${vars.itemHorizontalPadding}`
  vars.selectionItemVerticalPadding = `${vars.itemVerticalPadding}`
  vars.selectionItemPadding = `${vars.selectionItemVerticalPadding} ${vars.selectionItemHorizontalPadding}`

  vars.selectionTransition = `${vars.transition}`
  vars.selectionMenuTransition = `${vars.menuTransition}`

  /* Responsive */
  vars.selectionMobileMaxItems = `3`
  vars.selectionTabletMaxItems = `4`
  vars.selectionComputerMaxItems = `6`
  vars.selectionWidescreenMaxItems = `8`

  /* Derived */
  vars.selectedBorderEMWidth = `0.1em` /* 1px / em size */
  vars.selectionItemHeight = `(${vars.selectionItemVerticalPadding} * 2) + ${vars.itemLineHeight} + ${vars.selectedBorderEMWidth}`
  vars.selectionMobileMaxMenuHeight = `(${vars.selectionItemHeight} * ${vars.selectionMobileMaxItems})`
  vars.selectionTabletMaxMenuHeight = `(${vars.selectionItemHeight} * ${vars.selectionTabletMaxItems})`
  vars.selectionComputerMaxMenuHeight = `(${vars.selectionItemHeight} * ${vars.selectionComputerMaxItems})`
  vars.selectionWidescreenMaxMenuHeight = `(${vars.selectionItemHeight} * ${vars.selectionWidescreenMaxItems})`

  /* Hover */
  vars.selectionHoverBorderColor = `${siteVars.selectedBorderColor}`
  vars.selectionHoverBoxShadow = `none`

  /* Focus */
  vars.selectionFocusBorderColor = `${siteVars.focusedFormMutedBorderColor}`
  vars.selectionFocusBoxShadow = `none`
  vars.selectionFocusMenuBoxShadow = `${vars.raisedShadow}`

  /* Visible */
  vars.selectionVisibleTextFontWeight = `${siteVars.normal}`
  vars.selectionVisibleTextColor = `${siteVars.hoveredTextColor}`

  vars.selectionVisibleBorderColor = `${siteVars.focusedFormMutedBorderColor}`
  vars.selectionVisibleBoxShadow = `${vars.raisedShadow}`
  vars.selectionVisibleMenuBoxShadow = `${vars.raisedShadow}`

  /* Visible Hover */
  vars.selectionActiveHoverBorderColor = `${siteVars.focusedFormMutedBorderColor}`
  vars.selectionActiveHoverBoxShadow = `${vars.selectionVisibleBoxShadow}`
  vars.selectionActiveHoverMenuBoxShadow = `${vars.selectionVisibleMenuBoxShadow}`

  vars.selectionVisibleConnectingBorder = `0em`
  vars.selectionVisibleIconOpacity = `1`

  /*--------------
       Search
  --------------*/

  vars.searchMinWidth = `''`

  /* Search Selection */
  vars.searchSelectionLineHeight = `${siteVars.inputLineHeight}`
  vars.searchSelectionLineHeightOffset = `((${vars.searchSelectionLineHeight} - 1em) / 2)`
  vars.searchSelectionVerticalPadding = `(${vars.selectionVerticalPadding} - ${vars.searchSelectionLineHeightOffset})`
  vars.searchSelectionHorizontalPadding = `${vars.selectionHorizontalPadding}`
  vars.searchSelectionInputPadding = `${vars.searchSelectionVerticalPadding} ${vars.selectionIconDistance} ${vars.searchSelectionVerticalPadding} ${vars.searchSelectionHorizontalPadding}`

  vars.searchMobileMaxMenuHeight = `${vars.selectionMobileMaxMenuHeight}`
  vars.searchTabletMaxMenuHeight = `${vars.selectionTabletMaxMenuHeight}`
  vars.searchComputerMaxMenuHeight = `${vars.selectionComputerMaxMenuHeight}`
  vars.searchWidescreenMaxMenuHeight = `${vars.selectionWidescreenMaxMenuHeight}`

  /* Inline */
  vars.inlineIconMargin = `0em ${siteVars.relative7px} 0em ${siteVars.relative3px}`
  vars.inlineTextColor = `inherit`
  vars.inlineTextFontWeight = `${siteVars.bold}`
  vars.inlineMenuDistance = `${siteVars.relative3px}`
  vars.inlineMenuBorderRadius = `${vars.borderRadius}`


  /*--------------
      Multiple
  --------------*/

  /* Split Actual Padding Between Child and Parent (allows for label spacing) */
  vars.multipleSelectionVerticalPadding = `(${vars.searchSelectionVerticalPadding} * (1/3))`
  vars.multipleSelectionLeftPadding = `${siteVars.relative5px}`
  vars.multipleSelectionRightPadding = `${vars.selectionIconDistance}`
  vars.multipleSelectionPadding = `${vars.multipleSelectionVerticalPadding} ${vars.multipleSelectionRightPadding} ${vars.multipleSelectionVerticalPadding} ${vars.multipleSelectionLeftPadding}`

  /* Child Elements */
  vars.multipleSelectionChildVerticalMargin = `(${vars.searchSelectionVerticalPadding} * (2/3))`
  vars.multipleSelectionChildLeftMargin = `(${siteVars.inputHorizontalPadding} - ${vars.multipleSelectionLeftPadding})`
  vars.multipleSelectionChildMargin = `${vars.multipleSelectionChildVerticalMargin} 0em ${vars.multipleSelectionChildVerticalMargin} ${vars.multipleSelectionChildLeftMargin}`
  vars.multipleSelectionChildLineHeight = `${siteVars.relative17px}`
  vars.multipleSelectionSearchStartWidth = `(${siteVars.glyphWidth} * 2)`

  /* Dropdown Icon */
  vars.multipleSelectionDropdownIconMargin = `''`
  vars.multipleSelectionDropdownIconPadding = `''`

  vars.multipleSelectionSearchAfterLabelDistance = `${siteVars.relative2px}`

  /* Selection Label */
  vars.labelSize = `${siteVars.relativeMedium}`
  vars.labelHorizontalMargin = `${siteVars.absolute4px}`
  vars.labelVerticalMargin = `${siteVars.absolute2px}`
  vars.labelMargin = `${vars.labelVerticalMargin} ${vars.labelHorizontalMargin} ${vars.labelVerticalMargin} 0em`
  vars.labelBorderWidth = `1px`
  vars.labelBoxShadow = `0px 0px 0px ${vars.labelBorderWidth} ${siteVars.borderColor} inset`

  vars.labelVerticalPadding = `${siteVars.relative5px}`
  vars.labelHorizontalPadding = `${siteVars.relativeMini}`
  vars.labelPadding = `${vars.labelVerticalPadding} ${vars.labelHorizontalPadding}`

  /*-------------------
         States
  --------------------*/

  /* Hovered */
  vars.hoveredItemBackground = `${siteVars.transparentBlack}`
  vars.hoveredItemColor = `${siteVars.selectedTextColor}`
  vars.hoveredZIndex = `${vars.menuZIndex} + 2`

  /* Default Text */
  vars.defaultTextColor = `${siteVars.inputPlaceholderColor}`
  vars.defaultTextFocusColor = `${siteVars.inputPlaceholderFocusColor}`

  /* Loading */
  vars.loadingZIndex = `-1`

  /* Active Menu Item */
  vars.activeItemZIndex = `${vars.menuZIndex} + 1`
  vars.activeItemBackground = `transparent`
  vars.activeItemBoxShadow = `none`
  vars.activeItemFontWeight = `${siteVars.bold}`
  vars.activeItemColor = `${siteVars.selectedTextColor}`

  /* Selected */
  vars.selectedBackground = `${siteVars.subtleTransparentBlack}`
  vars.selectedColor = `${siteVars.selectedTextColor}`

  /* Error */
  vars.errorLabelBackground = `#EACBCB`
  vars.errorLabelColor = `${siteVars.errorTextColor}`

  vars.errorItemTextColor = `${siteVars.errorTextColor}`
  vars.errorItemHoverBackground = `#FFF2F2`
  vars.errorItemActiveBackground = `#FDCFCF`

  /*-------------------
        Variations
  --------------------*/

  /* Scrolling */
  vars.scrollingMenuWidth = `100%`
  vars.scrollingMenuItemBorder = `none`
  vars.scrollingMenuRightItemPadding = `~"calc("(${vars.itemHorizontalPadding})~" + "(${siteVars.scrollbarWidth})~")"`

  vars.scrollingMobileMaxItems = `4`
  vars.scrollingTabletMaxItems = `6`
  vars.scrollingComputerMaxItems = `8`
  vars.scrollingWidescreenMaxItems = `12`

  vars.scrollingBorderEMWidth = `0em` /* 0px / em size */
  vars.scrollingItemHeight = `(${vars.itemVerticalPadding} * 2) + ${vars.itemLineHeight} + ${vars.scrollingBorderEMWidth}`
  vars.scrollingMobileMaxMenuHeight = `(${vars.scrollingItemHeight} * ${vars.scrollingMobileMaxItems})`
  vars.scrollingTabletMaxMenuHeight = `(${vars.scrollingItemHeight} * ${vars.scrollingTabletMaxItems})`
  vars.scrollingComputerMaxMenuHeight = `(${vars.scrollingItemHeight} * ${vars.scrollingComputerMaxItems})`
  vars.scrollingWidescreenMaxMenuHeight = `(${vars.scrollingItemHeight} * ${vars.selectionWidescreenMaxItems})`

  /* Upward */
  vars.upwardSelectionVisibleBorderRadius = `${vars.selectionVisibleConnectingBorder} ${vars.selectionVisibleConnectingBorder} ${vars.borderRadius} ${vars.borderRadius}`
  vars.upwardMenuBoxShadow = `0px 0px 3px 0px rgba(0, 0, 0, 0.08)`
  vars.upwardSelectionMenuBoxShadow = `0px -2px 3px 0px rgba(0, 0, 0, 0.08)`
  vars.upwardMenuBorderRadius = `${vars.borderRadius} ${vars.borderRadius} 0em 0em`
  vars.upwardSelectionHoverBoxShadow = `0px 0px 2px 0px rgba(0, 0, 0, 0.05)`
  vars.upwardSelectionVisibleBoxShadow = `0px 0px 3px 0px rgba(0, 0, 0, 0.08)`
  vars.upwardSelectionActiveHoverBoxShadow = `0px 0px 3px 0px rgba(0, 0, 0, 0.05)`
  vars.upwardSelectionActiveHoverMenuBoxShadow = `0px -2px 3px 0px rgba(0, 0, 0, 0.08)`

  /* Flyout Direction */
  vars.leftMenuDropdownIconFloat = `left`
  vars.leftMenuDropdownIconMargin = `${vars.itemLineHeightOffset} 0em 0em 0em`

  /* Left */
  vars.leftSubMenuBorderRadius = `${vars.borderRadius}`
  vars.leftSubMenuMargin = `0em ${vars.subMenuDistanceAway} 0em 0em`

  /* Simple */
  vars.simpleTransitionDuration = `${siteVars.defaultDuration}`
  vars.simpleTransition = `opacity ${vars.simpleTransitionDuration} ${siteVars.defaultEasing}`

  /* Floating */
  vars.floatingMenuDistance = `0.5em`
  vars.floatingMenuBoxShadow = `${siteVars.floatingShadow}`
  vars.floatingMenuBorderRadius = `${vars.borderRadius}`

  /* Pointing */
  vars.pointingArrowOffset = `-(${siteVars.pointingArrowSize} / 2)`
  vars.pointingArrowDistanceFromEdge = `1em`

  vars.pointingArrowBackground = `${siteVars.white}`
  vars.pointingArrowZIndex = `2`
  vars.pointingArrowBoxShadow = `-${vars.menuBorderWidth} -${vars.menuBorderWidth} 0px 0px ${vars.menuBorderColor}`
  vars.pointingArrowSize = `${siteVars.relative7px}`

  vars.pointingMenuDistance = `${siteVars.mini}`
  vars.pointingMenuBorderRadius = `${vars.borderRadius}`
  vars.pointingArrowBoxShadow = `-${vars.menuBorderWidth} -${vars.menuBorderWidth} 0px 0px ${vars.menuBorderColor}`

  /* Pointing Upward */
  vars.pointingUpwardMenuBorderRadius = `${vars.borderRadius}`
  vars.pointingUpwardArrowBoxShadow = `${vars.menuBorderWidth} ${vars.menuBorderWidth} 0px 0px ${vars.menuBorderColor}`

  return vars
}
