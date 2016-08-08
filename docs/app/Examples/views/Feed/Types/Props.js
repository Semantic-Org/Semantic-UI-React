import React from 'react'
import { Feed } from 'stardust'

const events = [
  {
    date: '1 Hour Ago',
    image: 'http://semantic-ui.com/images/avatar/small/elliot.jpg',
    meta: <Feed.Like icon='like'>4 Likes</Feed.Like>,
    summary: <div><Feed.User>Elliot Fu</Feed.User> added you as a friend</div>,
  },
  {
    date: '4 days ago',
    image: 'http://semantic-ui.com/images/avatar/small/helen.jpg',
    meta: <Feed.Like>1 Like</Feed.Like>,
    summary: <div><a>Helen Troy</a> added <a>2 new illustrations</a></div>,
    extraImages: [
      <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>,
      <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>,
    ],
  },
  {
    date: '2 Days Ago',
    image: 'http://semantic-ui.com/images/avatar/small/jenny.jpg',
    meta: <Feed.Like>8 Likes</Feed.Like>,
    summary: <div><Feed.User>Jenny Hess</Feed.User> added you as a friend</div>,
  },
  {
    date: '3 days ago',
    image: 'http://semantic-ui.com/images/avatar/small/joe.jpg',
    meta: <Feed.Like>8 Likes</Feed.Like>,
    summary: <div><a>Joe Henderson</a> posted on his page</div>,
    extraText: [
      "Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all",
      "over again. Even if we don't run extra laps that day, we surely will come back for more of the same another",
      'day soon.',
    ].join(' '),
  },
  {
    date: '4 days ago',
    image: 'http://semantic-ui.com/images/avatar/small/justen.jpg',
    meta: <Feed.Like>41 Likes</Feed.Like>,
    summary: <div> <a>Justen Kitsune</a> added <a>2 new photos</a> of you</div>,
    extraImages: [
      <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>,
      <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>,
    ],
  },
]

const Props = () => <Feed events={events} />

export default Props
