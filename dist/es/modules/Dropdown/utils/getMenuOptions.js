import _some from "lodash/some";
import _escapeRegExp from "lodash/escapeRegExp";
import _deburr from "lodash/deburr";
import _isFunction from "lodash/isFunction";
import _includes from "lodash/includes";
import _filter from "lodash/filter";
import React from 'react'; // There are times when we need to calculate the options based on a value
// that hasn't yet been persisted to state.

export default function getMenuOptions(config) {
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
    filteredOptions = _filter(filteredOptions, function (opt) {
      return !_includes(value, opt.value);
    });
  } // filter by search query


  if (search && searchQuery) {
    if (_isFunction(search)) {
      filteredOptions = search(filteredOptions, searchQuery);
    } else {
      // remove diacritics on search input and options, if deburr prop is set
      var strippedQuery = deburr ? _deburr(searchQuery) : searchQuery;
      var re = new RegExp(_escapeRegExp(strippedQuery), 'i');
      filteredOptions = _filter(filteredOptions, function (opt) {
        return re.test(deburr ? _deburr(opt.text) : opt.text);
      });
    }
  } // insert the "add" item


  if (allowAdditions && search && searchQuery && !_some(filteredOptions, {
    text: searchQuery
  })) {
    var additionLabelElement = /*#__PURE__*/React.isValidElement(additionLabel) ? /*#__PURE__*/React.cloneElement(additionLabel, {
      key: 'addition-label'
    }) : additionLabel || '';
    var addItem = {
      key: 'addition',
      // by using an array, we can pass multiple elements, but when doing so
      // we must specify a `key` for React to know which one is which
      text: [additionLabelElement, /*#__PURE__*/React.createElement("b", {
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