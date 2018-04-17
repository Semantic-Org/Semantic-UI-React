module.exports = (theme) => {
  const vars = {}

  /*-------------------
     Global Variables
  --------------------*/

  vars.pageFont = `Helvetica Neue, Helvetica, Arial, sans-serif`
  vars.textColor = `#66757F`
  vars.blue = `#55ACEE`

  /*-------------------
     Button Variables
  --------------------*/

  vars.backgroundColor = `#F5F8FA`
  vars.backgroundImage = `linear-gradient(${theme.white}, ${vars.backgroundColor})`
  vars.color = `#66757F`
  vars.borderBoxShadowColor = `#E1E8ED`

  vars.textTransform = `none`
  vars.fontWeight = `bold`
  vars.textColor = `#333333`

  vars.horizontalPadding = `1.284em`
  vars.verticalPadding = `0.8571em`

  vars.activeBackgroundColor = `rgba(0, 0, 0, 0.1)`

  vars.primaryColor = `${vars.blue}`
  vars.coloredBackgroundImage = `${theme.subtleGradient}`


  /*-------------------
          States
  --------------------*/

  vars.hoverBackgroundColor = `#E1E8ED`
  vars.hoverBackgroundImage = `linear-gradient(${theme.white}, ${vars.hoverBackgroundColor})`
  vars.hoverColor = `#292F33`

  vars.downBackgroundColor = `#E1E8ED`
  vars.downColor = `#292F33`
  vars.downPressedShadow = `0px 1px 4px rgba(0, 0, 0, 0.2) inset`

  vars.labeledIconBackgroundColor = `rgba(85, 172, 238, 0.05)`
  vars.labeledIconBorder = `rgba(0, 0, 0, 0.1)`

  return vars
}
