module.exports = (theme) => {
  const vars = {}

  /*******************************
               Sidebar
  *******************************/

  /*-------------------
         Content
  --------------------*/

  /* Animation */
  vars.perspective = `1500px`
  vars.duration = `500ms`
  vars.easing = `${theme.defaultEasing}`

  /* Dimmer */
  vars.dimmerColor = `rgba(0, 0, 0, 0.4)`
  vars.dimmerTransition = `opacity ${vars.duration}`

  /* Color below page */
  vars.canvasBackground = `${theme.lightBlack}`

  /* Shadow */
  vars.boxShadow = `0px 0px 20px ${theme.borderColor}`
  vars.horizontalBoxShadow = `${vars.boxShadow}`
  vars.verticalBoxShadow = `${vars.boxShadow}`

  /* Layering */
  vars.bottomLayer = `1`
  vars.middleLayer = `2`
  vars.fixedLayer = `101`
  vars.topLayer = `102`
  vars.dimmerLayer = `1000`

  /*-------------------
        Variations
  --------------------*/

  /* Width */
  vars.veryThinWidth = `60px`
  vars.thinWidth = `150px`
  vars.width = `260px`
  vars.wideWidth = `350px`
  vars.veryWideWidth = `475px`

  /* Height */
  vars.height = `36px`

  return vars
}
