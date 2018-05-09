import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { connect, FelaTheme } from 'react-fela'
import { createShorthandFactory } from './factories'
import getElementType from './getElementType'
import getUnhandledProps from './getUnhandledProps'

const createComponent = (Component, config) => {
  const { rules, variables, shorthand, getDefaultElement } = config
  const StyledComponent = rules ? connect(rules)(Component) : Component

  const UIComponent = props => (
    <FelaTheme
      render={(siteVariables) => {
        const mergedVariables = variables
          ? { ...variables(siteVariables), ...props.variables }
          : props.variables
        const rest = getUnhandledProps(Component, props)
        const ElementType = getElementType(Component, props, getDefaultElement)

        return (
          <StyledComponent
            {...props}
            rest={rest}
            variables={mergedVariables}
            ElementType={ElementType}
          />
        )
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
