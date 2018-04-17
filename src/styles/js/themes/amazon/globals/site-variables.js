module.exports = (theme) => {
  const vars = {}

  /*******************************
       User Global Variables
  *******************************/

  vars.pageMinWidth = `1049px`
  vars.pageOverflowX = `visible`

  vars.emSize = `13px`
  vars.fontSize = `13px`
  vars.fontName = `'Arial'`
  vars.importGoogleFonts = `false`

  vars.h1 = `2.25em`

  vars.defaultBorderRadius = `0.30769em` /* 4px @ 13em */

  vars.disabledOpacity = `0.3`

  vars.black = `#444C55`
  vars.orange = `#FDE07B`

  vars.linkColor = `#0066C0`
  vars.linkHoverColor = `#C45500`
  vars.linkHoverUnderline = `underline`

  vars.borderColor = `rgba(0, 0, 0, 0.13)`
  vars.solidBorderColor = `#DDDDDD`
  vars.internalBorderColor = `rgba(0, 0, 0, 0.06)`
  vars.selectedBorderColor = `#51A7E8`

  /* Breakpoints */
  vars.largeMonitorBreakpoint = `1049px`
  vars.computerBreakpoint = `${vars.largeMonitorBreakpoint}`
  vars.tabletBreakpoint = `${vars.largeMonitorBreakpoint}`

  /* Colors */
  vars.blue = `#80A6CD`
  vars.green = `#60B044`
  vars.orange = `#D26911`


  vars.infoBackgroundColor = `#E6F1F6`
  vars.infoTextColor = `#4E575B`
  return vars
}
