import 'semantic-ui-css/semantic.css'
import 'highlight.js/styles/github.css'
import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

import ComponentDoc from 'docs/app/Components/ComponentDoc/ComponentDoc'
import PageNotFound from 'docs/app/Components/PageNotFound/PageNotFound'
import META from 'src/utils/Meta'
import * as stardust from 'stardust'

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.node,
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }

  render() {
    const { name } = this.props.params
    const component = stardust[_.startCase(name)]
    if (!component || !component._meta || !META.isParent(component)) {
      return <PageNotFound />
    }

    return (
      <DocumentTitle title={`${component._meta.name} | UI React`}>
        <ComponentDoc _meta={component._meta} />
      </DocumentTitle>
    )
  }
}
