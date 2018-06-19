import PropTypes from 'prop-types'
// import React from 'react'

const ExternalExampleLayout = () => null
// const { exampleName } = props.match.params
// const exampleFilename = `/${_.startCase(exampleName).replace(/ /g, '')}.js`

// const componentKey = _.find(_.endsWith(exampleFilename), exampleKeys)
// if (!componentKey) return <PageNotFound />
//
// const ExampleComponent = exampleContext(componentKey).default
// if (!ExampleComponent) return <PageNotFound />
//
// return <ExampleComponent />
// }

ExternalExampleLayout.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      exampleName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ExternalExampleLayout
