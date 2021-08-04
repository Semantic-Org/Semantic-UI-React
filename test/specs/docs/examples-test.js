import * as React from 'react'

const exampleContext = require.context('docs/src/examples', true, /\w+Example\w*\.js$/)
let wrapper

describe('examples', () => {
  afterEach(() => {
    wrapper.unmount()
  })

  exampleContext.keys().forEach((path) => {
    const filename = path.replace(/^.*\/(\w+\.js)$/, '$1')

    it(`${filename} renders without console activity`, () => {
      const Component = exampleContext(path).default

      wrapper = mount(React.createElement(Component))
      wrapper.should.not.be.blank()
    })
  })
})
