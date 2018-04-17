module.exports = (theme) => {
  const vars = {}


  /* Responsive Widths */
  vars.modalComputerWidth = `700px`
  vars.modalLargeMonitorWidth = `800px`
  vars.modalWidescreenMonitorWidth = `850px`

  vars.modalComputerMargin = `0em 0em 0em -(${vars.modalComputerWidth} / 2)`
  vars.modalLargeMonitorMargin = `0em 0em 0em -(${vars.modalLargeMonitorWidth} / 2)`
  vars.modalWidescreenMonitorMargin = `0em 0em 0em -(${vars.modalWidescreenMonitorWidth} / 2)`


  /*-------------------
        Variations
  --------------------*/

  /* Sizes */
  vars.modalSmallRatio = `0.6`
  vars.modalLargeRatio = `1.2`

  /* Derived Responsive Sizes */
  vars.modalSmallHeaderSize = `1.3em`
  vars.modalSmallComputerWidth = `(${vars.modalComputerWidth} * ${vars.modalSmallRatio})`
  vars.modalSmallLargeMonitorWidth = `(${vars.modalLargeMonitorWidth} * ${vars.modalSmallRatio})`
  vars.modalSmallWidescreenMonitorWidth = `(${vars.modalWidescreenMonitorWidth} * ${vars.modalSmallRatio})`

  vars.modalSmallComputerMargin = `0em 0em 0em -(${vars.modalSmallComputerWidth} / 2)`
  vars.modalSmallLargeMonitorMargin = `0em 0em 0em -(${vars.modalSmallLargeMonitorWidth} / 2)`
  vars.modalSmallWidescreenMonitorMargin = `0em 0em 0em -(${vars.modalSmallWidescreenMonitorWidth} / 2)`

  vars.modalLargeHeaderSize = `1.3em`
  vars.modalLargeComputerWidth = `(${vars.modalComputerWidth} * ${vars.modalLargeRatio})`
  vars.modalLargeLargeMonitorWidth = `(${vars.modalLargeMonitorWidth} * ${vars.modalLargeRatio})`
  vars.modalLargeWidescreenMonitorWidth = `(${vars.modalWidescreenMonitorWidth} * ${vars.modalLargeRatio})`

  vars.modalLargeComputerMargin = `0em 0em 0em -(${vars.modalLargeComputerWidth} / 2)`
  vars.modalLargeLargeMonitorMargin = `0em 0em 0em -(${vars.modalLargeLargeMonitorWidth} / 2)`
  vars.modalLargeWidescreenMonitorMargin = `0em 0em 0em -(${vars.modalLargeWidescreenMonitorWidth} / 2)`
  return vars
}
