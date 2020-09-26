import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _includes from "lodash/includes";
import _isNil from "lodash/isNil";
import _get from "lodash/get";
import _invoke from "lodash/invoke";

var _TRANSITION_CALLBACK_, _TRANSITION_STYLE_TYP;

import cx from 'clsx';
import PropTypes from 'prop-types';
import { cloneElement, Component } from 'react';
import { normalizeTransitionDuration, SUI, useKeyOnly } from '../../lib';
import TransitionGroup from './TransitionGroup';
import { computeStatuses, TRANSITION_STATUS_ENTERED, TRANSITION_STATUS_ENTERING, TRANSITION_STATUS_EXITED, TRANSITION_STATUS_EXITING, TRANSITION_STATUS_INITIAL, TRANSITION_STATUS_UNMOUNTED } from './utils/computeStatuses';
var TRANSITION_CALLBACK_TYPE = (_TRANSITION_CALLBACK_ = {}, _TRANSITION_CALLBACK_[TRANSITION_STATUS_ENTERED] = 'show', _TRANSITION_CALLBACK_[TRANSITION_STATUS_EXITED] = 'hide', _TRANSITION_CALLBACK_);
var TRANSITION_STYLE_TYPE = (_TRANSITION_STYLE_TYP = {}, _TRANSITION_STYLE_TYP[TRANSITION_STATUS_ENTERING] = 'show', _TRANSITION_STYLE_TYP[TRANSITION_STATUS_EXITING] = 'hide', _TRANSITION_STYLE_TYP);
/**
 * A transition is an animation usually used to move content in or out of view.
 */

var Transition = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Transition, _Component);

  function Transition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      status: TRANSITION_STATUS_INITIAL
    };

    _this.handleStart = function (nextStatus) {
      var duration = _this.props.duration;
      var durationType = TRANSITION_CALLBACK_TYPE[nextStatus];
      var durationValue = normalizeTransitionDuration(duration, durationType);
      _this.timeoutId = setTimeout(function () {
        return _this.setState({
          status: nextStatus
        });
      }, durationValue);
    };

    _this.updateStatus = function (prevState) {
      if (prevState.status !== _this.state.status) {
        // Timeout should be cleared in any case as previous can lead set to unexpected `nextStatus`
        clearTimeout(_this.timeoutId);

        if (_this.state.nextStatus) {
          _this.handleStart(_this.state.nextStatus);
        }
      }

      if (!prevState.animating && _this.state.animating) {
        _invoke(_this.props, 'onStart', null, _extends({}, _this.props, {
          status: _this.state.status
        }));
      }

      if (prevState.animating && !_this.state.animating) {
        var callback = _this.state.status === TRANSITION_STATUS_ENTERED ? 'onShow' : 'onHide';

        _invoke(_this.props, 'onComplete', null, _extends({}, _this.props, {
          status: _this.state.status
        }));

        _invoke(_this.props, callback, null, _extends({}, _this.props, {
          status: _this.state.status
        }));
      }
    };

    _this.computeClasses = function () {
      var _this$props = _this.props,
          animation = _this$props.animation,
          directional = _this$props.directional,
          children = _this$props.children;
      var _this$state = _this.state,
          animating = _this$state.animating,
          status = _this$state.status;

      var childClasses = _get(children, 'props.className');

      var isDirectional = _isNil(directional) ? _includes(SUI.DIRECTIONAL_TRANSITIONS, animation) : directional;

      if (isDirectional) {
        return cx(animation, childClasses, useKeyOnly(animating, 'animating'), useKeyOnly(status === TRANSITION_STATUS_ENTERING, 'in'), useKeyOnly(status === TRANSITION_STATUS_EXITING, 'out'), useKeyOnly(status === TRANSITION_STATUS_EXITED, 'hidden'), useKeyOnly(status !== TRANSITION_STATUS_EXITED, 'visible'), 'transition');
      }

      return cx(animation, childClasses, useKeyOnly(animating, 'animating transition'));
    };

    _this.computeStyle = function () {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          duration = _this$props2.duration;
      var status = _this.state.status;

      var childStyle = _get(children, 'props.style');

      var type = TRANSITION_STYLE_TYPE[status];
      var animationDuration = type && normalizeTransitionDuration(duration, type) + "ms";
      return _extends({}, childStyle, {
        animationDuration: animationDuration
      });
    };

    return _this;
  }

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------
  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var derivedState = computeStatuses({
      mountOnShow: props.mountOnShow,
      status: state.status,
      transitionOnMount: props.transitionOnMount,
      visible: props.visible,
      unmountOnHide: props.unmountOnHide
    });
    return derivedState;
  };

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus({});
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    this.updateStatus(prevState);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeoutId);
  } // ----------------------------------------
  // Callback handling
  // ----------------------------------------
  ;

  // ----------------------------------------
  // Render
  // ----------------------------------------
  _proto.render = function render() {
    var children = this.props.children;
    var status = this.state.status;

    if (status === TRANSITION_STATUS_UNMOUNTED) {
      return null;
    }

    return /*#__PURE__*/cloneElement(children, {
      className: this.computeClasses(),
      style: this.computeStyle()
    });
  };

  return Transition;
}(Component);

Transition.INITIAL = TRANSITION_STATUS_INITIAL;
Transition.ENTERED = TRANSITION_STATUS_ENTERED;
Transition.ENTERING = TRANSITION_STATUS_ENTERING;
Transition.EXITED = TRANSITION_STATUS_EXITED;
Transition.EXITING = TRANSITION_STATUS_EXITING;
Transition.UNMOUNTED = TRANSITION_STATUS_UNMOUNTED;
Transition.Group = TransitionGroup;
Transition.handledProps = ["animation", "children", "directional", "duration", "mountOnShow", "onComplete", "onHide", "onShow", "onStart", "reactKey", "transitionOnMount", "unmountOnHide", "visible"];
export { Transition as default };
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Named animation event to used. Must be defined in CSS. */
  animation: PropTypes.oneOfType([PropTypes.oneOf(SUI.TRANSITIONS), PropTypes.string]),

  /** Primary content. */
  children: PropTypes.element.isRequired,

  /** Whether it is directional animation event or not. Use it only for custom transitions. */
  directional: PropTypes.bool,

  /** Duration of the CSS transition animation in milliseconds. */
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    hide: PropTypes.number,
    show: PropTypes.number
  }), PropTypes.string]),

  /** Show the component; triggers the enter or exit animation. */
  visible: PropTypes.bool,

  /** Wait until the first "enter" transition to mount the component (add it to the DOM). */
  mountOnShow: PropTypes.bool,

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onComplete: PropTypes.func,

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onHide: PropTypes.func,

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onShow: PropTypes.func,

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onStart: PropTypes.func,

  /** React's key of the element. */
  reactKey: PropTypes.string,

  /** Run the enter animation when the component mounts, if it is initially shown. */
  transitionOnMount: PropTypes.bool,

  /** Unmount the component (remove it from the DOM) when it is not shown. */
  unmountOnHide: PropTypes.bool
} : {};
Transition.defaultProps = {
  animation: 'fade',
  duration: 500,
  visible: true,
  mountOnShow: true,
  transitionOnMount: false,
  unmountOnHide: false
};