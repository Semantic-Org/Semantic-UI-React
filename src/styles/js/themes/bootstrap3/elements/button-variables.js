module.exports = (theme) => {
  const vars = {}

  /*-------------------
     Button Variables
  --------------------*/

  /* Button Variables */
  vars.pageFont = `Helvetica Neue, Helvetica, Arial, sans-serif`
  vars.textTransform = `none`
  vars.fontWeight = `${theme.normal}`
  vars.textColor = `rgba(51, 51, 51, 1)`

  vars.borderRadius = `${theme.absolute4px}`

  vars.lineHeight = `1.42857`
  vars.verticalPadding = `0.8571em`
  vars.horizontalPadding = `0.8571em`

  vars.backgroundColor = `${theme.white}`
  vars.backgroundImage = `none`


  vars.borderBoxShadowColor = `rgba(0, 0, 0, 0.14)`

  vars.green = `#5CB85C`
  vars.red = `#D9534F`
  vars.blue = `#337AB7`
  vars.green = `#60B044`
  vars.orange = `#F0AD4E`

  vars.primaryColor = `${vars.blue}`
  vars.secondaryColor = `${vars.green}`

  vars.labeledIconBackgroundColor = `transparent`

  vars.basicBorderSize = `0px`
  vars.basicColoredBorderSize = `0px`
  vars.invertedBorderSize = `0px`

  vars.basicActiveBackground = `transparent`
  vars.basicHoverBackground = `transparent`
  vars.basicDownBoxShadow = `0px 0px 0px 1px #ADADAD inset,
    0 3px 5px rgba(0, 0, 0, 0.125) inset`

  vars.groupButtonOffset = `0px 0px 0px -1px`
  vars.verticalGroupOffset = `0px 0px -1px 0px`

  /* States */

  vars.hoverBackgroundColor = `#E6E6E6`
  vars.hoverBoxShadow = `0px 0px 0px 1px #ADADAD inset`

  vars.downBackgroundColor = `#E6E6E6`
  vars.downBoxShadow = `0px 0px 0px 1px #ADADAD inset,
    0 3px 5px rgba(0, 0, 0, 0.125) inset`

  vars.activeBackgroundColor = `#E6E6E6`

  vars.disabledOpacity = `0.65`

  return vars
}
