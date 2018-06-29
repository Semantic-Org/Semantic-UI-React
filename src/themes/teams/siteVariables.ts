import { rem } from '../../lib'

//
// VARIABLES
//

export const htmlFontSize = '14px' // what 1rem represents

const blackRgbaFormat = 'rgba(37, 36, 36, {alpha})'
export const black = blackRgbaFormat.replace('{alpha}', '1')
export const gray02 = blackRgbaFormat.replace('{alpha}', '.75')
export const gray03 = blackRgbaFormat.replace('{alpha}', '.65')
export const gray04 = blackRgbaFormat.replace('{alpha}', '.50')
export const gray06 = blackRgbaFormat.replace('{alpha}', '.30')
export const gray08 = blackRgbaFormat.replace('{alpha}', '.15')
export const gray09 = '#EDEBE9'
export const gray10 = '#F3F2F1'
export const gray12 = blackRgbaFormat.replace('{alpha}', '.05')
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
export const bodyLineHeight = rem(2)

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
export const fontSizeBase = rem(1.4)
export const fontSizeSmall = rem(1.2)
export const fontSizeExtraSmall = rem(1)

//
// Line Heights
//
export const lineHeightBase = rem(2.0)
export const lineHeightSmall = rem(1.6)
export const lineHeightExtraSmall = rem(1.2)

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
