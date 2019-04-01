import faker from 'faker'
import React, { createElement } from 'react'

import helpers from './commonHelpers'

/**
 * Assert a component renders children somewhere in the tree.
 * @param {React.Component|Function} Component A component that should render children.
 * @param {Object} [options={}]
 * @param {Number} [options.nestingLevel=0] The nesting level of the component.
 * @param {Object} [options.rendersContent] Assert that component also renders `content` prop.
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export default (Component, options = {}) => {
  const { nestingLevel = 0, rendersContent = true, requiredProps = {} } = options
  const { assertRequired } = helpers('rendersChildren', Component)

  assertRequired(Component, 'a `Component`')

  describe('children (common)', () => {
    it('renders child text', () => {
      const text = faker.hacker.phrase()
      shallow(createElement(Component, requiredProps, text), {
        autoNesting: true,
        nestingLevel,
      }).should.contain.text(text)
    })

    it('renders child components', () => {
      const child = <div data-child={faker.hacker.noun()} />
      shallow(createElement(Component, requiredProps, child), {
        autoNesting: true,
        nestingLevel,
      }).should.contain(child)
    })

    it('renders child number with 0 value', () => {
      shallow(createElement(Component, requiredProps, 0), {
        autoNesting: true,
        nestingLevel,
      }).should.contain.text('0')
    })
  })

  if (rendersContent) {
    describe('content (common)', () => {
      it('renders child text', () => {
        const text = faker.hacker.phrase()
        shallow(createElement(Component, { ...requiredProps, content: text }), {
          autoNesting: true,
          nestingLevel,
        }).should.contain.text(text)
      })

      it('renders child components', () => {
        const child = <div data-child={faker.hacker.noun()} />
        shallow(createElement(Component, { ...requiredProps, content: child }), {
          autoNesting: true,
          nestingLevel,
        }).should.contain(child)
      })

      it('renders child number with 0 value', () => {
        shallow(createElement(Component, { ...requiredProps, content: 0 }), {
          autoNesting: true,
          nestingLevel,
        }).should.contain.text('0')
      })
    })
  }
}
