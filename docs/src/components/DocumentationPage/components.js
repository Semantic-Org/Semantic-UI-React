import _ from 'lodash'
import React from 'react'
import { Link } from 'react-static'
import { Header } from 'semantic-ui-react'

import CodeSnippet from 'docs/src/components/CodeSnippet'

// Heads up!
// These functions are only component's mapping.
/* eslint-disable react/prop-types */

export const a = ({ children, href }) => <Link to={href}>{children}</Link>

export const code = ({ className, children }) => {
  const mode = className.replace('language-', '')
  const value = _.trim(children)

  return <CodeSnippet mode={mode} value={value} />
}

export const h1 = ({ children }) => <Header as='h1' content={children} />

export const h2 = ({ children }) => <Header as='h2' content={children} dividing />
