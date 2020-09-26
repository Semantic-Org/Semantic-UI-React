import _isNil from "lodash/isNil";
var hasDocument = typeof document === 'object' && document !== null;
var hasWindow = typeof window === 'object' && window !== null && window.self === window; // eslint-disable-next-line no-confusing-arrow

var isBrowser = function isBrowser() {
  return !_isNil(isBrowser.override) ? isBrowser.override : hasDocument && hasWindow;
};

export default isBrowser;