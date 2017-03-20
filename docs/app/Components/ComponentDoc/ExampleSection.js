import React, { PropTypes } from 'react'

import { Grid, Header } from 'src'

const headerStyle = { marginBottom: '1.5em' }
const sectionStyle = { background: '#fff', boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)', paddingBottom: '5em' }

const ExampleSection = ({ title, children, ...rest }) => (
  <Grid padded style={sectionStyle} {...rest}>
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
