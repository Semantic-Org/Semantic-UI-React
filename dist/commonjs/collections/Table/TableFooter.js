'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _TableHeader = require('./TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableFooter(props) {
  return _react2.default.createElement(_TableHeader2.default, props);
}

TableFooter._meta = {
  name: 'TableFooter',
  type: _lib.META.TYPES.COLLECTION,
  parent: 'Table'
};

TableFooter.defaultProps = {
  as: 'tfoot'
};

exports.default = TableFooter;