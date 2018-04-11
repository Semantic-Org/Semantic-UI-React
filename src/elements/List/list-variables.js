// Converted from:
// https://github.com/Semantic-Org/Semantic-UI-LESS/blob/master/themes/default/elements/list.variables
module.exports = (theme) => {
  const vars = {}

  /*-------------------
           View
  --------------------*/

  /* List */
  vars.listStyleType = 'none'
  vars.listStylePosition = 'outside'
  vars.margin = '1em 0em'
  vars.verticalPadding = '0em'
  vars.horizontalPadding = '0em'

  /* List Item */
  vars.itemVerticalPadding = theme.relative3px
  vars.itemHorizontalPadding = '0em'
  vars.itemPadding = `${vars.itemVerticalPadding} ${vars.itemHorizontalPadding}`
  vars.itemLineHeight = theme.relativeLarge

  /* Sub List */
  vars.childListPadding = '0.75em 0em 0.25em 0.5em'
  vars.childListIndent = '1em'

  /* Sub List Item */
  vars.childItemVerticalPadding = theme.relative2px
  vars.childItemHorizontalPadding = '0em'
  vars.childItemPadding = `${vars.childItemVerticalPadding} ${vars.childItemHorizontalPadding}`
  vars.childItemLineHeight = 'inherit'

  /*-------------------
        Elements
  --------------------*/

  /* Icon */
  vars.iconDistance = theme.relative4px
  vars.iconOffset = '0em'
  vars.iconTransition = `color ${theme.defaultDuration} ${theme.defaultEasing}`
  vars.iconVerticalAlign = 'top'
  vars.iconContentVerticalAlign = 'top'

  /* Image */
  vars.imageDistance = '0.5em'
  vars.imageAlign = 'top'

  /* Content */
  vars.contentDistance = '0.5em'
  vars.contentLineHeight = vars.itemLineHeight
  vars.contentLineHeightOffset = `(${vars.contentLineHeight} - 1em) / 2`
  vars.contentVerticalAlign = 'top'

  /* Header */
  vars.itemHeaderFontFamily = theme.headerFont
  vars.itemHeaderFontWeight = theme.bold
  vars.itemHeaderColor = theme.textColor

  /* Description */
  vars.itemDescriptionColor = 'rgba(0, 0, 0, 0.7)'

  /* Link */
  vars.itemLinkColor = theme.linkColor
  vars.itemLinkHoverColor = theme.linkHoverColor

  /* Header Link */
  vars.itemHeaderLinkColor = vars.itemLinkColor
  vars.itemHeaderLinkHoverColor = vars.itemLinkHoverColor

  /* Linked Icon */
  vars.itemLinkIconColor = theme.lightTextColor
  vars.itemLinkIconHoverColor = theme.textColor
  vars.invertedIconLinkColor = theme.invertedLightTextColor

  /*-------------------
          States
  --------------------*/

  vars.disabledColor = theme.disabledTextColor
  vars.invertedDisabledColor = theme.invertedDisabledTextColor

  /*-------------------
        Variations
  --------------------*/

  /* Float */
  vars.floatDistance = '1em'
  vars.leftFloatMargin = `0em ${vars.floatDistance} 0em 0em`
  vars.rightFloatMargin = `0em 0em 0em ${vars.floatDistance}`

  /* Horizontal */
  vars.horizontalSpacing = '1em'
  vars.horizontalIconDistance = '0.25em'
  vars.horizontalVerticalAlign = 'middle'

  /* Inverted */
  vars.invertedListIconColor = theme.invertedLightTextColor
  vars.invertedHeaderColor = theme.invertedTextColor
  vars.invertedDescriptionColor = theme.invertedLightTextColor
  vars.invertedItemLinkColor = theme.invertedTextColor
  vars.invertedItemLinkHoverColor = theme.linkHoverColor

  /* Link List */
  vars.linkListItemColor = theme.unselectedTextColor
  vars.linkListItemHoverColor = theme.hoveredTextColor
  vars.linkListItemDownColor = theme.pressedTextColor
  vars.linkListItemActiveColor = theme.selectedTextColor
  vars.linkListTransition = `${theme.defaultDuration} color ${theme.defaultEasing}`

  /* Inverted Link List */
  vars.invertedLinkListItemColor = theme.invertedUnselectedTextColor
  vars.invertedLinkListItemHoverColor = theme.invertedHoveredTextColor
  vars.invertedLinkListItemDownColor = theme.invertedPressedTextColor
  vars.invertedLinkListItemActiveColor = theme.invertedSelectedTextColor

  /* Selection List */
  vars.selectionListItemMargin = '0em'
  vars.selectionListItemBorderRadius = '0.5em'
  vars.selectionListItemVerticalPadding = '0.5em'
  vars.selectionListItemHorizontalPadding = '0.5em'
  vars.selectionListTransition = `${theme.defaultDuration} color ${theme.defaultEasing}, ${theme.defaultDuration} padding-left ${theme.defaultEasing}, ${theme.defaultDuration} background-color ${theme.defaultEasing}`

  /* Selection List States */
  vars.selectionListBackground = 'transparent'
  vars.selectionListColor = theme.unselectedTextColor
  vars.selectionListHoverBackground = theme.subtleTransparentBlack
  vars.selectionListHoverColor = theme.hoveredTextColor
  vars.selectionListDownBackground = theme.transparentBlack
  vars.selectionListDownColor = theme.pressedTextColor
  vars.selectionListActiveBackground = theme.transparentBlack
  vars.selectionListActiveColor = theme.selectedTextColor

  /* Inverted Selection List */
  vars.invertedSelectionListBackground = 'transparent'
  vars.invertedSelectionListColor = theme.invertedUnselectedTextColor
  vars.invertedSelectionListHoverBackground = theme.subtleTransparentWhite
  vars.invertedSelectionListHoverColor = theme.invertedHoveredTextColor
  vars.invertedSelectionListDownBackground = theme.transparentWhite
  vars.invertedSelectionListDownColor = theme.invertedPressedTextColor
  vars.invertedSelectionListActiveBackground = theme.transparentWhite
  vars.invertedSelectionListActiveColor = theme.invertedSelectedTextColor

  /* Animated List */
  vars.animatedDuration = '0.25s'
  vars.animatedDelay = '0.1s'
  vars.animatedListTransition = `${vars.animatedDuration} color ${theme.defaultEasing} ${vars.animatedDelay}, ${vars.animatedDuration} padding-left ${theme.defaultEasing} ${vars.animatedDelay}, ${vars.animatedDuration} background-color ${theme.defaultEasing} ${vars.animatedDelay}`
  vars.animatedListIndent = '1em'

  /* Bulleted */
  vars.bulletDistance = '1.25rem'
  vars.bulletOffset = `-${vars.bulletDistance}`

  vars.bulletOpacity = '1'
  vars.bulletCharacter = '•'
  vars.bulletColor = 'inherit'
  vars.bulletLinkColor = theme.textColor
  vars.bulletVerticalAlign = 'top'
  vars.bulletChildDistance = vars.bulletDistance

  /* Horizontal Bullets */
  vars.horizontalBulletColor = theme.textColor
  vars.horizontalBulletSpacing = `${vars.bulletDistance} + 0.5em`

  /* Ordered List */
  vars.orderedCountName = 'ordered'
  vars.orderedCountContent = 'counters(ordered, ".") " "'
  vars.orderedCountColor = theme.textColor
  vars.orderedCountDistance = '1.25rem'
  vars.orderedCountOpacity = '0.8'
  vars.orderedCountTextAlign = 'right'
  vars.orderedCountVerticalAlign = 'middle'

  vars.orderedChildCountDistance = '1em'
  vars.orderedChildCountOffset = '-2em'

  vars.orderedInvertedCountColor = theme.invertedLightTextColor

  /* Horizontal Ordered */
  vars.horizontalOrderedCountDistance = '0.5em'

  /* Divided */
  vars.dividedBorderWidth = '1px'
  vars.dividedBorder = `${vars.dividedBorderWidth} solid ${theme.borderColor}`
  vars.dividedInvertedBorderColor = theme.whiteBorderColor
  vars.dividedChildListBorder = 'none'
  vars.dividedChildItemBorder = 'none'

  /* Divided Horizontal */
  vars.horizontalDividedSpacing = `(${vars.horizontalSpacing} / 2)`
  vars.horizontalDividedLineHeight = '0.6'

  /* Divided */
  vars.celledBorderWidth = '1px'
  vars.celledBorder = `${vars.celledBorderWidth} solid ${theme.borderColor}`
  vars.celledInvertedBorder = `${vars.dividedBorderWidth} solid ${theme.whiteBorderColor}`
  vars.celledHorizontalPadding = '0.5em'
  vars.celledChildListBorder = 'none'
  vars.celledChildItemBorder = 'none'

  /* Divided Horizontal */
  vars.horizontalCelledSpacing = `(${vars.horizontalSpacing} / 2)`
  vars.horizontalCelledLineHeight = '0.6'

  /* Relaxed */
  vars.relaxedItemVerticalPadding = theme.relative6px
  vars.relaxedChildItemVerticalPadding = theme.relative3px
  vars.relaxedHeaderMargin = '0.25rem'
  vars.relaxedHorizontalPadding = '1rem'

  /* Very Relaxed */
  vars.veryRelaxedItemVerticalPadding = theme.relative12px
  vars.veryRelaxedChildItemVerticalPadding = theme.relative4px
  vars.veryRelaxedHeaderMargin = '0.5rem'
  vars.veryRelaxedHorizontalPadding = '1.5rem'

  return vars
}
