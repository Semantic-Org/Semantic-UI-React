// Converted from:
// https://github.com/Semantic-Org/Semantic-UI-LESS/blob/master/themes/default/elements/list.variables
module.exports = (theme) => {
  const vars = {}

  /*-------------------
         Fonts
  --------------------*/

  vars.fontName = 'Lato'
  vars.fontSmoothing = 'antialiased'

  vars.headerFont = `${vars.fontName}, 'Helvetica Neue', Arial, Helvetica, sans-serif`
  vars.pageFont = `${vars.fontName}, 'Helvetica Neue', Arial, Helvetica, sans-serif`

  vars.googleFontName = vars.fontName
  vars.importGoogleFonts = 'true'
  vars.googleFontSizes = '400,700,400italic,700italic'
  vars.googleSubset = 'latin'

  vars.googleProtocol = 'https://'
  vars.googleFontRequest = `${vars.googleFontName}}:${vars.googleFontSizes}}&subset=${vars.googleSubset}}`


  vars.bold = 'bold'
  vars.normal = 'normal'

  /*-------------------
        Base Sizes
  --------------------*/

  /* This is the single variable that controls them all */
  vars.emSize = '14px'

  /* The size of page text  */
  vars.fontSize = '14px'


  /*-------------------
      Border Radius
  --------------------*/

  /* See Power-user section below
     for explanation of ${theme.px} variables
  */
  vars.relativeBorderRadius = theme.relative4px
  vars.absoluteBorderRadius = theme.absolute4px

  vars.defaultBorderRadius = vars.absoluteBorderRadius

  /*-------------------
      Brand Colors
  --------------------*/

  vars.primaryColor = theme.blue
  vars.secondaryColor = theme.black

  vars.lightPrimaryColor = theme.lightBlue
  vars.lightSecondaryColor = theme.lightBlack

  /*--------------
    Page Heading
  ---------------*/

  vars.headerFontWeight = vars.bold
  vars.headerLineHeight = 'unit((18 / 14), em)'

  vars.h1 = 'unit((28 / 14), rem)'
  vars.h2 = 'unit((24 / 14), rem)'
  vars.h3 = 'unit((18 / 14), rem)'
  vars.h4 = 'unit((15 / 14), rem)'
  vars.h5 = 'unit((14 / 14), rem)'

  /*--------------
     Form Input
  ---------------*/

  /* This adjusts the default form input across all elements */
  vars.inputBackground = theme.white
  vars.inputVerticalPadding = theme.relative11px
  vars.inputHorizontalPadding = theme.relative14px
  vars.inputPadding = `${vars.inputVerticalPadding} ${vars.inputHorizontalPadding}`

  /* Input Text Color */
  vars.inputColor = theme.textColor
  vars.inputPlaceholderColor = `lighten(${vars.inputColor}, 75)`
  vars.inputPlaceholderFocusColor = `lighten(${vars.inputColor}, 45)`

  /* Line Height Default For Inputs in Browser (Descendors are 17px at 14px base em) */
  vars.inputLineHeight = 'unit((17 / 14), em)'

  /*-------------------
      Focused Input
  --------------------*/

  /* Used on inputs, textarea etc */
  vars.focusedFormBorderColor = '#85B7D9'

  /* Used on dropdowns, other larger blocks */
  vars.focusedFormMutedBorderColor = '#96C8DA'

  /*-------------------
          Sizes
  --------------------*/

  /*
    Sizes are all expressed in terms of 14px/em (default em)
    This ensures these "ratios" remain constant despite changes in EM
  */

  vars.miniSize = '(11 / 14)'
  vars.tinySize = '(12 / 14)'
  vars.smallSize = '(13 / 14)'
  vars.mediumSize = '(14 / 14)'
  vars.largeSize = '(16 / 14)'
  vars.bigSize = '(18 / 14)'
  vars.hugeSize = '(20 / 14)'
  vars.massiveSize = '(24 / 14)'


  /*-------------------
          Page
  --------------------*/

  vars.pageBackground = '#FFFFFF'
  vars.pageOverflowX = 'hidden'

  vars.lineHeight = '1.4285em'
  vars.textColor = 'rgba(0, 0, 0, 0.87)'

  /*-------------------
        Paragraph
  --------------------*/

  vars.paragraphMargin = '0em 0em 1em'
  vars.paragraphLineHeight = vars.lineHeight

  /*-------------------
         Links
  --------------------*/

  vars.linkColor = '#4183C4'
  vars.linkUnderline = 'none'
  vars.linkHoverColor = `darken(saturate(${vars.linkColor}, 20), 15, relative)`
  vars.linkHoverUnderline = vars.linkUnderline

  /*-------------------
      Scroll Bars
  --------------------*/

  vars.useCustomScrollbars = 'true'

  vars.customScrollbarWidth = '10px'
  vars.customScrollbarHeight = '10px'

  vars.trackBackground = 'rgba(0, 0, 0, 0.1)'
  vars.trackBorderRadius = '0px'

  vars.thumbBorderRadius = '5px'
  vars.thumbBackground = 'rgba(0, 0, 0, 0.25)'
  vars.thumbTransition = 'color 0.2s ease'

  vars.thumbInactiveBackground = 'rgba(0, 0, 0, 0.15)'
  vars.thumbHoverBackground = 'rgba(128, 135, 139, 0.8)'

  /* Inverted */
  vars.trackInvertedBackground = 'rgba(255, 255, 255, 0.1)'
  vars.thumbInvertedBackground = 'rgba(255, 255, 255, 0.25)'
  vars.thumbInvertedInactiveBackground = 'rgba(255, 255, 255, 0.15)'
  vars.thumbInvertedHoverBackground = 'rgba(255, 255, 255, 0.35)'

  /*-------------------
    Highlighted Text
  --------------------*/

  vars.highlightBackground = '#CCE2FF'
  vars.highlightColor = vars.textColor

  vars.inputHighlightBackground = 'rgba(100, 100, 100, 0.4)'
  vars.inputHighlightColor = vars.textColor


  /*-------------------
         Loader
  --------------------*/

  vars.loaderSize = theme.relativeBig
  vars.loaderSpeed = '0.6s'
  vars.loaderLineWidth = '0.2em'
  vars.loaderFillColor = 'rgba(0, 0, 0, 0.1)'
  vars.loaderLineColor = theme.grey

  vars.invertedLoaderFillColor = 'rgba(255, 255, 255, 0.15)'
  vars.invertedLoaderLineColor = theme.white

  /*-------------------
          Grid
  --------------------*/

  vars.columnCount = '16'

  /*-------------------
       Transitions
  --------------------*/

  vars.defaultDuration = '0.1s'
  vars.defaultEasing = 'ease'

  /*-------------------
       Breakpoints
  --------------------*/

  vars.mobileBreakpoint = '320px'
  vars.tabletBreakpoint = '768px'
  vars.computerBreakpoint = '992px'
  vars.largeMonitorBreakpoint = '1200px'
  vars.widescreenMonitorBreakpoint = '1920px'

  /*-------------------
        Site Colors
  --------------------*/

  /*---  Colors  ---*/
  vars.red = '#DB2828'
  vars.orange = '#F2711C'
  vars.yellow = '#FBBD08'
  vars.olive = '#B5CC18'
  vars.green = '#21BA45'
  vars.teal = '#00B5AD'
  vars.blue = '#2185D0'
  vars.violet = '#6435C9'
  vars.purple = '#A333C8'
  vars.pink = '#E03997'
  vars.brown = '#A5673F'
  vars.grey = '#767676'
  vars.black = '#1B1C1D'

  /*---  Light Colors  ---*/
  vars.lightRed = '#FF695E'
  vars.lightOrange = '#FF851B'
  vars.lightYellow = '#FFE21F'
  vars.lightOlive = '#D9E778'
  vars.lightGreen = '#2ECC40'
  vars.lightTeal = '#6DFFFF'
  vars.lightBlue = '#54C8FF'
  vars.lightViolet = '#A291FB'
  vars.lightPurple = '#DC73FF'
  vars.lightPink = '#FF8EDF'
  vars.lightBrown = '#D67C1C'
  vars.lightGrey = '#DCDDDE'
  vars.lightBlack = '#545454'

  /*---   Neutrals  ---*/
  vars.fullBlack = '#000000'
  vars.offWhite = '#F9FAFB'
  vars.darkWhite = '#F3F4F5'
  vars.midWhite = '#DCDDDE'
  vars.white = '#FFFFFF'

  /*--- Colored Backgrounds ---*/
  vars.redBackground = '#FFE8E6'
  vars.orangeBackground = '#FFEDDE'
  vars.yellowBackground = '#FFF8DB'
  vars.oliveBackground = '#FBFDEF'
  vars.greenBackground = '#E5F9E7'
  vars.tealBackground = '#E1F7F7'
  vars.blueBackground = '#DFF0FF'
  vars.violetBackground = '#EAE7FF'
  vars.purpleBackground = '#F6E7FF'
  vars.pinkBackground = '#FFE3FB'
  vars.brownBackground = '#F1E2D3'

  /*--- Colored Headers ---*/
  vars.redHeaderColor = `darken(${theme.redTextColor}, 5)`
  vars.oliveHeaderColor = `darken(${theme.oliveTextColor}, 5)`
  vars.greenHeaderColor = `darken(${theme.greenTextColor}, 5)`
  vars.yellowHeaderColor = `darken(${theme.yellowTextColor}, 5)`
  vars.blueHeaderColor = `darken(${theme.blueTextColor}, 5)`
  vars.tealHeaderColor = `darken(${theme.tealTextColor}, 5)`
  vars.pinkHeaderColor = `darken(${theme.pinkTextColor}, 5)`
  vars.violetHeaderColor = `darken(${theme.violetTextColor}, 5)`
  vars.purpleHeaderColor = `darken(${theme.purpleTextColor}, 5)`
  vars.orangeHeaderColor = `darken(${theme.orangeTextColor}, 5)`
  vars.brownHeaderColor = `darken(${theme.brownTextColor}, 5)`

  /*--- Colored Text ---*/
  vars.redTextColor = vars.red
  vars.orangeTextColor = vars.orange
  vars.yellowTextColor = '#B58105' // Yellow text is difficult to read
  vars.oliveTextColor = '#8ABC1E' // Olive is difficult to read
  vars.greenTextColor = '#1EBC30' // Green is difficult to read
  vars.tealTextColor = '#10A3A3' // Teal text is difficult to read
  vars.blueTextColor = vars.blue
  vars.violetTextColor = vars.violet
  vars.purpleTextColor = vars.purple
  vars.pinkTextColor = vars.pink
  vars.brownTextColor = vars.brown

  /*--- Colored Border ---*/
  vars.redBorderColor = vars.redTextColor
  vars.orangeBorderColor = vars.orangeTextColor
  vars.yellowBorderColor = vars.yellowTextColor
  vars.oliveBorderColor = vars.oliveTextColor
  vars.greenBorderColor = vars.greenTextColor
  vars.tealBorderColor = vars.tealTextColor
  vars.blueBorderColor = vars.blueTextColor
  vars.violetBorderColor = vars.violetTextColor
  vars.purpleBorderColor = vars.purpleTextColor
  vars.pinkBorderColor = vars.pinkTextColor
  vars.brownBorderColor = vars.brownTextColor

  /*-------------------
       Alpha Colors
  --------------------*/

  vars.subtleTransparentBlack = 'rgba(0, 0, 0, 0.03)'
  vars.transparentBlack = 'rgba(0, 0, 0, 0.05)'
  vars.strongTransparentBlack = 'rgba(0, 0, 0, 0.10)'
  vars.veryStrongTransparentBlack = 'rgba(0, 0, 0, 0.15)'

  vars.subtleTransparentWhite = 'rgba(255, 255, 255, 0.02)'
  vars.transparentWhite = 'rgba(255, 255, 255, 0.08)'
  vars.strongTransparentWhite = 'rgba(255, 255, 255, 0.15)'

  /*-------------------
         Accents
  --------------------*/

  /* Differentiating Neutrals */
  vars.subtleGradient = `linear-gradient(transparent, ${vars.transparentBlack})`

  /* Differentiating Layers */
  vars.subtleShadow = `0px 1px 2px 0 ${theme.borderColor}`
  vars.floatingShadow = '0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.15)'

  /*******************************
             Power-User
  *******************************/


  /*-------------------
      Emotive Colors
  --------------------*/

  /* Positive */
  vars.positiveColor = vars.green
  vars.positiveBackgroundColor = '#FCFFF5'
  vars.positiveBorderColor = '#A3C293'
  vars.positiveHeaderColor = '#1A531B'
  vars.positiveTextColor = '#2C662D'

  /* Negative */
  vars.negativeColor = vars.red
  vars.negativeBackgroundColor = '#FFF6F6'
  vars.negativeBorderColor = '#E0B4B4'
  vars.negativeHeaderColor = '#912D2B'
  vars.negativeTextColor = '#9F3A38'

  /* Info */
  vars.infoColor = '#31CCEC'
  vars.infoBackgroundColor = '#F8FFFF'
  vars.infoBorderColor = '#A9D5DE'
  vars.infoHeaderColor = '#0E566C'
  vars.infoTextColor = '#276F86'

  /* Warning */
  vars.warningColor = '#F2C037'
  vars.warningBorderColor = '#C9BA9B'
  vars.warningBackgroundColor = '#FFFAF3'
  vars.warningHeaderColor = '#794B02'
  vars.warningTextColor = '#573A08'

  /*-------------------
          Paths
  --------------------*/

  /* For source only. Modified in gulp for dist */
  vars.imagePath = '../../themes/default/assets/images'
  vars.fontPath = '../../themes/default/assets/fonts'

  /*-------------------
         Em Sizes
  --------------------*/

  /*
    This rounds ${theme.size} values to the closest pixel then expresses that value in (r)em.
    This ensures all size values round to exact pixels
  */
  vars.mini = `unit( round(${vars.miniSize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.tiny = `unit( round(${vars.tinySize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.small = `unit( round(${vars.smallSize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.medium = `unit( round(${vars.mediumSize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.large = `unit( round(${vars.largeSize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.big = `unit( round(${vars.bigSize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.huge = `unit( round(${vars.hugeSize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.massive = `unit( round(${vars.massiveSize} * ${vars.emSize}) / ${vars.emSize}, rem)`

  /* em */
  vars.relativeMini = `unit( round(${vars.miniSize} * ${vars.emSize}) / ${vars.emSize}, em)`
  vars.relativeTiny = `unit( round(${vars.tinySize} * ${vars.emSize}) / ${vars.emSize}, em)`
  vars.relativeSmall = `unit( round(${vars.smallSize} * ${vars.emSize}) / ${vars.emSize}, em)`
  vars.relativeMedium = `unit( round(${vars.mediumSize} * ${vars.emSize}) / ${vars.emSize}, em)`
  vars.relativeLarge = `unit( round(${vars.largeSize} * ${vars.emSize}) / ${vars.emSize}, em)`
  vars.relativeBig = `unit( round(${vars.bigSize} * ${vars.emSize}) / ${vars.emSize}, em)`
  vars.relativeHuge = `unit( round(${vars.hugeSize} * ${vars.emSize}) / ${vars.emSize}, em)`
  vars.relativeMassive = `unit( round(${vars.massiveSize} * ${vars.emSize}) / ${vars.emSize}, em)`

  /* rem */
  vars.absoluteMini = `unit( round(${vars.miniSize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.absoluteTiny = `unit( round(${vars.tinySize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.absoluteSmall = `unit( round(${vars.smallSize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.absoluteMedium = `unit( round(${vars.mediumSize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.absoluteLarge = `unit( round(${vars.largeSize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.absoluteBig = `unit( round(${vars.bigSize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.absoluteHuge = `unit( round(${vars.hugeSize} * ${vars.emSize}) / ${vars.emSize}, rem)`
  vars.absoluteMassive = `unit( round(${vars.massiveSize} * ${vars.emSize}) / ${vars.emSize}, rem)`

  /*-------------------
         Icons
  --------------------*/

  /* Maximum Glyph Width of Icon */
  vars.iconWidth = '1.18em'

  /*-------------------
       Neutral Text
  --------------------*/

  vars.darkTextColor = 'rgba(0, 0, 0, 0.85)'
  vars.mutedTextColor = 'rgba(0, 0, 0, 0.6)'
  vars.lightTextColor = 'rgba(0, 0, 0, 0.4)'

  vars.unselectedTextColor = 'rgba(0, 0, 0, 0.4)'
  vars.hoveredTextColor = 'rgba(0, 0, 0, 0.8)'
  vars.pressedTextColor = 'rgba(0, 0, 0, 0.9)'
  vars.selectedTextColor = 'rgba(0, 0, 0, 0.95)'
  vars.disabledTextColor = 'rgba(0, 0, 0, 0.2)'

  vars.invertedTextColor = 'rgba(255, 255, 255, 0.9)'
  vars.invertedMutedTextColor = 'rgba(255, 255, 255, 0.8)'
  vars.invertedLightTextColor = 'rgba(255, 255, 255, 0.7)'
  vars.invertedUnselectedTextColor = 'rgba(255, 255, 255, 0.5)'
  vars.invertedHoveredTextColor = 'rgba(255, 255, 255, 1)'
  vars.invertedPressedTextColor = 'rgba(255, 255, 255, 1)'
  vars.invertedSelectedTextColor = 'rgba(255, 255, 255, 1)'
  vars.invertedDisabledTextColor = 'rgba(255, 255, 255, 0.2)'

  /*-------------------
       Brand Colors
  --------------------*/

  vars.facebookColor = '#3B5998'
  vars.twitterColor = '#55ACEE'
  vars.googlePlusColor = '#DD4B39'
  vars.linkedInColor = '#1F88BE'
  vars.youtubeColor = '#FF0000'
  vars.pinterestColor = '#BD081C'
  vars.vkColor = '#4D7198'
  vars.instagramColor = '#49769C'

  /*-------------------
        Borders
  --------------------*/

  vars.circularRadius = '500rem'

  vars.borderColor = 'rgba(34, 36, 38, 0.15)'
  vars.strongBorderColor = 'rgba(34, 36, 38, 0.22)'
  vars.internalBorderColor = 'rgba(34, 36, 38, 0.1)'
  vars.selectedBorderColor = 'rgba(34, 36, 38, 0.35)'
  vars.strongSelectedBorderColor = 'rgba(34, 36, 38, 0.5)'
  vars.disabledBorderColor = 'rgba(34, 36, 38, 0.5)'

  vars.solidInternalBorderColor = '#FAFAFA'
  vars.solidBorderColor = '#D4D4D5'
  vars.solidSelectedBorderColor = '#BCBDBD'

  vars.whiteBorderColor = 'rgba(255, 255, 255, 0.1)'
  vars.selectedWhiteBorderColor = 'rgba(255, 255, 255, 0.8)'

  vars.solidWhiteBorderColor = '#555555'
  vars.selectedSolidWhiteBorderColor = '#999999'


  /*-------------------
      Derived Values
  --------------------*/

  /* Loaders Position Offset */
  vars.loaderOffset = `-(${vars.loaderSize} / 2)`
  vars.loaderMargin = `${vars.loaderOffset} 0em 0em ${vars.loaderOffset}`

  /* Rendered Scrollbar Width */
  vars.scrollbarWidth = '17px'

  /* Maximum Single Character Glyph Width, aka Capital "W" */
  vars.glyphWidth = '1.1em'

  /* Used to match floats with text */
  vars.lineHeightOffset = `((${vars.lineHeight} - 1em) / 2)`
  vars.headerLineHeightOffset = `(${vars.headerLineHeight} - 1em) / 2`

  /* Header Spacing */
  vars.headerTopMargin = `~"calc(2rem - "${vars.headerLineHeightOffset}~")"`
  vars.headerBottomMargin = '1rem'
  vars.headerMargin = `${vars.headerTopMargin} 0em ${vars.headerBottomMargin}`

  /* Minimum Mobile Width */
  vars.pageMinWidth = '320px'

  /* Positive / Negative Dupes */
  vars.successBackgroundColor = vars.positiveBackgroundColor
  vars.successColor = vars.positiveColor
  vars.successBorderColor = vars.positiveBorderColor
  vars.successHeaderColor = vars.positiveHeaderColor
  vars.successTextColor = vars.positiveTextColor

  vars.errorBackgroundColor = vars.negativeBackgroundColor
  vars.errorColor = vars.negativeColor
  vars.errorBorderColor = vars.negativeBorderColor
  vars.errorHeaderColor = vars.negativeHeaderColor
  vars.errorTextColor = vars.negativeTextColor


  /* Responsive */
  vars.largestMobileScreen = `(${vars.tabletBreakpoint} - 1px)`
  vars.largestTabletScreen = `(${vars.computerBreakpoint} - 1px)`
  vars.largestSmallMonitor = `(${vars.largeMonitorBreakpoint} - 1px)`
  vars.largestLargeMonitor = `(${vars.widescreenMonitorBreakpoint} - 1px)`


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

  vars.absolute1px = `unit( (1 / ${vars.emSize}), rem)`
  vars.absolute2px = `unit( (2 / ${vars.emSize}), rem)`
  vars.absolute3px = `unit( (3 / ${vars.emSize}), rem)`
  vars.absolute4px = `unit( (4 / ${vars.emSize}), rem)`
  vars.absolute5px = `unit( (5 / ${vars.emSize}), rem)`
  vars.absolute6px = `unit( (6 / ${vars.emSize}), rem)`
  vars.absolute7px = `unit( (7 / ${vars.emSize}), rem)`
  vars.absolute8px = `unit( (8 / ${vars.emSize}), rem)`
  vars.absolute9px = `unit( (9 / ${vars.emSize}), rem)`
  vars.absolute10px = `unit( (10 / ${vars.emSize}), rem)`
  vars.absolute11px = `unit( (11 / ${vars.emSize}), rem)`
  vars.absolute12px = `unit( (12 / ${vars.emSize}), rem)`
  vars.absolute13px = `unit( (13 / ${vars.emSize}), rem)`
  vars.absolute14px = `unit( (14 / ${vars.emSize}), rem)`
  vars.absolute15px = `unit( (15 / ${vars.emSize}), rem)`
  vars.absolute16px = `unit( (16 / ${vars.emSize}), rem)`
  vars.absolute17px = `unit( (17 / ${vars.emSize}), rem)`
  vars.absolute18px = `unit( (18 / ${vars.emSize}), rem)`
  vars.absolute19px = `unit( (19 / ${vars.emSize}), rem)`
  vars.absolute20px = `unit( (20 / ${vars.emSize}), rem)`
  vars.absolute21px = `unit( (21 / ${vars.emSize}), rem)`
  vars.absolute22px = `unit( (22 / ${vars.emSize}), rem)`
  vars.absolute23px = `unit( (23 / ${vars.emSize}), rem)`
  vars.absolute24px = `unit( (24 / ${vars.emSize}), rem)`
  vars.absolute25px = `unit( (25 / ${vars.emSize}), rem)`
  vars.absolute26px = `unit( (26 / ${vars.emSize}), rem)`
  vars.absolute27px = `unit( (27 / ${vars.emSize}), rem)`
  vars.absolute28px = `unit( (28 / ${vars.emSize}), rem)`
  vars.absolute29px = `unit( (29 / ${vars.emSize}), rem)`
  vars.absolute30px = `unit( (30 / ${vars.emSize}), rem)`
  vars.absolute31px = `unit( (31 / ${vars.emSize}), rem)`
  vars.absolute32px = `unit( (32 / ${vars.emSize}), rem)`
  vars.absolute33px = `unit( (33 / ${vars.emSize}), rem)`
  vars.absolute34px = `unit( (34 / ${vars.emSize}), rem)`
  vars.absolute35px = `unit( (35 / ${vars.emSize}), rem)`
  vars.absolute36px = `unit( (36 / ${vars.emSize}), rem)`
  vars.absolute37px = `unit( (37 / ${vars.emSize}), rem)`
  vars.absolute38px = `unit( (38 / ${vars.emSize}), rem)`
  vars.absolute39px = `unit( (39 / ${vars.emSize}), rem)`
  vars.absolute40px = `unit( (40 / ${vars.emSize}), rem)`
  vars.absolute41px = `unit( (41 / ${vars.emSize}), rem)`
  vars.absolute42px = `unit( (42 / ${vars.emSize}), rem)`
  vars.absolute43px = `unit( (43 / ${vars.emSize}), rem)`
  vars.absolute44px = `unit( (44 / ${vars.emSize}), rem)`
  vars.absolute45px = `unit( (45 / ${vars.emSize}), rem)`
  vars.absolute46px = `unit( (46 / ${vars.emSize}), rem)`
  vars.absolute47px = `unit( (47 / ${vars.emSize}), rem)`
  vars.absolute48px = `unit( (48 / ${vars.emSize}), rem)`
  vars.absolute49px = `unit( (49 / ${vars.emSize}), rem)`
  vars.absolute50px = `unit( (50 / ${vars.emSize}), rem)`
  vars.absolute51px = `unit( (51 / ${vars.emSize}), rem)`
  vars.absolute52px = `unit( (52 / ${vars.emSize}), rem)`
  vars.absolute53px = `unit( (53 / ${vars.emSize}), rem)`
  vars.absolute54px = `unit( (54 / ${vars.emSize}), rem)`
  vars.absolute55px = `unit( (55 / ${vars.emSize}), rem)`
  vars.absolute56px = `unit( (56 / ${vars.emSize}), rem)`
  vars.absolute57px = `unit( (57 / ${vars.emSize}), rem)`
  vars.absolute58px = `unit( (58 / ${vars.emSize}), rem)`
  vars.absolute59px = `unit( (59 / ${vars.emSize}), rem)`
  vars.absolute60px = `unit( (60 / ${vars.emSize}), rem)`
  vars.absolute61px = `unit( (61 / ${vars.emSize}), rem)`
  vars.absolute62px = `unit( (62 / ${vars.emSize}), rem)`
  vars.absolute63px = `unit( (63 / ${vars.emSize}), rem)`
  vars.absolute64px = `unit( (64 / ${vars.emSize}), rem)`

  vars.relative1px = `unit( (1 / ${vars.emSize}), em)`
  vars.relative2px = `unit( (2 / ${vars.emSize}), em)`
  vars.relative3px = `unit( (3 / ${vars.emSize}), em)`
  vars.relative4px = `unit( (4 / ${vars.emSize}), em)`
  vars.relative5px = `unit( (5 / ${vars.emSize}), em)`
  vars.relative6px = `unit( (6 / ${vars.emSize}), em)`
  vars.relative7px = `unit( (7 / ${vars.emSize}), em)`
  vars.relative8px = `unit( (8 / ${vars.emSize}), em)`
  vars.relative9px = `unit( (9 / ${vars.emSize}), em)`
  vars.relative10px = `unit( (10 / ${vars.emSize}), em)`
  vars.relative11px = `unit( (11 / ${vars.emSize}), em)`
  vars.relative12px = `unit( (12 / ${vars.emSize}), em)`
  vars.relative13px = `unit( (13 / ${vars.emSize}), em)`
  vars.relative14px = `unit( (14 / ${vars.emSize}), em)`
  vars.relative15px = `unit( (15 / ${vars.emSize}), em)`
  vars.relative16px = `unit( (16 / ${vars.emSize}), em)`
  vars.relative17px = `unit( (17 / ${vars.emSize}), em)`
  vars.relative18px = `unit( (18 / ${vars.emSize}), em)`
  vars.relative19px = `unit( (19 / ${vars.emSize}), em)`
  vars.relative20px = `unit( (20 / ${vars.emSize}), em)`
  vars.relative21px = `unit( (21 / ${vars.emSize}), em)`
  vars.relative22px = `unit( (22 / ${vars.emSize}), em)`
  vars.relative23px = `unit( (23 / ${vars.emSize}), em)`
  vars.relative24px = `unit( (24 / ${vars.emSize}), em)`
  vars.relative25px = `unit( (25 / ${vars.emSize}), em)`
  vars.relative26px = `unit( (26 / ${vars.emSize}), em)`
  vars.relative27px = `unit( (27 / ${vars.emSize}), em)`
  vars.relative28px = `unit( (28 / ${vars.emSize}), em)`
  vars.relative29px = `unit( (29 / ${vars.emSize}), em)`
  vars.relative30px = `unit( (30 / ${vars.emSize}), em)`
  vars.relative31px = `unit( (31 / ${vars.emSize}), em)`
  vars.relative32px = `unit( (32 / ${vars.emSize}), em)`
  vars.relative33px = `unit( (33 / ${vars.emSize}), em)`
  vars.relative34px = `unit( (34 / ${vars.emSize}), em)`
  vars.relative35px = `unit( (35 / ${vars.emSize}), em)`
  vars.relative36px = `unit( (36 / ${vars.emSize}), em)`
  vars.relative37px = `unit( (37 / ${vars.emSize}), em)`
  vars.relative38px = `unit( (38 / ${vars.emSize}), em)`
  vars.relative39px = `unit( (39 / ${vars.emSize}), em)`
  vars.relative40px = `unit( (40 / ${vars.emSize}), em)`
  vars.relative41px = `unit( (41 / ${vars.emSize}), em)`
  vars.relative42px = `unit( (42 / ${vars.emSize}), em)`
  vars.relative43px = `unit( (43 / ${vars.emSize}), em)`
  vars.relative44px = `unit( (44 / ${vars.emSize}), em)`
  vars.relative45px = `unit( (45 / ${vars.emSize}), em)`
  vars.relative46px = `unit( (46 / ${vars.emSize}), em)`
  vars.relative47px = `unit( (47 / ${vars.emSize}), em)`
  vars.relative48px = `unit( (48 / ${vars.emSize}), em)`
  vars.relative49px = `unit( (49 / ${vars.emSize}), em)`
  vars.relative50px = `unit( (50 / ${vars.emSize}), em)`
  vars.relative51px = `unit( (51 / ${vars.emSize}), em)`
  vars.relative52px = `unit( (52 / ${vars.emSize}), em)`
  vars.relative53px = `unit( (53 / ${vars.emSize}), em)`
  vars.relative54px = `unit( (54 / ${vars.emSize}), em)`
  vars.relative55px = `unit( (55 / ${vars.emSize}), em)`
  vars.relative56px = `unit( (56 / ${vars.emSize}), em)`
  vars.relative57px = `unit( (57 / ${vars.emSize}), em)`
  vars.relative58px = `unit( (58 / ${vars.emSize}), em)`
  vars.relative59px = `unit( (59 / ${vars.emSize}), em)`
  vars.relative60px = `unit( (60 / ${vars.emSize}), em)`
  vars.relative61px = `unit( (61 / ${vars.emSize}), em)`
  vars.relative62px = `unit( (62 / ${vars.emSize}), em)`
  vars.relative63px = `unit( (63 / ${vars.emSize}), em)`
  vars.relative64px = `unit( (64 / ${vars.emSize}), em)`

  /* Columns */
  vars.oneWide = `(1 / ${vars.columnCount} * 100%)`
  vars.twoWide = `(2 / ${vars.columnCount} * 100%)`
  vars.threeWide = `(3 / ${vars.columnCount} * 100%)`
  vars.fourWide = `(4 / ${vars.columnCount} * 100%)`
  vars.fiveWide = `(5 / ${vars.columnCount} * 100%)`
  vars.sixWide = `(6 / ${vars.columnCount} * 100%)`
  vars.sevenWide = `(7 / ${vars.columnCount} * 100%)`
  vars.eightWide = `(8 / ${vars.columnCount} * 100%)`
  vars.nineWide = `(9 / ${vars.columnCount} * 100%)`
  vars.tenWide = `(10 / ${vars.columnCount} * 100%)`
  vars.elevenWide = `(11 / ${vars.columnCount} * 100%)`
  vars.twelveWide = `(12 / ${vars.columnCount} * 100%)`
  vars.thirteenWide = `(13 / ${vars.columnCount} * 100%)`
  vars.fourteenWide = `(14 / ${vars.columnCount} * 100%)`
  vars.fifteenWide = `(15 / ${vars.columnCount} * 100%)`
  vars.sixteenWide = `(16 / ${vars.columnCount} * 100%)`

  vars.oneColumn = '(1 / 1 * 100%)'
  vars.twoColumn = '(1 / 2 * 100%)'
  vars.threeColumn = '(1 / 3 * 100%)'
  vars.fourColumn = '(1 / 4 * 100%)'
  vars.fiveColumn = '(1 / 5 * 100%)'
  vars.sixColumn = '(1 / 6 * 100%)'
  vars.sevenColumn = '(1 / 7 * 100%)'
  vars.eightColumn = '(1 / 8 * 100%)'
  vars.nineColumn = '(1 / 9 * 100%)'
  vars.tenColumn = '(1 / 10 * 100%)'
  vars.elevenColumn = '(1 / 11 * 100%)'
  vars.twelveColumn = '(1 / 12 * 100%)'
  vars.thirteenColumn = '(1 / 13 * 100%)'
  vars.fourteenColumn = '(1 / 14 * 100%)'
  vars.fifteenColumn = '(1 / 15 * 100%)'
  vars.sixteenColumn = '(1 / 16 * 100%)'


  /*******************************
               States
  *******************************/

  /*-------------------
        Disabled
  --------------------*/

  vars.disabledOpacity = '0.45'
  vars.disabledTextColor = 'rgba(40, 40, 40, 0.3)'
  vars.invertedDisabledTextColor = 'rgba(225, 225, 225, 0.3)'

  /*-------------------
          Hover
  --------------------*/

  /*---  Shadows  ---*/
  vars.floatingShadowHover = '0px 2px 4px 0px rgba(34, 36, 38, 0.15), 0px 2px 10px 0px rgba(34, 36, 38, 0.25)'

  /*---  Colors  ---*/
  vars.primaryColorHover = `saturate(darken(${vars.primaryColor}, 5), 10, relative)`
  vars.secondaryColorHover = `saturate(lighten(${vars.secondaryColor}, 5), 10, relative)`

  vars.redHover = `saturate(darken(${vars.red}, 5), 10, relative)`
  vars.orangeHover = `saturate(darken(${vars.orange}, 5), 10, relative)`
  vars.yellowHover = `saturate(darken(${vars.yellow}, 5), 10, relative)`
  vars.oliveHover = `saturate(darken(${vars.olive}, 5), 10, relative)`
  vars.greenHover = `saturate(darken(${vars.green}, 5), 10, relative)`
  vars.tealHover = `saturate(darken(${vars.teal}, 5), 10, relative)`
  vars.blueHover = `saturate(darken(${vars.blue}, 5), 10, relative)`
  vars.violetHover = `saturate(darken(${vars.violet}, 5), 10, relative)`
  vars.purpleHover = `saturate(darken(${vars.purple}, 5), 10, relative)`
  vars.pinkHover = `saturate(darken(${vars.pink}, 5), 10, relative)`
  vars.brownHover = `saturate(darken(${vars.brown}, 5), 10, relative)`

  vars.lightRedHover = `saturate(darken(${vars.lightRed}, 5), 10, relative)`
  vars.lightOrangeHover = `saturate(darken(${vars.lightOrange}, 5), 10, relative)`
  vars.lightYellowHover = `saturate(darken(${vars.lightYellow}, 5), 10, relative)`
  vars.lightOliveHover = `saturate(darken(${vars.lightOlive}, 5), 10, relative)`
  vars.lightGreenHover = `saturate(darken(${vars.lightGreen}, 5), 10, relative)`
  vars.lightTealHover = `saturate(darken(${vars.lightTeal}, 5), 10, relative)`
  vars.lightBlueHover = `saturate(darken(${vars.lightBlue}, 5), 10, relative)`
  vars.lightVioletHover = `saturate(darken(${vars.lightViolet}, 5), 10, relative)`
  vars.lightPurpleHover = `saturate(darken(${vars.lightPurple}, 5), 10, relative)`
  vars.lightPinkHover = `saturate(darken(${vars.lightPink}, 5), 10, relative)`
  vars.lightBrownHover = `saturate(darken(${vars.lightBrown}, 5), 10, relative)`
  vars.lightGreyHover = `saturate(darken(${vars.lightGrey}, 5), 10, relative)`
  vars.lightBlackHover = `saturate(darken(${vars.fullBlack}, 5), 10, relative)`

  /*---  Emotive  ---*/
  vars.positiveColorHover = `saturate(darken(${vars.positiveColor}, 5), 10, relative)`
  vars.negativeColorHover = `saturate(darken(${vars.negativeColor}, 5), 10, relative)`

  /*---  Brand   ---*/
  vars.facebookHoverColor = `saturate(darken(${vars.facebookColor}, 5), 10, relative)`
  vars.twitterHoverColor = `saturate(darken(${vars.twitterColor}, 5), 10, relative)`
  vars.googlePlusHoverColor = `saturate(darken(${vars.googlePlusColor}, 5), 10, relative)`
  vars.linkedInHoverColor = `saturate(darken(${vars.linkedInColor}, 5), 10, relative)`
  vars.youtubeHoverColor = `saturate(darken(${vars.youtubeColor}, 5), 10, relative)`
  vars.instagramHoverColor = `saturate(darken(${vars.instagramColor}, 5), 10, relative)`
  vars.pinterestHoverColor = `saturate(darken(${vars.pinterestColor}, 5), 10, relative)`
  vars.vkHoverColor = `saturate(darken(${vars.vkColor}, 5), 10, relative)`

  /*---  Dark Tones  ---*/
  vars.fullBlackHover = `lighten(${vars.fullBlack}, 5)`
  vars.blackHover = `lighten(${vars.black}, 5)`
  vars.greyHover = `lighten(${vars.grey}, 5)`

  /*---  Light Tones  ---*/
  vars.whiteHover = `darken(${vars.white}, 5)`
  vars.offWhiteHover = `darken(${vars.offWhite}, 5)`
  vars.darkWhiteHover = `darken(${vars.darkWhite}, 5)`

  /*-------------------
          Focus
  --------------------*/

  /*---  Colors  ---*/
  vars.primaryColorFocus = `saturate(darken(${vars.primaryColor}, 8), 20, relative)`
  vars.secondaryColorFocus = `saturate(lighten(${vars.secondaryColor}, 8), 20, relative)`

  vars.redFocus = `saturate(darken(${vars.red}, 8), 20, relative)`
  vars.orangeFocus = `saturate(darken(${vars.orange}, 8), 20, relative)`
  vars.yellowFocus = `saturate(darken(${vars.yellow}, 8), 20, relative)`
  vars.oliveFocus = `saturate(darken(${vars.olive}, 8), 20, relative)`
  vars.greenFocus = `saturate(darken(${vars.green}, 8), 20, relative)`
  vars.tealFocus = `saturate(darken(${vars.teal}, 8), 20, relative)`
  vars.blueFocus = `saturate(darken(${vars.blue}, 8), 20, relative)`
  vars.violetFocus = `saturate(darken(${vars.violet}, 8), 20, relative)`
  vars.purpleFocus = `saturate(darken(${vars.purple}, 8), 20, relative)`
  vars.pinkFocus = `saturate(darken(${vars.pink}, 8), 20, relative)`
  vars.brownFocus = `saturate(darken(${vars.brown}, 8), 20, relative)`

  vars.lightRedFocus = `saturate(darken(${vars.lightRed}, 8), 20, relative)`
  vars.lightOrangeFocus = `saturate(darken(${vars.lightOrange}, 8), 20, relative)`
  vars.lightYellowFocus = `saturate(darken(${vars.lightYellow}, 8), 20, relative)`
  vars.lightOliveFocus = `saturate(darken(${vars.lightOlive}, 8), 20, relative)`
  vars.lightGreenFocus = `saturate(darken(${vars.lightGreen}, 8), 20, relative)`
  vars.lightTealFocus = `saturate(darken(${vars.lightTeal}, 8), 20, relative)`
  vars.lightBlueFocus = `saturate(darken(${vars.lightBlue}, 8), 20, relative)`
  vars.lightVioletFocus = `saturate(darken(${vars.lightViolet}, 8), 20, relative)`
  vars.lightPurpleFocus = `saturate(darken(${vars.lightPurple}, 8), 20, relative)`
  vars.lightPinkFocus = `saturate(darken(${vars.lightPink}, 8), 20, relative)`
  vars.lightBrownFocus = `saturate(darken(${vars.lightBrown}, 8), 20, relative)`
  vars.lightGreyFocus = `saturate(darken(${vars.lightGrey}, 8), 20, relative)`
  vars.lightBlackFocus = `saturate(darken(${vars.fullBlack}, 8), 20, relative)`

  /*---  Emotive  ---*/
  vars.positiveColorFocus = `saturate(darken(${vars.positiveColor}, 8), 20, relative)`
  vars.negativeColorFocus = `saturate(darken(${vars.negativeColor}, 8), 20, relative)`

  /*---  Brand   ---*/
  vars.facebookFocusColor = `saturate(darken(${vars.facebookColor}, 8), 20, relative)`
  vars.twitterFocusColor = `saturate(darken(${vars.twitterColor}, 8), 20, relative)`
  vars.googlePlusFocusColor = `saturate(darken(${vars.googlePlusColor}, 8), 20, relative)`
  vars.linkedInFocusColor = `saturate(darken(${vars.linkedInColor}, 8), 20, relative)`
  vars.youtubeFocusColor = `saturate(darken(${vars.youtubeColor}, 8), 20, relative)`
  vars.instagramFocusColor = `saturate(darken(${vars.instagramColor}, 8), 20, relative)`
  vars.pinterestFocusColor = `saturate(darken(${vars.pinterestColor}, 8), 20, relative)`
  vars.vkFocusColor = `saturate(darken(${vars.vkColor}, 8), 20, relative)`

  /*---  Dark Tones  ---*/
  vars.fullBlackFocus = `lighten(${vars.fullBlack}, 8)`
  vars.blackFocus = `lighten(${vars.black}, 8)`
  vars.greyFocus = `lighten(${vars.grey}, 8)`

  /*---  Light Tones  ---*/
  vars.whiteFocus = `darken(${vars.white}, 8)`
  vars.offWhiteFocus = `darken(${vars.offWhite}, 8)`
  vars.darkWhiteFocus = `darken(${vars.darkWhite}, 8)`


  /*-------------------
      Down (:active)
  --------------------*/

  /*---  Colors  ---*/
  vars.primaryColorDown = `darken(${vars.primaryColor}, 10)`
  vars.secondaryColorDown = `lighten(${vars.secondaryColor}, 10)`

  vars.redDown = `darken(${vars.red}, 10)`
  vars.orangeDown = `darken(${vars.orange}, 10)`
  vars.yellowDown = `darken(${vars.yellow}, 10)`
  vars.oliveDown = `darken(${vars.olive}, 10)`
  vars.greenDown = `darken(${vars.green}, 10)`
  vars.tealDown = `darken(${vars.teal}, 10)`
  vars.blueDown = `darken(${vars.blue}, 10)`
  vars.violetDown = `darken(${vars.violet}, 10)`
  vars.purpleDown = `darken(${vars.purple}, 10)`
  vars.pinkDown = `darken(${vars.pink}, 10)`
  vars.brownDown = `darken(${vars.brown}, 10)`

  vars.lightRedDown = `darken(${vars.lightRed}, 10)`
  vars.lightOrangeDown = `darken(${vars.lightOrange}, 10)`
  vars.lightYellowDown = `darken(${vars.lightYellow}, 10)`
  vars.lightOliveDown = `darken(${vars.lightOlive}, 10)`
  vars.lightGreenDown = `darken(${vars.lightGreen}, 10)`
  vars.lightTealDown = `darken(${vars.lightTeal}, 10)`
  vars.lightBlueDown = `darken(${vars.lightBlue}, 10)`
  vars.lightVioletDown = `darken(${vars.lightViolet}, 10)`
  vars.lightPurpleDown = `darken(${vars.lightPurple}, 10)`
  vars.lightPinkDown = `darken(${vars.lightPink}, 10)`
  vars.lightBrownDown = `darken(${vars.lightBrown}, 10)`
  vars.lightGreyDown = `darken(${vars.lightGrey}, 10)`
  vars.lightBlackDown = `darken(${vars.fullBlack}, 10)`

  /*---  Emotive  ---*/
  vars.positiveColorDown = `darken(${vars.positiveColor}, 10)`
  vars.negativeColorDown = `darken(${vars.negativeColor}, 10)`

  /*---  Brand   ---*/
  vars.facebookDownColor = `darken(${vars.facebookColor}, 10)`
  vars.twitterDownColor = `darken(${vars.twitterColor}, 10)`
  vars.googlePlusDownColor = `darken(${vars.googlePlusColor}, 10)`
  vars.linkedInDownColor = `darken(${vars.linkedInColor}, 10)`
  vars.youtubeDownColor = `darken(${vars.youtubeColor}, 10)`
  vars.instagramDownColor = `darken(${vars.instagramColor}, 10)`
  vars.pinterestDownColor = `darken(${vars.pinterestColor}, 10)`
  vars.vkDownColor = `darken(${vars.vkColor}, 10)`

  /*---  Dark Tones  ---*/
  vars.fullBlackDown = `lighten(${vars.fullBlack}, 10)`
  vars.blackDown = `lighten(${vars.black}, 10)`
  vars.greyDown = `lighten(${vars.grey}, 10)`

  /*---  Light Tones  ---*/
  vars.whiteDown = `darken(${vars.white}, 10)`
  vars.offWhiteDown = `darken(${vars.offWhite}, 10)`
  vars.darkWhiteDown = `darken(${vars.darkWhite}, 10)`


  /*-------------------
          Active
  --------------------*/

  /*---  Colors  ---*/
  vars.primaryColorActive = `saturate(darken(${vars.primaryColor}, 5), 15, relative)`
  vars.secondaryColorActive = `saturate(lighten(${vars.secondaryColor}, 5), 15, relative)`

  vars.redActive = `saturate(darken(${vars.red}, 5), 15, relative)`
  vars.orangeActive = `saturate(darken(${vars.orange}, 5), 15, relative)`
  vars.yellowActive = `saturate(darken(${vars.yellow}, 5), 15, relative)`
  vars.oliveActive = `saturate(darken(${vars.olive}, 5), 15, relative)`
  vars.greenActive = `saturate(darken(${vars.green}, 5), 15, relative)`
  vars.tealActive = `saturate(darken(${vars.teal}, 5), 15, relative)`
  vars.blueActive = `saturate(darken(${vars.blue}, 5), 15, relative)`
  vars.violetActive = `saturate(darken(${vars.violet}, 5), 15, relative)`
  vars.purpleActive = `saturate(darken(${vars.purple}, 5), 15, relative)`
  vars.pinkActive = `saturate(darken(${vars.pink}, 5), 15, relative)`
  vars.brownActive = `saturate(darken(${vars.brown}, 5), 15, relative)`

  vars.lightRedActive = `saturate(darken(${vars.lightRed}, 5), 15, relative)`
  vars.lightOrangeActive = `saturate(darken(${vars.lightOrange}, 5), 15, relative)`
  vars.lightYellowActive = `saturate(darken(${vars.lightYellow}, 5), 15, relative)`
  vars.lightOliveActive = `saturate(darken(${vars.lightOlive}, 5), 15, relative)`
  vars.lightGreenActive = `saturate(darken(${vars.lightGreen}, 5), 15, relative)`
  vars.lightTealActive = `saturate(darken(${vars.lightTeal}, 5), 15, relative)`
  vars.lightBlueActive = `saturate(darken(${vars.lightBlue}, 5), 15, relative)`
  vars.lightVioletActive = `saturate(darken(${vars.lightViolet}, 5), 15, relative)`
  vars.lightPurpleActive = `saturate(darken(${vars.lightPurple}, 5), 15, relative)`
  vars.lightPinkActive = `saturate(darken(${vars.lightPink}, 5), 15, relative)`
  vars.lightBrownActive = `saturate(darken(${vars.lightBrown}, 5), 15, relative)`
  vars.lightGreyActive = `saturate(darken(${vars.lightGrey}, 5), 15, relative)`
  vars.lightBlackActive = `saturate(darken(${vars.fullBlack}, 5), 15, relative)`

  /*---  Emotive  ---*/
  vars.positiveColorActive = `saturate(darken(${vars.positiveColor}, 5), 15, relative)`
  vars.negativeColorActive = `saturate(darken(${vars.negativeColor}, 5), 15, relative)`

  /*---  Brand   ---*/
  vars.facebookActiveColor = `saturate(darken(${vars.facebookColor}, 5), 15, relative)`
  vars.twitterActiveColor = `saturate(darken(${vars.twitterColor}, 5), 15, relative)`
  vars.googlePlusActiveColor = `saturate(darken(${vars.googlePlusColor}, 5), 15, relative)`
  vars.linkedInActiveColor = `saturate(darken(${vars.linkedInColor}, 5), 15, relative)`
  vars.youtubeActiveColor = `saturate(darken(${vars.youtubeColor}, 5), 15, relative)`
  vars.instagramActiveColor = `saturate(darken(${vars.instagramColor}, 5), 15, relative)`
  vars.pinterestActiveColor = `saturate(darken(${vars.pinterestColor}, 5), 15, relative)`
  vars.vkActiveColor = `saturate(darken(${vars.vkColor}, 5), 15, relative)`

  /*---  Dark Tones  ---*/
  vars.fullBlackActive = `darken(${vars.fullBlack}, 5)`
  vars.blackActive = `darken(${vars.black}, 5)`
  vars.greyActive = `darken(${vars.grey}, 5)`

  /*---  Light Tones  ---*/
  vars.whiteActive = `darken(${vars.white}, 5)`
  vars.offWhiteActive = `darken(${vars.offWhite}, 5)`
  vars.darkWhiteActive = `darken(${vars.darkWhite}, 5)`

  return vars
}
