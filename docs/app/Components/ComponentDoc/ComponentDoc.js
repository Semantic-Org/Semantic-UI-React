import PropTypes from 'prop-types'
import React from 'react'
import DocumentTitle from 'react-document-title'
import { Grid } from 'semantic-ui-react'

import withDocInfo from 'docs/app/HOC/withDocInfo'
import ComponentDocHeader from './ComponentDocHeader'
import ComponentDocLinks from './ComponentDocLinks'
import ComponentDocSee from './ComponentDocSee'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'

const ComponentDoc = ({ componentGroup, componentName, description, ghLink, path, seeItems, suiLink }) => (
  <DocumentTitle title={`${componentName} | Semantic UI React`}>
    <div>
      <Grid padded columns='1'>
        <Grid.Column>
          <ComponentDocHeader componentName={componentName} description={description} />
          <ComponentDocSee items={seeItems} />
          <ComponentDocLinks
            componentName={componentName}
            ghLink={ghLink}
            path={path}
            suiLink={suiLink}
          />
          <ComponentProps componentGroup={componentGroup} componentName={componentName} />
        </Grid.Column>
      </Grid>

      <ComponentExamples componentName={componentName} />
    </div>
  </DocumentTitle>
)

ComponentDoc.propTypes = {
  componentGroup: PropTypes.objectOf(
    PropTypes.shape({
      description: PropTypes.arrayOf(PropTypes.string),
      props: PropTypes.array,
    }),
  ),
  componentName: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
  ghLink: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  seeItems: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
    }),
  ).isRequired,
  suiLink: PropTypes.string,
}

export default withDocInfo(ComponentDoc)
