import React from 'react'
import { FelaTheme } from 'react-fela'

// the key thing is that here we are introducing semantics to wrapper's displayName,
// so it would be easier to reason about components' chain

// no Legacy Context pieces are exposed, only public API is used
const withStyling = (Component) => {
  const StyledComponent = props => (
    <FelaTheme render={theme => <Component theme={theme} {...props} />} />
  )

  StyledComponent.displayName = `${Component.name || Component.displayName}_wrapper`

  return StyledComponent
}

export default withStyling
