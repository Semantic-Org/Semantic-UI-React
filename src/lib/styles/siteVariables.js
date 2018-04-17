// ========================================================
// LESS Polyfills
// ========================================================
const round = Math.round
const unit = (val, suffix) => `${val}${suffix}`
const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`

/**
 * This file began as a direct copy of the SUI variables file.
 * The original LESS was left above each section as it was ported to JS.
 * This helps to see the logic behind how we could port styles to JS.
 */

/**
 * Heads up!
 *
 * Some reordering had to take place as composed vars must be defined before use in JS.
 */
/*-------------------
      Base Sizes
--------------------*/

/* This is the single variable that controls them all */
export const emSize   = 14

// /* The size of page text  */
// export const fontSize = '14px'

/*-------------------
  Exact Pixel Values
--------------------*/
/*
  These are used to specify exact pixel values in em
  for things like borders that remain constantly
  sized as emSize adjusts

  Since there are many more sizes than names for sizes,
  these are named by their original pixel values.

*/

// export const absolute1px  = unit( (1 / emSize), 'rem')
// export const absolute2px  = unit( (2 / emSize), 'rem')
// export const absolute3px  = unit( (3 / emSize), 'rem')
export const absolute4px  = unit( (4 / emSize), 'rem')
// export const absolute5px  = unit( (5 / emSize), 'rem')
// export const absolute6px  = unit( (6 / emSize), 'rem')
// export const absolute7px  = unit( (7 / emSize), 'rem')
// export const absolute8px  = unit( (8 / emSize), 'rem')
// export const absolute9px  = unit( (9 / emSize), 'rem')
// export const absolute10px = unit( (10 / emSize), 'rem')
// export const absolute11px = unit( (11 / emSize), 'rem')
// export const absolute12px = unit( (12 / emSize), 'rem')
// export const absolute13px = unit( (13 / emSize), 'rem')
// export const absolute14px = unit( (14 / emSize), 'rem')
// export const absolute15px = unit( (15 / emSize), 'rem')
// export const absolute16px = unit( (16 / emSize), 'rem')
// export const absolute17px = unit( (17 / emSize), 'rem')
// export const absolute18px = unit( (18 / emSize), 'rem')
// export const absolute19px = unit( (19 / emSize), 'rem')
// export const absolute20px = unit( (20 / emSize), 'rem')
// export const absolute21px = unit( (21 / emSize), 'rem')
// export const absolute22px = unit( (22 / emSize), 'rem')
// export const absolute23px = unit( (23 / emSize), 'rem')
// export const absolute24px = unit( (24 / emSize), 'rem')
// export const absolute25px = unit( (25 / emSize), 'rem')
// export const absolute26px = unit( (26 / emSize), 'rem')
// export const absolute27px = unit( (27 / emSize), 'rem')
// export const absolute28px = unit( (28 / emSize), 'rem')
// export const absolute29px = unit( (29 / emSize), 'rem')
// export const absolute30px = unit( (30 / emSize), 'rem')
// export const absolute31px = unit( (31 / emSize), 'rem')
// export const absolute32px = unit( (32 / emSize), 'rem')
// export const absolute33px = unit( (33 / emSize), 'rem')
// export const absolute34px = unit( (34 / emSize), 'rem')
// export const absolute35px = unit( (35 / emSize), 'rem')
// export const absolute36px = unit( (36 / emSize), 'rem')
// export const absolute37px = unit( (37 / emSize), 'rem')
// export const absolute38px = unit( (38 / emSize), 'rem')
// export const absolute39px = unit( (39 / emSize), 'rem')
// export const absolute40px = unit( (40 / emSize), 'rem')
// export const absolute41px = unit( (41 / emSize), 'rem')
// export const absolute42px = unit( (42 / emSize), 'rem')
// export const absolute43px = unit( (43 / emSize), 'rem')
// export const absolute44px = unit( (44 / emSize), 'rem')
// export const absolute45px = unit( (45 / emSize), 'rem')
// export const absolute46px = unit( (46 / emSize), 'rem')
// export const absolute47px = unit( (47 / emSize), 'rem')
// export const absolute48px = unit( (48 / emSize), 'rem')
// export const absolute49px = unit( (49 / emSize), 'rem')
// export const absolute50px = unit( (50 / emSize), 'rem')
// export const absolute51px = unit( (51 / emSize), 'rem')
// export const absolute52px = unit( (52 / emSize), 'rem')
// export const absolute53px = unit( (53 / emSize), 'rem')
// export const absolute54px = unit( (54 / emSize), 'rem')
// export const absolute55px = unit( (55 / emSize), 'rem')
// export const absolute56px = unit( (56 / emSize), 'rem')
// export const absolute57px = unit( (57 / emSize), 'rem')
// export const absolute58px = unit( (58 / emSize), 'rem')
// export const absolute59px = unit( (59 / emSize), 'rem')
// export const absolute60px = unit( (60 / emSize), 'rem')
// export const absolute61px = unit( (61 / emSize), 'rem')
// export const absolute62px = unit( (62 / emSize), 'rem')
// export const absolute63px = unit( (63 / emSize), 'rem')
// export const absolute64px = unit( (64 / emSize), 'rem')
//
// export const relative1px  = unit( (1 / emSize), 'em')
export const relative2px  = unit( (2 / emSize), 'em')
export const relative3px  = unit( (3 / emSize), 'em')
// export const relative4px  = unit( (4 / emSize), 'em')
// export const relative5px  = unit( (5 / emSize), 'em')
// export const relative6px  = unit( (6 / emSize), 'em')
// export const relative7px  = unit( (7 / emSize), 'em')
// export const relative8px  = unit( (8 / emSize), 'em')
// export const relative9px  = unit( (9 / emSize), 'em')
// export const relative10px = unit( (10 / emSize), 'em')
// export const relative11px = unit( (11 / emSize), 'em')
// export const relative12px = unit( (12 / emSize), 'em')
// export const relative13px = unit( (13 / emSize), 'em')
// export const relative14px = unit( (14 / emSize), 'em')
// export const relative15px = unit( (15 / emSize), 'em')
// export const relative16px = unit( (16 / emSize), 'em')
// export const relative17px = unit( (17 / emSize), 'em')
// export const relative18px = unit( (18 / emSize), 'em')
// export const relative19px = unit( (19 / emSize), 'em')
// export const relative20px = unit( (20 / emSize), 'em')
// export const relative21px = unit( (21 / emSize), 'em')
// export const relative22px = unit( (22 / emSize), 'em')
// export const relative23px = unit( (23 / emSize), 'em')
// export const relative24px = unit( (24 / emSize), 'em')
// export const relative25px = unit( (25 / emSize), 'em')
// export const relative26px = unit( (26 / emSize), 'em')
// export const relative27px = unit( (27 / emSize), 'em')
// export const relative28px = unit( (28 / emSize), 'em')
// export const relative29px = unit( (29 / emSize), 'em')
// export const relative30px = unit( (30 / emSize), 'em')
// export const relative31px = unit( (31 / emSize), 'em')
// export const relative32px = unit( (32 / emSize), 'em')
// export const relative33px = unit( (33 / emSize), 'em')
// export const relative34px = unit( (34 / emSize), 'em')
// export const relative35px = unit( (35 / emSize), 'em')
// export const relative36px = unit( (36 / emSize), 'em')
// export const relative37px = unit( (37 / emSize), 'em')
// export const relative38px = unit( (38 / emSize), 'em')
// export const relative39px = unit( (39 / emSize), 'em')
// export const relative40px = unit( (40 / emSize), 'em')
// export const relative41px = unit( (41 / emSize), 'em')
// export const relative42px = unit( (42 / emSize), 'em')
// export const relative43px = unit( (43 / emSize), 'em')
// export const relative44px = unit( (44 / emSize), 'em')
// export const relative45px = unit( (45 / emSize), 'em')
// export const relative46px = unit( (46 / emSize), 'em')
// export const relative47px = unit( (47 / emSize), 'em')
// export const relative48px = unit( (48 / emSize), 'em')
// export const relative49px = unit( (49 / emSize), 'em')
// export const relative50px = unit( (50 / emSize), 'em')
// export const relative51px = unit( (51 / emSize), 'em')
// export const relative52px = unit( (52 / emSize), 'em')
// export const relative53px = unit( (53 / emSize), 'em')
// export const relative54px = unit( (54 / emSize), 'em')
// export const relative55px = unit( (55 / emSize), 'em')
// export const relative56px = unit( (56 / emSize), 'em')
// export const relative57px = unit( (57 / emSize), 'em')
// export const relative58px = unit( (58 / emSize), 'em')
// export const relative59px = unit( (59 / emSize), 'em')
// export const relative60px = unit( (60 / emSize), 'em')
// export const relative61px = unit( (61 / emSize), 'em')
// export const relative62px = unit( (62 / emSize), 'em')
// export const relative63px = unit( (63 / emSize), 'em')
// export const relative64px = unit( (64 / emSize), 'em')

// /*******************************
//          Site Settings
// *******************************/
//
// /*-------------------
//        Fonts
// --------------------*/
//
// export const fontName          = 'Lato'
// export const fontSmoothing     = 'antialiased'
//
// export const headerFont        = `${fontName}, 'Helvetica Neue', Arial, Helvetica, sans-serif`
// export const pageFont          = `${fontName}, 'Helvetica Neue', Arial, Helvetica, sans-serif`
//
// export const googleFontName    = fontName
// export const importGoogleFonts = true
// export const googleFontSizes   = '400,700,400italic,700italic'
// export const googleSubset      = 'latin'
//
// export const googleProtocol    = 'https://'
// export const googleFontRequest = `${googleFontName}:${googleFontSizes}&subset=${googleSubset}`
//
//
export const bold              = 'bold'
// export const normal            = 'normal'
//
// /*-------------------
//     Border Radius
// --------------------*/
//
// /* See Power-user section below
//    for explanation of @px variables
// */
// export const relativeBorderRadius= relative4px
export const absoluteBorderRadius= absolute4px
//
// export const defaultBorderRadius= absoluteBorderRadius
//
// /*-------------------
//     Brand Colors
// --------------------*/
//
// export const primaryColor        = blue
// export const secondaryColor      = black
//
// export const lightPrimaryColor   = lightBlue
// export const lightSecondaryColor = lightBlack
//
// /*--------------
//   Page Heading
// ---------------*/
//
// export const headerFontWeight = bold
// export const headerLineHeight = unit((18 / 14), 'em')
//
// export const h1 = unit((28 / 14), 'rem')
// export const h2 = unit((24 / 14), 'rem')
// export const h3 = unit((18 / 14), 'rem')
// export const h4 = unit((15 / 14), 'rem')
// export const h5 = unit((14 / 14), 'rem')
//
// /*--------------
//    Form Input
// ---------------*/
//
// /* This adjusts the default form input across all elements */
// export const inputBackground        = white
// export const inputVerticalPadding   = relative11px
// export const inputHorizontalPadding = relative14px
// export const inputPadding           = `${inputVerticalPadding} ${inputHorizontalPadding}`
//
// /* Input Text Color */
// export const inputColor= textColor
// export const inputPlaceholderColor= lighten(inputColor, 75)
// export const inputPlaceholderFocusColor= lighten(inputColor, 45)
//
// /* Line Height Default For Inputs in Browser (Descendors are 17px at 14px base em) */
// export const inputLineHeight= unit((17 / 14), 'em')
//
// /*-------------------
//     Focused Input
// --------------------*/
//
// /* Used on inputs, textarea etc */
// export const focusedFormBorderColor= '#85B7D9'
//
// /* Used on dropdowns, other larger blocks */
// export const focusedFormMutedBorderColor= '#96C8DA'
//
// /*-------------------
//         Sizes
// --------------------*/
//
// /*
//   Sizes are all expressed in terms of 14px/em (default em)
//   This ensures these "ratios" remain constant despite changes in EM
// */
//
// export const miniSize        = (11 / 14)
// export const tinySize        = (12 / 14)
// export const smallSize       = (13 / 14)
// export const mediumSize      = (14 / 14)
export const largeSize       = (16 / 14)
// export const bigSize         = (18 / 14)
// export const hugeSize        = (20 / 14)
// export const massiveSize     = (24 / 14)
//
//
// /*-------------------
//         Page
// --------------------*/
//
// export const pageBackground      = '#FFFFFF'
// export const pageOverflowX       = hidden
//
// export const lineHeight          = '1.4285em'
// export const textColor           = rgba(0, 0, 0, 0.87)
//
// /*-------------------
//       Paragraph
// --------------------*/
//
// export const paragraphMargin     = 0em 0em 1em
// export const paragraphLineHeight = lineHeight
//
// /*-------------------
//        Links
// --------------------*/
//
// export const linkColor           = '#4183C4'
// export const linkUnderline       = 'none'
// export const linkHoverColor      = darken(saturate(linkColor, 20), 15, relative)
// export const linkHoverUnderline  = linkUnderline
//
// /*-------------------
//     Scroll Bars
// --------------------*/
//
// export const useCustomScrollbars= true
//
// export const customScrollbarWidth= '10px'
// export const customScrollbarHeight= '10px'
//
// export const trackBackground= rgba(0, 0, 0, 0.1)
// export const trackBorderRadius= '0px'
//
// export const thumbBorderRadius= '5px'
// export const thumbBackground= rgba(0, 0, 0, 0.25)
// export const thumbTransition= 'color 0.2s ease'
//
// export const thumbInactiveBackground= rgba(0, 0, 0, 0.15)
// export const thumbHoverBackground= rgba(128, 135, 139, 0.8)
//
// /* Inverted */
// export const trackInvertedBackground= rgba(255, 255, 255, 0.1)
// export const thumbInvertedBackground= rgba(255, 255, 255, 0.25)
// export const thumbInvertedInactiveBackground= rgba(255, 255, 255, 0.15)
// export const thumbInvertedHoverBackground= rgba(255, 255, 255, 0.35)
//
// /*-------------------
//   Highlighted Text
// --------------------*/
//
// export const highlightBackground      = '#CCE2FF'
// export const highlightColor           = textColor
//
// export const inputHighlightBackground = rgba(100, 100, 100, 0.4)
// export const inputHighlightColor      = textColor
//
//
// /*-------------------
//        Loader
// --------------------*/
//
// export const loaderSize              = relativeBig
// export const loaderSpeed             = '0.6s'
// export const loaderLineWidth         = '0.2em'
// export const loaderFillColor         = rgba(0, 0, 0, 0.1)
// export const loaderLineColor         = grey
//
// export const invertedLoaderFillColor = rgba(255, 255, 255, 0.15)
// export const invertedLoaderLineColor = white
//
// /*-------------------
//         Grid
// --------------------*/
//
// export const columnCount= '16'
//
// /*-------------------
//      Transitions
// --------------------*/
//
// export const defaultDuration = '0.1s'
// export const defaultEasing   = ease
//
// /*-------------------
//      Breakpoints
// --------------------*/
//
// export const mobileBreakpoint            = '320px'
// export const tabletBreakpoint            = '768px'
// export const computerBreakpoint          = '992px'
// export const largeMonitorBreakpoint      = '1200px'
// export const widescreenMonitorBreakpoint = '1920px'
//
// /*-------------------
//       Site Colors
// --------------------*/
//
// /*---  Colors  ---*/
// export const red              = '#DB2828'
// export const orange           = '#F2711C'
// export const yellow           = '#FBBD08'
// export const olive            = '#B5CC18'
// export const green            = '#21BA45'
// export const teal             = '#00B5AD'
// export const blue             = '#2185D0'
// export const violet           = '#6435C9'
// export const purple           = '#A333C8'
// export const pink             = '#E03997'
// export const brown            = '#A5673F'
// export const grey             = '#767676'
// export const black            = '#1B1C1D'
//
// /*---  Light Colors  ---*/
// export const lightRed         = '#FF695E'
// export const lightOrange      = '#FF851B'
// export const lightYellow      = '#FFE21F'
// export const lightOlive       = '#D9E778'
// export const lightGreen       = '#2ECC40'
// export const lightTeal        = '#6DFFFF'
// export const lightBlue        = '#54C8FF'
// export const lightViolet      = '#A291FB'
// export const lightPurple      = '#DC73FF'
// export const lightPink        = '#FF8EDF'
// export const lightBrown       = '#D67C1C'
// export const lightGrey        = '#DCDDDE'
// export const lightBlack       = '#545454'
//
// /*---   Neutrals  ---*/
// export const fullBlack        = '#000000'
// export const offWhite         = '#F9FAFB'
// export const darkWhite        = '#F3F4F5'
// export const midWhite         = '#DCDDDE'
// export const white            = '#FFFFFF'
//
// /*--- Colored Backgrounds ---*/
// export const redBackground    = '#FFE8E6'
// export const orangeBackground = '#FFEDDE'
// export const yellowBackground = '#FFF8DB'
// export const oliveBackground  = '#FBFDEF'
// export const greenBackground  = '#E5F9E7'
// export const tealBackground   = '#E1F7F7'
// export const blueBackground   = '#DFF0FF'
// export const violetBackground = '#EAE7FF'
// export const purpleBackground = '#F6E7FF'
// export const pinkBackground   = '#FFE3FB'
// export const brownBackground  = '#F1E2D3'
//
// /*--- Colored Headers ---*/
// export const redHeaderColor    = darken(redTextColor, 5)
// export const oliveHeaderColor  = darken(oliveTextColor, 5)
// export const greenHeaderColor  = darken(greenTextColor, 5)
// export const yellowHeaderColor = darken(yellowTextColor, 5)
// export const blueHeaderColor   = darken(blueTextColor, 5)
// export const tealHeaderColor   = darken(tealTextColor, 5)
// export const pinkHeaderColor   = darken(pinkTextColor, 5)
// export const violetHeaderColor = darken(violetTextColor, 5)
// export const purpleHeaderColor = darken(purpleTextColor, 5)
// export const orangeHeaderColor = darken(orangeTextColor, 5)
// export const brownHeaderColor  = darken(brownTextColor, 5)
//
// /*--- Colored Text ---*/
// export const redTextColor    = red
// export const orangeTextColor = orange
// export const yellowTextColor = '#B58105' // Yellow text is difficult to read
// export const oliveTextColor  = '#8ABC1E' // Olive is difficult to read
// export const greenTextColor  = '#1EBC30' // Green is difficult to read
// export const tealTextColor   = '#10A3A3' // Teal text is difficult to read
// export const blueTextColor   = blue
// export const violetTextColor = violet
// export const purpleTextColor = purple
// export const pinkTextColor   = pink
// export const brownTextColor  = brown
//
// /*--- Colored Border ---*/
// export const redBorderColor    = redTextColor
// export const orangeBorderColor = orangeTextColor
// export const yellowBorderColor = yellowTextColor
// export const oliveBorderColor  = oliveTextColor
// export const greenBorderColor  = greenTextColor
// export const tealBorderColor   = tealTextColor
// export const blueBorderColor   = blueTextColor
// export const violetBorderColor = violetTextColor
// export const purpleBorderColor = purpleTextColor
// export const pinkBorderColor   = pinkTextColor
// export const brownBorderColor  = brownTextColor
//
// /*-------------------
//      Alpha Colors
// --------------------*/
//
// export const subtleTransparentBlack     = rgba(0, 0, 0, 0.03)
// export const transparentBlack           = rgba(0, 0, 0, 0.05)
export const strongTransparentBlack     = rgba(0, 0, 0, 0.10)
// export const veryStrongTransparentBlack = rgba(0, 0, 0, 0.15)
//
// export const subtleTransparentWhite     = rgba(255, 255, 255, 0.02)
// export const transparentWhite           = rgba(255, 255, 255, 0.08)
// export const strongTransparentWhite     = rgba(255, 255, 255, 0.15)
//
// /*-------------------
//        Accents
// --------------------*/
//
// /* Differentiating Neutrals */
// export const subtleGradient= `linear-gradient(transparent, ${transparentBlack})`
//
// /* Differentiating Layers */
// export const subtleShadow=
//   `0px 1px 2px 0 ${borderColor}`
//
// export const floatingShadow=
//   `0px 2px 4px 0px ${rgba(34, 36, 38, 0.12)},
//   0px 2px 10px 0px ${rgba(34, 36, 38, 0.15)}`
//
//
// /*******************************
//            Power-User
// *******************************/
//
//
// /*-------------------
//     Emotive Colors
// --------------------*/
//
// /* Positive */
// export const positiveColor           = green
// export const positiveBackgroundColor = '#FCFFF5'
// export const positiveBorderColor     = '#A3C293'
// export const positiveHeaderColor     = '#1A531B'
// export const positiveTextColor       = '#2C662D'
//
// /* Negative */
// export const negativeColor           = red
// export const negativeBackgroundColor = '#FFF6F6'
// export const negativeBorderColor     = '#E0B4B4'
// export const negativeHeaderColor     = '#912D2B'
// export const negativeTextColor       = '#9F3A38'
//
// /* Info */
// export const infoColor              = '#31CCEC'
// export const infoBackgroundColor    = '#F8FFFF'
// export const infoBorderColor        = '#A9D5DE'
// export const infoHeaderColor        = '#0E566C'
// export const infoTextColor          = '#276F86'
//
// /* Warning */
// export const warningColor           = '#F2C037'
// export const warningBorderColor     = '#C9BA9B'
// export const warningBackgroundColor = '#FFFAF3'
// export const warningHeaderColor     = '#794B02'
// export const warningTextColor       = '#573A08'
//
// /*-------------------
//         Paths
// --------------------*/
//
// /* For source only. Modified in gulp for dist */
// export const imagePath = '../../themes/default/assets/images'
// export const fontPath  = '../../themes/default/assets/fonts'
//
// /*-------------------
//        Em Sizes
// --------------------*/
//
// /*
//   This rounds @size values to the closest pixel then expresses that value in (r)em.
//   This ensures all size values round to exact pixels
// */
// export const mini            = unit( round(miniSize * emSize) / emSize, 'rem')
// export const tiny            = unit( round(tinySize * emSize) / emSize, 'rem')
// export const small           = unit( round(smallSize * emSize) / emSize, 'rem')
// export const medium          = unit( round(mediumSize * emSize) / emSize, 'rem')
// export const large           = unit( round(largeSize * emSize) / emSize, 'rem')
// export const big             = unit( round(bigSize * emSize) / emSize, 'rem')
// export const huge            = unit( round(hugeSize * emSize) / emSize, 'rem')
// export const massive         = unit( round(massiveSize * emSize) / emSize, 'rem')
//
// /* em */
// export const relativeMini    = unit( round(miniSize * emSize) / emSize, 'em')
// export const relativeTiny    = unit( round(tinySize * emSize) / emSize, 'em')
// export const relativeSmall   = unit( round(smallSize * emSize) / emSize, 'em')
// export const relativeMedium  = unit( round(mediumSize * emSize) / emSize, 'em')
export const relativeLarge   = unit( round(largeSize * emSize) / emSize, 'em')
// export const relativeBig     = unit( round(bigSize * emSize) / emSize, 'em')
// export const relativeHuge    = unit( round(hugeSize * emSize) / emSize, 'em')
// export const relativeMassive = unit( round(massiveSize * emSize) / emSize, 'em')
//
// /* rem */
// export const absoluteMini    = unit( round(miniSize * emSize) / emSize, 'rem')
// export const absoluteTiny    = unit( round(tinySize * emSize) / emSize, 'rem')
// export const absoluteSmall   = unit( round(smallSize * emSize) / emSize, 'rem')
// export const absoluteMedium  = unit( round(mediumSize * emSize) / emSize, 'rem')
// export const absoluteLarge   = unit( round(largeSize * emSize) / emSize, 'rem')
// export const absoluteBig     = unit( round(bigSize * emSize) / emSize, 'rem')
// export const absoluteHuge    = unit( round(hugeSize * emSize) / emSize, 'rem')
// export const absoluteMassive = unit( round(massiveSize * emSize) / emSize, 'rem')
//
// /*-------------------
//        Icons
// --------------------*/
//
// /* Maximum Glyph Width of Icon */
// export const iconWidth = '1.18em'
//
// /*-------------------
//      Neutral Text
// --------------------*/
//
// export const darkTextColor               = rgba(0, 0, 0, 0.85)
export const mutedTextColor              = rgba(0, 0, 0, 0.6)
// export const lightTextColor              = rgba(0, 0, 0, 0.4)
//
// export const unselectedTextColor         = rgba(0, 0, 0, 0.4)
// export const hoveredTextColor            = rgba(0, 0, 0, 0.8)
// export const pressedTextColor            = rgba(0, 0, 0, 0.9)
// export const selectedTextColor           = rgba(0, 0, 0, 0.95)
// export const disabledTextColor           = rgba(0, 0, 0, 0.2)
//
// export const invertedTextColor           = rgba(255, 255, 255, 0.9)
// export const invertedMutedTextColor      = rgba(255, 255, 255, 0.8)
// export const invertedLightTextColor      = rgba(255, 255, 255, 0.7)
// export const invertedUnselectedTextColor = rgba(255, 255, 255, 0.5)
// export const invertedHoveredTextColor    = rgba(255, 255, 255, 1)
// export const invertedPressedTextColor    = rgba(255, 255, 255, 1)
// export const invertedSelectedTextColor   = rgba(255, 255, 255, 1)
// export const invertedDisabledTextColor   = rgba(255, 255, 255, 0.2)
//
// /*-------------------
//      Brand Colors
// --------------------*/
//
// export const facebookColor   = '#3B5998'
// export const twitterColor    = '#55ACEE'
// export const googlePlusColor = '#DD4B39'
// export const linkedInColor   = '#1F88BE'
// export const youtubeColor    = '#FF0000'
// export const pinterestColor  = '#BD081C'
// export const vkColor         = '#4D7198'
// export const instagramColor  = '#49769C'
//
// /*-------------------
//       Borders
// --------------------*/
//
// export const circularRadius                = '500rem'
//
// export const borderColor               = rgba(34, 36, 38, 0.15)
// export const strongBorderColor         = rgba(34, 36, 38, 0.22)
// export const internalBorderColor       = rgba(34, 36, 38, 0.1)
// export const selectedBorderColor       = rgba(34, 36, 38, 0.35)
// export const strongSelectedBorderColor = rgba(34, 36, 38, 0.5)
// export const disabledBorderColor       = rgba(34, 36, 38, 0.5)
//
// export const solidInternalBorderColor  = '#FAFAFA'
// export const solidBorderColor          = '#D4D4D5'
// export const solidSelectedBorderColor  = '#BCBDBD'
//
// export const whiteBorderColor              = rgba(255, 255, 255, 0.1)
// export const selectedWhiteBorderColor      = rgba(255, 255, 255, 0.8)
//
// export const solidWhiteBorderColor         = '#555555'
// export const selectedSolidWhiteBorderColor = '#999999'
//
//
// /*-------------------
//     Derived Values
// --------------------*/
//
// /* Loaders Position Offset */
// export const loaderOffset = -(loaderSize / 2)
// export const loaderMargin = `${loaderOffset} 0em 0em ${loaderOffset}`
//
// /* Rendered Scrollbar Width */
// export const scrollbarWidth= '17px'
//
// /* Maximum Single Character Glyph Width, aka Capital "W" */
// export const glyphWidth= '1.1em'
//
// /* Used to match floats with text */
// export const lineHeightOffset       = ((@lineHeight - 1em) / 2)
// export const headerLineHeightOffset = (@headerLineHeight - 1em) / 2
//
// /* Header Spacing */
// export const headerTopMargin    = `calc(2rem - ${headerLineHeightOffset})`
// export const headerBottomMargin = '1rem'
// export const headerMargin       = `@headerTopMargin 0em @headerBottomMargin`
//
// /* Minimum Mobile Width */
// export const pageMinWidth       = '320px'
//
// /* Positive / Negative Dupes */
// export const successBackgroundColor = positiveBackgroundColor
// export const successColor           = positiveColor
// export const successBorderColor     = positiveBorderColor
// export const successHeaderColor     = positiveHeaderColor
// export const successTextColor       = positiveTextColor
//
// export const errorBackgroundColor   = negativeBackgroundColor
// export const errorColor             = negativeColor
// export const errorBorderColor       = negativeBorderColor
// export const errorHeaderColor       = negativeHeaderColor
// export const errorTextColor         = negativeTextColor
//
//
// /* Responsive */
// export const largestMobileScreen = (tabletBreakpoint - '1px')
// export const largestTabletScreen = (computerBreakpoint - '1px')
// export const largestSmallMonitor = (largeMonitorBreakpoint - '1px')
// export const largestLargeMonitor = (widescreenMonitorBreakpoint - '1px')
//
//
// /* Columns */
// export const oneWide        = (1 / @columnCount * 100%)
// export const twoWide        = (2 / @columnCount * 100%)
// export const threeWide      = (3 / @columnCount * 100%)
// export const fourWide       = (4 / @columnCount * 100%)
// export const fiveWide       = (5 / @columnCount * 100%)
// export const sixWide        = (6 / @columnCount * 100%)
// export const sevenWide      = (7 / @columnCount * 100%)
// export const eightWide      = (8 / @columnCount * 100%)
// export const nineWide       = (9 / @columnCount * 100%)
// export const tenWide        = (10 / @columnCount * 100%)
// export const elevenWide     = (11 / @columnCount * 100%)
// export const twelveWide     = (12 / @columnCount * 100%)
// export const thirteenWide   = (13 / @columnCount * 100%)
// export const fourteenWide   = (14 / @columnCount * 100%)
// export const fifteenWide    = (15 / @columnCount * 100%)
// export const sixteenWide    = (16 / @columnCount * 100%)
//
// export const oneColumn      = (1 / 1 * 100%)
// export const twoColumn      = (1 / 2 * 100%)
// export const threeColumn    = (1 / 3 * 100%)
// export const fourColumn     = (1 / 4 * 100%)
// export const fiveColumn     = (1 / 5 * 100%)
// export const sixColumn      = (1 / 6 * 100%)
// export const sevenColumn    = (1 / 7 * 100%)
// export const eightColumn    = (1 / 8 * 100%)
// export const nineColumn     = (1 / 9 * 100%)
// export const tenColumn      = (1 / 10 * 100%)
// export const elevenColumn   = (1 / 11 * 100%)
// export const twelveColumn   = (1 / 12 * 100%)
// export const thirteenColumn = (1 / 13 * 100%)
// export const fourteenColumn = (1 / 14 * 100%)
// export const fifteenColumn  = (1 / 15 * 100%)
// export const sixteenColumn  = (1 / 16 * 100%)
//
//
// /*******************************
//              States
// *******************************/
//
// /*-------------------
//       Disabled
// --------------------*/
//
// export const disabledOpacity= '0.45'
// export const disabledTextColor= rgba(40, 40, 40, 0.3)
// export const invertedDisabledTextColor= rgba(225, 225, 225, 0.3)
//
// /*-------------------
//         Hover
// --------------------*/
//
// /*---  Shadows  ---*/
// export const floatingShadowHover=`
//   0px 2px 4px 0px rgba(34, 36, 38, 0.15),
//   0px 2px 10px 0px rgba(34, 36, 38, 0.25)
// `
//
// /*---  Colors  ---*/
// export const primaryColorHover    = saturate(darken(@primaryColor, 5), 10, relative)
// export const secondaryColorHover  = saturate(lighten(@secondaryColor, 5), 10, relative)
//
// export const redHover             = saturate(darken(@red, 5), 10, relative)
// export const orangeHover          = saturate(darken(@orange, 5), 10, relative)
// export const yellowHover          = saturate(darken(@yellow, 5), 10, relative)
// export const oliveHover           = saturate(darken(@olive, 5), 10, relative)
// export const greenHover           = saturate(darken(@green, 5), 10, relative)
// export const tealHover            = saturate(darken(@teal, 5), 10, relative)
// export const blueHover            = saturate(darken(@blue, 5), 10, relative)
// export const violetHover          = saturate(darken(@violet, 5), 10, relative)
// export const purpleHover          = saturate(darken(@purple, 5), 10, relative)
// export const pinkHover            = saturate(darken(@pink, 5), 10, relative)
// export const brownHover           = saturate(darken(@brown, 5), 10, relative)
//
// export const lightRedHover        = saturate(darken(@lightRed, 5), 10, relative)
// export const lightOrangeHover     = saturate(darken(@lightOrange, 5), 10, relative)
// export const lightYellowHover     = saturate(darken(@lightYellow, 5), 10, relative)
// export const lightOliveHover      = saturate(darken(@lightOlive, 5), 10, relative)
// export const lightGreenHover      = saturate(darken(@lightGreen, 5), 10, relative)
// export const lightTealHover       = saturate(darken(@lightTeal, 5), 10, relative)
// export const lightBlueHover       = saturate(darken(@lightBlue, 5), 10, relative)
// export const lightVioletHover     = saturate(darken(@lightViolet, 5), 10, relative)
// export const lightPurpleHover     = saturate(darken(@lightPurple, 5), 10, relative)
// export const lightPinkHover       = saturate(darken(@lightPink, 5), 10, relative)
// export const lightBrownHover      = saturate(darken(@lightBrown, 5), 10, relative)
// export const lightGreyHover       = saturate(darken(@lightGrey, 5), 10, relative)
// export const lightBlackHover      = saturate(darken(@fullBlack, 5), 10, relative)
//
// /*---  Emotive  ---*/
// export const positiveColorHover   = saturate(darken(@positiveColor, 5), 10, relative)
// export const negativeColorHover   = saturate(darken(@negativeColor, 5), 10, relative)
//
// /*---  Brand   ---*/
// export const facebookHoverColor   = saturate(darken(@facebookColor, 5), 10, relative)
// export const twitterHoverColor    = saturate(darken(@twitterColor, 5), 10, relative)
// export const googlePlusHoverColor = saturate(darken(@googlePlusColor, 5), 10, relative)
// export const linkedInHoverColor   = saturate(darken(@linkedInColor, 5), 10, relative)
// export const youtubeHoverColor    = saturate(darken(@youtubeColor, 5), 10, relative)
// export const instagramHoverColor  = saturate(darken(@instagramColor, 5), 10, relative)
// export const pinterestHoverColor  = saturate(darken(@pinterestColor, 5), 10, relative)
// export const vkHoverColor         = saturate(darken(@vkColor, 5), 10, relative)
//
// /*---  Dark Tones  ---*/
// export const fullBlackHover       = lighten(@fullBlack, 5)
// export const blackHover           = lighten(@black, 5)
// export const greyHover            = lighten(@grey, 5)
//
// /*---  Light Tones  ---*/
// export const whiteHover           = darken(@white, 5)
// export const offWhiteHover        = darken(@offWhite, 5)
// export const darkWhiteHover       = darken(@darkWhite, 5)
//
// /*-------------------
//         Focus
// --------------------*/
//
// /*---  Colors  ---*/
// export const primaryColorFocus    = saturate(darken(@primaryColor, 8), 20, relative)
// export const secondaryColorFocus  = saturate(lighten(@secondaryColor, 8), 20, relative)
//
// export const redFocus             = saturate(darken(@red, 8), 20, relative)
// export const orangeFocus          = saturate(darken(@orange, 8), 20, relative)
// export const yellowFocus          = saturate(darken(@yellow, 8), 20, relative)
// export const oliveFocus           = saturate(darken(@olive, 8), 20, relative)
// export const greenFocus           = saturate(darken(@green, 8), 20, relative)
// export const tealFocus            = saturate(darken(@teal, 8), 20, relative)
// export const blueFocus            = saturate(darken(@blue, 8), 20, relative)
// export const violetFocus          = saturate(darken(@violet, 8), 20, relative)
// export const purpleFocus          = saturate(darken(@purple, 8), 20, relative)
// export const pinkFocus            = saturate(darken(@pink, 8), 20, relative)
// export const brownFocus           = saturate(darken(@brown, 8), 20, relative)
//
// export const lightRedFocus        = saturate(darken(@lightRed, 8), 20, relative)
// export const lightOrangeFocus     = saturate(darken(@lightOrange, 8), 20, relative)
// export const lightYellowFocus     = saturate(darken(@lightYellow, 8), 20, relative)
// export const lightOliveFocus      = saturate(darken(@lightOlive, 8), 20, relative)
// export const lightGreenFocus      = saturate(darken(@lightGreen, 8), 20, relative)
// export const lightTealFocus       = saturate(darken(@lightTeal, 8), 20, relative)
// export const lightBlueFocus       = saturate(darken(@lightBlue, 8), 20, relative)
// export const lightVioletFocus     = saturate(darken(@lightViolet, 8), 20, relative)
// export const lightPurpleFocus     = saturate(darken(@lightPurple, 8), 20, relative)
// export const lightPinkFocus       = saturate(darken(@lightPink, 8), 20, relative)
// export const lightBrownFocus      = saturate(darken(@lightBrown, 8), 20, relative)
// export const lightGreyFocus       = saturate(darken(@lightGrey, 8), 20, relative)
// export const lightBlackFocus      = saturate(darken(@fullBlack, 8), 20, relative)
//
// /*---  Emotive  ---*/
// export const positiveColorFocus   = saturate(darken(@positiveColor, 8), 20, relative)
// export const negativeColorFocus   = saturate(darken(@negativeColor, 8), 20, relative)
//
// /*---  Brand   ---*/
// export const facebookFocusColor   = saturate(darken(@facebookColor, 8), 20, relative)
// export const twitterFocusColor    = saturate(darken(@twitterColor, 8), 20, relative)
// export const googlePlusFocusColor = saturate(darken(@googlePlusColor, 8), 20, relative)
// export const linkedInFocusColor   = saturate(darken(@linkedInColor, 8), 20, relative)
// export const youtubeFocusColor    = saturate(darken(@youtubeColor, 8), 20, relative)
// export const instagramFocusColor  = saturate(darken(@instagramColor, 8), 20, relative)
// export const pinterestFocusColor  = saturate(darken(@pinterestColor, 8), 20, relative)
// export const vkFocusColor         = saturate(darken(@vkColor, 8), 20, relative)
//
// /*---  Dark Tones  ---*/
// export const fullBlackFocus       = lighten(@fullBlack, 8)
// export const blackFocus           = lighten(@black, 8)
// export const greyFocus            = lighten(@grey, 8)
//
// /*---  Light Tones  ---*/
// export const whiteFocus           = darken(@white, 8)
// export const offWhiteFocus        = darken(@offWhite, 8)
// export const darkWhiteFocus       = darken(@darkWhite, 8)
//
//
// /*-------------------
//     Down (:active)
// --------------------*/
//
// /*---  Colors  ---*/
// export const primaryColorDown    = darken(@primaryColor, 10)
// export const secondaryColorDown  = lighten(@secondaryColor, 10)
//
// export const redDown             = darken(@red, 10)
// export const orangeDown          = darken(@orange, 10)
// export const yellowDown          = darken(@yellow, 10)
// export const oliveDown           = darken(@olive, 10)
// export const greenDown           = darken(@green, 10)
// export const tealDown            = darken(@teal, 10)
// export const blueDown            = darken(@blue, 10)
// export const violetDown          = darken(@violet, 10)
// export const purpleDown          = darken(@purple, 10)
// export const pinkDown            = darken(@pink, 10)
// export const brownDown           = darken(@brown, 10)
//
// export const lightRedDown        = darken(@lightRed, 10)
// export const lightOrangeDown     = darken(@lightOrange, 10)
// export const lightYellowDown     = darken(@lightYellow, 10)
// export const lightOliveDown      = darken(@lightOlive, 10)
// export const lightGreenDown      = darken(@lightGreen, 10)
// export const lightTealDown       = darken(@lightTeal, 10)
// export const lightBlueDown       = darken(@lightBlue, 10)
// export const lightVioletDown     = darken(@lightViolet, 10)
// export const lightPurpleDown     = darken(@lightPurple, 10)
// export const lightPinkDown       = darken(@lightPink, 10)
// export const lightBrownDown      = darken(@lightBrown, 10)
// export const lightGreyDown       = darken(@lightGrey, 10)
// export const lightBlackDown      = darken(@fullBlack, 10)
//
// /*---  Emotive  ---*/
// export const positiveColorDown   = darken(@positiveColor, 10)
// export const negativeColorDown   = darken(@negativeColor, 10)
//
// /*---  Brand   ---*/
// export const facebookDownColor   = darken(@facebookColor, 10)
// export const twitterDownColor    = darken(@twitterColor, 10)
// export const googlePlusDownColor = darken(@googlePlusColor, 10)
// export const linkedInDownColor   = darken(@linkedInColor, 10)
// export const youtubeDownColor    = darken(@youtubeColor, 10)
// export const instagramDownColor  = darken(@instagramColor, 10)
// export const pinterestDownColor  = darken(@pinterestColor, 10)
// export const vkDownColor         = darken(@vkColor, 10)
//
// /*---  Dark Tones  ---*/
// export const fullBlackDown       = lighten(@fullBlack, 10)
// export const blackDown           = lighten(@black, 10)
// export const greyDown            = lighten(@grey, 10)
//
// /*---  Light Tones  ---*/
// export const whiteDown           = darken(@white, 10)
// export const offWhiteDown        = darken(@offWhite, 10)
// export const darkWhiteDown       = darken(@darkWhite, 10)
//
//
// /*-------------------
//         Active
// --------------------*/
//
// /*---  Colors  ---*/
// export const primaryColorActive    = saturate(darken(@primaryColor, 5), 15, relative)
// export const secondaryColorActive  = saturate(lighten(@secondaryColor, 5), 15, relative)
//
// export const redActive             = saturate(darken(@red, 5), 15, relative)
// export const orangeActive          = saturate(darken(@orange, 5), 15, relative)
// export const yellowActive          = saturate(darken(@yellow, 5), 15, relative)
// export const oliveActive           = saturate(darken(@olive, 5), 15, relative)
// export const greenActive           = saturate(darken(@green, 5), 15, relative)
// export const tealActive            = saturate(darken(@teal, 5), 15, relative)
// export const blueActive            = saturate(darken(@blue, 5), 15, relative)
// export const violetActive          = saturate(darken(@violet, 5), 15, relative)
// export const purpleActive          = saturate(darken(@purple, 5), 15, relative)
// export const pinkActive            = saturate(darken(@pink, 5), 15, relative)
// export const brownActive           = saturate(darken(@brown, 5), 15, relative)
//
// export const lightRedActive        = saturate(darken(@lightRed, 5), 15, relative)
// export const lightOrangeActive     = saturate(darken(@lightOrange, 5), 15, relative)
// export const lightYellowActive     = saturate(darken(@lightYellow, 5), 15, relative)
// export const lightOliveActive      = saturate(darken(@lightOlive, 5), 15, relative)
// export const lightGreenActive      = saturate(darken(@lightGreen, 5), 15, relative)
// export const lightTealActive       = saturate(darken(@lightTeal, 5), 15, relative)
// export const lightBlueActive       = saturate(darken(@lightBlue, 5), 15, relative)
// export const lightVioletActive     = saturate(darken(@lightViolet, 5), 15, relative)
// export const lightPurpleActive     = saturate(darken(@lightPurple, 5), 15, relative)
// export const lightPinkActive       = saturate(darken(@lightPink, 5), 15, relative)
// export const lightBrownActive      = saturate(darken(@lightBrown, 5), 15, relative)
// export const lightGreyActive       = saturate(darken(@lightGrey, 5), 15, relative)
// export const lightBlackActive      = saturate(darken(@fullBlack, 5), 15, relative)
//
// /*---  Emotive  ---*/
// export const positiveColorActive   = saturate(darken(@positiveColor, 5), 15, relative)
// export const negativeColorActive   = saturate(darken(@negativeColor, 5), 15, relative)
//
// /*---  Brand   ---*/
// export const facebookActiveColor   = saturate(darken(@facebookColor, 5), 15, relative)
// export const twitterActiveColor    = saturate(darken(@twitterColor, 5), 15, relative)
// export const googlePlusActiveColor = saturate(darken(@googlePlusColor, 5), 15, relative)
// export const linkedInActiveColor   = saturate(darken(@linkedInColor, 5), 15, relative)
// export const youtubeActiveColor    = saturate(darken(@youtubeColor, 5), 15, relative)
// export const instagramActiveColor  = saturate(darken(@instagramColor, 5), 15, relative)
// export const pinterestActiveColor  = saturate(darken(@pinterestColor, 5), 15, relative)
// export const vkActiveColor         = saturate(darken(@vkColor, 5), 15, relative)
//
// /*---  Dark Tones  ---*/
// export const fullBlackActive       = darken(@fullBlack, 5)
// export const blackActive           = darken(@black, 5)
// export const greyActive            = darken(@grey, 5)
//
// /*---  Light Tones  ---*/
// export const whiteActive           = darken(@white, 5)
// export const offWhiteActive        = darken(@offWhite, 5)
// export const darkWhiteActive       = darken(@darkWhite, 5)
