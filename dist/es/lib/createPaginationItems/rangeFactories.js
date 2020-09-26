import _range from "lodash/range";
import _map from "lodash/map";
import { createInnerPrefix, createInnerSuffix } from './suffixFactories';
export var createSimpleRange = function createSimpleRange(start, end, pageFactory) {
  return _map(_range(start, end + 1), pageFactory);
};
export var createComplexRange = function createComplexRange(options, pageFactory) {
  var activePage = options.activePage,
      boundaryRange = options.boundaryRange,
      hideEllipsis = options.hideEllipsis,
      siblingRange = options.siblingRange,
      totalPages = options.totalPages;
  var ellipsisSize = hideEllipsis ? 0 : 1;
  var firstGroupEnd = boundaryRange;
  var firstGroup = createSimpleRange(1, firstGroupEnd, pageFactory);
  var lastGroupStart = totalPages + 1 - boundaryRange;
  var lastGroup = createSimpleRange(lastGroupStart, totalPages, pageFactory);
  var innerGroupStart = Math.min(Math.max(activePage - siblingRange, firstGroupEnd + ellipsisSize + 1), lastGroupStart - ellipsisSize - 2 * siblingRange - 1);
  var innerGroupEnd = innerGroupStart + 2 * siblingRange;
  var innerGroup = createSimpleRange(innerGroupStart, innerGroupEnd, pageFactory);
  return [].concat(firstGroup, [!hideEllipsis && createInnerPrefix(firstGroupEnd, innerGroupStart, pageFactory)], innerGroup, [!hideEllipsis && createInnerSuffix(innerGroupEnd, lastGroupStart, pageFactory)], lastGroup).filter(Boolean);
};