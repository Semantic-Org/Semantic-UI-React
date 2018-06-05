import { rem } from 'src/lib'
import { debugRoot } from '../../styles/debugRules'

// ----------------------------------------
// Root
// ----------------------------------------

const listItemRules = (props) => {
  const { debugLayout, important, selection, variables } = props

  return {
    root: {
      ...(debugLayout && debugRoot()),
      ...(important && {
        fontWeight: 'bold',
      }),
      // TODO: remove 0 auto helper
      gridTemplateRows: variables.itemHeight === '0' ? undefined : variables.itemHeight,
      paddingLeft: variables.itemPaddingLeft,
      paddingRight: variables.itemPaddingRight,

      ...(selection && {
        position: 'relative',

        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // TODO: pull from item vars from site vars
          background: 'rgba(98, 100, 167, .8)',
          opacity: 0,
          zIndex: -1,
        },

        ':hover': {
          '&::before': {
            opacity: 1,
          },
          // TODO: implement concept of 'invert' for white colors
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
          left: rem(0.8),
          width: rem(0.2),
          height: rem(0.2),
          background: '#000',
        },
      }),
    },

    header: {
      lineHeight: variables.headerLineHeight,
    },

    headerMedia: {
      color: important ? 'inherit' : variables.headerMediaColor,
      fontSize: variables.headerMediaFontSize,
      lineHeight: variables.headerMediaLineHeight,
    },

    content: {
      color: important ? 'inherit' : variables.contentColor,
      fontSize: variables.contentFontSize,
      lineHeight: variables.contentLineHeight,
    },
    contentMedia: {},
  }
}

export default listItemRules
