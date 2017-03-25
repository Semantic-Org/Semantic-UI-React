'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasDocument = (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object' && document !== null;
var hasWindow = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window !== null && window.self === window;

exports.default = hasDocument && hasWindow;