import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _invoke from "lodash/invoke";
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { eventStack, getElementType, getUnhandledProps, isBrowser } from '../../lib';
import isVisible from './lib/isVisible';
/**
 * Responsive can control visibility of content.
 *
 * @deprecated This component is deprecated and will be removed in next major release.
 */

var Responsive = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Responsive, _Component);

  function Responsive() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      visible: true
    };

    _this.handleResize = function (e) {
      if (_this.ticking) return;
      _this.ticking = true;
      _this.frameId = requestAnimationFrame(function () {
        return _this.handleUpdate(e);
      });
    };

    _this.handleUpdate = function (e) {
      _this.ticking = false;
      var visible = _this.state.visible;

      var width = _invoke(_this.props, 'getWidth');

      var nextVisible = isVisible(width, _this.props);
      if (visible !== nextVisible) _this.setState({
        visible: nextVisible
      });

      _invoke(_this.props, 'onUpdate', e, _extends({}, _this.props, {
        width: width
      }));
    };

    return _this;
  }

  Responsive.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    var width = _invoke(props, 'getWidth');

    var visible = isVisible(width, props);
    return {
      visible: visible
    };
  };

  var _proto = Responsive.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var fireOnMount = this.props.fireOnMount;

    if (process.env.NODE_ENV !== 'production') {
      if (!Responsive.__deprecationWarningWasRaised) {
        Responsive.__deprecationWarningWasRaised = true; // eslint-disable-next-line no-console

        console.warn('Warning: "Responsive" component from Semantic UI React is deprecated and will be removed in the next major release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4008');
      }
    }

    eventStack.sub('resize', this.handleResize, {
      target: 'window'
    });
    if (fireOnMount) this.handleUpdate();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    eventStack.unsub('resize', this.handleResize, {
      target: 'window'
    });
    cancelAnimationFrame(this.frameId);
  } // ----------------------------------------
  // Event handlers
  // ----------------------------------------
  ;

  // ----------------------------------------
  // Render
  // ----------------------------------------
  _proto.render = function render() {
    var children = this.props.children;
    var visible = this.state.visible;
    var ElementType = getElementType(Responsive, this.props);
    var rest = getUnhandledProps(Responsive, this.props);
    if (visible) return /*#__PURE__*/React.createElement(ElementType, rest, children);
    return null;
  };

  return Responsive;
}(Component);

Responsive.handledProps = ["as", "children", "fireOnMount", "getWidth", "maxWidth", "minWidth", "onUpdate"];
export { Responsive as default };
Responsive.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Fires callbacks immediately after mount. */
  fireOnMount: PropTypes.bool,

  /**
   * Called to get width of screen. Defaults to using `window.innerWidth` when in a browser;
   * otherwise, assumes a width of 0.
   */
  getWidth: PropTypes.func,

  /** The maximum width at which content will be displayed. */
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The minimum width at which content will be displayed. */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Called on update.
   *
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onUpdate: PropTypes.func
} : {};
Responsive.defaultProps = {
  getWidth: function getWidth() {
    return isBrowser() ? window.innerWidth : 0;
  }
};
Responsive.onlyMobile = {
  minWidth: 320,
  maxWidth: 767
};
Responsive.onlyTablet = {
  minWidth: 768,
  maxWidth: 991
};
Responsive.onlyComputer = {
  minWidth: 992
};
Responsive.onlyLargeScreen = {
  minWidth: 1200,
  maxWidth: 1919
};
Responsive.onlyWidescreen = {
  minWidth: 1920
};

if (process.env.NODE_ENV !== 'production') {
  Responsive.__deprecationWarningWasRaised = false;
}