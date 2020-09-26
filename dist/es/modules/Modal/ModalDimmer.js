import _extends from "@babel/runtime/helpers/esm/extends";
import { Ref } from '@fluentui/react-component-ref';
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { childrenUtils, createShorthandFactory, customPropTypes, getElementType, getUnhandledProps, useClassNamesOnNode, useKeyOnly } from '../../lib';
/**
 * A modal has a dimmer.
 */

function ModalDimmer(props) {
  var blurring = props.blurring,
      children = props.children,
      className = props.className,
      centered = props.centered,
      content = props.content,
      inverted = props.inverted,
      mountNode = props.mountNode,
      scrolling = props.scrolling;
  var ref = React.useRef();
  var classes = cx('ui', useKeyOnly(inverted, 'inverted'), useKeyOnly(!centered, 'top aligned'), 'page modals dimmer transition visible active', className);
  var bodyClasses = cx('dimmable dimmed', useKeyOnly(blurring, 'blurring'), useKeyOnly(scrolling, 'scrolling'));
  var rest = getUnhandledProps(ModalDimmer, props);
  var ElementType = getElementType(ModalDimmer, props);
  useClassNamesOnNode(mountNode, bodyClasses);
  React.useEffect(function () {
    if (ref.current && ref.current.style) {
      ref.current.style.setProperty('display', 'flex', 'important');
    }
  }, []);
  return /*#__PURE__*/React.createElement(Ref, {
    innerRef: ref
  }, /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children));
}

ModalDimmer.handledProps = ["as", "blurring", "centered", "children", "className", "content", "inverted", "mountNode", "scrolling"];
ModalDimmer.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A dimmer can be blurred. */
  blurring: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A dimmer can center its contents in the viewport. */
  centered: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A dimmer can be inverted. */
  inverted: PropTypes.bool,

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: PropTypes.any,

  /** A dimmer can make body scrollable. */
  scrolling: PropTypes.bool
} : {};
ModalDimmer.create = createShorthandFactory(ModalDimmer, function (content) {
  return {
    content: content
  };
});
export default ModalDimmer;