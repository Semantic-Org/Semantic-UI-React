import { rem } from '../../lib'

export default siteVars => {
  const vars: any = {}

  // Item
  vars.itemPaddingLeft = rem(2)
  vars.itemPaddingRight = rem(1.8)
  vars.columnGap = rem(0.8)

  vars.itemHeight = rem(4.8)

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
