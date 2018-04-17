module.exports = (theme) => {
  const vars = {}

  /*******************************
           Site Settings
  *******************************/

  /*-------------------
          Paths
  --------------------*/

  vars.imagePath = `"../../themes/default/assets/images"`
  vars.fontPath = `"../../themes/default/assets/fonts"`

  /*-------------------
         Fonts
  --------------------*/

  vars.headerFont = `"Open Sans", "Helvetica Neue", Arial, Helvetica, sans-serif`
  vars.pageFont = `"Open Sans", "Helvetica Neue", Arial, Helvetica, sans-serif`
  vars.fontSmoothing = `antialiased`

  /*-------------------
        Site Colors
  --------------------*/

  /*---  Colors  ---*/
  vars.blue = `#0074D9`
  vars.green = `#2ECC40`
  vars.orange = `#FF851B`
  vars.pink = `#D9499A`
  vars.purple = `#A24096`
  vars.red = `#FF4136`
  vars.teal = `#39CCCC`
  vars.yellow = `#FFCB08`

  vars.black = `#191919`
  vars.grey = `#CCCCCC`
  vars.white = `#FFFFFF`

  /*---  Light Colors  ---*/
  vars.lightBlue = `#54C8FF`
  vars.lightGreen = `#2ECC40`
  vars.lightOrange = `#FF851B`
  vars.lightPink = `#FF8EDF`
  vars.lightPurple = `#CDC6FF`
  vars.lightRed = `#FF695E`
  vars.lightTeal = `#6DFFFF`
  vars.lightYellow = `#FFE21F`

  vars.primaryColor = `${vars.blue}`
  vars.secondaryColor = `${vars.black}`


  /*-------------------
          Page
  --------------------*/

  vars.bodyBackground = `#FCFCFC`
  vars.fontSize = `14px`
  vars.textColor = `rgba(0, 0, 0, 0.8)`

  vars.headerMargin = `1em 0em 1rem`
  vars.paragraphMargin = `0em 0em 1em`

  vars.linkColor = `#009FDA`
  vars.linkUnderline = `none`
  vars.linkHoverColor = `lighten( ${vars.linkColor}, 5)`
  vars.linkHoverUnderline = `${vars.linkUnderline}`

  vars.highlightBackground = `#FFFFCC`
  vars.highlightColor = `${vars.textColor}`



  /*-------------------
    Background Colors
  --------------------*/

  vars.subtleTransparentBlack = `rgba(0, 0, 0, 0.03)`
  vars.transparentBlack = `rgba(0, 0, 0, 0.05)`
  vars.strongTransparentBlack = `rgba(0, 0, 0, 0.10)`

  vars.subtleTransparentWhite = `rgba(255, 255, 255, 0.01)`
  vars.transparentWhite = `rgba(255, 255, 255, 0.05)`
  vars.strongTransparentWhite = `rgba(255, 255, 255, 0.01)`

  /* Used for differentiating neutrals */
  vars.subtleGradient = `linear-gradient(transparent, rgba(0, 0, 0, 0.05))`

  /* Used for differentiating layers */
  vars.subtleShadow = `0px 1px 2px 0 rgba(0, 0, 0, 0.05)`


  /*-------------------
          Grid
  --------------------*/

  vars.columnCount = `16`

  /*-------------------
       Breakpoints
  --------------------*/

  vars.mobileBreakpoint = `320px`
  vars.tabletBreakpoint = `768px`
  vars.computerBreakpoint = `992px`
  vars.largeMonitorBreakpoint = `1400px`
  vars.widescreenMonitorBreakpoint = `1900px`


  return vars
}
