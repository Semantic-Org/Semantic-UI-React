import _ from 'lodash'
import { createInnerPrefix, createInnerSuffix } from './suffixFactories'

export const createSimpleRange = (start, end, pageFactory) => _.map(_.range(start, end), pageFactory)

export const createRange = (options) => {
  const { boundaryRange, current, pageFactory, showEllipsis, siblingRange, total } = options

  const firstGroupEnd = boundaryRange
  const firstGroup = createSimpleRange(1, firstGroupEnd, pageFactory)

  const lastGroupStart = total + 1 - boundaryRange
  const lastGroup = createSimpleRange(lastGroupStart, total, pageFactory)

  const innerGroupStart = Math.min(
    Math.max(current - siblingRange, firstGroupEnd + Number(showEllipsis) + 1),
    lastGroupStart - Number(showEllipsis) - 2 * siblingRange - 1,
  )
  const innerGroupEnd = innerGroupStart + 2 * siblingRange
  const innerGroup = createSimpleRange(innerGroupStart, innerGroupEnd, pageFactory)

  return [
    ...firstGroup,
    showEllipsis && createInnerPrefix(firstGroupEnd, innerGroupStart, pageFactory),
    ...innerGroup,
    showEllipsis && createInnerSuffix(innerGroupEnd, lastGroupStart, pageFactory),
    ...lastGroup,
  ].filter(Boolean)
}
