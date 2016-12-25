'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debug = exports.makeDebugger = undefined;

var _isBrowser = require('./isBrowser');

var _isBrowser2 = _interopRequireDefault(_isBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _debug = void 0;
var noop = function noop() {
  return undefined;
};

if (_isBrowser2.default && process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  // Heads Up!
  // https://github.com/visionmedia/debug/pull/331
  //
  // debug now clears storage on load, grab the debug settings before require('debug').
  // We try/catch here as Safari throws on localStorage access in private mode or with cookies disabled.
  var DEBUG = void 0;
  try {
    DEBUG = window.localStorage.debug;
  } catch (e) {
    /* eslint-disable no-console */
    console.error('Semantic-UI-React could not enable debug.');
    console.error(e);
    /* eslint-enable no-console */
  }

  _debug = require('debug');

  // enable what ever settings we got from storage
  _debug.enable(DEBUG);
} else {
  _debug = function _debug() {
    return noop;
  };
}

/**
 * Create a namespaced debug function.
 * @param {String} namespace Usually a component name.
 * @example
 * import { makeDebugger } from 'src/lib'
 * const debug = makeDebugger('namespace')
 *
 * debug('Some message')
 * @returns {Function}
 */
var makeDebugger = exports.makeDebugger = function makeDebugger(namespace) {
  return _debug('semanticUIReact:' + namespace);
};

/**
 * Default debugger, simple log.
 * @example
 * import { debug } from 'src/lib'
 * debug('Some message')
 */
var debug = exports.debug = makeDebugger('log');