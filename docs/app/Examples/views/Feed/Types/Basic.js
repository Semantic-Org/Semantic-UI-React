import React from 'react'
import { Feed } from 'stardust'

const { Content, Date, Event, Extra, Label, Like, Meta, Summary, User } = Feed

const Basic = () => {
  return (
    <Feed>
      <Event>
        <Label>
          <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
        </Label>
        <Content>
          <Summary>
            <User>Elliot Fu</User> added you as a friend
            <Date>1 Hour Ago</Date>
          </Summary>
          <Meta>
            <Like icon='like'>4 Likes</Like>
          </Meta>
        </Content>
      </Event>

      <Event>
        <Label image='http://semantic-ui.com/images/avatar/small/helen.jpg' />
        <Content>
          <Summary>
            <a>Helen Troy</a> added <a>2 new illustrations</a>
            <Date>4 days ago</Date>
          </Summary>
          <Extra images>
            <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
            <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
          </Extra>
          <Meta>
            <Like>1 Like</Like>
          </Meta>
        </Content>
      </Event>

      <Event>
        <Label image='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Content>
          <Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
          <Meta like='8 Likes' />
        </Content>
      </Event>

      <Event>
        <Label image='http://semantic-ui.com/images/avatar/small/joe.jpg' />
        <Content>
          <Summary date='3 days ago'>
            <a>Joe Henderson</a> posted on his page
          </Summary>
          <Extra text>
            Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
            over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
            day soon.
          </Extra>
          <Meta like='5 Likes' />
        </Content>
      </Event>

      <Event>
        <Label image='http://semantic-ui.com/images/avatar/small/justen.jpg' />
        <Content>
          <Summary date='4 days ago'>
            <a>Justen Kitsune</a> added <a>2 new photos</a> of you
          </Summary>
          <Extra images>
            <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
            <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
          </Extra>
          <Meta like='41 Likes' />
        </Content>
      </Event>
    </Feed>
  )
}

export default Basic
