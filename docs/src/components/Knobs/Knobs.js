import { createComponent } from 'react-fela'

import KnobsField from './KnobsField'
import KnobsControl from './KnobsControl'
import KnobsLabel from './KnobsLabel'
import KnobsValue from './KnobsValue'

import KnobsBoolean from './KnobsBoolean'
import KnobsScalar from './KnobsScalar'

const Knobs = createComponent(
  () => ({
    padding: '1rem',
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
