// Converted from:
// https://github.com/Semantic-Org/Semantic-UI-LESS/blob/master/themes/default/elements/list.variables
module.exports = (siteVars) => {
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
  vars.itemVerticalPadding = siteVars.relative3px
  vars.itemHorizontalPadding = '0em'
  vars.itemPadding = `${vars.itemVerticalPadding} ${vars.itemHorizontalPadding}`
  vars.itemLineHeight = siteVars.relativeLarge

  /* Sub List */
  vars.childListPadding = '0.75em 0em 0.25em 0.5em'
  vars.childListIndent = '1em'

  /* Sub List Item */
  vars.childItemVerticalPadding = siteVars.relative2px
  vars.childItemHorizontalPadding = '0em'
  vars.childItemPadding = `${vars.childItemVerticalPadding} ${vars.childItemHorizontalPadding}`
  vars.childItemLineHeight = 'inherit'

  /*-------------------
        Elements
  --------------------*/

  /* Icon */
  vars.iconDistance = siteVars.relative4px
  vars.iconOffset = '0em'
  vars.iconTransition = `color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.iconVerticalAlign = 'top'
  vars.iconContentVerticalAlign = 'top'

  /* Image */
  vars.imageDistance = '0.5em'
  vars.imageAlign = 'top'

  /* Content */
  vars.contentDistance = '0.5em'
  vars.contentLineHeight = `${vars.itemLineHeight}`
  vars.contentLineHeightOffset = `calc(${vars.contentLineHeight} - 1em) / 2`
  vars.contentVerticalAlign = 'top'

  /* Header */
  vars.itemHeaderFontFamily = siteVars.headerFont
  vars.itemHeaderFontWeight = siteVars.bold
  vars.itemHeaderColor = siteVars.textColor

  /* Description */
  vars.itemDescriptionColor = 'rgba(0, 0, 0, 0.7)'

  /* Link */
  vars.itemLinkColor = siteVars.linkColor
  vars.itemLinkHoverColor = siteVars.linkHoverColor

  /* Header Link */
  vars.itemHeaderLinkColor = `${vars.itemLinkColor}`
  vars.itemHeaderLinkHoverColor = `${vars.itemLinkHoverColor}`

  /* Linked Icon */
  vars.itemLinkIconColor = siteVars.lightTextColor
  vars.itemLinkIconHoverColor = siteVars.textColor
  vars.invertedIconLinkColor = siteVars.invertedLightTextColor

  /*-------------------
          States
  --------------------*/

  vars.disabledColor = siteVars.disabledTextColor
  vars.invertedDisabledColor = siteVars.invertedDisabledTextColor

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
  vars.invertedListIconColor = siteVars.invertedLightTextColor
  vars.invertedHeaderColor = siteVars.invertedTextColor
  vars.invertedDescriptionColor = siteVars.invertedLightTextColor
  vars.invertedItemLinkColor = siteVars.invertedTextColor
  vars.invertedItemLinkHoverColor = siteVars.linkHoverColor

  /* Link List */
  vars.linkListItemColor = siteVars.unselectedTextColor
  vars.linkListItemHoverColor = siteVars.hoveredTextColor
  vars.linkListItemDownColor = siteVars.pressedTextColor
  vars.linkListItemActiveColor = siteVars.selectedTextColor
  vars.linkListTransition = `${siteVars.defaultDuration} color ${siteVars.defaultEasing}`

  /* Inverted Link List */
  vars.invertedLinkListItemColor = siteVars.invertedUnselectedTextColor
  vars.invertedLinkListItemHoverColor = siteVars.invertedHoveredTextColor
  vars.invertedLinkListItemDownColor = siteVars.invertedPressedTextColor
  vars.invertedLinkListItemActiveColor = siteVars.invertedSelectedTextColor

  /* Selection List */
  vars.selectionListItemMargin = '0em'
  vars.selectionListItemBorderRadius = '0.5em'
  vars.selectionListItemVerticalPadding = '0.5em'
  vars.selectionListItemHorizontalPadding = '0.5em'
  vars.selectionListTransition = `${siteVars.defaultDuration} color ${siteVars.defaultEasing},
    ${siteVars.defaultDuration} padding-left ${siteVars.defaultEasing},
    ${siteVars.defaultDuration} background-color ${siteVars.defaultEasing}`

  /* Selection List States */
  vars.selectionListBackground = 'transparent'
  vars.selectionListColor = siteVars.unselectedTextColor
  vars.selectionListHoverBackground = siteVars.subtleTransparentBlack
  vars.selectionListHoverColor = siteVars.hoveredTextColor
  vars.selectionListDownBackground = siteVars.transparentBlack
  vars.selectionListDownColor = siteVars.pressedTextColor
  vars.selectionListActiveBackground = siteVars.transparentBlack
  vars.selectionListActiveColor = siteVars.selectedTextColor

  /* Inverted Selection List */
  vars.invertedSelectionListBackground = 'transparent'
  vars.invertedSelectionListColor = siteVars.invertedUnselectedTextColor
  vars.invertedSelectionListHoverBackground = siteVars.subtleTransparentWhite
  vars.invertedSelectionListHoverColor = siteVars.invertedHoveredTextColor
  vars.invertedSelectionListDownBackground = siteVars.transparentWhite
  vars.invertedSelectionListDownColor = siteVars.invertedPressedTextColor
  vars.invertedSelectionListActiveBackground = siteVars.transparentWhite
  vars.invertedSelectionListActiveColor = siteVars.invertedSelectedTextColor

  /* Animated List */
  vars.animatedDuration = '0.25s'
  vars.animatedDelay = '0.1s'
  vars.animatedListTransition = `${vars.animatedDuration} color ${siteVars.defaultEasing} ${vars.animatedDelay},
    ${vars.animatedDuration} padding-left ${siteVars.defaultEasing} ${vars.animatedDelay},
    ${vars.animatedDuration} background-color ${siteVars.defaultEasing} ${vars.animatedDelay}`
  vars.animatedListIndent = '1em'

  /* Bulleted */
  vars.bulletDistance = '1.25rem'
  vars.bulletOffset = `-${vars.bulletDistance}`

  vars.bulletOpacity = '1'
  vars.bulletCharacter = '•'
  vars.bulletColor = 'inherit'
  vars.bulletLinkColor = siteVars.textColor
  vars.bulletVerticalAlign = 'top'
  vars.bulletChildDistance = `${vars.bulletDistance}`

  /* Horizontal Bullets */
  vars.horizontalBulletColor = siteVars.textColor
  vars.horizontalBulletSpacing = `${vars.bulletDistance} + 0.5em`

  /* Ordered List */
  vars.orderedCountName = 'ordered'
  vars.orderedCountContent = 'counters(ordered, ".") " "'
  vars.orderedCountColor = siteVars.textColor
  vars.orderedCountDistance = '1.25rem'
  vars.orderedCountOpacity = '0.8'
  vars.orderedCountTextAlign = 'right'
  vars.orderedCountVerticalAlign = 'middle'

  vars.orderedChildCountDistance = '1em'
  vars.orderedChildCountOffset = '-2em'

  vars.orderedInvertedCountColor = siteVars.invertedLightTextColor

  /* Horizontal Ordered */
  vars.horizontalOrderedCountDistance = '0.5em'

  /* Divided */
  vars.dividedBorderWidth = '1px'
  vars.dividedBorder = `${vars.dividedBorderWidth} solid ${siteVars.borderColor}`
  vars.dividedInvertedBorderColor = siteVars.whiteBorderColor
  vars.dividedChildListBorder = 'none'
  vars.dividedChildItemBorder = 'none'

  /* Divided Horizontal */
  vars.horizontalDividedSpacing = `calc(${vars.horizontalSpacing} / 2)`
  vars.horizontalDividedLineHeight = '0.6'

  /* Divided */
  vars.celledBorderWidth = '1px'
  vars.celledBorder = `${vars.celledBorderWidth} solid ${siteVars.borderColor}`
  vars.celledInvertedBorder = `${vars.dividedBorderWidth} solid ${siteVars.whiteBorderColor}`
  vars.celledHorizontalPadding = '0.5em'
  vars.celledChildListBorder = 'none'
  vars.celledChildItemBorder = 'none'

  /* Divided Horizontal */
  vars.horizontalCelledSpacing = `calc(${vars.horizontalSpacing} / 2)`
  vars.horizontalCelledLineHeight = '0.6'

  /* Relaxed */
  vars.relaxedItemVerticalPadding = siteVars.relative6px
  vars.relaxedChildItemVerticalPadding = siteVars.relative3px
  vars.relaxedHeaderMargin = '0.25rem'
  vars.relaxedHorizontalPadding = '1rem'

  /* Very Relaxed */
  vars.veryRelaxedItemVerticalPadding = siteVars.relative12px
  vars.veryRelaxedChildItemVerticalPadding = siteVars.relative4px
  vars.veryRelaxedHeaderMargin = '0.5rem'
  vars.veryRelaxedHorizontalPadding = '1.5rem'

  return vars
}
