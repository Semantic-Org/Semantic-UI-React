import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonLoadingExample = () => (
  <div>
    <Button loading>Loading</Button>
    <Button basic loading>Loading</Button>
    <Button loading primary>Loading</Button>
    <Button loading secondary>Loading</Button>
  </div>
)

export default ButtonLoadingExample
