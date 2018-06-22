import PropTypes from 'prop-types'
import React from 'react'
import { Grid, Image, Rail, Segment } from 'semantic-ui-react'

const Wrapper = ({ children }) => (
  <Grid columns={3} textAlign='center'>
    <Grid.Column>
      <Segment>
        <Image src='/images/wireframe/paragraph.png' />
        {children}
      </Segment>
    </Grid.Column>
  </Grid>
)

Wrapper.propTypes = {
  children: PropTypes.node,
}

const RailExampleSize = () => (
  <div>
    <Wrapper>
      <Rail size='mini' position='left'>
        Mini Left Rail
      </Rail>
      <Rail size='tiny' position='right'>
        Tiny Right Rail
      </Rail>
    </Wrapper>
    <Wrapper>
      <Rail size='small' position='left'>
        Small Left Rail
      </Rail>
      <Rail size='large' position='right'>
        Large Right Rail
      </Rail>
    </Wrapper>
    <Wrapper>
      <Rail size='big' position='left'>
        Big Left Rail
      </Rail>
      <Rail size='huge' position='right'>
        Huge Right Rail
      </Rail>
    </Wrapper>
    <Wrapper>
      <Rail size='massive' position='right'>
        Massive Right Rail
      </Rail>
    </Wrapper>
  </div>
)

export default RailExampleSize
