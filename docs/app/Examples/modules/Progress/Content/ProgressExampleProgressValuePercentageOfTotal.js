import React from 'react'
import { Divider, Icon, Item, Progress } from 'semantic-ui-react'

const ProgressExampleProgressValuePercentageOfTotal = () => (
  <Item.Group divided relaxed>
    <Item>
      <Item.Image size='small' src='/assets/images/avatar/large/rachel.png' />
      <Item.Content>
        <Item.Header>Rachel</Item.Header>
        <Item.Meta><Icon circular name='book' /> last read an article on January 26th</Item.Meta>
        <Item.Meta><Icon circular name='newspaper' /> read 20 articles in January</Item.Meta>
        <Divider hidden />
        <Item.Description>
          <Progress progress='value' value={15} total={20} content='Politics' color='blue' />
          <Progress progress='value' value={5} total={20} content='Cats' color='yellow' />
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='small' src='/assets/images/avatar/large/zoe.jpg' />
      <Item.Content>
        <Item.Header>Zoe</Item.Header>
        <Item.Meta><Icon circular name='book' /> last read an article on January 10th</Item.Meta>
        <Item.Meta><Icon circular name='newspaper' /> read 7 articles in January</Item.Meta>
        <Divider hidden />
        <Item.Description>
          <Progress progress='value' value={5} total={7} content='Fashion' color='purple' />
          <Progress progress='value' value={2} total={7} content='Cats' color='yellow' />
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ProgressExampleProgressValuePercentageOfTotal
