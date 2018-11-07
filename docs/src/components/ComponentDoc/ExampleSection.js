import PropTypes from 'prop-types'
import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const headerStyle = {
  textAlign: 'center',
  textTransform: 'uppercase',
  opacity: 0.5,
}

const descriptionStyle = {
  textAlign: 'center',
  opacity: 0.7,
}

const ExampleSection = ({ title, children, ...rest }) => (
  <Grid padded {...rest}>
    <Grid.Column>
      <Header as='h2' style={headerStyle} className='no-anchor'>
        {title}
      </Header>
      {title === 'Themed' &&
        <Header as='h4' style={descriptionStyle} className='no-anchor'>
          This section is intended as a reference for specific use cases of
          components, or compositions of them, that are not covered in the
          component's default examples.
        </Header>
      }
      {children}
    </Grid.Column>
  </Grid>
)

ExampleSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default ExampleSection
