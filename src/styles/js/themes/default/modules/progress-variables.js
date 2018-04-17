module.exports = (theme) => {
  const vars = {}

  /*******************************
              Progress
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.verticalSpacing = `1em`
  vars.margin = `${vars.verticalSpacing} 0em (${theme.labelHeight} + ${vars.verticalSpacing})`
  vars.firstMargin = `0em 0em (${theme.labelHeight} + ${vars.verticalSpacing})`
  vars.lastMargin = `0em 0em (${theme.labelHeight})`

  vars.background = `${theme.strongTransparentBlack}`
  vars.border = `none`
  vars.boxShadow = `none`
  vars.padding = `0em`
  vars.borderRadius = `${theme.defaultBorderRadius}`

  /* Bar */
  vars.barPosition = `relative`
  vars.barHeight = `1.75em`
  vars.barBackground = `#888888`
  vars.barBorderRadius = `${vars.borderRadius}`
  vars.barTransitionEasing = `${theme.defaultEasing}`
  vars.barTransitionDuration = `${theme.defaultDuration}`
  vars.barTransition = `width ${vars.barTransitionDuration} ${vars.barTransitionEasing},
    background-color ${vars.barTransitionDuration} ${vars.barTransitionEasing}`
  vars.barInitialWidth = `0%`
  vars.barMinWidth = `2em`

  /* Progress Bar Label */
  vars.progressWidth = `auto`
  vars.progressSize = `${theme.relativeSmall}`
  vars.progressPosition = `absolute`
  vars.progressTop = `50%`
  vars.progressRight = `0.5em`
  vars.progressLeft = `auto`
  vars.progressBottom = `auto`
  vars.progressOffset = `-0.5em`
  vars.progressColor = `${theme.invertedLightTextColor}`
  vars.progressTextShadow = `none`
  vars.progressFontWeight = `${theme.bold}`
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
  vars.labelColor = `${theme.textColor}`
  vars.labelTextShadow = `none`
  vars.labelFontWeight = `${theme.bold}`
  vars.labelTextAlign = `center`
  vars.labelTransition = `color 0.4s ${theme.defaultEasing}`

  /*-------------------
          Types
  --------------------*/

  vars.indicatingFirstColor = `#D95C5C`
  vars.indicatingSecondColor = `#EFBC72`
  vars.indicatingThirdColor = `#E6BB48`
  vars.indicatingFourthColor = `#DDC928`
  vars.indicatingFifthColor = `#B4D95C`
  vars.indicatingSixthColor = `#66DA81`

  vars.indicatingFirstLabelColor = `${theme.textColor}`
  vars.indicatingSecondLabelColor = `${theme.textColor}`
  vars.indicatingThirdLabelColor = `${theme.textColor}`
  vars.indicatingFourthLabelColor = `${theme.textColor}`
  vars.indicatingFifthLabelColor = `${theme.textColor}`
  vars.indicatingSixthLabelColor = `${theme.textColor}`

  /*-------------------
          States
  --------------------*/

  /* Active */
  vars.activePulseColor = `${theme.white}`
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
  vars.invertedBackground = `${theme.transparentWhite}`
  vars.invertedBorder = `none`
  vars.invertedBarBackground = `${vars.barBackground}`
  vars.invertedProgressColor = `${theme.offWhite}`
  vars.invertedLabelColor = `${theme.white}`

  /* Sizing */
  vars.tinyBarHeight = `0.5em`
  vars.smallBarHeight = `1em`
  vars.largeBarHeight = `2.5em`
  vars.bigBarHeight = `3.5em`

  return vars
}
