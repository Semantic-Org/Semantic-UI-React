import { pxToRem } from '../../lib'

//
// VARIABLES
//

export const htmlFontSize = '14px' // what 1rem represents

const blackRgbaFormat = alpha => `rgba(37, 36, 36, ${alpha})`
export const black = blackRgbaFormat(1)
export const gray01 = blackRgbaFormat(0.95)
export const gray02 = blackRgbaFormat(0.75)
export const gray03 = blackRgbaFormat(0.65)
export const gray04 = blackRgbaFormat(0.5)
export const gray06 = blackRgbaFormat(0.3)
export const gray08 = blackRgbaFormat(0.15)
export const gray09 = '#EDEBE9'
export const gray10 = '#F3F2F1'
export const gray12 = blackRgbaFormat(0.05)
export const gray14 = '#FAF9F8'

export const white = '#FFF'

export const brand = '#6264A7'
export const brand02 = '#33344A'
export const brand04 = '#464775'
export const brand06 = '#6264A7'
export const brand08 = '#8B8CC7'
export const brand12 = '#BDBDE6'
export const brand14 = '#E2E2F6'
export const brand16 = '#F4F4FC'

export const orange04 = '#CC4A31'
export const magenta = '#B24782'
export const orchid = '#943670'
export const red = '#C4314B'
export const red08 = '#F3D6DB'
export const yellow = '#F8D22A'
export const green = '#92C353'

//
// SEMANTIC ASSIGNMENTS
//

export const bodyPadding = 0
export const bodyMargin = 0
export const bodyFontFamily = '"Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif'
export const bodyFontSize = '1rem'
export const bodyColor = black
export const bodyLineHeight = pxToRem(20)

//
// Colors
//
export const atMentionTextColor = orange04
export const disabledTextColor = gray06
export const errorTextColor = red
export const mutedTextColor = gray02
export const successTextColor = green
export const timestampTextColor = gray04

//
// Fonts
//
export const fontSizeBase = pxToRem(14)
export const fontSizeSmall = pxToRem(12)
export const fontSizeExtraSmall = pxToRem(10)

//
// Line Heights
//
export const lineHeightBase = pxToRem(20)
export const lineHeightSmall = pxToRem(16)
export const lineHeightExtraSmall = pxToRem(12)

//
// Text Component
//
export const textExtraSmallFontSize = '10pt'
export const textExtraSmallLineHeight = '12pt'
export const textSmallFontSize = '12pt'
export const textSmallLineHeight = '16pt'
export const textMediumFontSize = '14pt'
export const textMediumLineHeight = '20pt'
export const textLargeFontSize = '18pt'
export const textLargeLineHeight = '24pt'
export const textExtraLargeFontSize = '24pt'
export const textExtraLargeLineHeight = '32pt'
export const textX2FontSize = ''
export const textX2LineHeight = ''
export const textX3FontSize = ''
export const textX3LineHeight = ''
export const textX4FontSize = ''
export const textX4LineHeight = ''
