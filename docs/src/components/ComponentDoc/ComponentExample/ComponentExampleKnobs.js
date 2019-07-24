import { CodeSnippet, KnobInspector, useKnobValues } from '@stardust-ui/docs-components'
import _ from 'lodash'
import React from 'react'
import { Grid } from 'semantic-ui-react'

const columnStyles = {
  padding: 0,
}

const knobsStyles = {
  background: 'whitesmoke',
  color: '#777',
  lineHeight: '1.5',
  padding: '1rem',
}

const rowStyles = {
  padding: 0,
}

const ComponentExampleKnobs = () => {
  const knobValues = useKnobValues()
  const values = _.fromPairs(knobValues.map((knob) => [knob.name, knob.value]))

  return (
    <KnobInspector>
      {(knobs) =>
        knobs && (
          <Grid.Row columns={2} stretched style={rowStyles}>
            <Grid.Column style={columnStyles}>
              <div style={knobsStyles}> {knobs}</div>
            </Grid.Column>
            <Grid.Column style={columnStyles}>
              <CodeSnippet copyable={false} fitted label='Knobs' mode='json' value={values} />
            </Grid.Column>
          </Grid.Row>
        )
      }
    </KnobInspector>
  )
}

export default ComponentExampleKnobs
