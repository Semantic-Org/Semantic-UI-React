import { pxToRem } from '../../lib'
import { debugRoot } from '../../styles/debugRules'

const listItemRules = {
  root: ({ props, variables }) => {
    const { debugLayout, important, selection } = props
    return {
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
    }
  },

  media: ({ props }) => {
    const { important } = props
    return {
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
    }
  },

  header: ({ props, variables }) => ({
    lineHeight: variables.headerLineHeight,
  }),

  headerMedia: ({ props, variables }) => ({
    color: variables.headerMediaColor,
    fontSize: variables.headerMediaFontSize,
    lineHeight: variables.headerMediaLineHeight,
  }),

  content: ({ props, variables }) => ({
    color: variables.contentColor,
    fontSize: variables.contentFontSize,
    lineHeight: variables.contentLineHeight,
  }),
  contentMedia: () => ({}),
}

export default listItemRules
