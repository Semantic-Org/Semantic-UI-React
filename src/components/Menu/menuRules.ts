import { pxToRem } from '../../lib'

export default () => ({
  root: {
    display: 'flex',
    border: '1px solid rgba(34, 36, 38, .15)',
    borderRadius: pxToRem(4),
    minHeight: pxToRem(28),
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
})
