"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = getSelectedIndex;

var _includes2 = _interopRequireDefault(require("lodash/includes"));

var _find2 = _interopRequireDefault(require("lodash/find"));

var _findIndex2 = _interopRequireDefault(require("lodash/findIndex"));

var _reduce2 = _interopRequireDefault(require("lodash/reduce"));

var _getMenuOptions = _interopRequireDefault(require("./getMenuOptions"));

function getSelectedIndex(config) {
  var additionLabel = config.additionLabel,
      additionPosition = config.additionPosition,
      allowAdditions = config.allowAdditions,
      deburr = config.deburr,
      multiple = config.multiple,
      options = config.options,
      search = config.search,
      searchQuery = config.searchQuery,
      selectedIndex = config.selectedIndex,
      value = config.value;
  var menuOptions = (0, _getMenuOptions.default)({
    value: value,
    options: options,
    searchQuery: searchQuery,
    additionLabel: additionLabel,
    additionPosition: additionPosition,
    allowAdditions: allowAdditions,
    deburr: deburr,
    multiple: multiple,
    search: search
  });
  var enabledIndexes = (0, _reduce2.default)(menuOptions, function (memo, item, index) {
    if (!item.disabled) memo.push(index);
    return memo;
  }, []);
  var newSelectedIndex; // update the selected index

  if (!selectedIndex || selectedIndex < 0) {
    var firstIndex = enabledIndexes[0]; // Select the currently active item, if none, use the first item.
    // Multiple selects remove active items from the list,
    // their initial selected index should be 0.

    newSelectedIndex = multiple ? firstIndex : (0, _findIndex2.default)(menuOptions, ['value', value]) || enabledIndexes[0];
  } else if (multiple) {
    newSelectedIndex = (0, _find2.default)(enabledIndexes, function (index) {
      return index >= selectedIndex;
    }); // multiple selects remove options from the menu as they are made active
    // keep the selected index within range of the remaining items

    if (selectedIndex >= menuOptions.length - 1) {
      newSelectedIndex = enabledIndexes[enabledIndexes.length - 1];
    }
  } else {
    var activeIndex = (0, _findIndex2.default)(menuOptions, ['value', value]); // regular selects can only have one active item
    // set the selected index to the currently active item

    newSelectedIndex = (0, _includes2.default)(enabledIndexes, activeIndex) ? activeIndex : undefined;
  }

  if (!newSelectedIndex || newSelectedIndex < 0) {
    newSelectedIndex = enabledIndexes[0];
  }

  return newSelectedIndex;
}