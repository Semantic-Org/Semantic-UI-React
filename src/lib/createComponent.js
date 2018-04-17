import React from 'react'
import PropTypes from 'prop-types'
import { connect, FelaTheme } from 'react-fela'
import hoistNonReactStatics from 'hoist-non-react-statics'

import { createShorthandFactory } from './factories'
import getElementType from './getElementType'
import { getUnhandledProps } from './index'

const createComponent = ({ Component, rules, variables, shorthand, getDefaultElement }) => {
  const StyledComponent = connect(rules)(Component)

  const UIComponent = props => (
    <FelaTheme
      render={(siteVars) => {
        const mergedVariables = { ...variables(siteVars), ...props.variables }
        console.log({
          siteVars: siteVars.relativeLarge,
          props: props.variables && props.variables.relativeLarge,
          merged: {
            itemPadding: mergedVariables.itemPadding,
            itemLineHeight: mergedVariables.itemLineHeight,
            relativeLarge: mergedVariables.relativeLarge,
          },
        })
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

  if (shorthand) {
    UIComponent.create = createShorthandFactory(UIComponent, shorthand)
  }

  UIComponent.contextTypes = { renderer: PropTypes.any }

  UIComponent.displayName = Component.displayName || Component.name || 'UIComponent'

  UIComponent.propTypes = {
    variables: PropTypes.object,
  }

  return hoistNonReactStatics(UIComponent, Component)
}

export default createComponent
