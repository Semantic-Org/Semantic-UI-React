import React from 'react'
import { Feed } from 'stardust'

const { Content, Event, Extra, Label, Like, Meta, Summary, User } = Feed

const SizeLarge = () => {
  return (
    <Feed size='large'>
      <Event>
        <Label image='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
        <Content>
          <Summary date='1 Hour Ago'>
            <User>Elliot Fu</User> added you as a friend
          </Summary>
          <Meta>
            <Like icon='like'>4 Likes</Like>
          </Meta>
        </Content>
      </Event>

      <Event>
        <Label icon='pencil' />
        <Content>
          <Summary date='3 days ago'>
            You submitted a new post to the page
          </Summary>
          <Extra text>
            I'm having a BBQ this weekend. Come by around 4pm if you can.
          </Extra>
          <Meta>
            <Like>11 Likes</Like>
          </Meta>
        </Content>
      </Event>

      <Event>
        <Label image='http://semantic-ui.com/images/avatar/small/helen.jpg' />
        <Content date='4 days ago'>
          <Summary>
            <a>Helen Troy</a> added <a>2 new illustrations</a>
          </Summary>

          <Extra images>
            <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
            <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
          </Extra>

          <Meta like='1 Like' />
        </Content>
      </Event>
    </Feed>
  )
}

export default SizeLarge
