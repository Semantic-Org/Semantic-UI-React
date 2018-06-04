import { debugRoot } from '../../styles/debugRules'

export default ({ as, debugLayout }) => ({
  root: {
    ...(debugLayout && debugRoot()),
    ...((as === 'ul' || as === 'ol') && {
      listStyle: 'none',
      display: 'block',
      padding: 0,
      margin: 0,
    }),
  },
})
