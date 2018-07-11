import { pxToRem } from '../../lib'

export default {
  root: ({ props: { active, pointing, type } }) => ({
    color: 'rgba(0, 0, 0, .87)',
    lineHeight: 1,
    position: 'relative',
    verticalAlign: 'middle',
    padding: `${pxToRem(14)} ${pxToRem(18)}`,
    cursor: 'pointer',
    display: 'block',
    ...(type === 'secondary' && {
      ...(!pointing && {
        margin: `0 ${pxToRem(8)} 0 0`,
        borderRadius: pxToRem(5),
      }),
      ...(pointing && {
        margin: '0',
        background: 'transparent',
        borderColor: '#1b1c1d',
        boxShadow: 'none',
        color: 'rgba(0,0,0,.95)',
      }),
    }),

    ...(type === 'primary ' && {
      ':before': {
        position: 'absolute',
        content: '""',
        top: 0,
        right: 0,
        height: '100%',
        width: '1px',
        background: 'rgba(34, 36, 38, .1)',
      },
    }),

    ':hover': {
      // all menus should have gray background on hover except the secondary pointing menu
      ...(!(pointing && type === 'secondary') && {
        background: 'rgba(0, 0, 0, .03)',
      }),
      color: 'rgba(0, 0, 0, .95)',
    },

    ...(active && {
      ...(!(pointing && type === 'secondary') && {
        background: 'rgba(0, 0, 0, .05)',
      }),
      color: 'rgba(0, 0, 0, .95)',
      ':hover': {
        ...(!(pointing && type === 'secondary') && {
          background: 'rgba(0, 0, 0, .05)',
        }),
        color: 'rgba(0, 0, 0, .95)',
      },
      ...(type === 'primary' && {
        ...(pointing && {
          ':after': {
            visibility: 'visible',
            background: '#f2f2f2',
            position: 'absolute',
            content: '""',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
            margin: '.5px 0 0',
            width: pxToRem(10),
            height: pxToRem(10),
            border: 'none',
            borderBottom: '1px solid #d4d4d5',
            borderRight: '1px solid #d4d4d5',
            zIndex: '2',
            transition: 'background .1s ease',
          },
        }),
      }),
      ...(type === 'secondary' &&
        pointing && {
          fontWeight: '700',
          borderColor: '#1b1c1d',
          borderBottom: 'solid 2px',
          marginBottom: '-2px',
          transition: 'color .1s ease',
        }),
    }),
  }),

  anchor: () => ({
    color: 'inherit',
    ':hover': {
      color: 'inherit',
    },
  }),
}
