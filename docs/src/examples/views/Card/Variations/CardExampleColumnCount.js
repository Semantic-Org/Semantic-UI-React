import React from 'react'
import { Card } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'

const CardExampleColumnCount = () => (
  <Card.Group itemsPerRow={6}>
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
  </Card.Group>
)

export default CardExampleColumnCount
