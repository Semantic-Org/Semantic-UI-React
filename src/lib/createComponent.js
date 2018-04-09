import React from 'react'
import PropTypes from 'prop-types'
import { connect, FelaTheme } from 'react-fela'
import hoistNonReactStatics from 'hoist-non-react-statics'

import { createShorthandFactory } from './factories'
import getElementType from './getElementType'
import { getUnhandledProps } from './index'

const createComponent = ({ Component, rules, variables, shorthand, getDefaultElement }) => {
  const StyledComponent = hoistNonReactStatics(connect(rules)(Component), Component)

  const UIComponent = props => (
    <FelaTheme
      render={(siteVars) => {
        const mergedVariables = { ...variables(siteVars), ...props.variables }
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

  UIComponent.create = createShorthandFactory(UIComponent, shorthand)

  UIComponent.contextTypes = { renderer: PropTypes.any }

  UIComponent.displayName = Component.displayName || Component.name || 'UIComponent'

  UIComponent.propTypes = {
    variables: PropTypes.object,
  }

  return hoistNonReactStatics(UIComponent, StyledComponent)
}

export default createComponent
