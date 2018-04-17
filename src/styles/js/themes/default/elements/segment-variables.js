module.exports = (theme) => {
  const vars = {}

  /*******************************
              Segment
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.background = `${theme.white}`
  vars.borderWidth = `1px`
  vars.border = `${vars.borderWidth} solid ${theme.borderColor}`

  vars.boxShadow = `${theme.subtleShadow}`
  vars.verticalPadding = `1em`
  vars.horizontalPadding = `1em`
  vars.padding = `${vars.verticalPadding} ${vars.horizontalPadding}`

  vars.verticalMargin = `1rem`
  vars.horizontalMargin = `0em`
  vars.margin = `${vars.verticalMargin} ${vars.horizontalMargin}`
  vars.borderRadius = `${theme.defaultBorderRadius}`

  /*-------------------
         Group
  --------------------*/

  vars.groupedMargin = `${vars.margin}`
  vars.groupedBorder = `${vars.border}`
  vars.groupedBoxShadow = `${vars.boxShadow}`
  vars.groupedBorderRadius = `${vars.borderRadius}`

  vars.nestedGroupMargin = `${vars.verticalMargin} ${vars.verticalMargin}`

  vars.groupedSegmentBorder = `none`
  vars.groupedSegmentDivider = `${vars.border}`
  vars.groupedSegmentMargin = `0em`
  vars.groupedSegmentWidth = `auto`
  vars.groupedSegmentBoxShadow = `none`

  /*-------------------
         Coupling
  --------------------*/

  /* Page Grid Segment */
  vars.pageGridMargin = `(2 * ${vars.verticalPadding})`

  /*******************************
              States
  *******************************/

  /* Loading Dimmer */
  vars.loaderDimmerColor = `rgba(255, 255, 255, 0.8)`
  vars.loaderDimmerZIndex = `100`

  /* Loading Spinner */
  vars.loaderSize = `3em`
  vars.loaderLineZIndex = `101`


  /*******************************
              Variations
  *******************************/

  /* Piled */
  vars.piledZIndex = `auto`
  vars.piledMargin = `3em`
  vars.piledBoxShadow = `''`
  vars.piledDegrees = `1.2deg`
  vars.piledBorder = `${vars.border}`

  /* Circular */
  vars.circularPadding = `2em`

  /* Stacked */
  vars.stackedHeight = `6px`
  vars.stackedPageBackground = `${theme.subtleTransparentBlack}`
  vars.stackedPadding = `${vars.verticalPadding} + (0.4em)`
  vars.tallStackedPadding = `${vars.verticalPadding} + (0.8em)`

  /* Raised */
  vars.raisedBoxShadow = `${theme.floatingShadow}`

  /* Padded */
  vars.paddedSegmentPadding = `1.5em`
  vars.veryPaddedSegmentPadding = `3em`

  /* Attached */
  vars.attachedTopOffset = `0px`
  vars.attachedBottomOffset = `0px`
  vars.attachedHorizontalOffset = `-${vars.borderWidth}`
  vars.attachedWidth = `~"calc(100% + "-${vars.attachedHorizontalOffset} * 2~")"`
  vars.attachedBoxShadow = `none`
  vars.attachedBorder = `${vars.borderWidth} solid ${theme.solidBorderColor}`
  vars.attachedBottomBoxShadow = `${vars.boxShadow},
    ${vars.attachedBoxShadow}`

  /* Inverted */
  vars.invertedBackground = `${theme.black}`

  /* Floated */
  vars.floatedDistance = `1em`

  /* Basic */
  vars.basicBackground = `none transparent`
  vars.basicBorder = `none`
  vars.basicBoxShadow = `none`
  vars.basicBorderRadius = `0px`

  /* Colors */
  vars.coloredBorderSize = `2px`

  /* Ordinality */
  vars.secondaryBackground = `${theme.darkWhite}`
  vars.secondaryColor = `${theme.mutedTextColor}`

  vars.tertiaryBackground = `${theme.midWhite}`
  vars.tertiaryColor = `${theme.mutedTextColor}`

  vars.secondaryInvertedLightness = `0.2`
  vars.secondaryInvertedBackground = `lighten(${theme.black}, (${vars.secondaryInvertedLightness} * 100))
    linear-gradient(
      rgba(255, 255, 255, ${vars.secondaryInvertedLightness}) 0%,
      rgba(255, 255, 255, ${vars.secondaryInvertedLightness}) 100%
    )`
  vars.secondaryInvertedColor = `${theme.invertedMutedTextColor}`

  vars.tertiaryInvertedLightness = `0.35`
  vars.tertiaryInvertedBackground = `lighten(${theme.black}, (${vars.tertiaryInvertedLightness} * 100))
    linear-gradient(
      rgba(255, 255, 255, ${vars.tertiaryInvertedLightness}) 0%,
      rgba(255, 255, 255, ${vars.tertiaryInvertedLightness}) 100%
    )`
  vars.tertiaryInvertedColor = `${theme.invertedMutedTextColor}`

  return vars
}
