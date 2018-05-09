import React from 'react'
import { Provider, Layout } from 'stardust'

const LayoutExample = () => (
  <Provider>
    <Layout debug start='start' main='main' end='end' />
  </Provider>
)

export default LayoutExample
