import { createComponent } from 'react-fela'
import { rem } from 'src/lib'

import KnobsField from './KnobsField'
import KnobsControl from './KnobsControl'
import KnobsLabel from './KnobsLabel'
import KnobsValue from './KnobsValue'

import KnobsBoolean from './KnobsBoolean'
import KnobsScalar from './KnobsScalar'

const Knobs: any = createComponent(
  () => ({
    padding: rem(1),
    background: '#eee',
  }),
  'div',
)

Knobs.Field = KnobsField
Knobs.Control = KnobsControl
Knobs.Label = KnobsLabel
Knobs.Value = KnobsValue

Knobs.Boolean = KnobsBoolean
Knobs.Scalar = KnobsScalar

export default Knobs
