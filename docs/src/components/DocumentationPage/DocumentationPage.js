import PropTypes from 'prop-types'
import React from 'react'
import { withRouteData, withSiteData } from 'react-static'
import { Container, Divider, Header } from 'semantic-ui-react'

import DocsLayout from 'docs/src/components/DocsLayout'
import * as components from './components'
import DocumentationPageFooter from './DocumentationPageFooter'

const DocumentationPage = ({ pageName, title, ...rest }) => {
  const { default: MarkdownComponent, meta } = require(`docs/src/pages/${pageName}`)

  return (
    <DocsLayout additionalTitle={meta.title} title={title}>
      <Container text>
        <Divider hidden />
        <Header as='h1' content={meta.title} textAlign='center' />
        <MarkdownComponent {...rest} components={components} />
        <DocumentationPageFooter prevPage={meta.prevPage} nextPage={meta.nextPage} />
        <Divider hidden section />
      </Container>
    </DocsLayout>
  )
}

DocumentationPage.propTypes = {
  pageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default withSiteData(withRouteData(DocumentationPage))
