import PropTypes from 'prop-types'

const completions = PropTypes.shape({
  components: PropTypes.arrayOf(PropTypes.string).isRequired,
  props: PropTypes.arrayOf(PropTypes.string).isRequired,
})

export default completions
