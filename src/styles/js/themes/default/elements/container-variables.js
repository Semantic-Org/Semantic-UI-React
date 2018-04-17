module.exports = (theme) => {
  const vars = {}

  /*******************************
              Container
  *******************************/

  /*-------------------
         Element
  --------------------*/

  /* Minimum Gutter is used to determine  the maximum container width for a given device */

  vars.maxWidth = `100%`

  /* Devices */
  vars.mobileMinimumGutter = `0em`
  vars.mobileWidth = `auto`
  vars.mobileGutter = `1em`

  vars.tabletMinimumGutter = `(${theme.emSize}  * 1)`
  vars.tabletWidth = `${theme.tabletBreakpoint} - (${vars.tabletMinimumGutter} * 2) - ${theme.scrollbarWidth}`
  vars.tabletGutter = `auto`

  vars.computerMinimumGutter = `(${theme.emSize}  * 1.5)`
  vars.computerWidth = `${theme.computerBreakpoint} - (${vars.computerMinimumGutter} * 2) - ${theme.scrollbarWidth}`
  vars.computerGutter = `auto`

  vars.largeMonitorMinimumGutter = `(${theme.emSize}  * 2)`
  vars.largeMonitorWidth = `${theme.largeMonitorBreakpoint} - (${vars.largeMonitorMinimumGutter} * 2) - ${theme.scrollbarWidth}`
  vars.largeMonitorGutter = `auto`

  /* Coupling (Add Negative Margin to container size) */
  vars.gridGutterWidth = `2rem`
  vars.relaxedGridGutterWidth = `3rem`
  vars.veryRelaxedGridGutterWidth = `5rem`

  vars.mobileGridWidth = `${vars.mobileWidth}`
  vars.tabletGridWidth = `~"calc("${vars.tabletWidth}~" + "${vars.gridGutterWidth}~")"`
  vars.computerGridWidth = `~"calc("${vars.computerWidth}~" + "${vars.gridGutterWidth}~")"`
  vars.largeMonitorGridWidth = `~"calc("${vars.largeMonitorWidth}~" + "${vars.gridGutterWidth}~")"`

  vars.mobileRelaxedGridWidth = `${vars.mobileWidth}`
  vars.tabletRelaxedGridWidth = `~"calc("${vars.tabletWidth}~" + "${vars.relaxedGridGutterWidth}~")"`
  vars.computerRelaxedGridWidth = `~"calc("${vars.computerWidth}~" + "${vars.relaxedGridGutterWidth}~")"`
  vars.largeMonitorRelaxedGridWidth = `~"calc("${vars.largeMonitorWidth}~" + "${vars.relaxedGridGutterWidth}~")"`

  vars.mobileVeryRelaxedGridWidth = `${vars.mobileWidth}`
  vars.tabletVeryRelaxedGridWidth = `~"calc("${vars.tabletWidth}~" + "${vars.veryRelaxedGridGutterWidth}~")"`
  vars.computerVeryRelaxedGridWidth = `~"calc("${vars.computerWidth}~" + "${vars.veryRelaxedGridGutterWidth}~")"`
  vars.largeMonitorVeryRelaxedGridWidth = `~"calc("${vars.largeMonitorWidth}~" + "${vars.veryRelaxedGridGutterWidth}~")"`

  /*-------------------
         Types
  --------------------*/

  /* Text */
  vars.textWidth = `700px`
  vars.textFontFamily = `${theme.pageFont}`
  vars.textLineHeight = `1.5`
  vars.textSize = `${theme.large}`
  return vars
}
