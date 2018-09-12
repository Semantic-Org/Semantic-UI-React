import PropTypes from 'prop-types'
import { SUI } from '../../../lib'

/**
 * Ensure a that passed props are valid.
 */
const transitionPropType = (...args) =>
  PropTypes.shape({
    /** Named animation event to used. Must be defined in CSS. */
    animation: PropTypes.oneOf(SUI.TRANSITIONS),

    /** A component can animate like jQuery slideUp() and slideDown(). */
    animateHeight: PropTypes.bool,

    /** Duration of the CSS transition animation in milliseconds. */
    duration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        hide: PropTypes.number,
        show: PropTypes.number,
      }),
      PropTypes.string,
    ]),
  })(...args)

export default transitionPropType
