module.exports = (theme) => {
  const vars = {}

  /*******************************
              Search
  *******************************/

  /* Search Prompt */
  vars.promptBackground = `${theme.inputBackground}`
  vars.promptVerticalPadding = `${theme.inputVerticalPadding}`
  vars.promptHorizontalPadding = `${theme.inputHorizontalPadding}`
  vars.promptLineHeight = `${theme.inputLineHeight}`
  vars.promptFontSize = `${theme.relativeMedium}`
  vars.promptPadding = `(${vars.promptVerticalPadding} + ((1em - ${vars.promptLineHeight}) / 2)) ${vars.promptHorizontalPadding}`
  vars.promptBorder = `1px solid ${theme.borderColor}`
  vars.promptBorderRadius = `${theme.circularRadius}`
  vars.promptColor = `${theme.textColor}`
  vars.promptTransition = `background-color ${theme.defaultDuration} ${theme.defaultEasing},
    color ${theme.defaultDuration} ${theme.defaultEasing},
    box-shadow ${theme.defaultDuration} ${theme.defaultEasing},
    border-color ${theme.defaultDuration} ${theme.defaultEasing}`
  vars.promptBoxShadow = `0em 0em 0em 0em transparent inset`

  /* Mobile */
  vars.mobileMaxWidth = `~"calc(100vw - 2rem)"`

  /* Result Box */
  vars.resultsWidth = `18em`
  vars.resultsBackground = `#FFFFFF`
  vars.resultsDistance = `0.5em`
  vars.resultsBorderRadius = `${theme.defaultBorderRadius}`
  vars.resultsBorder = `1px solid ${theme.solidBorderColor}`
  vars.resultsBoxShadow = `${theme.floatingShadow}`

  /* Result */
  vars.resultFontSize = `1em`
  vars.resultVerticalPadding = `${theme.relativeTiny}`
  vars.resultHorizontalPadding = `${theme.relativeLarge}`
  vars.resultPadding = `${vars.resultVerticalPadding} ${vars.resultHorizontalPadding}`
  vars.resultTextColor = `${theme.textColor}`
  vars.resultLineHeight = `1.33`
  vars.resultDivider = `1px solid ${theme.internalBorderColor}`
  vars.resultLastDivider = `none`

  /* Result Image */
  vars.resultImageFloat = `right`
  vars.resultImageBackground = `none`
  vars.resultImageWidth = `5em`
  vars.resultImageHeight = `3em`
  vars.resultImageBorderRadius = `0.25em`
  vars.resultImageMargin = `0em 6em 0em 0em`

  /* Result Content */
  vars.resultTitleFont = `${theme.headerFont}`
  vars.resultTitleMargin = `-${theme.headerLineHeightOffset} 0em 0em`
  vars.resultTitleFontWeight = `${theme.bold}`
  vars.resultTitleFontSize = `${theme.relativeMedium}`
  vars.resultTitleColor = `${theme.darkTextColor}`

  /* Description */
  vars.resultDescriptionFontSize = `${theme.relativeSmall}`
  vars.resultDescriptionDistance = `0`
  vars.resultDescriptionColor = `${theme.lightTextColor}`

  /* Price */
  vars.resultPriceFloat = `right`
  vars.resultPriceColor = `${theme.green}`

  /* Special Message */
  vars.messageVerticalPadding = `1em`
  vars.messageHorizontalPadding = `1em`
  vars.messageHeaderFontSize = `${theme.medium}`
  vars.messageHeaderFontWeight = `${theme.bold}`
  vars.messageHeaderColor = `${theme.textColor}`
  vars.messageDescriptionDistance = `0.25rem`
  vars.messageDescriptionFontSize = `1em`
  vars.messageDescriptionColor = `${theme.textColor}`

  /* All Results Link */
  vars.actionBorder = `none`
  vars.actionBackground = `${theme.darkWhite}`
  vars.actionPadding = `${theme.relativeSmall} ${theme.relativeMedium}`
  vars.actionColor = `${theme.textColor}`
  vars.actionFontWeight = `${theme.bold}`
  vars.actionAlign = `center`


  /*******************************
              States
  *******************************/

  /* Focus */
  vars.promptFocusBackground = `${vars.promptBackground}`
  vars.promptFocusBorderColor = `${theme.selectedBorderColor}`
  vars.promptFocusColor = `${theme.selectedTextColor}`

  /* Hover */
  vars.resultHoverBackground = `${theme.offWhite}`
  vars.actionHoverBackground = `#E0E0E0`

  /* Loading */
  vars.invertedLoaderFillColor = `rgba(0, 0, 0, 0.15)`

  /* Active Category */
  vars.categoryActiveBackground = `${theme.darkWhite}`
  vars.categoryNameActiveColor = `${theme.textColor}`

  /* Active Result */
  vars.resultActiveBorderLeft = `${theme.internalBorderColor}`
  vars.resultActiveBackground = `${theme.darkWhite}`
  vars.resultActiveBoxShadow = `none`
  vars.resultActiveTitleColor = `${theme.darkTextColor}`
  vars.resultActiveDescriptionColor = `${theme.darkTextColor}`
  vars.resultsZIndex = `998`


  /*******************************
              Types
  *******************************/

  /* Selection */
  vars.selectionPromptBorderRadius = `${theme.defaultBorderRadius}`

  vars.selectionCloseTop = `0em`
  vars.selectionCloseTransition = `color ${theme.defaultDuration} ${theme.defaultEasing},
    opacity ${theme.defaultDuration} ${theme.defaultEasing}`
  vars.selectionCloseRight = `0em`
  vars.selectionCloseIconOpacity = `0.8`
  vars.selectionCloseIconColor = `''`
  vars.selectionCloseIconHoverOpacity = `1`
  vars.selectionCloseIconHoverColor = `${theme.red}`

  vars.selectionCloseIconInputRight = `1.85714em`

  /* Category */
  vars.categoryBackground = `${theme.darkWhite}`
  vars.categoryBoxShadow = `none`
  vars.categoryDivider = `1px solid ${theme.internalBorderColor}`
  vars.categoryTransition = `background ${theme.defaultDuration} ${theme.defaultEasing},
    border-color ${theme.defaultDuration} ${theme.defaultEasing}`

  vars.categoryResultsWidth = `28em`

  vars.categoryResultBackground = `${theme.white}`
  vars.categoryResultLeftBorder = `1px solid ${theme.borderColor}`
  vars.categoryResultDivider = `${vars.resultDivider}`
  vars.categoryResultLastDivider = `none`
  vars.categoryResultPadding = `${vars.resultPadding}`
  vars.categoryResultTransition = `${vars.categoryTransition}`

  vars.categoryNameWidth = `100px`
  vars.categoryNameBackground = `transparent`
  vars.categoryNameFont = `${theme.pageFont}`
  vars.categoryNameFontSize = `1em`
  vars.categoryNameWhitespace = `nowrap`
  vars.categoryNamePadding = `0.4em 1em`
  vars.categoryNameFontWeight = `${theme.bold}`
  vars.categoryNameColor = `${theme.lightTextColor}`

  return vars
}
