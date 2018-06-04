import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { connect, FelaTheme } from 'react-fela'

import { createShorthandFactory } from './factories'

const callable = val => (typeof val !== 'function' ? () => val : val)

const createComponent = (Component, config) => {
  const { rules, variables, shorthand } = config
  const StyledComponent = rules ? connect(rules)(Component) : Component

  const UIComponent = props => (
    <FelaTheme
      render={({ siteVariables = {}, componentVariables = {} }) => {
        const variablesFromFile = callable(variables)(siteVariables)
        const variablesFromTheme = callable(componentVariables[Component._meta.name])(siteVariables)
        const variablesFromProp = callable(props.variables)(siteVariables)

        const mergedVariables = Object.assign(
          {},
          variablesFromFile,
          variablesFromTheme,
          variablesFromProp,
        )

        return <StyledComponent {...props} variables={mergedVariables} />
      }}
    />
  )
  UIComponent.propTypes = {
    variables: PropTypes.object,
  }

  UIComponent.create = createShorthandFactory(UIComponent, shorthand)
  UIComponent.displayName = `UI(${Component.displayName || Component.name || 'Anonymous'})`

  return hoistNonReactStatics(UIComponent, Component)
}

export default createComponent
