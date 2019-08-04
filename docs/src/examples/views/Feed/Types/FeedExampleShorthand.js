import React from 'react'
import { Feed } from 'semantic-ui-react'

const events = [
  {
    date: '1 Hour Ago',
    image: '/images/avatar/small/elliot.jpg',
    meta: '4 Likes',
    summary: 'Elliot Fu added you as a friend',
  },
  {
    date: '4 days ago',
    image: '/images/avatar/small/helen.jpg',
    meta: '1 Like',
    summary: 'Helen Troy added 2 new illustrations',
    extraImages: [
      '/images/wireframe/image.png',
      '/images/wireframe/image-text.png',
    ],
  },
  {
    date: '2 Days Ago',
    image: '/images/avatar/small/jenny.jpg',
    meta: '8 Likes',
    summary: 'Jenny Hess added you as a friend',
  },
  {
    date: '3 days ago',
    image: '/images/avatar/small/joe.jpg',
    meta: '8 Likes',
    summary: 'Joe Henderson posted on his page',
    extraText: [
      "Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all",
      "over again. Even if we don't run extra laps that day, we surely will come back for more of the same another",
      'day soon.',
    ].join(' '),
  },
  {
    date: '4 days ago',
    image: '/images/avatar/small/justen.jpg',
    meta: '41 Likes',
    summary: 'Justen Kitsune added 2 new photos of you',
    extraImages: [
      '/images/wireframe/image.png',
      '/images/wireframe/image-text.png',
    ],
  },
]

const FeedExampleShorthand = () => <Feed events={events} />

export default FeedExampleShorthand
