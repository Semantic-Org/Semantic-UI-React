'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copy of sindre's leven, wrapped in dead code elimination for production
// https://github.com/sindresorhus/leven/blob/master/index.js

var leven = function leven() {
  return 0;
};

if (process.env.NODE_ENV !== 'production') {
  (function () {
    /* eslint-disable complexity, no-nested-ternary */
    var arr = [];
    var charCodeCache = [];

    leven = function leven(a, b) {
      if (a === b) return 0;

      var aLen = a.length;
      var bLen = b.length;

      if (aLen === 0) return bLen;
      if (bLen === 0) return aLen;

      var bCharCode = void 0;
      var ret = void 0;
      var tmp = void 0;
      var tmp2 = void 0;
      var i = 0;
      var j = 0;

      while (i < aLen) {
        charCodeCache[i] = a.charCodeAt(i);
        arr[i] = ++i;
      }

      while (j < bLen) {
        bCharCode = b.charCodeAt(j);
        tmp = j++;
        ret = j;

        for (i = 0; i < aLen; i++) {
          tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + 1;
          tmp = arr[i];
          ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
        }
      }

      return ret;
    };
  })();
}

exports.default = leven;