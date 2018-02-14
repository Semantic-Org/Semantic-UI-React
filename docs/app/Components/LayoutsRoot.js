import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import * as Layouts from '../Layouts'

const LayoutsRoot = (props) => {
  const name = _.get(props, 'match.params.name')
  const layoutName = `${_.startCase(name).replace(/ /g, '')}Layout`
  const Layout = Layouts[layoutName]

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
