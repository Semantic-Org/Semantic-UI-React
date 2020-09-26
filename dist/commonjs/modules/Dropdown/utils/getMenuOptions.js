"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = getMenuOptions;

var _some2 = _interopRequireDefault(require("lodash/some"));

var _escapeRegExp2 = _interopRequireDefault(require("lodash/escapeRegExp"));

var _deburr2 = _interopRequireDefault(require("lodash/deburr"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _includes2 = _interopRequireDefault(require("lodash/includes"));

var _filter2 = _interopRequireDefault(require("lodash/filter"));

var _react = _interopRequireDefault(require("react"));

// There are times when we need to calculate the options based on a value
// that hasn't yet been persisted to state.
function getMenuOptions(config) {
  var additionLabel = config.additionLabel,
      additionPosition = config.additionPosition,
      allowAdditions = config.allowAdditions,
      deburr = config.deburr,
      multiple = config.multiple,
      options = config.options,
      search = config.search,
      searchQuery = config.searchQuery,
      value = config.value;
  var filteredOptions = options; // filter out active options

  if (multiple) {
    filteredOptions = (0, _filter2.default)(filteredOptions, function (opt) {
      return !(0, _includes2.default)(value, opt.value);
    });
  } // filter by search query


  if (search && searchQuery) {
    if ((0, _isFunction2.default)(search)) {
      filteredOptions = search(filteredOptions, searchQuery);
    } else {
      // remove diacritics on search input and options, if deburr prop is set
      var strippedQuery = deburr ? (0, _deburr2.default)(searchQuery) : searchQuery;
      var re = new RegExp((0, _escapeRegExp2.default)(strippedQuery), 'i');
      filteredOptions = (0, _filter2.default)(filteredOptions, function (opt) {
        return re.test(deburr ? (0, _deburr2.default)(opt.text) : opt.text);
      });
    }
  } // insert the "add" item


  if (allowAdditions && search && searchQuery && !(0, _some2.default)(filteredOptions, {
    text: searchQuery
  })) {
    var additionLabelElement = /*#__PURE__*/_react.default.isValidElement(additionLabel) ? /*#__PURE__*/_react.default.cloneElement(additionLabel, {
      key: 'addition-label'
    }) : additionLabel || '';
    var addItem = {
      key: 'addition',
      // by using an array, we can pass multiple elements, but when doing so
      // we must specify a `key` for React to know which one is which
      text: [additionLabelElement, /*#__PURE__*/_react.default.createElement("b", {
        key: "addition-query"
      }, searchQuery)],
      value: searchQuery,
      className: 'addition',
      'data-additional': true
    };
    if (additionPosition === 'top') filteredOptions.unshift(addItem);else filteredOptions.push(addItem);
  }

  return filteredOptions;
}

getMenuOptions.handledProps = [];