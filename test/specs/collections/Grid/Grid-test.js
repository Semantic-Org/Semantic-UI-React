import React from 'react'
import { Grid } from 'stardust'

describe('Grid', () => {
  it('renders its children', () => {
    deprecatedRender(<Grid>check it out</Grid>)
      .assertText('check it out')
  })
})
