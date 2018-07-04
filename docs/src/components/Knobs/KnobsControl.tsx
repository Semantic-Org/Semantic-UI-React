import { createComponent } from 'react-fela'
import { pxToRem } from 'src/lib'

const KnobsControl = createComponent(
  () => ({
    padding: `0 ${pxToRem(10)}`,
  }),
  'span',
)

export default KnobsControl
