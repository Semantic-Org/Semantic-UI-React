"use strict";

exports.__esModule = true;
exports.isLegacy = exports.getLegacyStyles = exports.canFit = void 0;
// https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L956
var OFFSET = 0; // https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L990

var PADDING = 50;
/**
 * Ensures that modal can fit viewport without scroll.
 *
 * @param modalRect {DOMRect}
 *
 * @see https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L608
 */

var canFit = function canFit(modalRect) {
  // original: scrollHeight = $module.prop('scrollHeight'),
  // is replaced by .height because scrollHeight provides integer which produces glitches
  // https://github.com/Semantic-Org/Semantic-UI-React/issues/2221
  var scrollHeight = modalRect.height + OFFSET; // $module.outerHeight() + settings.offset

  var height = modalRect.height + OFFSET; // original: $(window).height()

  var contextHeight = window.innerHeight;
  var verticalCenter = contextHeight / 2;
  var topOffset = -(height / 2); // padding with edge of page

  var paddingHeight = PADDING;
  var startPosition = verticalCenter + topOffset; // 0
  // original: scrollHeight > height
  //     ? startPosition + scrollHeight + paddingHeight < contextHeight
  //     : height + paddingHeight * 2 < contextHeight

  return startPosition + scrollHeight + paddingHeight < contextHeight;
};
/**
 * Creates legacy styles for IE11.
 *
 * @param isFitted {Boolean}
 * @param centered {Boolean}
 * @param modalRect {DOMRect}
 *
 * @see https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L718
 */


exports.canFit = canFit;

var getLegacyStyles = function getLegacyStyles(isFitted, centered, modalRect) {
  var marginTop = centered && isFitted ? -(modalRect.height / 2) : 0;
  var marginLeft = -(modalRect.width / 2);
  return {
    marginLeft: marginLeft,
    marginTop: marginTop
  };
}; // https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L631

/* istanbul ignore next */


exports.getLegacyStyles = getLegacyStyles;

var isLegacy = function isLegacy() {
  return !window.ActiveXObject && 'ActiveXObject' in window;
};

exports.isLegacy = isLegacy;