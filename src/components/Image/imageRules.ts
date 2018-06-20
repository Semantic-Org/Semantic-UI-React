import { rem } from '../../lib'

export default ({ avatar, circular, variables }) => ({
  root: {
    display: 'inline-block',
    verticalAlign: 'middle',
    ...(circular && { borderRadius: rem(999) }),
    ...(avatar && {
      width: variables.avatarSize,
      borderRadius: variables.avatarRadius,
    }),
  },
})
