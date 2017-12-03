import _ from 'lodash'
import { createInnerPrefix, createInnerSuffix } from './suffixFactories'

export const createSimpleRange = (start, end, pageFactory) => _.map(_.range(start, end + 1), pageFactory)

export const createComplexRange = (options, pageFactory) => {
  const { activePage, boundaryRange, showEllipsis, siblingRange, totalPages } = options

  const firstGroupEnd = boundaryRange
  const firstGroup = createSimpleRange(1, firstGroupEnd, pageFactory)

  const lastGroupStart = (totalPages + 1) - boundaryRange
  const lastGroup = createSimpleRange(lastGroupStart, totalPages, pageFactory)

  const innerGroupStart = Math.min(
    Math.max(activePage - siblingRange, firstGroupEnd + (+showEllipsis + 1)),
    lastGroupStart - +showEllipsis - (2 * siblingRange) - 1,
  )
  const innerGroupEnd = innerGroupStart + (2 * siblingRange)
  const innerGroup = createSimpleRange(innerGroupStart, innerGroupEnd, pageFactory)

  return [
    ...firstGroup,
    showEllipsis && createInnerPrefix(firstGroupEnd, innerGroupStart, pageFactory),
    ...innerGroup,
    showEllipsis && createInnerSuffix(innerGroupEnd, lastGroupStart, pageFactory),
    ...lastGroup,
  ].filter(Boolean)
}
