module.exports = (siteVars) => {
  const vars = {}

  /*******************************
              Rail
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.width = `300px`
  vars.height = `100%`

  vars.distance = `4rem`
  vars.splitDistance = `(${vars.distance} / 2)`

  /*-------------------
        Variations
  --------------------*/

  /* Close */
  vars.closeDistance = `2em`
  vars.veryCloseDistance = `1em`

  vars.splitCloseDistance = `(${vars.closeDistance} / 2)`
  vars.splitVeryCloseDistance = `(${vars.veryCloseDistance} / 2)`

  vars.closeWidth = `~"calc("${vars.width}~" + "${vars.splitCloseDistance}~")"`
  vars.veryCloseWidth = `~"calc("${vars.width}~" + "${vars.splitVeryCloseDistance}~")"`

  /* Dividing */
  vars.dividingBorder = `1px solid ${siteVars.borderColor}`
  vars.dividingDistance = `5rem`
  vars.splitDividingDistance = `(${vars.dividingDistance} / 2)`
  vars.dividingWidth = `${vars.width} + ${vars.splitDividingDistance}`


  return vars
}
