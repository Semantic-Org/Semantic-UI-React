import PropTypes from 'prop-types'

const sidebarSections = PropTypes.arrayOf(
  PropTypes.shape({
    sectionName: PropTypes.string.isRequired,
    examples: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        examplePath: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }),
)

export default sidebarSections
