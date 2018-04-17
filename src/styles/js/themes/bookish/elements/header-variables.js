module.exports = (theme) => {
  const vars = {}

  /*-------------------
         Header
  --------------------*/

  vars.headerFont = `'Karma', 'Times New Roman', serif`
  vars.fontWeight = `${theme.normal}`

  vars.iconSize = `1.5em`
  vars.iconOffset = `0.2em`
  vars.iconAlignment = `top`

  vars.subHeaderFontSize = `0.85rem`

  vars.dividedBorder = `1px dotted rgba(0, 0, 0, 0.2)`

  /* Block Header */
  vars.blockVerticalPadding = `1.3em`
  vars.blockHorizontalPadding = `1em`

  /* Attached  */
  vars.attachedBackground = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.03)) repeat scroll 0 0 #F8F8F8`
  vars.attachedVerticalPadding = `1.3`
  vars.attachedHorizontalPadding = `1em`

  /* HTML Headings */
  vars.h1 = `1.75rem`
  vars.h2 = `1.33rem`
  vars.h3 = `1.33rem`
  vars.h4 = `1rem`
  vars.h5 = `0.9rem`

  /* Sizing */
  vars.hugeFontSize = `1.75em`
  vars.largeFontSize = `1.33em`
  vars.mediumFontSize = `1.33em`
  vars.smallFontSize = `1em`
  vars.tinyFontSize = `0.9em`

  return vars
}
