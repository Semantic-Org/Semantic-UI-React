import React from 'react'
import { Link } from 'react-static'
import { Header } from 'semantic-ui-react'

import CodeSnippet from 'docs/src/components/CodeSnippet'

// Heads up!
// These functions are only component's mapping.
/* eslint-disable react/prop-types */

export const a = ({ children, href }) => <Link to={href}>{children}</Link>

export const code = ({ className, children, fitted, formattable, label }) => (
  <CodeSnippet
    fitted={fitted}
    formattable={formattable !== 'false'}
    mode={className.replace('language-', '')}
    label={label}
    value={children}
  />
)

export const h1 = ({ children }) => <Header as='h1' content={children} textAlign='center' />

export const h2 = ({ children }) => <Header as='h2' content={children} dividing />

export const h3 = ({ children }) => <Header as='h3' content={children} />
