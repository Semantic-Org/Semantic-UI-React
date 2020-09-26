import _includes from "lodash/includes";
import _find from "lodash/find";
import _findIndex from "lodash/findIndex";
import _reduce from "lodash/reduce";
import getMenuOptions from './getMenuOptions';
export default function getSelectedIndex(config) {
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
  var menuOptions = getMenuOptions({
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

  var enabledIndexes = _reduce(menuOptions, function (memo, item, index) {
    if (!item.disabled) memo.push(index);
    return memo;
  }, []);

  var newSelectedIndex; // update the selected index

  if (!selectedIndex || selectedIndex < 0) {
    var firstIndex = enabledIndexes[0]; // Select the currently active item, if none, use the first item.
    // Multiple selects remove active items from the list,
    // their initial selected index should be 0.

    newSelectedIndex = multiple ? firstIndex : _findIndex(menuOptions, ['value', value]) || enabledIndexes[0];
  } else if (multiple) {
    newSelectedIndex = _find(enabledIndexes, function (index) {
      return index >= selectedIndex;
    }); // multiple selects remove options from the menu as they are made active
    // keep the selected index within range of the remaining items

    if (selectedIndex >= menuOptions.length - 1) {
      newSelectedIndex = enabledIndexes[enabledIndexes.length - 1];
    }
  } else {
    var activeIndex = _findIndex(menuOptions, ['value', value]); // regular selects can only have one active item
    // set the selected index to the currently active item


    newSelectedIndex = _includes(enabledIndexes, activeIndex) ? activeIndex : undefined;
  }

  if (!newSelectedIndex || newSelectedIndex < 0) {
    newSelectedIndex = enabledIndexes[0];
  }

  return newSelectedIndex;
}