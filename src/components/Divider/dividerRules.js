import { rem, hasChildren } from '../../lib'

const colorDark = 'grey'
const colorMedium = 'darkgrey'
const colorLight = 'lightgrey'

const solidBorder = (position, color) => ({
  [`border${position}Color`]: color,
  [`border${position}Width`]: rem(0.1),
  [`border${position}Style`]: 'solid',
})

const dividerBorderRule = (size, radius) => ({
  ...solidBorder('Top', colorDark),
  ...solidBorder('Bottom', colorLight),
  ...(size > 0 ? { backgroundColor: colorMedium } : null),
  borderRadius: rem(radius * (size + 0.1)),
  height: rem(size * 0.1),
})

const beforeAndAfter = (size, radius) => ({
  content: "' '",
  width: '50%',
  ...dividerBorderRule(size, radius),
})

export default props => ({
  root: {
    width: '100%',
    sizeVar: props.variables,
    ...(hasChildren(props)
      ? {
        alignItems: 'center',
        display: 'flex',
        whiteSpace: 'nowrap',
        ':before': {
          ...beforeAndAfter(props.size, props.variables.borderRadius),
        },
        ':after': {
          ...beforeAndAfter(props.size, props.variables.borderRadius),
        },
      }
      : {
        display: 'inline-block',
        verticalAlign: 'middle',
        textAlign: 'center',
        ...dividerBorderRule(props.size, props.variables.borderRadius),
      }),
  },
})
