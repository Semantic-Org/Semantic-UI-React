module.exports = (theme) => {
  const vars = {}

  /*******************************
               Card
  *******************************/

  /*-------------------
           View
  --------------------*/

  /* Shadow */
  vars.shadowDistance = `0em`
  vars.padding = `0em`

  /*-------------------
         Content
  --------------------*/

  /* Additional Content */
  vars.extraDivider = `1px solid rgba(0, 0, 0, 0.05)`
  vars.extraBackground = `#FAFAFA ${theme.subtleGradient}`
  vars.extraPadding = `0.75em 1em`
  vars.extraBoxShadow = `0 1px 1px rgba(0, 0, 0, 0.15)`
  vars.extraColor = `${theme.lightTextColor}`

  return vars
}
