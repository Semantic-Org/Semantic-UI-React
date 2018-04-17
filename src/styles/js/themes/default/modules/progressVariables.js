module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Progress
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.verticalSpacing = `1em`
  vars.margin = `${vars.verticalSpacing} 0em (${siteVars.labelHeight} + ${vars.verticalSpacing})`
  vars.firstMargin = `0em 0em (${siteVars.labelHeight} + ${vars.verticalSpacing})`
  vars.lastMargin = `0em 0em (${siteVars.labelHeight})`

  vars.background = `${siteVars.strongTransparentBlack}`
  vars.border = `none`
  vars.boxShadow = `none`
  vars.padding = `0em`
  vars.borderRadius = `${siteVars.defaultBorderRadius}`

  /* Bar */
  vars.barPosition = `relative`
  vars.barHeight = `1.75em`
  vars.barBackground = `#888888`
  vars.barBorderRadius = `${vars.borderRadius}`
  vars.barTransitionEasing = `${siteVars.defaultEasing}`
  vars.barTransitionDuration = `${siteVars.defaultDuration}`
  vars.barTransition = `width ${vars.barTransitionDuration} ${vars.barTransitionEasing},
    background-color ${vars.barTransitionDuration} ${vars.barTransitionEasing}`
  vars.barInitialWidth = `0%`
  vars.barMinWidth = `2em`

  /* Progress Bar Label */
  vars.progressWidth = `auto`
  vars.progressSize = `${siteVars.relativeSmall}`
  vars.progressPosition = `absolute`
  vars.progressTop = `50%`
  vars.progressRight = `0.5em`
  vars.progressLeft = `auto`
  vars.progressBottom = `auto`
  vars.progressOffset = `-0.5em`
  vars.progressColor = `${siteVars.invertedLightTextColor}`
  vars.progressTextShadow = `none`
  vars.progressFontWeight = `${siteVars.bold}`
  vars.progressTextAlign = `left`

  /* Label */
  vars.labelWidth = `100%`
  vars.labelHeight = `1.5em`
  vars.labelSize = `1em`
  vars.labelPosition = `absolute`
  vars.labelTop = `100%`
  vars.labelLeft = `0%`
  vars.labelRight = `auto`
  vars.labelBottom = `auto`
  vars.labelOffset = `(${vars.labelHeight} - 1.3em)`
  vars.labelColor = `${siteVars.textColor}`
  vars.labelTextShadow = `none`
  vars.labelFontWeight = `${siteVars.bold}`
  vars.labelTextAlign = `center`
  vars.labelTransition = `color 0.4s ${siteVars.defaultEasing}`

  /*-------------------
          Types
  --------------------*/

  vars.indicatingFirstColor = `#D95C5C`
  vars.indicatingSecondColor = `#EFBC72`
  vars.indicatingThirdColor = `#E6BB48`
  vars.indicatingFourthColor = `#DDC928`
  vars.indicatingFifthColor = `#B4D95C`
  vars.indicatingSixthColor = `#66DA81`

  vars.indicatingFirstLabelColor = `${siteVars.textColor}`
  vars.indicatingSecondLabelColor = `${siteVars.textColor}`
  vars.indicatingThirdLabelColor = `${siteVars.textColor}`
  vars.indicatingFourthLabelColor = `${siteVars.textColor}`
  vars.indicatingFifthLabelColor = `${siteVars.textColor}`
  vars.indicatingSixthLabelColor = `${siteVars.textColor}`

  /*-------------------
          States
  --------------------*/

  /* Active */
  vars.activePulseColor = `${siteVars.white}`
  vars.activePulseMaxOpacity = `0.3`
  vars.activePulseDuration = `2s`
  vars.activeMinWidth = `${vars.barMinWidth}`


  /*-------------------
        Variations
  --------------------*/

  /* Attached */
  vars.attachedBackground = `transparent`
  vars.attachedHeight = `0.2rem`
  vars.attachedBorderRadius = `${vars.borderRadius}`

  /* Inverted */
  vars.invertedBackground = `${siteVars.transparentWhite}`
  vars.invertedBorder = `none`
  vars.invertedBarBackground = `${vars.barBackground}`
  vars.invertedProgressColor = `${siteVars.offWhite}`
  vars.invertedLabelColor = `${siteVars.white}`

  /* Sizing */
  vars.tinyBarHeight = `0.5em`
  vars.smallBarHeight = `1em`
  vars.largeBarHeight = `2.5em`
  vars.bigBarHeight = `3.5em`

  return vars
}
