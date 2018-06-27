import { rem } from '../../lib'

export default ({ active }) => ({
  root: {
    color: 'rgba(0, 0, 0, .87)',
    lineHeight: 1,
    position: 'relative',
    verticalAlign: 'middle',
    padding: `${rem(1.4)} ${rem(1.8)}`,
    cursor: 'pointer',
    display: 'block',

    ':hover': {
      background: 'rgba(0, 0, 0, .03)',
      color: 'rgba(0, 0, 0, .95)',
    },

    ...(active && {
      background: 'rgba(0, 0, 0, .05)',
      color: 'rgba(0, 0, 0, .95)',
      ':hover': {
        background: 'rgba(0, 0, 0, .05)',
        color: 'rgba(0, 0, 0, .95)',
      },
    }),

    ':before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      height: '100%',
      width: '1px',
      background: 'rgba(34, 36, 38, .1)',
    },
  },
  anchor: {
    color: 'inherit',
    ':hover': {
      color: 'inherit',
    },
  },
})
