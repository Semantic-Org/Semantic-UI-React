module.exports = (theme) => {
  const vars = {}

  /*-------------------
     Button Variables
  --------------------*/

  /* Button Variables */
  vars.pageFont = `Helvetica Neue, Helvetica, Arial, sans-serif`
  vars.textTransform = `none`
  vars.textColor = `#111111`
  vars.fontWeight = `normal`
  vars.transition = `opacity ${theme.defaultDuration} ${theme.defaultEasing},
    background-color ${theme.defaultDuration} ${theme.defaultEasing},
    color ${theme.defaultDuration} ${theme.defaultEasing},
    background ${theme.defaultDuration} ${theme.defaultEasing}`

  vars.hoverBackgroundColor = `#E0E0E0`

  vars.borderRadius = `3px`
  vars.verticalPadding = `0.8em`
  vars.horizontalPadding = `1.75em`

  vars.backgroundColor = `#F7F8FA`
  vars.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1))`
  vars.boxShadow = `0 1px 0 1px rgba(255, 255, 255, 0.3) inset,
    0 0 0 1px #ADB2BB inset`

  vars.coloredBackgroundImage = `linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2))`
  vars.coloredBoxShadow = `0px 1px 0px 0px rgba(255, 255, 255, 0.2) inset`

  vars.downBoxShadow = `0 0 0 1px #ADB2BB inset,
    0 1px 3px rgba(0, 0, 0, 0.2) inset`

  vars.labeledIconBackgroundColor = `#313A43`
  vars.labeledIconColor = `#FFFFFF`
  vars.labeledIconBorder = `transparent`

  vars.black = `#444C55`
  vars.orange = `#F4CC67`

  vars.coloredBackgroundImage = `linear-gradient(rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0.1))`
  vars.primaryColor = `${vars.orange}`
  vars.secondaryColor = `${vars.black}`

  vars.mini = `10px`
  vars.tiny = `11px`
  vars.small = `12px`
  vars.medium = `13px`
  vars.large = `14px`
  vars.big = `16px`
  vars.huge = `18px`
  vars.massive = `22px`

  return vars
}
