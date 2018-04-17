module.exports = (theme) => {
  const vars = {}

  /*******************************
               Loader
  *******************************/

  vars.shapeBorderColor = `${theme.primaryColor} ${theme.primaryColor} ${theme.secondaryColor} ${theme.secondaryColor}`
  vars.invertedShapeBorderColor = `${theme.lightPrimaryColor} ${theme.lightPrimaryColor} ${theme.lightSecondaryColor} ${theme.lightSecondaryColor}`
  return vars
}
