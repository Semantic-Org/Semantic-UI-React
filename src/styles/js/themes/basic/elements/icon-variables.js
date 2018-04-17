module.exports = (theme) => {
  const vars = {}

  /*-------------------
     Icon Variables
  --------------------*/

  vars.fontPath = `"../../themes/basic/assets/fonts"`

  vars.src = `url("${vars.fontPath}/${theme.fontName}.eot?#iefix") format('embedded-opentype'),
    url("${vars.fontPath}/${theme.fontName}.woff") format('woff'),
    url("${vars.fontPath}/${theme.fontName}.ttf") format('truetype'),
    url("${vars.fontPath}/${theme.fontName}.svg#icons") format('svg')`
  return vars
}
