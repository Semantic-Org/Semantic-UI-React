import React from 'react'
import { Text } from 'stardust'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2x', '3x', '4x']

const TextSizesExample = () => (
  <div>
    {sizes.map(value => (
      <div>
        <Text size={value}>Dicta voluptatum dolorem.</Text>
      </div>
    ))}
  </div>
)
export default TextSizesExample
