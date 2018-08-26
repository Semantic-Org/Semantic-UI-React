import PropTypes from 'prop-types'
import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const headerStyle = {
  marginBottom: '1.5em',
  textAlign: 'center',
  textTransform: 'uppercase',
  opacity: 0.5,
}

const ExampleSection = ({ title, children, ...rest }) => (
  <Grid padded {...rest}>
    <Grid.Column>
      <Header as='h2' style={headerStyle} className='no-anchor'>
        {title}
      </Header>
      {children}
    </Grid.Column>
  </Grid>
)

ExampleSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default ExampleSection
