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

export default {
  root: ({ props, variables }) => ({
    marginTop: pxToRem(10 + props.size * 7.5),
    marginBottom: pxToRem(10 + props.size * 7.5),
    ...(childrenExist(props.children)
      ? {
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          lineHeight: 0,
          fontSize: pxToRem(14 + props.size),
          ':before': {
            ...beforeAndAfter(props.size, variables.borderRadius),
            marginRight: pxToRem(10 + props.size * 2),
          },
          ':after': {
            ...beforeAndAfter(props.size, variables.borderRadius),
            marginLeft: pxToRem(10 + props.size * 2),
          },
        }
      : {
          borderRadius: pxToRem(variables.borderRadius),
          ...dividerBorderRule(props.size),
        }),
  }),
}
