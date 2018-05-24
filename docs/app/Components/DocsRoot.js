import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import ComponentDoc from '../Components/ComponentDoc'
import PageNotFound from '../Views/PageNotFound'
import componentInfoContext from '../utils/componentInfoContext'

const DocsRoot = ({ match }) => {
  const displayName = _.startCase(match.params.name).replace(/ /g, '')
  const info = componentInfoContext.byDisplayName[displayName]

  if (info) return <ComponentDoc info={info} />

  return <PageNotFound />
}

DocsRoot.propTypes = {
  children: PropTypes.node,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  }),
}

export default DocsRoot
