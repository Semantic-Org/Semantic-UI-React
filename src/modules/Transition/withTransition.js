import React from 'react'

import { partitionTransitionProps, transitionPropType } from './lib'
import Transition from './Transition'

/**
 * A HOC that wraps a Transition component.
 */
function withTransition(options) {
  return (WrappedComponent) => {
    const { visibleProp = 'visible' } = options

    function WithTransition(props) {
      const { componentProps, transitionProps } = partitionTransitionProps(props, visibleProp)

      return (
        <Transition {...transitionProps}>
          <WrappedComponent {...componentProps} />
        </Transition>
      )
    }

    WithTransition.propTypes = {
      transition: transitionPropType,
    }

    return WithTransition
  }
}

export default withTransition
