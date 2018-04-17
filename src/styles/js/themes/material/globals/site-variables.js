module.exports = (theme) => {
  const vars = {}

  /*******************************
           Site Settings
  *******************************/

  /*-------------------
         Fonts
  --------------------*/

  vars.headerFont = `'Roboto', 'Helvetica Neue', Arial, Helvetica, sans-serif`
  vars.pageFont = `'Roboto', 'Helvetica Neue', Arial, Helvetica, sans-serif`
  vars.googleFontName = `'Roboto'`

  /*-------------------
        Base Sizes
  --------------------*/

  vars.emSize = `14px`
  vars.fontSize = `13px`

  /*--------------
        Page
  ---------------*/

  vars.pageBackground = `#F9F9F9`
  vars.lineHeight = `1.33`
  vars.textColor = `#212121`

  /*--------------
    Page Heading
  ---------------*/

  vars.headerLineHeight = `1.33em`
  vars.headerFontWeight = `400`

  vars.h1 = `2.25rem`
  vars.h2 = `2rem`
  vars.h3 = `1.75rem`
  vars.h4 = `1.5rem`
  vars.h5 = `1.25rem`


  /*-------------------
          Paths
  --------------------*/

  vars.imagePath = `'../../themes/material/assets/images'`
  vars.fontPath = `'../../themes/material/assets/fonts'`

  /*--------------
     Paragraphs
  ---------------*/

  vars.paragraphLineHeight = `1.7em`

  /*-------------------
        Site Colors
  --------------------*/

  /*---  Colors  ---*/
  vars.black = `#1B1C1D`
  vars.blue = `#2196F3`
  vars.green = `#4CAF50`
  vars.grey = `#9E9E9E`
  vars.orange = `#FF9800`
  vars.pink = `#E91E63`
  vars.purple = `#9C27B0`
  vars.red = `#F44336`
  vars.teal = `#1de9b6`
  vars.yellow = `#FFEB3B`

  /*---  Light Colors  ---*/
  vars.lightBlack = `#333333`
  vars.lightBlue = `#2979FF`
  vars.lightGreen = `#00E676`
  vars.lightOrange = `#FF9100`
  vars.lightPink = `#F50057`
  vars.lightPurple = `#D500F9`
  vars.lightRed = `#FF1744`
  vars.lightTeal = `#1DE9B6`
  vars.lightYellow = `#FFEA00`

  /*---   Neutrals  ---*/
  vars.fullBlack = `#000000`
  vars.darkGrey = `#AAAAAA`
  vars.lightGrey = `#DCDDDE`
  vars.offWhite = `#FAFAFA`
  vars.darkWhite = `#F0F0F0`
  vars.white = `#FFFFFF`

  /*-------------------
      Brand Colors
  --------------------*/

  vars.primaryColor = `${vars.blue}`
  vars.secondaryColor = `${vars.grey}`

  vars.lightPrimaryColor = `${vars.lightBlue}`
  vars.lightSecondaryColor = `${vars.lightGrey}`

  /*-------------------
        Paragraph
  --------------------*/

  vars.paragraphMargin = `0em 0em 1.53em`

  /*-------------------
         Links
  --------------------*/

  vars.linkColor = `#009FDA`
  vars.linkUnderline = `none`
  vars.linkHoverColor = `lighten(${vars.linkColor}, 5)`
  vars.linkHoverUnderline = `${vars.linkUnderline}`

  /*-------------------
    Highlighted Text
  --------------------*/

  vars.highlightBackground = `#009FDA`
  vars.highlightColor = `${vars.white}`

  /*-------------------
         Accents
  --------------------*/

  /* 4px @ default em */
  vars.relativeBorderRadius = `${theme.relative4px}`
  vars.absoluteBorderRadius = `4px`

  return vars
}
