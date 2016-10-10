import { createElement } from 'react'

import { sandbox, consoleUtil } from '../../utils'
import { exampleContext } from '../../../docs/app/utils'

describe('examples', () => {
  /* eslint-disable no-console */
  beforeEach(() => {
    // be sure the console is not disabled since we're checking for console errors
    consoleUtil.enable()
    sandbox.spy(console, 'error')
  })
  afterEach(() => {
    console.error.restore()
  })
  exampleContext.keys().forEach(path => {
    if (!path.includes('TableWarningShorthand')) {
      return
    }
    it(`renders without errors: ${path}`, () => {
      mount(createElement(exampleContext(path).default))

      console.error
        .should.not.have.been.called(`Console error: ${console.error.args}`)
    })
  })
  /* eslint-enable no-console */
})
