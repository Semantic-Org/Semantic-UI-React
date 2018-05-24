export default (siteVars) => {
  const vars = {}

  // Item
  vars.itemPaddingLeft = '2rem'
  vars.itemPaddingRight = '1.8rem'
  vars.columnGap = '0.8rem'

  vars.itemHeight = '0rem'

  // Header
  // TODO: prod app uses 17.5px here, it should be 16px per the design guide!
  vars.headerLineHeight = siteVars.lineHeightSmall

  // Header Media
  vars.headerMediaColor = siteVars.mutedTextColor
  vars.headerMediaFontSize = siteVars.fontSizeSmall
  // TODO: prod app uses 17.5px here, it should be 16px per the design guide!
  vars.headerMediaLineHeight = siteVars.lineHeightSmall

  // Content
  vars.contentColor = siteVars.mutedTextColor
  vars.contentFontSize = siteVars.fontSizeSmall
  vars.contentLineHeight = siteVars.lineHeightSmall

  return vars
}
