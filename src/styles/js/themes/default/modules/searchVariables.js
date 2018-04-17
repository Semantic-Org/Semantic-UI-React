module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Search
  *******************************/

  /* Search Prompt */
  vars.promptBackground = `${siteVars.inputBackground}`
  vars.promptVerticalPadding = `${siteVars.inputVerticalPadding}`
  vars.promptHorizontalPadding = `${siteVars.inputHorizontalPadding}`
  vars.promptLineHeight = `${siteVars.inputLineHeight}`
  vars.promptFontSize = `${siteVars.relativeMedium}`
  vars.promptPadding = `(${vars.promptVerticalPadding} + ((1em - ${vars.promptLineHeight}) / 2)) ${vars.promptHorizontalPadding}`
  vars.promptBorder = `1px solid ${siteVars.borderColor}`
  vars.promptBorderRadius = `${siteVars.circularRadius}`
  vars.promptColor = `${siteVars.textColor}`
  vars.promptTransition = `background-color ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    color ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    box-shadow ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    border-color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.promptBoxShadow = `0em 0em 0em 0em transparent inset`

  /* Mobile */
  vars.mobileMaxWidth = `~"calc(100vw - 2rem)"`

  /* Result Box */
  vars.resultsWidth = `18em`
  vars.resultsBackground = `#FFFFFF`
  vars.resultsDistance = `0.5em`
  vars.resultsBorderRadius = `${siteVars.defaultBorderRadius}`
  vars.resultsBorder = `1px solid ${siteVars.solidBorderColor}`
  vars.resultsBoxShadow = `${siteVars.floatingShadow}`

  /* Result */
  vars.resultFontSize = `1em`
  vars.resultVerticalPadding = `${siteVars.relativeTiny}`
  vars.resultHorizontalPadding = `${siteVars.relativeLarge}`
  vars.resultPadding = `${vars.resultVerticalPadding} ${vars.resultHorizontalPadding}`
  vars.resultTextColor = `${siteVars.textColor}`
  vars.resultLineHeight = `1.33`
  vars.resultDivider = `1px solid ${siteVars.internalBorderColor}`
  vars.resultLastDivider = `none`

  /* Result Image */
  vars.resultImageFloat = `right`
  vars.resultImageBackground = `none`
  vars.resultImageWidth = `5em`
  vars.resultImageHeight = `3em`
  vars.resultImageBorderRadius = `0.25em`
  vars.resultImageMargin = `0em 6em 0em 0em`

  /* Result Content */
  vars.resultTitleFont = `${siteVars.headerFont}`
  vars.resultTitleMargin = `-${siteVars.headerLineHeightOffset} 0em 0em`
  vars.resultTitleFontWeight = `${siteVars.bold}`
  vars.resultTitleFontSize = `${siteVars.relativeMedium}`
  vars.resultTitleColor = `${siteVars.darkTextColor}`

  /* Description */
  vars.resultDescriptionFontSize = `${siteVars.relativeSmall}`
  vars.resultDescriptionDistance = `0`
  vars.resultDescriptionColor = `${siteVars.lightTextColor}`

  /* Price */
  vars.resultPriceFloat = `right`
  vars.resultPriceColor = `${siteVars.green}`

  /* Special Message */
  vars.messageVerticalPadding = `1em`
  vars.messageHorizontalPadding = `1em`
  vars.messageHeaderFontSize = `${siteVars.medium}`
  vars.messageHeaderFontWeight = `${siteVars.bold}`
  vars.messageHeaderColor = `${siteVars.textColor}`
  vars.messageDescriptionDistance = `0.25rem`
  vars.messageDescriptionFontSize = `1em`
  vars.messageDescriptionColor = `${siteVars.textColor}`

  /* All Results Link */
  vars.actionBorder = `none`
  vars.actionBackground = `${siteVars.darkWhite}`
  vars.actionPadding = `${siteVars.relativeSmall} ${siteVars.relativeMedium}`
  vars.actionColor = `${siteVars.textColor}`
  vars.actionFontWeight = `${siteVars.bold}`
  vars.actionAlign = `center`


  /*******************************
              States
  *******************************/

  /* Focus */
  vars.promptFocusBackground = `${vars.promptBackground}`
  vars.promptFocusBorderColor = `${siteVars.selectedBorderColor}`
  vars.promptFocusColor = `${siteVars.selectedTextColor}`

  /* Hover */
  vars.resultHoverBackground = `${siteVars.offWhite}`
  vars.actionHoverBackground = `#E0E0E0`

  /* Loading */
  vars.invertedLoaderFillColor = `rgba(0, 0, 0, 0.15)`

  /* Active Category */
  vars.categoryActiveBackground = `${siteVars.darkWhite}`
  vars.categoryNameActiveColor = `${siteVars.textColor}`

  /* Active Result */
  vars.resultActiveBorderLeft = `${siteVars.internalBorderColor}`
  vars.resultActiveBackground = `${siteVars.darkWhite}`
  vars.resultActiveBoxShadow = `none`
  vars.resultActiveTitleColor = `${siteVars.darkTextColor}`
  vars.resultActiveDescriptionColor = `${siteVars.darkTextColor}`
  vars.resultsZIndex = `998`


  /*******************************
              Types
  *******************************/

  /* Selection */
  vars.selectionPromptBorderRadius = `${siteVars.defaultBorderRadius}`

  vars.selectionCloseTop = `0em`
  vars.selectionCloseTransition = `color ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    opacity ${siteVars.defaultDuration} ${siteVars.defaultEasing}`
  vars.selectionCloseRight = `0em`
  vars.selectionCloseIconOpacity = `0.8`
  vars.selectionCloseIconColor = `''`
  vars.selectionCloseIconHoverOpacity = `1`
  vars.selectionCloseIconHoverColor = `${siteVars.red}`

  vars.selectionCloseIconInputRight = `1.85714em`

  /* Category */
  vars.categoryBackground = `${siteVars.darkWhite}`
  vars.categoryBoxShadow = `none`
  vars.categoryDivider = `1px solid ${siteVars.internalBorderColor}`
  vars.categoryTransition = `background ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    border-color ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

  vars.categoryResultsWidth = `28em`

  vars.categoryResultBackground = `${siteVars.white}`
  vars.categoryResultLeftBorder = `1px solid ${siteVars.borderColor}`
  vars.categoryResultDivider = `${vars.resultDivider}`
  vars.categoryResultLastDivider = `none`
  vars.categoryResultPadding = `${vars.resultPadding}`
  vars.categoryResultTransition = `${vars.categoryTransition}`

  vars.categoryNameWidth = `100px`
  vars.categoryNameBackground = `transparent`
  vars.categoryNameFont = `${siteVars.pageFont}`
  vars.categoryNameFontSize = `1em`
  vars.categoryNameWhitespace = `nowrap`
  vars.categoryNamePadding = `0.4em 1em`
  vars.categoryNameFontWeight = `${siteVars.bold}`
  vars.categoryNameColor = `${siteVars.lightTextColor}`

  return vars
}
