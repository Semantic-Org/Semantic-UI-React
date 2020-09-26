import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _invoke from "lodash/invoke";
import _isUndefined from "lodash/isUndefined";
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Portal from '../Portal';
import Transition from '../../modules/Transition';
import { TRANSITION_STATUS_ENTERING } from '../../modules/Transition/utils/computeStatuses';
import { getUnhandledProps } from '../../lib';

/**
 * A sugar for `Portal` and `Transition`.
 * @see Portal
 * @see Transition
 */
var TransitionablePortal = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TransitionablePortal, _Component);

  function TransitionablePortal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {};

    _this.handlePortalClose = function () {
      _this.setState({
        portalOpen: -1
      });
    };

    _this.handlePortalOpen = function () {
      _this.setState({
        portalOpen: true
      });
    };

    _this.handleTransitionHide = function (nothing, data) {
      var portalOpen = _this.state.portalOpen;

      _this.setState({
        transitionVisible: false
      });

      _invoke(_this.props, 'onClose', null, _extends({}, data, {
        portalOpen: false,
        transitionVisible: false
      }));

      _invoke(_this.props, 'onHide', null, _extends({}, data, {
        portalOpen: portalOpen,
        transitionVisible: false
      }));
    };

    _this.handleTransitionStart = function (nothing, data) {
      var portalOpen = _this.state.portalOpen;
      var status = data.status;
      var transitionVisible = status === TRANSITION_STATUS_ENTERING;

      _invoke(_this.props, 'onStart', null, _extends({}, data, {
        portalOpen: portalOpen,
        transitionVisible: transitionVisible
      })); // Heads up! TransitionablePortal fires onOpen callback on the start of transition animation


      if (!transitionVisible) return;

      _this.setState({
        transitionVisible: transitionVisible
      });

      _invoke(_this.props, 'onOpen', null, _extends({}, data, {
        transitionVisible: transitionVisible,
        portalOpen: true
      }));
    };

    return _this;
  }

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------
  TransitionablePortal.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    // This is definitely a hack :(
    //
    // It's coupled with handlePortalClose() for force set the state of `portalOpen` omitting
    // props.open. It's related to implementation of the component itself as `onClose()` will be
    // called after a transition will end.
    // https://github.com/Semantic-Org/Semantic-UI-React/issues/2382
    if (state.portalOpen === -1) {
      return {
        portalOpen: false
      };
    }

    if (_isUndefined(props.open)) {
      return null;
    }

    return {
      portalOpen: props.open
    };
  } // ----------------------------------------
  // Callback handling
  // ----------------------------------------
  ;

  var _proto = TransitionablePortal.prototype;

  // ----------------------------------------
  // Render
  // ----------------------------------------
  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        transition = _this$props.transition;
    var _this$state = this.state,
        portalOpen = _this$state.portalOpen,
        transitionVisible = _this$state.transitionVisible;
    var open = portalOpen || transitionVisible;
    var rest = getUnhandledProps(TransitionablePortal, this.props);
    return /*#__PURE__*/React.createElement(Portal, _extends({}, rest, {
      open: open,
      onOpen: this.handlePortalOpen,
      onClose: this.handlePortalClose
    }), /*#__PURE__*/React.createElement(Transition, _extends({}, transition, {
      transitionOnMount: true,
      onStart: this.handleTransitionStart,
      onHide: this.handleTransitionHide,
      visible: portalOpen
    }), children));
  };

  return TransitionablePortal;
}(Component);

TransitionablePortal.handledProps = ["children", "onClose", "onHide", "onOpen", "onStart", "open", "transition"];
export { TransitionablePortal as default };
TransitionablePortal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: PropTypes.node.isRequired,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onClose: PropTypes.func,

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onHide: PropTypes.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onOpen: PropTypes.func,

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onStart: PropTypes.func,

  /** Controls whether or not the portal is displayed. */
  open: PropTypes.bool,

  /** Transition props. */
  transition: PropTypes.object
} : {};
TransitionablePortal.defaultProps = {
  transition: {
    animation: 'scale',
    duration: 400
  }
};