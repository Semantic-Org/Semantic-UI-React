import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// TODO make themes a monorepo of packages
import { siteVariables, normalizeCSS } from 'src/themes/teams'
import { Provider } from '@stardust-ui/react'

import Router from './routes'

// ----------------------------------------
// Rendering
// ----------------------------------------

const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

const globalRules = siteVars => ({
  html: {
    fontSize: siteVars.htmlFontSize,
  },
  body: {
    padding: siteVars.bodyPadding,
    margin: siteVars.bodyMargin,
    fontFamily: siteVars.bodyFontFamily,
    fontSize: siteVars.bodyFontSize,
    lineHeight: siteVars.lineHeightBase,
  },
})

// TODO: formalize fonts into siteVariables/theme contract.  Leaving hard coded for now.
const fontFaces = [
  {
    name: 'Segoe UI',
    paths: ['public/fonts/segoe-ui-regular.woff2'],
    style: { fontWeight: 400 },
  },
  {
    name: 'Segoe UI',
    paths: ['public/fonts/segoe-ui-semibold.woff2'],
    style: { fontWeight: 600 },
  },
  {
    name: 'Segoe UI',
    paths: ['public/fonts/segoe-ui-bold.woff2'],
    style: { fontWeight: 700 },
  },
]

const render = NewApp =>
  ReactDOM.render(
    <AppContainer>
      <Provider
        siteVariables={siteVariables}
        staticStyles={[normalizeCSS, globalRules]}
        fontFaces={fontFaces}
      >
        <NewApp />
      </Provider>
    </AppContainer>,
    mountNode,
  )

// ----------------------------------------
// HMR
// ----------------------------------------

if (__DEV__) {
  // When the application source code changes, re-render the whole thing.
  if (module.hot) {
    module.hot.accept('./routes', () => {
      // restore scroll
      const { scrollLeft, scrollTop } = document.scrollingElement
      ReactDOM.unmountComponentAtNode(mountNode)

      try {
        render(require('./routes').default)
        document.scrollingElement.scrollTop = scrollTop
        document.scrollingElement.scrollLeft = scrollLeft
      } catch (e) {
        console.error(e)
      }
    })
  }
}

// ----------------------------------------
// Start the app
// ----------------------------------------

render(Router)
