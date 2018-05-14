export default ({ avatar, circular, variables }) => ({
  root: {
    display: 'inline-block',
    verticalAlign: 'middle',
    ...(circular && { borderRadius: '999rem' }),
    ...(avatar && {
      width: variables.avatarSize,
      borderRadius: variables.avatarRadius,
    }),
  },
})
