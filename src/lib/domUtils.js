import isBrowser from './isBrowser'

/* eslint-disable */
// Polyfill taken from:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
if (isBrowser && !Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}
/* eslint-enable */

/**
 * NOTE:
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest doesn't
 * have wide browser support so this is an implementation in vanilla js.
 *
 * Returns the closest ancestor of the current element (or the current element
 * itself) which matches the selectors given in parameter.
 *
 * @param {Node} children The children prop of a component.
 * @param {string} type An html tag name string or React component.
 * @returns {Node|undefined}
 */
export const closest = (node, selector) => {
  while (node && !node.matches(selector)) node = node.parentElement

  return node
}
