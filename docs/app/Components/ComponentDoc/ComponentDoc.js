import PropTypes from 'prop-types'
import React from 'react'
import DocumentTitle from 'react-document-title'
import { Grid } from 'semantic-ui-react'

import ComponentDocHeader from './ComponentDocHeader'
import ComponentDocLinks from './ComponentDocLinks'
import ComponentDocSee from './ComponentDocSee'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'

const ComponentDoc = ({ _meta }) => (
  <DocumentTitle title={`${_meta.name} | Semantic UI React`}>
    <div>
      <Grid padded columns='1'>
        <Grid.Column>
          <ComponentDocHeader componentName={_meta.name} />
          <ComponentDocSee componentName={_meta.name} />
          <ComponentDocLinks componentName={_meta.parent || _meta.name} type={_meta.type} />
          <ComponentProps componentName={_meta.name} />
        </Grid.Column>
      </Grid>

      <ComponentExamples componentName={_meta.name} />
    </div>
  </DocumentTitle>
)

ComponentDoc.propTypes = {
  _meta: PropTypes.object,
  history: PropTypes.object.isRequired,
}

export default ComponentDoc
