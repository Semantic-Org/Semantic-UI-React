import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _values from "lodash/values";
import _get from "lodash/get";
import _has from "lodash/has";
import _forEach from "lodash/forEach";
import _mapValues from "lodash/mapValues";
import PropTypes from 'prop-types';
import React from 'react';
import { getElementType, getUnhandledProps, SUI } from '../../lib';
import { getChildMapping, mergeChildMappings } from './utils/childMapping';
import wrapChild from './utils/wrapChild';

/**
 * A Transition.Group animates children as they mount and unmount.
 */
var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      // Keeping a callback under the state is a hack to make it accessible under getDerivedStateFromProps()
      handleOnHide: function handleOnHide(nothing, childProps) {
        var reactKey = childProps.reactKey;

        _this.setState(function (state) {
          var children = _extends({}, state.children);

          delete children[reactKey];
          return {
            children: children
          };
        });
      }
    };
    return _this;
  }

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var animation = props.animation,
        duration = props.duration,
        directional = props.directional;
    var prevMapping = state.children; // A short circuit for an initial render as there will be no `prevMapping`

    if (typeof prevMapping === 'undefined') {
      return {
        children: _mapValues(getChildMapping(props.children), function (child) {
          return wrapChild(child, state.handleOnHide, {
            animation: animation,
            duration: duration,
            directional: directional
          });
        })
      };
    }

    var nextMapping = getChildMapping(props.children);
    var children = mergeChildMappings(prevMapping, nextMapping);

    _forEach(children, function (child, key) {
      var hasPrev = _has(prevMapping, key);

      var hasNext = _has(nextMapping, key);

      var prevChild = prevMapping[key];
      var isLeaving = !_get(prevChild, 'props.visible'); // Heads up!
      // An item is new (entering), it will be picked from `nextChildren`, so it should be wrapped

      if (hasNext && (!hasPrev || isLeaving)) {
        children[key] = wrapChild(child, state.handleOnHide, {
          animation: animation,
          duration: duration,
          directional: directional,
          transitionOnMount: true
        });
        return;
      } // Heads up!
      // An item is old (exiting), it will be picked from `prevChildren`, so it has been already
      // wrapped, so should be only updated


      if (!hasNext && hasPrev && !isLeaving) {
        children[key] = /*#__PURE__*/React.cloneElement(prevChild, {
          visible: false
        });
        return;
      } // Heads up!
      // An item item hasn't changed transition states, but it will be picked from `nextChildren`,
      // so we should wrap it again


      var _prevChild$props = prevChild.props,
          visible = _prevChild$props.visible,
          transitionOnMount = _prevChild$props.transitionOnMount;
      children[key] = wrapChild(child, state.handleOnHide, {
        animation: animation,
        duration: duration,
        directional: directional,
        transitionOnMount: transitionOnMount,
        visible: visible
      });
    });

    return {
      children: children
    };
  };

  var _proto = TransitionGroup.prototype;

  _proto.render = function render() {
    var children = this.state.children;
    var ElementType = getElementType(TransitionGroup, this.props);
    var rest = getUnhandledProps(TransitionGroup, this.props);
    return /*#__PURE__*/React.createElement(ElementType, rest, _values(children));
  };

  return TransitionGroup;
}(React.Component);

TransitionGroup.handledProps = ["animation", "as", "children", "directional", "duration"];
export { TransitionGroup as default };
TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Named animation event to used. Must be defined in CSS. */
  animation: PropTypes.oneOfType([PropTypes.oneOf(SUI.TRANSITIONS), PropTypes.string]),

  /** Primary content. */
  children: PropTypes.node,

  /** Whether it is directional animation event or not. Use it only for custom transitions. */
  directional: PropTypes.bool,

  /** Duration of the CSS transition animation in milliseconds. */
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    hide: PropTypes.number.isRequired,
    show: PropTypes.number.isRequired
  }), PropTypes.string])
} : {};
TransitionGroup.defaultProps = {
  as: React.Fragment,
  animation: 'fade',
  duration: 500
};