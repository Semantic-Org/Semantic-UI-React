import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React from 'react'

import { META } from 'src/lib'
import * as semanticUIReact from 'src'
import ComponentDoc from '../Components/ComponentDoc/ComponentDoc'

const DocsRoot = (props) => {
  const { name } = props.match.params
  const componentName = _.startCase(name).replace(/ /g, '')
  const component = semanticUIReact[componentName]

  if (!component || !component._meta || !META.isParent(component)) return null
  return <ComponentDoc _meta={component._meta} />
}

DocsRoot.propTypes = {
  children: PropTypes.node,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
}

export default DocsRoot
