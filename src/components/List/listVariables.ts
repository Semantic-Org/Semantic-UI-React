import { pxToRem } from '../../lib'

export default siteVars => {
  const vars: any = {}

  // Item
  vars.itemPaddingLeft = pxToRem(20)
  vars.itemPaddingRight = pxToRem(18)
  vars.columnGap = pxToRem(8)

  vars.itemHeight = pxToRem(48)

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
