import { createComponent } from 'react-fela'
import { rem } from 'src/lib'

const KnobsControl = createComponent(
  () => ({
    padding: `0 ${rem(1)}`,
  }),
  'span',
)

export default KnobsControl
