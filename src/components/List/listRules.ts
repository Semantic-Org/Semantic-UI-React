import { debugRoot } from '../../styles/debugRules'

// ----------------------------------------
// Root
// ----------------------------------------

const listRules = {
  root: ({ props }) => {
    const { as, debugLayout } = props
    return {
      ...(debugLayout && debugRoot()),
      ...((as === 'ul' || as === 'ol') && {
        listStyle: 'none',
        display: 'block',
        padding: 0,
        margin: 0,
      }),
    }
  },
}

export default listRules
