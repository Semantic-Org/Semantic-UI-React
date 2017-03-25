'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _each2 = require('lodash/each');

var _each3 = _interopRequireDefault(_each2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _BreadcrumbDivider = require('./BreadcrumbDivider');

var _BreadcrumbDivider2 = _interopRequireDefault(_BreadcrumbDivider);

var _BreadcrumbSection = require('./BreadcrumbSection');

var _BreadcrumbSection2 = _interopRequireDefault(_BreadcrumbSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A breadcrumb is used to show hierarchy between content.
 */
function Breadcrumb(props) {
  var children = props.children,
      className = props.className,
      divider = props.divider,
      icon = props.icon,
      size = props.size,
      sections = props.sections;

  var classes = (0, _classnames2.default)('ui', className, size, 'breadcrumb');
  var rest = (0, _lib.getUnhandledProps)(Breadcrumb, props);
  var ElementType = (0, _lib.getElementType)(Breadcrumb, props);

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );
  }

  var childElements = [];

  (0, _each3.default)(sections, function (section, index) {
    // section
    var breadcrumbSection = _BreadcrumbSection2.default.create(section);
    childElements.push(breadcrumbSection);

    // divider
    if (index !== sections.length - 1) {
      // TODO generate a key from breadcrumbSection.props once this is merged:
      // https://github.com/Semantic-Org/Semantic-UI-React/pull/645
      //
      // Stringify the props of the section as the divider key.
      //
      // Section:     { content: 'Home', link: true, onClick: handleClick }
      // Divider key: content=Home|link=true|onClick=handleClick
      var key = void 0;
      if (section.key) {
        key = section.key + '_divider';
      } else {
        key = (0, _map3.default)(breadcrumbSection.props, function (v, k) {
          return k + '=' + (typeof v === 'function' ? v.name || 'func' : v);
        }).join('|');
      }
      childElements.push(_BreadcrumbDivider2.default.create({ content: divider, icon: icon, key: key }));
    }
  });

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    childElements
  );
}

Breadcrumb._meta = {
  name: 'Breadcrumb',
  type: _lib.META.TYPES.COLLECTION,
  props: {
    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium')
  }
};

Breadcrumb.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for primary content of the Breadcrumb.Divider. */
  divider: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['icon']), _lib.customPropTypes.contentShorthand]),

  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
   *  Breadcrumb.Divider. */
  icon: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['divider']), _lib.customPropTypes.itemShorthand]),

  /** Shorthand array of props for Breadcrumb.Section. */
  sections: _lib.customPropTypes.collectionShorthand,

  /** Size of Breadcrumb */
  size: _react.PropTypes.oneOf(Breadcrumb._meta.props.size)
};

Breadcrumb.Divider = _BreadcrumbDivider2.default;
Breadcrumb.Section = _BreadcrumbSection2.default;

exports.default = Breadcrumb;