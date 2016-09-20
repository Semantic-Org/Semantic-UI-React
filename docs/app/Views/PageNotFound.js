import React from 'react'
import { Grid, Segment, Header, Icon } from 'stardust'

const PageNotFound = () => (
  <Grid padded textAlign='center' stretched>
    <Grid.Row columns='equal'>
      <Grid.Column>
        <Header as='h1' icon textAlign='center'>
          <Icon name='game' />
          404
          <Header.Subheader>
            How about some good old Atari?
          </Header.Subheader>
        </Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns='equal'>
      <Grid.Column>
        <Segment basic>
          <embed
            src='http://www.pizn.com/swf/classic-asteroids.swf'
            width='425'
            height='318'
            align='center'
            quality='high'
            pluginspage='http://www.macromedia.com/go/getflashplayer'
            type='application/x-shockwave-flash'
            style={{ zoom: '1.13' }}
          />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment basic>
          <embed
            src='http://www.pizn.com/swf/1-space-invaders.swf'
            width='425'
            height='359'
            align='center'
            quality='high'
            pluginspage='http://www.macromedia.com/go/getflashplayer'
            type='application/x-shockwave-flash'
          />
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default PageNotFound
