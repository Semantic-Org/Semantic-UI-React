export const createEllipsis = page => ({
  active: false,
  type: 'ELLIPSIS',
  value: page,
})

export const createFirstPage = current => ({
  active: false,
  type: 'FIRST_PAGE',
  value: 1,
})

export const createPreviousPage = current => ({
  active: false,
  type: 'PREVIOUS_PAGE',
  value: Math.max(1, current - 1),
})

export const createPageFactory = current => page => ({
  active: current === page,
  type: 'PAGE',
  value: page,
})

export const createNextPage = (current, total) => ({
  active: false,
  type: 'NEXT_PAGE',
  value: Math.min(current + 1, total),
})

export const createLastPage = total => ({
  active: false,
  type: 'LAST_PAGE_',
  value: total,
})
