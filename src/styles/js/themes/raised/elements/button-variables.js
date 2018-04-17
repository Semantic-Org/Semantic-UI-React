module.exports = (theme) => {
  const vars = {}

  /*******************************
              Button
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.backgroundColor = `#F8F8F8`
  vars.backgroundImage = `linear-gradient(transparent, rgba(0, 0, 0, 0.05))`
  vars.verticalAlign = `middle`
  vars.borderRadius = `0.4em`
  vars.borderBoxShadowColor = `${theme.borderColor}`

  /* Shadow */
  vars.shadowDistance = `0.3em`
  vars.verticalPadding = `1em`
  vars.horizontalPadding = `2em`

  /* transition box shadow as well */
  vars.transition = `opacity ${theme.defaultDuration} ${theme.defaultEasing},
    background-color ${theme.defaultDuration} ${theme.defaultEasing},
    box-shadow ${theme.defaultDuration} ${theme.defaultEasing},
    color ${theme.defaultDuration} ${theme.defaultEasing},
    background ${theme.defaultDuration} ${theme.defaultEasing}`
  return vars
}
