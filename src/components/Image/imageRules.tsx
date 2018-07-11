import { pxToRem } from '../../lib'

export default {
  root: ({ props, variables }) => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    ...(props.circular && { borderRadius: pxToRem(9999) }),
    ...(props.avatar && {
      width: variables.avatarSize,
      borderRadius: variables.avatarRadius,
    }),
  }),
}
