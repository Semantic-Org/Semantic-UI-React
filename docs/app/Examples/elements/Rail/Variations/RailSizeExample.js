import React, { PropTypes } from 'react'
import { Image, Grid, Rail, Segment } from 'stardust'

const Wrapper = ({ children }) => (
  <Grid columns={3} textAlign='center'>
    <Grid.Column centered>
      <Segment>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
        {children}
      </Segment>
    </Grid.Column>
  </Grid>
)

Wrapper.propTypes = {
  children: PropTypes.node,
}

const RailSizeExample = () => (
  <div>
    <Wrapper>
      <Rail size='mini' position='left'>Mini Left Rail</Rail>
      <Rail size='tiny' position='right'>Tiny Right Rail</Rail>
    </Wrapper>
    <Wrapper>
      <Rail size='small' position='left'>Small Left Rail</Rail>
      <Rail size='large' position='right'>Large Right Rail</Rail>
    </Wrapper>
    <Wrapper>
      <Rail size='big' position='left'>Big Left Rail</Rail>
      <Rail size='huge' position='right'>Huge Right Rail</Rail>
    </Wrapper>
    <Wrapper>
      <Rail size='massive' position='right'>Massive Right Rail</Rail>
    </Wrapper>
  </div>
)

export default RailSizeExample
