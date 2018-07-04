import { pxToRem } from '../../lib'
import { debugRoot } from '../../styles/debugRules'

const listItemRules = props => {
  const { debugLayout, important, selection, variables } = props

  return {
    root: {
      ...(debugLayout && debugRoot()),
      gridTemplateRows: `minmax(${variables.itemHeight}, max-content)`,
      paddingLeft: variables.itemPaddingLeft,
      paddingRight: variables.itemPaddingRight,

      ...(important && {
        fontWeight: 'bold',
      }),

      ...(selection && {
        position: 'relative',

        ':hover': {
          background: 'rgba(98, 100, 167, .8)',
          color: '#fff',
          cursor: 'pointer',
        },
      }),
    },

    media: {
      ...(important && {
        '::before': {
          content: '""',
          position: 'absolute',
          left: pxToRem(8),
          width: pxToRem(2),
          height: pxToRem(2),
          background: '#000',
        },
      }),
    },

    header: {
      lineHeight: variables.headerLineHeight,
    },

    headerMedia: {
      color: variables.headerMediaColor,
      fontSize: variables.headerMediaFontSize,
      lineHeight: variables.headerMediaLineHeight,
    },

    content: {
      color: variables.contentColor,
      fontSize: variables.contentFontSize,
      lineHeight: variables.contentLineHeight,
    },
    contentMedia: {},
  }
}

export default listItemRules
