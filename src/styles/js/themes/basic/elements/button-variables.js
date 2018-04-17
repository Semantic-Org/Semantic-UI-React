module.exports = (theme) => {
  const vars = {}

  /*-------------------
     Button Variables
  --------------------*/

  /* Button Variables */
  vars.textTransform = `none`
  vars.fontWeight = `${theme.normal}`
  vars.textColor = `#333333`

  vars.primaryColor = `#333333`

  vars.borderRadius = `0.25em`

  vars.backgroundColor = `#EEEEEE`
  vars.backgroundImage = `none`
  vars.boxShadow = `none`

  vars.hoverBackgroundColor = `#DDDDDD`
  vars.hoverBackgroundImage = `none`
  vars.hoverBoxShadow = `none`

  vars.downBackgroundColor = `#D0D0D0`
  vars.downBackgroundImage = `none`
  vars.downBoxShadow = `none`

  vars.activeBackgroundColor = `#CCCCCC`
  vars.activeBackgroundImage = `none`
  vars.activeBoxShadow = `none`

  vars.verticalBoxShadow = `none`

  vars.loadingBackgroundColor = `#F0F0F0`

  vars.labeledIconLeftShadow = `none`
  vars.labeledIconRightShadow = `none`

  vars.mini = `0.6rem`
  vars.tiny = `0.7rem`
  vars.small = `0.85rem`
  vars.medium = `0.92rem`
  vars.large = `1rem`
  vars.big = `1.125rem`
  vars.huge = `1.25rem`
  vars.massive = `1.3rem`

  return vars
}
