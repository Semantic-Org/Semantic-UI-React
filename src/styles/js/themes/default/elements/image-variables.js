module.exports = (theme) => {
  const vars = {}

  /*******************************
              Image
  *******************************/

  /*-------------------
         Element
  --------------------*/

  vars.placeholderColor = `transparent`
  vars.roundedBorderRadius = `0.3125em`

  vars.imageHorizontalMargin = `0.25rem`
  vars.imageVerticalMargin = `0.5rem`
  vars.imageBorder = `1px solid rgba(0, 0, 0, 0.1)`

  /*-------------------
         Types
  --------------------*/

  /* Avatar */
  vars.avatarSize = `2em`
  vars.avatarMargin = `0.25em`


  /*-------------------
         Variations
  --------------------*/

  /* Spaced */
  vars.spacedDistance = `0.5em`

  /* Floated */
  vars.floatedHorizontalMargin = `1em`
  vars.floatedVerticalMargin = `1em`

  /* Size */
  vars.miniWidth = `35px`
  vars.tinyWidth = `80px`
  vars.smallWidth = `150px`
  vars.mediumWidth = `300px`
  vars.largeWidth = `450px`
  vars.bigWidth = `600px`
  vars.hugeWidth = `800px`
  vars.massiveWidth = `960px`

  return vars
}
