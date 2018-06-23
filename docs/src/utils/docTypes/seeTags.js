import PropTypes from 'prop-types'

const seeTags = PropTypes.arrayOf(
  PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
)

export default seeTags
