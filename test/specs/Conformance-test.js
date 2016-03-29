import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { isDOMComponent } from 'react-addons-test-utils'
import META from '../../src/utils/Meta'
import componentInfo from '../utils/componentInfo'

/**
 * This test ensures all Stardust components conform to our guidelines.
 */
describe('Conformance', () => {
  /* eslint-disable no-console */
  console.info('Conformance-test renders each component with no props, required prop warnings may occur.')
  /* eslint-enable no-console */
  _.each(componentInfo, (info) => {
    const { Component, constructorName, filenameWithoutExt, sdClass } = info

    describe(constructorName, () => {
      it('extends Component', () => {
        expect(Component.prototype).to.deep.equal(React.Component.prototype)
      })

      it(`constructor name matches filename "${constructorName}"`, () => {
        constructorName.should.equal(filenameWithoutExt)
      })

      describe('_meta', () => {
        const _meta = Component._meta

        it('is a static object prop', () => {
          expect(_meta).to.be.an('object')
        })

        describe('library', () => {
          it('is defined', () => {
            expect(_meta).to.have.any.keys('library')
          })
          it('is a META.library', () => {
            expect(_.values(META.library)).to.include(_meta.library)
          })
        })
        describe('name', () => {
          it('is defined', () => {
            expect(_meta).to.have.any.keys('name')
          })
          it('matches the constructor name', () => {
            expect(_meta.name).to.equal(constructorName)
          })
        })
        if (_.has(_meta, 'parent')) {
          describe('parent', () => {
            it('matches some component name', () => {
              expect(_.map(componentInfo, 'constructorName')).to.contain(_meta.parent)
            })
          })
        }
        describe('type', () => {
          it('is defined', () => {
            expect(_meta).to.have.any.keys('type')
          })
          it('is a META.type', () => {
            expect(_.values(META.type)).to.include(_meta.type)
          })
        })
      })

      describe('props', () => {
        it('spreads props', () => {
          const props = {}
          // JSX does not render custom html attributes so we prefix them with data-*.
          // https://facebook.github.io/react/docs/jsx-gotchas.html#custom-html-attributes
          props[`data-${_.kebabCase(faker.hacker.noun())}`] = faker.hacker.noun()

          // create element with random props
          deprecatedRender(<Component {...props} />)
            .children()
            .some(child => {
              return _.every(props, (val, key) => {
                return isDOMComponent(child)
                  ? child.getAttribute(key) === val
                  : child.props[key] === val
              })
            })
            .should.equal(true)
        })
        it(`has some child with the "${sdClass}" class`, () => {
          deprecatedRender(<Component />)
            .findClass(sdClass)
        })
      })
    })
  })
})
