module.exports = (theme) => {
  const vars = {}

  /*-------------------
        Collection
  --------------------*/

  vars.itemVerticalPadding = `1em`
  vars.itemHorizontalPadding = `1.25em`

  vars.background = `#FFFFFF linear-gradient(rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.05))`
  vars.fontWeight = `normal`

  vars.activeBorderSize = `0em`

  vars.hoverBackground = `rgba(0, 0, 0, 0.02)`
  vars.downBackground = `rgba(0, 0, 0, 0.06)`

  vars.activeBackground = `rgba(0, 0, 0, 0.04)`
  vars.activeHoverBackground = `rgba(0, 0, 0, 0.04)`


  vars.headerBackground = `rgba(0, 0, 0, 0.08)`

  vars.subMenuMargin = `0.5em -0.6em 0`
  vars.subMenuHorizontalPadding = `0.7em`

  vars.arrowHoverColor = `#EEEEEE`
  vars.arrowActiveColor = `#EEEEEE`
  vars.arrowVerticalHoverColor = `#F4F4F4`
  vars.arrowVerticalActiveColor = `#F4F4F4`

  vars.dividerBackground = `#E8E8E8`
  vars.verticalDividerBackground = `#E8E8E8`

  /*-------------------
        Elements
  --------------------*/

  vars.buttonOffset = `-0.15em`
  vars.buttonVerticalPadding = `0.75em`

  /*-------------------
          Types
  --------------------*/

  vars.paginationMinWidth = `3.5em`

  vars.tieredActiveItemBackground = `#F5F5F5`
  vars.tieredActiveMenuBackground = `#F5F5F5`

  /*-------------------
        Variations
  --------------------*/

  vars.verticalBackground = `#FFFFFF`
  vars.verticalItemBackground = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02))`

  vars.invertedBackground = `${theme.black} linear-gradient(rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.0))`
  vars.invertedBoxShadow = `0px 1px 2px 0px rgba(0, 0, 0, 0.15),
    0px 0px 0px 1px rgba(255, 255, 255, 0.15)`
  vars.secondaryVerticalPadding = `0.75em`
  return vars
}
