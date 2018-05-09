import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import * as layouts from '../layouts'

const LayoutsRoot = (props) => {
  const name = _.get(props, 'match.params.name')
  const layoutName = `${_.startCase(name).replace(/ /g, '')}Layout`
  const Layout = layouts[layoutName]

  return Layout ? <Layout /> : null
}

LayoutsRoot.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
}

export default LayoutsRoot
