import { createElement } from 'react'

import { sandbox } from '../../utils'
import { exampleContext } from '../../../docs/app/utils'

describe('examples', () => {
  it('render without errors', () => {
    const errors = []

    /* eslint-disable no-console */
    exampleContext.keys().forEach(path => {
      sandbox.spy(console, 'error')

      shallow(createElement(exampleContext(path).default))

      if (console.error.called) {
        errors.push({ path, message: console.error.args })
      }

      console.error.restore()
    })
    /* eslint-enable no-console */

    errors.should.be.empty(
      errors.map(e => `Example File: ${e.path}\nConsole Error: ${e.message}\n\n`).join('')
    )
  })
})
