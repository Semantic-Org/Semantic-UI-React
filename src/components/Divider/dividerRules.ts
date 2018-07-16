import { childrenExist, pxToRem } from '../../lib'

const dividerBorderRule = (size, color) => ({
  height: `${size + 1}px`,
  background: color,
})

const beforeAndAfter = (size, type, variables) => ({
  content: '""',
  flex: 1,
  ...dividerBorderRule(size, variables.defaultBackgroundColor), // the default border rule
  ...(type === 'primary' && {
    ...dividerBorderRule(size, variables.typePrimaryBackgroundColor),
  }),
  ...(type === 'secondary' && {
    ...dividerBorderRule(size, variables.typeSecondaryBackgroundColor),
  }),
})

export default {
  root: ({ props, variables }) => {
    const { children, size, type, important, content } = props
    return {
      marginTop: pxToRem(5 + size * 7.5),
      marginBottom: pxToRem(5 + size * 7.5),
      fontWeight: 400,
      ...(important && {
        fontWeight: 700,
      }),
      ...(childrenExist(children) || content
        ? {
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            lineHeight: 1.25,
            fontSize: pxToRem(12 + size),
            ':before': {
              ...beforeAndAfter(size, type, variables),
              marginRight: pxToRem(22 + size * 2),
            },
            ':after': {
              ...beforeAndAfter(size, type, variables),
              marginLeft: pxToRem(22 + size * 2),
            },
            color: variables.typeSecondaryColor, // the default color
            ...(type === 'primary' && {
              color: variables.typePrimaryColor,
            }),
            ...(type === 'secondary' && {
              color: variables.defaultColor,
            }),
          }
        : {
            ...dividerBorderRule(size, variables.typeSecondaryBackgroundColor), // the default border rule
            ...(type === 'primary' && {
              ...dividerBorderRule(size, variables.typePrimaryBackgroundColor),
            }),
            ...(type === 'secondary' && {
              ...dividerBorderRule(size, variables.defaultBackgroundColor),
            }),
          }),
    }
  },
}
