import { createComponent } from 'react-fela'
import { rem } from 'src/lib'

const KnobsField = createComponent(() => ({
  padding: `${rem(0.5)} 0`,
  width: rem(30),
}))

export default KnobsField
