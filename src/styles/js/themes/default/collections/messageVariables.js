module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Message
  *******************************/

  // ${siteVars.textColor}

  /*-------------------
         Elements
  --------------------*/

  vars.verticalMargin = `1em`
  vars.verticalPadding = `1em`
  vars.horizontalPadding = `1.5em`
  vars.padding = `${vars.verticalPadding} ${vars.horizontalPadding}`
  vars.background = `#F8F8F9`
  vars.lineHeightOffset = `((${siteVars.lineHeight} - 1em) / 2)`

  vars.borderRadius = `${siteVars.defaultBorderRadius}`
  vars.borderWidth = `1px`
  vars.borderShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.strongBorderColor} inset`
  vars.shadowShadow = `0px 0px 0px 0px rgba(0, 0, 0, 0)`
  vars.boxShadow = `${vars.borderShadow},
    ${vars.shadowShadow}`

  vars.transition = `opacity ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    color ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    background ${siteVars.defaultDuration} ${siteVars.defaultEasing},
    box-shadow ${siteVars.defaultDuration} ${siteVars.defaultEasing}`

  /* Header */
  vars.headerFontSize = `${siteVars.relativeLarge}`
  vars.headerFontWeight = `${siteVars.bold}`
  vars.headerDisplay = `block`
  vars.headerDistance = `0rem`
  vars.headerMargin = `-${siteVars.headerLineHeightOffset} 0em ${vars.headerDistance} 0em`
  vars.headerParagraphDistance = `0.25em`

  /* Paragraph */
  vars.messageTextOpacity = `0.85`
  vars.messageParagraphMargin = `0.75em`

  /* List */
  vars.listOpacity = `0.85`
  vars.listStylePosition = `inside`
  vars.listMargin = `0.5em`
  vars.listItemIndent = `1em`
  vars.listItemMargin = `0.3em`

  /* Icon */
  vars.iconDistance = `0.6em`

  /* Close Icon */
  vars.closeTopDistance = `${vars.verticalPadding} - ${vars.lineHeightOffset}`
  vars.closeRightDistance = `0.5em`
  vars.closeOpacity = `0.7`
  vars.closeTransition = `opacity ${siteVars.defaultDuration} ${siteVars.defaultEasing}`


  /*-------------------
          Types
  --------------------*/

  /* Icon Message */
  vars.iconSize = `3em`
  vars.iconOpacity = `0.8`
  vars.iconContentDistance = `0rem`
  vars.iconVerticalAlign = `middle`

  /* Attached */
  vars.attachedXOffset = `-1px`
  vars.attachedYOffset = `-1px`
  vars.attachedBoxShadow = `0em 0em 0em ${vars.borderWidth} ${siteVars.borderColor} inset`
  vars.attachedBottomBoxShadow = `${vars.attachedBoxShadow},
    ${siteVars.subtleShadow}`

  /* Floating */
  vars.floatingBoxShadow = `${vars.borderShadow},
    ${siteVars.floatingShadow}`

  /* Colors */
  vars.redBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.redBorderColor} inset,
    ${vars.shadowShadow}`
  vars.orangeBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.orangeBorderColor} inset,
    ${vars.shadowShadow}`
  vars.yellowBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.yellowBorderColor} inset,
    ${vars.shadowShadow}`
  vars.oliveBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.oliveBorderColor} inset,
    ${vars.shadowShadow}`
  vars.greenBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.greenBorderColor} inset,
    ${vars.shadowShadow}`
  vars.tealBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.tealBorderColor} inset,
    ${vars.shadowShadow}`
  vars.blueBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.blueBorderColor} inset,
    ${vars.shadowShadow}`
  vars.violetBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.violetBorderColor} inset,
    ${vars.shadowShadow}`
  vars.purpleBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.purpleBorderColor} inset,
    ${vars.shadowShadow}`
  vars.pinkBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.pinkBorderColor} inset,
    ${vars.shadowShadow}`
  vars.brownBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.brownBorderColor} inset,
    ${vars.shadowShadow}`

  /* Warning / Positive / Negative / Info */
  vars.positiveBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.positiveBorderColor} inset,
    ${vars.shadowShadow}`
  vars.negativeBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.negativeBorderColor} inset,
    ${vars.shadowShadow}`
  vars.infoBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.infoBorderColor} inset,
    ${vars.shadowShadow}`
  vars.warningBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.warningBorderColor} inset,
    ${vars.shadowShadow}`
  vars.errorBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.errorBorderColor} inset,
    ${vars.shadowShadow}`
  vars.successBoxShadow = `0px 0px 0px ${vars.borderWidth} ${siteVars.successBorderColor} inset,
    ${vars.shadowShadow}`

  return vars
}
