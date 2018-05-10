import PropTypes from 'prop-types'
import React from 'react'

import { Divider, Grid, Header } from 'semantic-ui-react'

const sectionStyle = {
  background: '#fff',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
  paddingBottom: '5em',
}

const ExampleSection = ({ title, children, ...rest }) => (
  <Grid padded style={sectionStyle} {...rest}>
    <Grid.Column>
      <Divider hidden />
      <Header
        as='h2'
        color='grey'
        textAlign='center'
        className='no-anchor'
        content={title.toUpperCase()}
      />
      <Divider hidden />
      {children}
    </Grid.Column>
  </Grid>
)

ExampleSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default ExampleSection
