import { pxToRem } from '../../lib'

export default () => {
  const vars: any = {}
  vars.circularRadius = pxToRem(5000)
  return vars
}
