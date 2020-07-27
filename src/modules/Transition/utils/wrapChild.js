import React from 'react'
import Transition from '../Transition'

/**
 * Wraps a React element with a Transition component.
 *
 * @param {React.ReactElement} child
 * @param {Function} onHide
 * @param {Object} [options={}]
 * @param {String} [options.animation]
 * @param {Number} [options.duration]
 * @param {Boolean} [options.directional]
 * @param {Boolean} [options.transitionOnMount=false]
 * @param {Boolean} [options.visible=true]
 */
export default function wrapChild(child, onHide, options = {}) {
  const { key } = child
  const { animation, directional, duration, transitionOnMount = false, visible = true } = options

  return (
    <Transition
      animation={animation}
      directional={directional}
      duration={duration}
      key={key}
      onHide={onHide}
      reactKey={key}
      transitionOnMount={transitionOnMount}
      visible={visible}
    >
      {child}
    </Transition>
  )
}
