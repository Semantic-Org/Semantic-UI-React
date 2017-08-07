import { createElement } from 'react'

import { sandbox, consoleUtil } from '../../utils'
import { exampleContext } from '../../../docs/app/utils'

describe('examples', () => {
  /* eslint-disable no-console */
  beforeEach(() => {
    // be sure the console is not disabled since we're checking for console errors
    consoleUtil.enable()
    sandbox.spy(console, 'info')
    sandbox.spy(console, 'log')
    sandbox.spy(console, 'warn')
    sandbox.spy(console, 'error')
  })
  afterEach(() => {
    console.info.restore()
    console.log.restore()
    console.warn.restore()
    console.error.restore()
  })
  exampleContext.keys().forEach(path => {
    // don't test index files, they repeat errors of individual files
    if (/index\.js$/.test(path)) return
    const filename = path.replace(/^.*\/(\w+\.js)$/, '$1')

    it(`${filename} renders without console messages`, () => {
      // TODO also render the example's path in a <ComponentExample /> just as the docs do
      mount(createElement(exampleContext(path).default))

      console.info.should.not.have.been.called(`Console info: ${console.info.args}`)
      console.log.should.not.have.been.called(`Console log: ${console.log.args}`)
      console.warn.should.not.have.been.called(`Console warn: ${console.warn.args}`)
      console.error.should.not.have.been.called(`Console error: ${console.error.args}`)
    })
  })
  /* eslint-enable no-console */
})
