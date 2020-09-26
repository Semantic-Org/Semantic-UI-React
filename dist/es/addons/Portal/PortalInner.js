import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _invoke from "lodash/invoke";
import { handleRef, Ref } from '@fluentui/react-component-ref';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { customPropTypes, isBrowser } from '../../lib';

/**
 * An inner component that allows you to render children outside their parent.
 */
var PortalInner = /*#__PURE__*/function (_Component) {
  _inheritsLoose(PortalInner, _Component);

  function PortalInner() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleRef = function (c) {
      handleRef(_this.props.innerRef, c);
    };

    return _this;
  }

  var _proto = PortalInner.prototype;

  _proto.componentDidMount = function componentDidMount() {
    _invoke(this.props, 'onMount', null, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _invoke(this.props, 'onUnmount', null, this.props);
  };

  _proto.render = function render() {
    if (!isBrowser()) return null;
    var _this$props = this.props,
        children = _this$props.children,
        _this$props$mountNode = _this$props.mountNode,
        mountNode = _this$props$mountNode === void 0 ? document.body : _this$props$mountNode;
    return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(Ref, {
      innerRef: this.handleRef
    }, children), mountNode);
  };

  return PortalInner;
}(Component);

PortalInner.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
PortalInner.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: PropTypes.node.isRequired,

  /** Called with a ref to the inner node. */
  innerRef: customPropTypes.ref,

  /** The node where the portal should mount. */
  mountNode: PropTypes.any,

  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: PropTypes.func,

  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: PropTypes.func
} : {};
export default PortalInner;