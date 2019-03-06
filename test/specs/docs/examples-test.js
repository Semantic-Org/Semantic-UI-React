import { createElement } from 'react'

const exampleContext = require.context('docs/src/examples', true, /\w+Example\w*\.js$/)

describe('examples', () => {
  exampleContext.keys().forEach((path) => {
    const filename = path.replace(/^.*\/(\w+\.js)$/, '$1')

    it(`${filename} renders without console activity`, () => {
      // TODO also render the example's path in a <ComponentExample /> just as the docs do
      const wrapper = mount(createElement(exampleContext(path).default))

      wrapper.unmount()
    })
  })
})
