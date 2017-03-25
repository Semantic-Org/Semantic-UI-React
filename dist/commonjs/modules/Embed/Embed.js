'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _meta = {
  name: 'Embed',
  type: _lib.META.TYPES.MODULE,
  props: {
    aspectRatio: ['4:3', '16:9', '21:9'],
    source: ['youtube', 'vimeo']
  }
};

/**
 * An embed displays content from other websites like YouTube videos or Google Maps.
 */

var Embed = function (_Component) {
  _inherits(Embed, _Component);

  function Embed() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Embed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Embed.__proto__ || Object.getPrototypeOf(Embed)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      var active = _this.state.active;


      if (onClick) onClick(e, _extends({}, _this.props, { active: true }));
      if (!active) _this.trySetState({ active: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Embed, [{
    key: 'getSrc',
    value: function getSrc() {
      var _props = this.props,
          _props$autoplay = _props.autoplay,
          autoplay = _props$autoplay === undefined ? true : _props$autoplay,
          _props$brandedUI = _props.brandedUI,
          brandedUI = _props$brandedUI === undefined ? false : _props$brandedUI,
          _props$color = _props.color,
          color = _props$color === undefined ? '#444444' : _props$color,
          _props$hd = _props.hd,
          hd = _props$hd === undefined ? true : _props$hd,
          id = _props.id,
          source = _props.source,
          url = _props.url;


      if (source === 'youtube') {
        return ['//www.youtube.com/embed/' + id, '?autohide=true', '&amp;autoplay=' + autoplay, '&amp;color=' + encodeURIComponent(color), '&amp;hq=' + hd, '&amp;jsapi=false', '&amp;modestbranding=' + brandedUI].join('');
      }

      if (source === 'vimeo') {
        return ['//player.vimeo.com/video/' + id, '?api=false', '&amp;autoplay=' + autoplay, '&amp;byline=false', '&amp;color=' + encodeURIComponent(color), '&amp;portrait=false', '&amp;title=false'].join('');
      }

      return url;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          aspectRatio = _props2.aspectRatio,
          className = _props2.className,
          icon = _props2.icon,
          placeholder = _props2.placeholder;
      var active = this.state.active;


      var classes = (0, _classnames2.default)('ui', aspectRatio, (0, _lib.useKeyOnly)(active, 'active'), 'embed', className);
      var rest = (0, _lib.getUnhandledProps)(Embed, this.props);
      var ElementType = (0, _lib.getElementType)(Embed, this.props);

      return _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes, onClick: this.handleClick }),
        _Icon2.default.create(icon),
        placeholder && _react2.default.createElement('img', { className: 'placeholder', src: placeholder }),
        this.renderEmbed()
      );
    }
  }, {
    key: 'renderEmbed',
    value: function renderEmbed() {
      var children = this.props.children;
      var active = this.state.active;


      if (!active) return null;
      if (children) return _react2.default.createElement(
        'div',
        { className: 'embed' },
        children
      );

      return _react2.default.createElement(
        'div',
        { className: 'embed' },
        _react2.default.createElement('iframe', {
          allowFullScreen: '',
          frameBorder: '0',
          height: '100%',
          scrolling: 'no',
          src: this.getSrc(),
          width: '100%'
        })
      );
    }
  }]);

  return Embed;
}(_lib.AutoControlledComponent);

Embed.autoControlledProps = ['active'];
Embed.defaultProps = {
  icon: 'video play'
};
Embed._meta = _meta;
Embed.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** An embed can be active. */
  active: _react.PropTypes.bool,

  /** Setting to true or false will force autoplay. */
  autoplay: _lib.customPropTypes.every([_lib.customPropTypes.demand(['source']), _react.PropTypes.bool]),

  /** An embed can specify an alternative aspect ratio. */
  aspectRatio: _react.PropTypes.oneOf(_meta.props.aspectRatio),

  /** Whether to show networks branded UI like title cards, or after video calls to action. */
  brandedUI: _lib.customPropTypes.every([_lib.customPropTypes.demand(['source']), _react.PropTypes.bool]),

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Specifies a default chrome color with Vimeo or YouTube. */
  color: _lib.customPropTypes.every([_lib.customPropTypes.demand(['source']), _react.PropTypes.string]),

  /** Initial value of active. */
  defaultActive: _react.PropTypes.bool,

  /** Whether to show networks branded UI like title cards, or after video calls to action. */
  hd: _lib.customPropTypes.every([_lib.customPropTypes.demand(['source']), _react.PropTypes.bool]),

  /** Specifies an id for source. */
  id: _lib.customPropTypes.every([_lib.customPropTypes.demand(['source']), _react.PropTypes.string]),

  /** Specifies an icon to use with placeholder content. */
  icon: _lib.customPropTypes.itemShorthand,

  /**
   * Сalled on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onClick: _react.PropTypes.func,

  /** A placeholder image for embed. */
  placeholder: _react.PropTypes.string,

  /** Specifies a source to use. */
  source: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['sourceUrl']), _react.PropTypes.oneOf(_meta.props.source)]),

  /** Specifies a url to use for embed. */
  url: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['source']), _react.PropTypes.string])
};
exports.default = Embed;