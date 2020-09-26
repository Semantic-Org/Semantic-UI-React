import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createShorthandFactory, getUnhandledProps, isBrowser } from '../../lib';
import Portal from '../../addons/Portal';
import DimmerDimmable from './DimmerDimmable';
import DimmerInner from './DimmerInner';
/**
 * A dimmer hides distractions to focus attention on particular content.
 */

var Dimmer = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Dimmer, _Component);

  function Dimmer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handlePortalMount = function () {
      if (!isBrowser()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.add('dimmed');
      document.body.classList.add('dimmable');
    };

    _this.handlePortalUnmount = function () {
      if (!isBrowser()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.remove('dimmed');
      document.body.classList.remove('dimmable');
    };

    return _this;
  }

  var _proto = Dimmer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        page = _this$props.page;
    var rest = getUnhandledProps(Dimmer, this.props);

    if (page) {
      return /*#__PURE__*/React.createElement(Portal, {
        closeOnEscape: false,
        closeOnDocumentClick: false,
        onMount: this.handlePortalMount,
        onUnmount: this.handlePortalUnmount,
        open: active,
        openOnTriggerClick: false
      }, /*#__PURE__*/React.createElement(DimmerInner, _extends({}, rest, {
        active: active,
        page: page
      })));
    }

    return /*#__PURE__*/React.createElement(DimmerInner, _extends({}, rest, {
      active: active,
      page: page
    }));
  };

  return Dimmer;
}(Component);

Dimmer.handledProps = ["active", "page"];
export { Dimmer as default };
Dimmer.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An active dimmer will dim its parent container. */
  active: PropTypes.bool,

  /** A dimmer can be formatted to be fixed to the page. */
  page: PropTypes.bool
} : {};
Dimmer.Dimmable = DimmerDimmable;
Dimmer.Inner = DimmerInner;
Dimmer.create = createShorthandFactory(Dimmer, function (value) {
  return {
    content: value
  };
});