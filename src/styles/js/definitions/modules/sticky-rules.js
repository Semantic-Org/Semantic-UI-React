/**
 * This file began as a direct copy of the less definition file.
 * The original LESS was left above each section as it was ported to JS.
 * This helps to see the logic behind how we could port styles to JS.
 */

// /*******************************
//             Theme
// *******************************/
// 
// @type    : 'module';
// @element : 'sticky';
// 
// @import (multiple) '../../theme.config';
// 
// /*******************************
//             Sticky
// *******************************/
// 
// .ui.sticky {
//   position: static;
//   transition: @transition;
//   z-index: @zIndex;
// }
// 
// /*******************************
//             States
// *******************************/
// 
// /* Bound */
// .ui.sticky.bound {
//   position: absolute;
//   left: auto;
//   right: auto;
// }
// 
// /* Fixed */
// .ui.sticky.fixed {
//   position: fixed;
//   left: auto;
//   right: auto;
// }
// 
// /* Bound/Fixed Position */
// .ui.sticky.bound.top,
// .ui.sticky.fixed.top {
//   top: 0px;
//   bottom: auto;
// }
// .ui.sticky.bound.bottom,
// .ui.sticky.fixed.bottom {
//   top: auto;
//   bottom: 0px;
// }
// 
// 
// /*******************************
//             Types
// *******************************/
// 
// .ui.native.sticky {
//   position: -webkit-sticky;
//   position: -moz-sticky;
//   position: -ms-sticky;
//   position: -o-sticky;
//   position: sticky;
// }
// 
// .loadUIOverrides();
// 
