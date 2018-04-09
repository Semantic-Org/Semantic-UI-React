import { createRenderer } from 'fela'
import monolithic from 'fela-monolithic'
import PropTypes from 'prop-types'
import React from 'react'
import { Provider as RendererProvider, ThemeProvider } from 'react-fela'

import * as defaultSiteVariables from '../../lib/styles/defaultSiteVariables'

// ----------------------------------------
// Style Renderer
// ----------------------------------------

const config = {
  middleware: [
    // composes style objects
  ],
  enhancers: [
    monolithic(),
  ],
}

const renderer = createRenderer(config)

const Provider = ({ children }) => (
  <RendererProvider renderer={renderer}>
    <ThemeProvider theme={defaultSiteVariables}>
      {children}
    </ThemeProvider>
  </RendererProvider>
)

Provider.propTypes = {
  children: PropTypes.node,
}

export default Provider
