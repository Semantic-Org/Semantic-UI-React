import React from 'react'
import { CardGroup, Card } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'

const CardExampleColumnCount = () => (
  <CardGroup itemsPerRow={6}>
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
  </CardGroup>
)

export default CardExampleColumnCount
