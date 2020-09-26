"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.computeClassNames = computeClassNames;
exports.computeClassNamesDifference = computeClassNamesDifference;
exports.default = useClassNamesOnNode;
exports.NodeRegistry = exports.handleClassNamesChange = void 0;

var _reactComponentRef = require("@fluentui/react-component-ref");

var _react = _interopRequireDefault(require("react"));

var _useIsomorphicLayoutEffect = _interopRequireDefault(require("./useIsomorphicLayoutEffect"));

var CLASS_NAME_DELITIMITER = /\s+/;
/**
 * Accepts a set of ref objects that contain classnames as a string and returns an array of unique
 * classNames.
 *
 * @param {Set<React.RefObject>|undefined} classNameRefs
 * @returns String[]
 */

function computeClassNames(classNameRefs) {
  var classNames = [];

  if (classNameRefs) {
    classNameRefs.forEach(function (classNameRef) {
      if (typeof classNameRef.current === 'string') {
        var classNamesForRef = classNameRef.current.split(CLASS_NAME_DELITIMITER);
        classNamesForRef.forEach(function (className) {
          classNames.push(className);
        });
      }
    });
    return classNames.filter(function (className, i, array) {
      return className.length > 0 && array.indexOf(className) === i;
    });
  }

  return [];
}
/**
 * Computes classnames that should be removed and added to a node based on input differences.
 *
 * @param {String[]} prevClassNames
 * @param {String[]} currentClassNames
 */


function computeClassNamesDifference(prevClassNames, currentClassNames) {
  return [currentClassNames.filter(function (className) {
    return prevClassNames.indexOf(className) === -1;
  }), prevClassNames.filter(function (className) {
    return currentClassNames.indexOf(className) === -1;
  })];
}

var prevClassNames = new Map();
/**
 * @param {HTMLElement} node
 * @param {Set<React.RefObject>|undefined} classNameRefs
 */

var handleClassNamesChange = function handleClassNamesChange(node, classNameRefs) {
  var currentClassNames = computeClassNames(classNameRefs);

  var _computeClassNamesDif = computeClassNamesDifference(prevClassNames.get(node) || [], currentClassNames),
      forAdd = _computeClassNamesDif[0],
      forRemoval = _computeClassNamesDif[1];

  if (node) {
    forAdd.forEach(function (className) {
      return node.classList.add(className);
    });
    forRemoval.forEach(function (className) {
      return node.classList.remove(className);
    });
  }

  prevClassNames.set(node, currentClassNames);
};

exports.handleClassNamesChange = handleClassNamesChange;

var NodeRegistry = function NodeRegistry() {
  var _this = this;

  this.add = function (node, classNameRef) {
    if (_this.nodes.has(node)) {
      var _set = _this.nodes.get(node);

      _set.add(classNameRef);

      return;
    } // IE11 does not support constructor params


    var set = new Set();
    set.add(classNameRef);

    _this.nodes.set(node, set);
  };

  this.del = function (node, classNameRef) {
    if (!_this.nodes.has(node)) {
      return;
    }

    var set = _this.nodes.get(node);

    if (set.size === 1) {
      _this.nodes.delete(node);

      return;
    }

    set.delete(classNameRef);
  };

  this.emit = function (node, callback) {
    callback(node, _this.nodes.get(node));
  };

  this.nodes = new Map();
};

exports.NodeRegistry = NodeRegistry;
var nodeRegistry = new NodeRegistry();
/**
 * A React hooks that allows to manage classNames on a DOM node in declarative manner. Accepts
 * a HTML element or React ref objects with it.
 *
 * @param {HTMLElement|React.RefObject} node
 * @param {String} className
 */

function useClassNamesOnNode(node, className) {
  var classNameRef = _react.default.useRef();

  var isMounted = _react.default.useRef(false);

  (0, _useIsomorphicLayoutEffect.default)(function () {
    classNameRef.current = className;

    if (isMounted.current) {
      var element = (0, _reactComponentRef.isRefObject)(node) ? node.current : node;
      nodeRegistry.emit(element, handleClassNamesChange);
    }

    isMounted.current = true;
  }, [className]);
  (0, _useIsomorphicLayoutEffect.default)(function () {
    var element = (0, _reactComponentRef.isRefObject)(node) ? node.current : node;
    nodeRegistry.add(element, classNameRef);
    nodeRegistry.emit(element, handleClassNamesChange);
    return function () {
      nodeRegistry.del(element, classNameRef);
      nodeRegistry.emit(element, handleClassNamesChange);
    };
  }, [node]);
}