import { pxToRem } from '../../lib'

export default ({ avatar, circular, variables }) => ({
  root: {
    display: 'inline-block',
    verticalAlign: 'middle',
    ...(circular && { borderRadius: pxToRem(9999) }),
    ...(avatar && {
      width: variables.avatarSize,
      borderRadius: variables.avatarRadius,
    }),
  },
})
