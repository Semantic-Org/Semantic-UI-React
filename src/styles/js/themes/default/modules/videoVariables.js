module.exports = (siteVars) => {
  const vars = {}

  /*******************************
               Video
  *******************************/

  vars.background = `#DDDDDD`
  vars.placeholderBackground = `#333333`

  vars.playSize = `8rem`
  vars.playColor = `#FFFFFF`
  vars.playOpacity = `0.8`
  vars.playHoverOpacity = `1`
  vars.playShadow = `none`

  vars.playBorderSize = `0rem`
  vars.playBackground = `rgba(0, 0, 0, 0.3)`
  vars.playBorderRadius = `${siteVars.circularRadius}`
  return vars
}
