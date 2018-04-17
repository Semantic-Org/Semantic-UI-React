module.exports = (theme) => {
  const vars = {}

  /*******************************
              Button
  *******************************/

  /*-------------------
         Element
  --------------------*/
  vars.borderRadius = `${theme.circularRadius}`
  vars.textTransform = `uppercase`
  vars.backgroundColor = `#FFFFFF`
  vars.backgroundImage = `none`
  vars.fontWeight = `bold`
  vars.textColor = `rgba(0, 0, 0, 0.6)`
  vars.boxShadow = `0px 0px 0px 2px rgba(0, 0, 0, 0.2) inset`

  /* Padding */
  vars.verticalPadding = `1.25em`
  vars.horizontalPadding = `3em`

  /* Icon */
  vars.iconOpacity = `0.8`
  vars.iconDistance = `0.4em`
  vars.iconTransition = `opacity ${theme.defaultDuration} ${theme.defaultEasing}`
  vars.iconMargin = `0em ${vars.iconDistance} 0em -(${vars.iconDistance} / 2)`
  vars.iconVerticalAlign = `top`

  /*-------------------
          Group
  --------------------*/

  vars.verticalBoxShadow = `0px 0px 0px 1px ${theme.borderColor} inset`


  /*-------------------
          States
  --------------------*/

  vars.hoverBackgroundColor = `#FAFAFA`
  vars.hoverBackgroundImage = `none`
  vars.hoverBoxShadow = `0px 0px 0px 2px rgba(0, 0, 0, 0.3) inset`

  vars.downBackgroundColor = `#F0F0F0`
  vars.downBackgroundImage = `none`
  vars.downBoxShadow = `0px 0px 0px 2px rgba(0, 0, 0, 0.35) inset !important`

  vars.activeBackgroundColor = `#DDDDDD`
  vars.activeBackgroundImage = `none`
  vars.activeBoxShadow = `0px 0px 0px 2px rgba(0, 0, 0, 0.3) inset !important`

  vars.loadingBackgroundColor = `#FFFFFF`

  /*-------------------
          Types
  --------------------*/

  /* Labeled Icon */
  vars.labeledIconWidth = `1em + (${vars.verticalPadding} * 2)`
  vars.labeledIconBackgroundColor = `transparent`
  vars.labeledIconPadding = `(${vars.horizontalPadding} + 1em)`
  vars.labeledIconBorder = `rgba(0, 0, 0, 0.05)`
  vars.labeledIconColor = `''`

  vars.labeledIconLeftShadow = `none`
  vars.labeledIconRightShadow = `none`

  /* Basic */
  vars.basicBoxShadow = `0px 0px 0px 1px ${theme.borderColor}`
  vars.iconOffset = `0.05em`
  vars.basicLoadingColor = `#FFFFFF`

  vars.basicHoverBackground = `#FAFAFA`
  vars.basicHoverBoxShadow = `0px 0px 0px 1px rgba(0, 0, 0, 0.15)`

  vars.basicDownBackground = `rgba(0, 0, 0, 0.02)`
  vars.basicDownBoxShadow = `0px 0px 0px 1px rgba(0, 0, 0, 0.2)`

  vars.basicActiveBackground = `${theme.transparentBlack}`
  vars.basicActiveColor = `${theme.selectedTextColor}`

  /* Basic Inverted */
  vars.basicInvertedBackground = `transparent`
  vars.basicInvertedHoverBackground = `transparent`
  vars.basicInvertedDownBackground = `${theme.transparentWhite}`
  vars.basicInvertedActiveBackground = `${theme.transparentWhite}`

  vars.basicInvertedBoxShadow = `0px 0px 0px 2px rgba(255, 255, 255, 0.5)`
  vars.basicInvertedHoverBoxShadow = `0px 0px 0px 2px ${theme.selectedWhiteBorderColor}`
  vars.basicInvertedDownBoxShadow = `0px 0px 0px 2px ${theme.selectedWhiteBorderColor}`
  vars.basicInvertedActiveBoxShadow = `0px 0px 0px 2px ${theme.selectedWhiteBorderColor}`

  vars.basicInvertedColor = `${theme.darkWhite}`
  vars.basicInvertedHoverColor = `${theme.darkWhiteHover}`
  vars.basicInvertedDownColor = `${theme.darkWhiteActive}`
  vars.basicInvertedActiveColor = `${theme.invertedTextColor}`


  /* Basic Group */
  vars.basicGroupBorder = `1px solid ${theme.borderColor}`
  vars.basicGroupBoxShadow = `0px 0px 0px 1px ${theme.borderColor}`

  /*-------------------
        Variations
  --------------------*/

  /* Colors */
  vars.coloredBackgroundImage = `linear-gradient(rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.1))`
  vars.coloredBoxShadow = `${theme.shadowBoxShadow}`

  /* Compact */
  vars.compactVerticalPadding = `(${vars.verticalPadding} * 0.75)`
  vars.compactHorizontalPadding = `(${vars.horizontalPadding} * 0.75)`

  /* Attached */
  vars.attachedOffset = `-1px`
  vars.attachedBoxShadow = `0px 0px 0px 1px rgba(0, 0, 0, 0.1)`
  vars.attachedHorizontalPadding = `0.75em`

  /* Floated */
  vars.floatedMargin = `0.25em`

  /* Animated */
  vars.animationDuration = `0.3s`
  vars.animationEasing = `ease`
  vars.fadeScaleHigh = `1.5`
  vars.fadeScaleLow = `0.75`

  /* Sizing */
  vars.mini = `0.7rem`
  vars.tiny = `0.8rem`
  vars.small = `0.875rem`
  vars.medium = `1rem`
  vars.large = `1.125rem`
  vars.big = `1.25rem`
  vars.huge = `1.375rem`
  vars.massive = `1.5rem`


  return vars
}
