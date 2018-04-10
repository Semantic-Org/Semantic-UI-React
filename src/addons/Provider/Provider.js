import { createRenderer } from 'fela'
import monolithic from 'fela-monolithic'
import PropTypes from 'prop-types'
import React from 'react'
import { Provider as RendererProvider, ThemeProvider } from 'react-fela'

import * as defaultSiteVariables from '../../lib/styles/defaultSiteVariables'
import { META } from '../../lib'

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

/**
 * A Provider provides the render and theme to all components.
 */
const Provider = ({ children }) => (
  <RendererProvider renderer={renderer}>
    <ThemeProvider theme={defaultSiteVariables}>
      {children}
    </ThemeProvider>
  </RendererProvider>
)

Provider.propTypes = {
  /** Typically your application root. */
  children: PropTypes.node,
}

Provider._meta = {
  type: META.TYPES.ADDON,
  name: 'Provider',
}

export default Provider
