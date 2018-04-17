module.exports = (theme) => {
  const vars = {}

  vars.background = `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.05)) #FEFEFE`
  vars.boxShadow = `0px 0px 0px 1px rgba(255, 255, 255, 0.3) inset,
    0px 0px 0px 1px rgba(0, 0, 0, 0.2) inset`
  vars.verticalPadding = `15px`
  vars.horizontalPadding = `15px`

  vars.headerFontSize = `1.15em`

  vars.infoTextColor = `#264C72`
  vars.warningTextColor = `#613A00`
  vars.errorTextColor = `#991111`

  vars.floatingBoxShadow = `0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset,
    0px 2px 3px 0px rgba(0, 0, 0, 0.1),
    0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset`

  vars.infoBorderColor = `#97C1DA`
  vars.errorBorderColor = `#DA9797`
  vars.warningBorderColor = `#DCA874`

  vars.small = `12px`
  vars.medium = `13px`
  vars.large = `14px`
  vars.huge = `16px`
  vars.massive = `18px`

  return vars
}
