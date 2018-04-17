module.exports = (theme) => {
  const vars = {}

  /* Fixed Page Grid */

  vars.mobileWidth = `auto`
  vars.mobileMargin = `0em`
  vars.mobileGutter = `0em`

  vars.tabletWidth = `auto`
  vars.tabletMargin = `0em`
  vars.tabletGutter = `8%`

  vars.computerWidth = `960px`
  vars.computerMargin = `auto`
  vars.computerGutter = `0`

  vars.largeMonitorWidth = `1180px`
  vars.largeMonitorMargin = `auto`
  vars.largeMonitorGutter = `0`

  vars.widescreenMonitorWidth = `1300px`
  vars.widescreenMargin = `auto`
  vars.widescreenMonitorGutter = `0`

  vars.tableWidth = `''`
  return vars
}
