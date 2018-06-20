import PropTypes from 'prop-types'

const siteData = PropTypes.shape({
  dev: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  versions: PropTypes.shape({
    anchor: PropTypes.string.isRequired,
    babel: PropTypes.shape({
      standalone: PropTypes.string.isRequired,
    }).isRequired,
    faker: PropTypes.string.isRequired,
    jsBeautify: PropTypes.string.isRequired,
    propTypes: PropTypes.string.isRequired,
    react: PropTypes.string.isRequired,
    sui: PropTypes.string.isRequired,
    suir: PropTypes.string.isRequired,
  }),
})

export default siteData
