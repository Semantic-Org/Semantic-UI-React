module.exports = (theme) => {
  const vars = {}

  /*******************************
              Standard
  *******************************/

  /*-------------------
         Segment
  --------------------*/

  vars.segmentBorderWidth = `1px`
  vars.border = `1px solid #D8DEE2`
  vars.boxShadow = `0px 1px 3px rgba(0, 0, 0, 0.075)`

  vars.verticalPadding = `20px`
  vars.horizontalPadding = `20px`

  vars.borderRadius = `4px`

  /*******************************
              Variations
  *******************************/


  /* Raised */
  vars.raisedBoxShadow = `0px 1px 3px rgba(0, 0, 0, 0.075)`

  /* Colors */
  vars.coloredBorderSize = `0.5em`

  /* Ordinality */
  vars.secondaryBackground = `#F9F9F9`
  vars.secondaryColor = `${theme.textColor}`

  vars.tertiaryBackground = `#F0F0F0`
  vars.tertiaryColor = `${theme.textColor}`

  vars.secondaryInvertedBackground = `#555555`
  vars.secondaryInvertedColor = `${theme.textColor}`

  vars.tertiaryInvertedBackground = `#333333`
  vars.tertiaryInvertedColor = `${theme.textColor}`

  return vars
}
