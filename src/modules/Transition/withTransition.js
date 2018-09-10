import PropTypes from 'prop-types'
import React from 'react'

import { mapTransitionProps } from './lib'
import Transition from './Transition'

function withTransition(WrappedComponent, options) {
  const { visibleProp = 'visible' } = options

  function WithTransition(props) {
    const { componentProps, transitionProps } = mapTransitionProps(props, visibleProp)

    return (
      <Transition {...transitionProps}>
        <WrappedComponent {...componentProps} />
      </Transition>
    )
  }

  WithTransition.propTypes = {
    transition: PropTypes.shape(Transition.propTypes),
  }

  return WithTransition
}

export default withTransition
