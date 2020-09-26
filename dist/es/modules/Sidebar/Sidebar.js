import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _invoke from "lodash/invoke";
import { EventListener, documentRef } from '@fluentui/react-component-event-listener';
import { Ref, isRefObject } from '@fluentui/react-component-ref';
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import { childrenUtils, customPropTypes, doesNodeContainClick, getUnhandledProps, getElementType, useKeyOnly } from '../../lib';
import SidebarPushable from './SidebarPushable';
import SidebarPusher from './SidebarPusher';
/**
 * A sidebar hides additional content beside a page.
 */

var Sidebar = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Sidebar, _Component);

  function Sidebar(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.ref = /*#__PURE__*/createRef();

    _this.handleAnimationStart = function () {
      var visible = _this.props.visible;
      var callback = visible ? 'onVisible' : 'onHide';
      clearTimeout(_this.animationTimer);
      _this.animationTimer = setTimeout(_this.handleAnimationEnd, Sidebar.animationDuration);

      if (_this.skipNextCallback) {
        _this.skipNextCallback = false;
        return;
      }

      _invoke(_this.props, callback, null, _this.props);
    };

    _this.handleAnimationEnd = function () {
      var visible = _this.props.visible;
      var callback = visible ? 'onShow' : 'onHidden';

      _this.setState({
        animationTick: 0
      });

      _invoke(_this.props, callback, null, _this.props);
    };

    _this.handleDocumentClick = function (e) {
      if (!doesNodeContainClick(_this.ref.current, e)) {
        _this.skipNextCallback = true;

        _invoke(_this.props, 'onHide', e, _extends({}, _this.props, {
          visible: false
        }));
      }
    };

    _this.state = {
      animationTick: 0,
      visible: props.visible
    };
    return _this;
  }

  Sidebar.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    // We use `animationTick` to understand when an animation should be scheduled
    var tickIncrement = !!props.visible === !!state.visible ? 0 : 1;
    return {
      animationTick: state.animationTick + tickIncrement,
      visible: props.visible
    };
  };

  var _proto = Sidebar.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.state.animationTick > prevState.animationTick) {
      this.handleAnimationStart();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.animationTimer);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        animation = _this$props.animation,
        className = _this$props.className,
        children = _this$props.children,
        content = _this$props.content,
        direction = _this$props.direction,
        target = _this$props.target,
        visible = _this$props.visible,
        width = _this$props.width;
    var animationTick = this.state.animationTick;
    var classes = cx('ui', animation, direction, width, useKeyOnly(animationTick > 0, 'animating'), useKeyOnly(visible, 'visible'), 'sidebar', className);
    var rest = getUnhandledProps(Sidebar, this.props);
    var ElementType = getElementType(Sidebar, this.props);
    var targetProp = isRefObject(target) ? {
      targetRef: target
    } : {
      target: target
    };
    return /*#__PURE__*/React.createElement(Ref, {
      innerRef: this.ref
    }, /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils.isNil(children) ? content : children, visible && /*#__PURE__*/React.createElement(EventListener, _extends({
      listener: this.handleDocumentClick,
      type: "click"
    }, targetProp))));
  };

  return Sidebar;
}(Component);

Sidebar.handledProps = ["animation", "as", "children", "className", "content", "direction", "onHidden", "onHide", "onShow", "onVisible", "target", "visible", "width"];
Sidebar.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Animation style. */
  animation: PropTypes.oneOf(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Direction the sidebar should appear on. */
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * Called before a sidebar begins to animate out.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onHide: PropTypes.func,

  /**
   * Called after a sidebar has finished animating out.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onHidden: PropTypes.func,

  /**
   * Called when a sidebar has finished animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onShow: PropTypes.func,

  /**
   * Called when a sidebar begins animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onVisible: PropTypes.func,

  /** A sidebar can handle clicks on the passed element. */
  target: PropTypes.oneOfType([customPropTypes.domNode, customPropTypes.refObject]),

  /** Controls whether or not the sidebar is visible on the page. */
  visible: PropTypes.bool,

  /** Sidebar width. */
  width: PropTypes.oneOf(['very thin', 'thin', 'wide', 'very wide'])
} : {};
Sidebar.defaultProps = {
  direction: 'left',
  target: documentRef,
  visible: false
};
Sidebar.animationDuration = 500;
Sidebar.autoControlledProps = ['visible'];
Sidebar.Pushable = SidebarPushable;
Sidebar.Pusher = SidebarPusher;
export default Sidebar;