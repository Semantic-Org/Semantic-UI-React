'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableHeaderCell(props) {
  return _react2.default.createElement(_TableCell2.default, props);
}

TableHeaderCell._meta = {
  name: 'TableHeaderCell',
  type: _lib.META.TYPES.COLLECTION,
  parent: 'Table'
};

TableHeaderCell.defaultProps = {
  as: 'th'
};

exports.default = TableHeaderCell;