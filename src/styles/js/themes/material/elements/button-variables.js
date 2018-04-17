module.exports = (theme) => {
  const vars = {}

  /*******************************
              Button
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.googleFontName = `'Roboto'`
  vars.pageFont = `'Roboto', Arial, sans-serif`

  vars.medium = `13px`

  vars.verticalPadding = `0.8em`
  vars.horizontalPadding = `0.8em`
  vars.borderRadius = `${theme.relative3px}`
  vars.color = `#222222`
  vars.fontWeight = `normal`
  vars.textTransform = `none`

  vars.backgroundColor = `${theme.white}`
  vars.backgroundImage = `linear-gradient(transparent, rgba(0, 0, 0, 0.02))`

  vars.solidBorderColor = `#DDDDDD`

  vars.borderBoxShadowColor = `${vars.solidBorderColor}`
  vars.borderBoxShadow = `0px 0px 0px 1px ${vars.solidBorderColor} inset`
  vars.shadowBoxShadow = `0px 0px 0px 0px transparent`

  vars.transition = `opacity 0.3s ${theme.defaultEasing},
    background-color 0.3s ${theme.defaultEasing},
    color 0.3s ${theme.defaultEasing},
    box-shadow 0.3s ${theme.defaultEasing},
    background 0.3s ${theme.defaultEasing}`
  /*-------------------
          State
  --------------------*/

  vars.hoverBackgroundColor = `${theme.white}`
  vars.hoverBoxShadow = `${vars.borderBoxShadow},
    0px 2px 3px 0px rgba(0, 0, 0, 0.2) !important`

  vars.downBackgroundColor = `${theme.white}`
  vars.downBackgroundImage = `linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04))`
  vars.downTextColor = `#222222`
  vars.downBoxShadow = `${vars.borderBoxShadow}`

  vars.activeBackgroundColor = `#F0F0F0`
  vars.activeBoxShadow = `0px 0px 0px 1px #DDDDDD`

  /*-------------------
        Variations
  --------------------*/

  /* Basic */
  vars.basicBorderSize = `0px`
  vars.basicBorderRadius = `4px`
  vars.basicColoredBorderSize = `1px`
  vars.basicHoverBackground = `${theme.white}`
  vars.basicHoverBoxShadow = `${vars.hoverBoxShadow}`
  vars.basicDownBackground = `${theme.white}`
  vars.basicDownBoxShadow = `${vars.downBoxShadow}`

  vars.basicActiveBackground = `#FFFFFF`
  vars.basicActiveBoxShadow = `0px 0px 0px 1px rgba(0, 0, 0, 0.2)`

  /* Labeled */
  vars.labeledIconBackgroundColor = `transparent`
  vars.labeledIconWidth = `2em`

  vars.labeledLabelBorderOffset = `0px`

  /* Colored */
  vars.coloredBackgroundImage = `${theme.subtleGradient}`
  vars.coloredBoxShadow = `0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset`

  /* Primary */
  vars.primaryColor = `#4184F3`
  vars.primaryBoxShadow = `0px 0px 0px 1px #0157E4 inset`

  /* Secondary */
  vars.secondaryColor = `#EEEEEE`
  vars.secondaryBackgroundImage = `${vars.backgroundImage}`
  vars.secondaryTextColor = `${theme.textColor}`
  vars.secondaryBoxShadow = `${vars.borderBoxShadow}`

  /* Emotive */
  vars.positiveColor = `#3D9400`
  vars.negativeColor = `#D34836`

  /* Inverted */
  vars.invertedBorderSize = `1px`


  return vars
}
