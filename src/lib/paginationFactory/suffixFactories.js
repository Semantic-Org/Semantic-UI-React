import { createEllipsis } from './itemFactories'

export const createInnerPrefix = (firstGroupEnd, innerGroupStart, pageFactory) => {
  const prefixPage = innerGroupStart - 1
  const showEllipsis = prefixPage !== (firstGroupEnd + 1)
  const prefixFactory = showEllipsis ? createEllipsis : pageFactory

  return prefixFactory(prefixPage)
}

export const createInnerSuffix = (innerGroupEnd, lastGroupStart, pageFactory) => {
  const suffixPage = innerGroupEnd + 1
  const showEllipsis = suffixPage !== (lastGroupStart - 1)
  const suffixFactory = showEllipsis ? createEllipsis : pageFactory

  return suffixFactory(suffixPage)
}
