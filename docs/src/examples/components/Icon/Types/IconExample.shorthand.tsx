import React from 'react'
import { Icon } from 'stardust'

const examples = [
  'chess rock',
  'ordered list',
  'unordered list',
  'book',
  'circle',
  'closed captioning',
  'compress',
  'expand',
  'play',
  'stop',
  'calendar alternate outline',
  'coffee',
  'compass outline',
  'area chart',
]

const IconExample = () => (
  <div>{examples.map(type => <Icon key={type} size="big" name={type} />)}</div>
)

export default IconExample
