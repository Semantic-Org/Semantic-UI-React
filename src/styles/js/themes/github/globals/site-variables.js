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

  vars.defaultBorderRadius = `0.2307em`

  vars.disabledOpacity = `0.3`

  /* Colors */
  vars.blue = `#80A6CD`
  vars.green = `#78CB5B`
  vars.orange = `#D26911`
  vars.black = `#333333`
  vars.primaryColor = `${vars.green}`
  vars.secondaryColor = `${vars.black}`

  /* Links */
  vars.linkColor = `#4078C0`
  vars.linkHoverColor = `${vars.linkColor}`
  vars.linkHoverUnderline = `underline`

  /* Borders */
  vars.borderColor = `rgba(0, 0, 0, 0.13)`
  vars.solidBorderColor = `#DDDDDD`
  vars.internalBorderColor = `rgba(0, 0, 0, 0.06)`
  vars.selectedBorderColor = `#51A7E8`

  /* Breakpoints */
  vars.largeMonitorBreakpoint = `1049px`
  vars.computerBreakpoint = `${vars.largeMonitorBreakpoint}`
  vars.tabletBreakpoint = `${vars.largeMonitorBreakpoint}`

  vars.infoBackgroundColor = `#E6F1F6`

  vars.infoTextColor = `#4E575B`
  vars.warningTextColor = `#613A00`
  vars.errorTextColor = `#991111`
  return vars
}
