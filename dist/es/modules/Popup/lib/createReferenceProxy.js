import _createClass from "@babel/runtime/helpers/esm/createClass";
import _memoize from "lodash/memoize";
import _invoke from "lodash/invoke";
import { isRefObject } from '@fluentui/react-component-ref';

var ReferenceProxy = /*#__PURE__*/function () {
  function ReferenceProxy(refObject) {
    this.ref = refObject;
  }

  var _proto = ReferenceProxy.prototype;

  _proto.getBoundingClientRect = function getBoundingClientRect() {
    return _invoke(this.ref.current, 'getBoundingClientRect') || {};
  };

  _createClass(ReferenceProxy, [{
    key: "clientWidth",
    get: function get() {
      return this.getBoundingClientRect().width;
    }
  }, {
    key: "clientHeight",
    get: function get() {
      return this.getBoundingClientRect().height;
    }
  }, {
    key: "parentNode",
    get: function get() {
      return this.ref.current ? this.ref.current.parentNode : undefined;
    }
  }]);

  return ReferenceProxy;
}();
/**
 * Popper.js does not support ref objects from `createRef()` as referenceElement. If we will pass
 * directly `ref`, `ref.current` will be `null` at the render process. We use memoize to keep the
 * same reference between renders.
 *
 * @see https://popper.js.org/popper-documentation.html#referenceObject
 */


var createReferenceProxy = _memoize(function (reference) {
  return new ReferenceProxy(isRefObject(reference) ? reference : {
    current: reference
  });
});

export default createReferenceProxy;