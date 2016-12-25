'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAutoControlledStateValue = undefined;

var _difference2 = require('lodash/difference');

var _difference3 = _interopRequireDefault(_difference2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _startsWith2 = require('lodash/startsWith');

var _startsWith3 = _interopRequireDefault(_startsWith2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _keys2 = require('lodash/keys');

var _keys3 = _interopRequireDefault(_keys2);

var _intersection2 = require('lodash/intersection');

var _intersection3 = _interopRequireDefault(_intersection2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _each2 = require('lodash/each');

var _each3 = _interopRequireDefault(_each2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */
/**
 * Why choose inheritance over a HOC?  Multiple advantages for this particular use case.
 * In short, we need identical functionality to setState(), unless there is a prop defined
 * for the state key.  Also:
 *
 * 1. Single Renders
 *    Calling trySetState() in constructor(), componentWillMount(), or componentWillReceiveProps()
 *    does not cause two renders. Consumers and tests do not have to wait two renders to get state.
 *    See www.react.run/4kJFdKoxb/27 for an example of this issue.
 *
 * 2. Simple Testing
 *    Using a HOC means you must either test the undecorated component or test through the decorator.
 *    Testing the undecorated component means you must mock the decorator functionality.
 *    Testing through the HOC means you can not simply shallow render your component.
 *
 * 3. Statics
 *    HOC wrap instances, so statics are no longer accessible.  They can be hoisted, but this is more
 *    looping over properties and storing references.  We rely heavily on statics for testing and sub
 *    components.
 *
 * 4. Instance Methods
 *    Some instance methods may be exposed to users via refs.  Again, these are lost with HOC unless
 *    hoisted and exposed by the HOC.
 */


var getDefaultPropName = function getDefaultPropName(prop) {
  return 'default' + (prop[0].toUpperCase() + prop.slice(1));
};

/**
 * Return the auto controlled state value for a give prop. The initial value is chosen in this order:
 *  - regular props
 *  - then, default props
 *  - then, initial state
 *  - then, `checked` defaults to false
 *  - then, `value` defaults to '' or [] if props.multiple
 *  - else, undefined
 *
 *  @param {string} propName A prop name
 *  @param {object} [props] A props object
 *  @param {object} [state] A state object
 *  @param {boolean} [includeDefaults=false] Whether or not to heed the default props or initial state
 */
var getAutoControlledStateValue = exports.getAutoControlledStateValue = function getAutoControlledStateValue(propName, props, state) {
  var includeDefaults = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  // regular props
  var propValue = props[propName];
  if (propValue !== undefined) return propValue;

  if (includeDefaults) {
    // defaultProps
    var defaultProp = props[getDefaultPropName(propName)];
    if (defaultProp !== undefined) return defaultProp;

    // initial state - state may be null or undefined
    if (state) {
      var initialState = state[propName];
      if (initialState !== undefined) return initialState;
    }
  }

  // React doesn't allow changing from uncontrolled to controlled components,
  // default checked/value if they were not present.
  if (propName === 'checked') return false;
  if (propName === 'value') return props.multiple ? [] : '';

  // otherwise, undefined
};

var AutoControlledComponent = function (_Component) {
  _inherits(AutoControlledComponent, _Component);

  function AutoControlledComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AutoControlledComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutoControlledComponent.__proto__ || Object.getPrototypeOf(AutoControlledComponent)).call.apply(_ref, [this].concat(args))), _this), _this.trySetState = function (maybeState, state) {
      var autoControlledProps = _this.constructor.autoControlledProps;

      if (process.env.NODE_ENV !== 'production') {
        var name = _this.constructor.name;
        // warn about failed attempts to setState for keys not listed in autoControlledProps

        var illegalKeys = (0, _difference3.default)((0, _keys3.default)(maybeState), autoControlledProps);
        if (!(0, _isEmpty3.default)(illegalKeys)) {
          console.error([name + ' called trySetState() with controlled props: "' + illegalKeys + '".', 'State will not be set.', 'Only props in static autoControlledProps will be set on state.'].join(' '));
        }
      }

      var newState = Object.keys(maybeState).reduce(function (acc, prop) {
        // ignore props defined by the parent
        if (_this.props[prop] !== undefined) return acc;

        // ignore props not listed in auto controlled props
        if (autoControlledProps.indexOf(prop) === -1) return acc;

        acc[prop] = maybeState[prop];
        return acc;
      }, {});

      if (state) newState = _extends({}, newState, state);

      if (Object.keys(newState).length > 0) _this.setState(newState);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AutoControlledComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var autoControlledProps = this.constructor.autoControlledProps;


      if (process.env.NODE_ENV !== 'production') {
        (function () {
          var _constructor = _this2.constructor,
              defaultProps = _constructor.defaultProps,
              name = _constructor.name,
              propTypes = _constructor.propTypes;
          // require static autoControlledProps

          if (!autoControlledProps) {
            console.error('Auto controlled ' + name + ' must specify a static autoControlledProps array.');
          }

          // require propTypes
          (0, _each3.default)(autoControlledProps, function (prop) {
            var defaultProp = getDefaultPropName(prop);
            // regular prop
            if (!(0, _has3.default)(propTypes, defaultProp)) {
              console.error(name + ' is missing "' + defaultProp + '" propTypes validation for auto controlled prop "' + prop + '".');
            }
            // its default prop
            if (!(0, _has3.default)(propTypes, prop)) {
              console.error(name + ' is missing propTypes validation for auto controlled prop "' + prop + '".');
            }
          });

          // prevent autoControlledProps in defaultProps
          //
          // When setting state, auto controlled props values always win (so the parent can manage them).
          // It is not reasonable to decipher the difference between props from the parent and defaultProps.
          // Allowing defaultProps results in trySetState always deferring to the defaultProp value.
          // Auto controlled props also listed in defaultProps can never be updated.
          //
          // To set defaults for an AutoControlled prop, you can set the initial state in the
          // constructor or by using an ES7 property initializer:
          // https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers
          var illegalDefaults = (0, _intersection3.default)(autoControlledProps, (0, _keys3.default)(defaultProps));
          if (!(0, _isEmpty3.default)(illegalDefaults)) {
            console.error(['Do not set defaultProps for autoControlledProps. You can set defaults by', 'setting state in the constructor or using an ES7 property initializer', '(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)', 'See ' + name + ' props: "' + illegalDefaults + '".'].join(' '));
          }

          // prevent listing defaultProps in autoControlledProps
          //
          // Default props are automatically handled.
          // Listing defaults in autoControlledProps would result in allowing defaultDefaultValue props.
          var illegalAutoControlled = (0, _filter3.default)(autoControlledProps, function (prop) {
            return (0, _startsWith3.default)(prop, 'default');
          });
          if (!(0, _isEmpty3.default)(illegalAutoControlled)) {
            console.error(['Do not add default props to autoControlledProps.', 'Default props are automatically handled.', 'See ' + name + ' autoControlledProps: "' + illegalAutoControlled + '".'].join(' '));
          }
        })();
      }

      // Auto controlled props are copied to state.
      // Set initial state by copying auto controlled props to state.
      // Also look for the default prop for any auto controlled props (foo => defaultFoo)
      // so we can set initial values from defaults.
      var initialAutoControlledState = autoControlledProps.reduce(function (acc, prop) {
        acc[prop] = getAutoControlledStateValue(prop, _this2.props, _this2.state, true);

        if (process.env.NODE_ENV !== 'production') {
          var defaultPropName = getDefaultPropName(prop);
          var name = _this2.constructor.name;
          // prevent defaultFoo={} along side foo={}

          if (defaultPropName in _this2.props && prop in _this2.props) {
            console.error(name + ' prop "' + prop + '" is auto controlled. Specify either ' + defaultPropName + ' or ' + prop + ', but not both.');
          }
        }

        return acc;
      }, {});

      this.state = _extends({}, this.state, initialAutoControlledState);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var autoControlledProps = this.constructor.autoControlledProps;

      // Solve the next state for autoControlledProps

      var newState = autoControlledProps.reduce(function (acc, prop) {
        var isNextUndefined = (0, _isUndefined3.default)(nextProps[prop]);
        var propWasRemoved = !(0, _isUndefined3.default)(_this3.props[prop]) && isNextUndefined;

        // if next is defined then use its value
        if (!isNextUndefined) acc[prop] = nextProps[prop];

        // reinitialize state for props just removed / set undefined
        else if (propWasRemoved) acc[prop] = getAutoControlledStateValue(prop, nextProps);

        return acc;
      }, {});

      if (Object.keys(newState).length > 0) this.setState(newState);
    }

    /**
     * Safely attempt to set state for props that might be controlled by the user.
     * Second argument is a state object that is always passed to setState.
     * @param {object} maybeState State that corresponds to controlled props.
     * @param {object} [state] Actual state, useful when you also need to setState.
     */

  }]);

  return AutoControlledComponent;
}(_react.Component);

exports.default = AutoControlledComponent;