import { childrenExist, pxToRem } from '../../lib'

const dividerBorderRule = size => ({
  height: pxToRem(1 + size),
  background: 'lightgray',
})

const beforeAndAfter = (size, radius) => ({
  content: '""',
  flex: 1,
  borderRadius: pxToRem(radius),
  ...dividerBorderRule(size),
})

export default ({ children, size, variables }) => ({
  root: {
    marginTop: pxToRem(10 + size * 7.5),
    marginBottom: pxToRem(10 + size * 7.5),
    ...(childrenExist(children)
      ? {
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          lineHeight: 0,
          fontSize: pxToRem(14 + size),
          ':before': {
            ...beforeAndAfter(size, variables.borderRadius),
            marginRight: pxToRem(10 + size * 2),
          },
          ':after': {
            ...beforeAndAfter(size, variables.borderRadius),
            marginLeft: pxToRem(10 + size * 2),
          },
        }
      : {
          borderRadius: pxToRem(variables.borderRadius),
          ...dividerBorderRule(size),
        }),
  },
})
