import { pxToRem } from '../../lib'

export default ({ active, circular, variables }) => ({
  root: {
    padding: `${pxToRem(6)} ${pxToRem(8)}`,
    fontWeight: '500',
    backgroundColor: 'rgb(232, 232, 232)',
    color: 'rgba(0, 0, 0, 0.6)',
    borderRadius: pxToRem(3),
    ...(circular && {
      borderRadius: variables.circularRadius,
    }),
  },
})
