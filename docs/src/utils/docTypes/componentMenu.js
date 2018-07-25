import PropTypes from 'prop-types'

const componentMenu = PropTypes.arrayOf(
  PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
)

export default componentMenu
