import PropTypes from 'prop-types'
import React from 'react'
import { withRouteData, withSiteData } from 'react-static'
import { Container } from 'semantic-ui-react'

import DocsLayout from 'docs/src/components/DocsLayout'
import * as components from './components'

const DocumentationPage = ({ pageName, ...rest }) => {
  const { default: MarkdownComponent, meta } = require(`docs/src/pages/${pageName}`)

  return (
    <DocsLayout additionalTitle={meta.title}>
      <Container style={{ padding: 15 }}>
        <MarkdownComponent {...rest} components={components} />
      </Container>
    </DocsLayout>
  )
}

DocumentationPage.propTypes = {
  pageName: PropTypes.string.isRequired,
}

export default withSiteData(withRouteData(DocumentationPage))
