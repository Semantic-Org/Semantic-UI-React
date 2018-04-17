/**
 * This file began as a direct copy of the less definition file.
 * The original LESS was left above each section as it was ported to JS.
 * This helps to see the logic behind how we could port styles to JS.
 */

// /*******************************
//         Import Directives
// *******************************/
// 
// /*------------------
//        Theme
// -------------------*/
// 
// @theme: @@element;
// 
// /*--------------------
//    Site Variables
// ---------------------*/
// 
// /* Default site.variables */
// @import "@{themesFolder}/default/globals/site.variables";
// 
// /* Packaged site.variables */
// @import "@{themesFolder}/@{site}/globals/site.variables";
// 
// /* Component's site.variables */
// @import (optional) "@{themesFolder}/@{theme}/globals/site.variables";
// 
// /* Site theme site.variables */
// @import (optional) "@{siteFolder}/globals/site.variables";
// 
// 
// /*-------------------
//  Component Variables
// ---------------------*/
// 
// /* Default */
// @import "@{themesFolder}/default/@{type}s/@{element}.variables";
// 
// /* Packaged Theme */
// @import (optional) "@{themesFolder}/@{theme}/@{type}s/@{element}.variables";
// 
// /* Site Theme */
// @import (optional) "@{siteFolder}/@{type}s/@{element}.variables";
// 
// 
// /*******************************
//              Mix-ins
// *******************************/
// 
// /*------------------
//        Fonts
// -------------------*/
// 
// .loadFonts() when (@importGoogleFonts) {
//   @import url('@{googleProtocol}fonts.googleapis.com/css?family=@{googleFontRequest}');
// }
// 
// /*------------------
//      Overrides
// -------------------*/
// 
// .loadUIOverrides() {
//   @import (optional) "@{themesFolder}/@{theme}/@{type}s/@{element}.overrides";
//   @import (optional) "@{siteFolder}/@{type}s/@{element}.overrides";
// }
// 
