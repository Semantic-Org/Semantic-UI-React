'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _round2 = require('lodash/round');

var _round3 = _interopRequireDefault(_round2);

var _clamp2 = require('lodash/clamp');

var _clamp3 = _interopRequireDefault(_clamp2);

var _every2 = require('lodash/every');

var _every3 = _interopRequireDefault(_every2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Progress(props) {
  var active = props.active,
      attached = props.attached,
      autoSuccess = props.autoSuccess,
      color = props.color,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      error = props.error,
      indicating = props.indicating,
      inverted = props.inverted,
      label = props.label,
      percent = props.percent,
      precision = props.precision,
      progress = props.progress,
      size = props.size,
      success = props.success,
      total = props.total,
      value = props.value,
      warning = props.warning;


  var isAutoSuccess = autoSuccess && (percent >= 100 || value >= total);

  var showProgress = progress || label || !(0, _isUndefined3.default)(precision) || !(0, _every3.default)([total, value], _isUndefined3.default);

  var _percent = void 0;
  if (!(0, _isUndefined3.default)(percent)) {
    _percent = percent;
  } else if (!(0, _isUndefined3.default)(total) && !(0, _isUndefined3.default)(value)) {
    _percent = value / total * 100;
  }

  _percent = (0, _clamp3.default)(_percent, 0, 100);

  if (!(0, _isUndefined3.default)(precision)) {
    _percent = (0, _round3.default)(_percent, precision);
  }

  var progressText = void 0;
  if (label === 'percent' || label === true || (0, _isUndefined3.default)(label)) {
    progressText = _percent + '%';
  } else if (label === 'ratio') {
    progressText = value + '/' + total;
  }

  var classes = (0, _classnames2.default)('ui', size, color, (0, _lib.useKeyOnly)(active || indicating, 'active'), (0, _lib.useKeyOnly)(isAutoSuccess || success, 'success'), (0, _lib.useKeyOnly)(warning, 'warning'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(indicating, 'indicating'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useValueAndKey)(attached, 'attached'), className, 'progress');
  var rest = (0, _lib.getUnhandledProps)(Progress, props);
  var ElementType = (0, _lib.getElementType)(Progress, props);

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    _react2.default.createElement(
      'div',
      { className: 'bar', style: { width: _percent + '%' } },
      showProgress && _react2.default.createElement(
        'div',
        { className: 'progress' },
        progressText
      )
    ),
    children && _react2.default.createElement(
      'div',
      { className: 'label' },
      children
    )
  );
}

Progress._meta = {
  name: 'Progress',
  type: _lib.META.TYPES.MODULE,
  props: {
    attached: ['top', 'bottom'],
    color: _lib.SUI.COLORS,
    label: ['ratio', 'percent'],
    size: (0, _without3.default)(_lib.SUI.SIZES, 'mini', 'huge', 'massive')
  }
};

Progress.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A progress bar can show activity. */
  active: _react.PropTypes.bool,

  /** A progress bar can attach to and show the progress of an element (i.e. Card or Segment). */
  attached: _react.PropTypes.oneOf(Progress._meta.props.attached),

  /** Whether success state should automatically trigger when progress completes. */
  autoSuccess: _react.PropTypes.bool,

  /** A progress bar can have different colors. */
  color: _react.PropTypes.oneOf(Progress._meta.props.color),

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** A progress bar be disabled. */
  disabled: _react.PropTypes.bool,

  /** A progress bar can show a error state. */
  error: _react.PropTypes.bool,

  /** An indicating progress bar visually indicates the current level of progress of a task. */
  indicating: _react.PropTypes.bool,

  /** A progress bar can have its colors inverted. */
  inverted: _react.PropTypes.bool,

  /** Can be set to either to display progress as percent or ratio. */
  label: _lib.customPropTypes.every([_lib.customPropTypes.some([_lib.customPropTypes.demand(['percent']), _lib.customPropTypes.demand(['total', 'value'])]), _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(Progress._meta.props.label)])]),

  /** Current percent complete. */
  percent: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['total', 'value']), _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])]),

  /** A progress bar can contain a text value indicating current progress. */
  progress: _react.PropTypes.bool,

  /** Decimal point precision for calculated progress. */
  precision: _react.PropTypes.number,

  /** A progress bar can vary in size. */
  size: _react.PropTypes.oneOf(Progress._meta.props.size),

  /** A progress bar can show a success state. */
  success: _react.PropTypes.bool,

  /**
   * For use with value.
   * Together, these will calculate the percent.
   * Mutually excludes percent.
   */
  total: _lib.customPropTypes.every([_lib.customPropTypes.demand(['value']), _lib.customPropTypes.disallow(['percent']), _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])]),

  /**
   * For use with total. Together, these will calculate the percent. Mutually excludes percent.
   */
  value: _lib.customPropTypes.every([_lib.customPropTypes.demand(['total']), _lib.customPropTypes.disallow(['percent']), _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])]),

  /** A progress bar can show a warning state. */
  warning: _react.PropTypes.bool
};

exports.default = Progress;