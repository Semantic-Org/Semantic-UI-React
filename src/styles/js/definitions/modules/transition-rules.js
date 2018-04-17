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
// @element : 'transition';
// 
// @import (multiple) '../../theme.config';
// 
// /*******************************
//           Transitions
// *******************************/
// 
// .transition {
//   animation-iteration-count: 1;
//   animation-duration: @transitionDefaultDuration;
//   animation-timing-function: @transitionDefaultEasing;
//   animation-fill-mode: @transitionDefaultFill;
// }
// 
// /*******************************
//             States
// *******************************/
// 
// 
// /* Animating */
// .animating.transition {
//   backface-visibility: @backfaceVisibility;
//   visibility: visible !important;
// }
// 
// /* Loading */
// .loading.transition {
//   position: absolute;
//   top: -99999px;
//   left: -99999px;
// }
// 
// /* Hidden */
// .hidden.transition {
//   display: none;
//   visibility: hidden;
// }
// 
// /* Visible */
// .visible.transition {
//   display: block !important;
//   visibility: visible !important;
// /*  backface-visibility: @backfaceVisibility;
//   transform: @use3DAcceleration;*/
// }
// 
// /* Disabled */
// .disabled.transition {
//   animation-play-state: paused;
// }
// 
// /*******************************
//           Variations
// *******************************/
// 
// .looping.transition {
//   animation-iteration-count: infinite;
// }
// 
// 
// .loadUIOverrides();
// 
