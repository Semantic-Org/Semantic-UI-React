import PropTypes from 'prop-types'
import versions from './versions'

const siteData = PropTypes.shape({
  versions,
  dev: PropTypes.bool.isRequired,
  pkg: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
})

export default siteData
