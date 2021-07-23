import PropTypes from 'prop-types'

const componentInfoShape = PropTypes.shape({
  displayName: PropTypes.string.isRequired,
  props: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      required: PropTypes.bool,
      description: PropTypes.arrayOf(PropTypes.string),
      defaultValue: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        }),
      ),
      name: PropTypes.string,
    }),
  ),
  type: PropTypes.string.isRequired,
  isParent: PropTypes.bool.isRequired,
  isChild: PropTypes.bool.isRequired,
  parentDisplayName: PropTypes.string,
  subcomponentName: PropTypes.string,
  subcomponents: PropTypes.arrayOf(PropTypes.string),
  apiPath: PropTypes.string.isRequired,
  componentClassName: PropTypes.string.isRequired,
  docblock: PropTypes.shape({
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
    description: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  examplesExist: PropTypes.bool.isRequired,
  repoPath: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  filenameWithoutExt: PropTypes.string.isRequired,
})

export default componentInfoShape
