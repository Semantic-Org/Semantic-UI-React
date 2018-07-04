import { createComponent } from 'react-fela'
import { pxToRem } from 'src/lib'

const KnobsField = createComponent(() => ({
  padding: `${pxToRem(5)} 0`,
  width: pxToRem(300),
}))

export default KnobsField
