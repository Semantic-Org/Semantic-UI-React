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
// @element : 'tab';
// 
// @import (multiple) '../../theme.config';
// 
// /*******************************
//            UI Tabs
// *******************************/
// 
// .ui.tab {
//   display: none;
// }
// 
// /*******************************
//              States
// *******************************/
// 
// /*--------------------
//        Active
// ---------------------*/
// 
// .ui.tab.active,
// .ui.tab.open {
//   display: block;
// }
// 
// /*--------------------
//        Loading
// ---------------------*/
// 
// .ui.tab.loading {
//   position: relative;
//   overflow: hidden;
//   display: block;
//   min-height: @loadingMinHeight;
// }
// .ui.tab.loading * {
//   position: @loadingContentPosition !important;
//   left: @loadingContentOffset !important;
// }
// 
// .ui.tab.loading:before,
// .ui.tab.loading.segment:before {
//   position: absolute;
//   content: '';
//   top: @loaderDistanceFromTop;
//   left: 50%;
// 
//   margin: @loaderMargin;
//   width: @loaderSize;
//   height: @loaderSize;
// 
//   border-radius: @circularRadius;
//   border: @loaderLineWidth solid @loaderFillColor;
// }
// .ui.tab.loading:after,
// .ui.tab.loading.segment:after {
//   position: absolute;
//   content: '';
//   top: @loaderDistanceFromTop;
//   left: 50%;
// 
//   margin: @loaderMargin;
//   width: @loaderSize;
//   height: @loaderSize;
// 
//   animation: button-spin @loaderSpeed linear;
//   animation-iteration-count: infinite;
// 
//   border-radius: @circularRadius;
// 
//   border-color: @loaderLineColor transparent transparent;
//   border-style: solid;
//   border-width: @loaderLineWidth;
// 
//   box-shadow: 0px 0px 0px 1px transparent;
// }
// 
// .loadUIOverrides();
// 
