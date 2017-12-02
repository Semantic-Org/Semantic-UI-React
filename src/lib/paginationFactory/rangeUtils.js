export const isSimpleRange = (boundaryRange, siblingRange, showEllipsis, total) => {
  const boundaryRangeSize = 2 * boundaryRange
  const ellipsisSize = (2 * Number(showEllipsis))
  const siblingRangeSize = 2 * siblingRange

  return 1 + ellipsisSize + siblingRangeSize + boundaryRangeSize >= total
}
