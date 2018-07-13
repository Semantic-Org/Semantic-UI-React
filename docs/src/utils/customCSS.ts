import { CSSProperties } from 'react'

export const truncateStyle: CSSProperties = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

export const overflowWrap: CSSProperties = {
  overflow: 'overlay',
  overflowWrap: 'break-word',
}
