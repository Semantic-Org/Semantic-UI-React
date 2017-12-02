import {
  createFirstPage,
  createLastPage,
  createNextPage,
  createPageFactory,
  createPreviousPage,
} from './itemFactories'
import { createRange, createSimpleRange } from './rangeFactories'
import { isSimpleRange } from './rangeUtils'

/**
 * @param {object} options
 * @param {number} options.current
 * @param {number} options.total
 * @param {number} [options.boundaryRange=1]
 * @param {number} [options.siblingRange=1]
 * @param {bool} [options.showEllipsis=true]
 * @param {bool} [options.showPreviousAndNext=true]
 * @param {bool} [options.showFirstAndLast=false]
 */
const paginationFactory = (options) => {
  const {
    current,
    total,
    boundaryRange = 1,
    siblingRange = 1,
    showEllipsis = true,
    showPreviousAndNext = true,
    showFirstAndLast = false,
  } = options

  const pageFactory = createPageFactory(current)
  const innerRange = isSimpleRange(boundaryRange, siblingRange, showEllipsis, total)
    ? createSimpleRange(1, total, pageFactory)
    : createRange({ boundaryRange, current, pageFactory, showEllipsis, siblingRange, total })

  return [
    showFirstAndLast && createFirstPage(current),
    showPreviousAndNext && createPreviousPage(current),
    ...innerRange,
    showPreviousAndNext && createNextPage(current, total),
    showFirstAndLast && createLastPage(total),
  ].filter(Boolean)
}

export default paginationFactory
