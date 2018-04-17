module.exports = (theme) => {
  const vars = {}

  /*******************************
               Loader
  *******************************/

  vars.loaderSpeed = `2s`
  vars.loaderLineColor = `${theme.primaryColor}`
  vars.invertedLoaderLineColor = `${theme.lightPrimaryColor}`

  return vars
}
