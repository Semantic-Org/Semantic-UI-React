module.exports = (theme) => {
  const vars = {}

  /*******************************
               Feed
  *******************************/

  /*-------------------
          Feed
  --------------------*/

  vars.margin = `1em 0em`

  /*-------------------
        Elements
  --------------------*/

  /* Event */
  vars.eventWidth = `100%`
  vars.eventPadding = `${theme.absolute3px} 0em`
  vars.eventMargin = `0em`
  vars.eventBackground = `none`
  vars.eventDivider = `none`

  /* Event Label */
  vars.labelWidth = `2.5em`
  vars.labelHeight = `auto`
  vars.labelAlignSelf = `stretch`
  vars.labelTextAlign = `left`

  /* Icon Label */
  vars.iconLabelOpacity = `1`
  vars.iconLabelWidth = `100%`
  vars.iconLabelSize = `1.5em`
  vars.iconLabelPadding = `0.25em`
  vars.iconLabelBackground = `none`
  vars.iconLabelBorderRadius = `none`
  vars.iconLabelBorder = `none`
  vars.iconLabelColor = `rgba(0, 0, 0, 0.6)`

  /* Image Label */
  vars.imageLabelWidth = `100%`
  vars.imageLabelHeight = `auto`
  vars.imageLabelBorderRadius = `${theme.circularRadius}`

  /* Content w/ Label */
  vars.labeledContentMargin = `0.5em 0em ${theme.relative5px} ${theme.relativeLarge}`
  vars.lastLabeledContentPadding = `0em`

  /* Content */
  vars.contentAlignSelf = `stretch`
  vars.contentTextAlign = `left`
  vars.contentWordWrap = `break-word`

  /* Date */
  vars.dateMargin = `-0.5rem 0em 0em`
  vars.datePadding = `0em`
  vars.dateColor = `${theme.lightTextColor}`
  vars.dateFontSize = `${theme.relativeMedium}`
  vars.dateFontWeight = `${theme.normal}`
  vars.dateFontStyle = `${theme.normal}`

  /* Summary */
  vars.summaryMargin = `0em`
  vars.summaryFontSize = `${theme.relativeMedium}`
  vars.summaryFontWeight = `${theme.bold}`
  vars.summaryColor = `${theme.textColor}`

  /* Summary Image */
  vars.summaryImageWidth = `auto`
  vars.summaryImageHeight = `10em`
  vars.summaryImageMargin = `-0.25em 0.25em 0em 0em`
  vars.summaryImageVerticalAlign = `middle`
  vars.summaryImageBorderRadius = `0.25em`

  /* Summary Date */
  vars.summaryDateDisplay = `inline-block`
  vars.summaryDateFloat = `none`
  vars.summaryDateMargin = `0em 0em 0em 0.5em`
  vars.summaryDatePadding = `0em`
  vars.summaryDateFontSize = `${theme.relativeTiny}`
  vars.summaryDateFontWeight = `${vars.dateFontWeight}`
  vars.summaryDateFontStyle = `${vars.dateFontStyle}`
  vars.summaryDateColor = `${vars.dateColor}`

  /* User */
  vars.userFontWeight = `${theme.bold}`
  vars.userDistance = `0em`
  vars.userImageWidth = `${vars.summaryImageWidth}`
  vars.userImageHeight = `${vars.summaryImageHeight}`
  vars.userImageMargin = `${vars.summaryImageMargin}`
  vars.userImageVerticalAlign = `${vars.summaryImageVerticalAlign}`

  /* Extra Summary Data */
  vars.extraMargin = `0.5em 0em 0em`
  vars.extraBackground = `none`
  vars.extraPadding = `0em`
  vars.extraColor = `${theme.textColor}`

  /* Extra Images */
  vars.extraImageMargin = `0em 0.25em 0em 0em`
  vars.extraImageWidth = `6em`

  /* Extra Text */
  vars.extraTextPadding = `0em`
  vars.extraTextPointer = `none`
  vars.extraTextFontSize = `${theme.relativeMedium}`
  vars.extraTextLineHeight = `${theme.lineHeight}`
  vars.extraTextMaxWidth = `500px`

  /* Metadata Group */
  vars.metadataDisplay = `inline-block`
  vars.metadataFontSize = `${theme.relativeTiny}`
  vars.metadataMargin = `0.5em 0em 0em`
  vars.metadataBackground = `none`
  vars.metadataBorder = `none`
  vars.metadataBorderRadius = `0`
  vars.metadataBoxShadow = `none`
  vars.metadataPadding = `0em`
  vars.metadataColor = `rgba(0, 0, 0, 0.6)`

  vars.metadataElementSpacing = `0.75em`

  /* Like */
  vars.likeColor = `''`
  vars.likeHoverColor = `#FF2733`
  vars.likeActiveColor = `#EF404A`
  vars.likeTransition = `0.2s color ease`

  /* Metadata Divider */
  vars.metadataDivider = `''`
  vars.metadataDividerColor = `rgba(0, 0, 0, 0.2)`
  vars.metadataDividerOffset = `-1em`

  vars.metadataActionCursor = `pointer`
  vars.metadataActionOpacity = `1`
  vars.metadataActionColor = `rgba(0, 0, 0, 0.5)`
  vars.metadataActionTransition = `color ${theme.defaultDuration} ${theme.defaultEasing}`

  vars.metadataActionHoverColor = `${theme.selectedTextColor}`

  /*-------------------
        Variations
  --------------------*/

  return vars
}
