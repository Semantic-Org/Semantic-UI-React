import { rem } from '../../lib'

export default ({ active, circular, variables }) => ({
  root: {
    padding: `${rem(0.5833)} ${rem(0.833)}`,
    fontWeight: '500',
    backgroundColor: 'rgb(232, 232, 232)',
    color: 'rgba(0, 0, 0, 0.6)',
    borderRadius: rem(0.3),
    ...(circular && {
      borderRadius: variables.circularRadius,
    }),
  },
})
