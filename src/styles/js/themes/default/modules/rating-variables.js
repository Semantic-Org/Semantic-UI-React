module.exports = (theme) => {
  const vars = {}

  /*******************************
               Rating
  *******************************/

  vars.margin = `0em ${theme.relativeMini}`
  vars.whiteSpace = `nowrap`
  vars.verticalAlign = `baseline`

  vars.iconCursor = `pointer`
  vars.iconWidth = `1.25em`
  vars.iconHeight = `auto`
  vars.iconTransition = `opacity ${theme.defaultDuration} ${theme.defaultEasing},
    background ${theme.defaultDuration} ${theme.defaultEasing},
    text-shadow ${theme.defaultDuration} ${theme.defaultEasing},
    color ${theme.defaultDuration} ${theme.defaultEasing}`


  /*-------------------
          Types
  --------------------*/

  /* Standard */
  vars.inactiveBackground = `transparent`
  vars.inactiveColor = `rgba(0, 0, 0, 0.15)`

  vars.selectedBackground = `${vars.inactiveBackground}`
  vars.selectedColor = `${theme.textColor}`

  vars.activeBackground = `${vars.inactiveBackground}`
  vars.activeColor = `${theme.darkTextColor}`

  /* Star */
  vars.starIconWidth = `${vars.iconWidth}`
  vars.starIconHeight = `${vars.iconHeight}`
  vars.starShadowWidth = `1px`

  vars.starInactiveBackground = `${vars.inactiveBackground}`
  vars.starInactiveColor = `${vars.inactiveColor}`
  vars.starInactiveTextShadow = `none`

  vars.starActiveBackground = `${vars.activeBackground}`
  vars.starActiveColor = `#FFE623`
  vars.starActiveShadowColor = `#DDC507`
  vars.starActiveTextShadow = `0px -${vars.starShadowWidth} 0px ${vars.starActiveShadowColor},
    -${vars.starShadowWidth} 0px 0px ${vars.starActiveShadowColor},
    0px ${vars.starShadowWidth} 0px ${vars.starActiveShadowColor},
    ${vars.starShadowWidth} 0px 0px ${vars.starActiveShadowColor}`

  vars.starSelectedBackground = `${vars.selectedBackground}`
  vars.starSelectedColor = `#FFCC00`
  vars.starSelectedShadowColor = `#E6A200`
  vars.starSelectedTextShadow = `0px -${vars.starShadowWidth} 0px ${vars.starSelectedShadowColor},
    -${vars.starShadowWidth} 0px 0px ${vars.starSelectedShadowColor},
    0px ${vars.starShadowWidth} 0px ${vars.starSelectedShadowColor},
    ${vars.starShadowWidth} 0px 0px ${vars.starSelectedShadowColor}`

  /* Heart */
  vars.heartIconWidth = `1.4em`
  vars.heartIconHeight = `${vars.iconHeight}`
  vars.heartShadowWidth = `1px`

  vars.heartInactiveBackground = `${vars.inactiveBackground}`
  vars.heartInactiveColor = `${vars.inactiveColor}`
  vars.heartInactiveTextShadow = `none`

  vars.heartActiveBackground = `${vars.activeBackground}`
  vars.heartActiveColor = `#FF6D75`
  vars.heartActiveShadowColor = `#CD0707`
  vars.heartActiveTextShadow = `0px -${vars.heartShadowWidth} 0px ${vars.heartActiveShadowColor},
    -${vars.heartShadowWidth} 0px 0px ${vars.heartActiveShadowColor},
    0px ${vars.heartShadowWidth} 0px ${vars.heartActiveShadowColor},
    ${vars.heartShadowWidth} 0px 0px ${vars.heartActiveShadowColor}`

  vars.heartSelectedBackground = `${vars.selectedBackground}`
  vars.heartSelectedColor = `#FF3000`
  vars.heartSelectedShadowColor = `#AA0101`
  vars.heartSelectedTextShadow = `0px -${vars.heartShadowWidth} 0px ${vars.heartSelectedShadowColor},
    -${vars.heartShadowWidth} 0px 0px ${vars.heartSelectedShadowColor},
    0px ${vars.heartShadowWidth} 0px ${vars.heartSelectedShadowColor},
    ${vars.heartShadowWidth} 0px 0px ${vars.heartSelectedShadowColor}`

  /*-------------------
          States
  --------------------*/

  vars.interactiveActiveIconOpacity = `1`
  vars.interactiveSelectedIconOpacity = `1`

  /*-------------------
        Variations
  --------------------*/

  vars.massive = `2rem`
  return vars
}
