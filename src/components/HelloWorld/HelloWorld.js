import React from 'react'

const HelloWorld = () => <h1>Hello World</h1>

// HACK(zuko): just for easy backwards compat
HelloWorld._meta = {
  name: 'HelloWorld',
  type: 'component',
}

export default HelloWorld
