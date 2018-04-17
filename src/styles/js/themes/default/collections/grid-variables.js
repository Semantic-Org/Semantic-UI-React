module.exports = (theme) => {
  const vars = {}

  /*******************************
               Grid
  *******************************/

  /* Inherited From Site */

  // ${theme.mobileBreakpoint}
  // ${theme.tabletBreakpoint}
  // ${theme.computerBreakpoint}
  // ${theme.largeMonitorBreakpoint}
  // ${theme.widescreenMonitorBreakpoint}

  /*******************************
              Grid
  *******************************/

  vars.minWidth = `320px`

  vars.gutterWidth = `2rem`
  vars.rowSpacing = `2rem`

  vars.tableWidth = `~"calc(100% + "${vars.gutterWidth}~")"`
  vars.columnMaxImageWidth = `100%`

  vars.consecutiveGridDistance = `(${vars.rowSpacing} / 2)`

  /*******************************
             Variations
  *******************************/

  /*--------------
       Relaxed
  ---------------*/

  vars.relaxedGutterWidth = `3rem`
  vars.veryRelaxedGutterWidth = `5rem`

  /*--------------
       Divided
  ---------------*/

  vars.dividedBorder = `-1px 0px 0px 0px ${theme.borderColor}`
  vars.verticallyDividedBorder = `0px -1px 0px 0px ${theme.borderColor}`

  vars.dividedInvertedBorder = `-1px 0px 0px 0px ${theme.whiteBorderColor}`
  vars.verticallyDividedInvertedBorder = `0px -1px 0px 0px ${theme.whiteBorderColor}`

  /*--------------
      Celled
  ---------------*/

  vars.celledMargin = `1em 0em`
  vars.celledWidth = `1px`
  vars.celledBorderColor = `${theme.solidBorderColor}`

  vars.celledPadding = `1em`
  vars.celledRelaxedPadding = `1.5em`
  vars.celledVeryRelaxedPadding = `2em`

  vars.celledGridDivider = `0px 0px 0px ${vars.celledWidth} ${vars.celledBorderColor}`
  vars.celledRowDivider = `0px (-${vars.celledWidth}) 0px 0px ${vars.celledBorderColor}`
  vars.celledColumnDivider = `(-${vars.celledWidth}) 0px 0px 0px ${vars.celledBorderColor}`


  /*--------------
      Stackable
  ---------------*/

  vars.stackableRowSpacing = `${vars.rowSpacing}`
  vars.stackableGutter = `${vars.gutterWidth}`
  vars.stackableMobileBorder = `1px solid ${theme.borderColor}`
  vars.stackableInvertedMobileBorder = `1px solid ${theme.whiteBorderColor}`


  /*******************************
               Legacy
  *******************************/

  /*--------------
       Page
  ---------------*/

  /* Legacy (DO NOT USE)
   */
  vars.mobileWidth = `auto`
  vars.mobileMargin = `0em`
  vars.mobileGutter = `0em`

  vars.tabletWidth = `auto`
  vars.tabletMargin = `0em`
  vars.tabletGutter = `2em`

  vars.computerWidth = `auto`
  vars.computerMargin = `0em`
  vars.computerGutter = `3%`

  vars.largeMonitorWidth = `auto`
  vars.largeMonitorMargin = `0em`
  vars.largeMonitorGutter = `15%`

  vars.widescreenMonitorWidth = `auto`
  vars.widescreenMargin = `0em`
  vars.widescreenMonitorGutter = `23%`
  return vars
}
