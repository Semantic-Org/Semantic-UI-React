import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { isDOMComponent } from 'react-addons-test-utils'
import META from '../../src/utils/Meta'
import componentInfo from '../utils/componentInfo'

// HeaderH1 => sd-header-h1
const getSDClassName = constructorName => (
  `sd-${constructorName.replace(/(?!^)([A-Z])/g, '-$1').toLowerCase()}`
)

/**
 * This test ensures all Stardust components conform to our guidelines.
 */
describe('Conformance', () => {
  /* eslint-disable no-console */
  console.info('Conformance-test renders each component with no props, required prop warnings may occur.')
  /* eslint-enable no-console */
  _.each(componentInfo, (info) => {
    const { Component, constructorName, filenameWithoutExt } = info

    const sdClass = getSDClassName(info.constructorName)
    const children = render(<Component />).children()
    const firstChild = _.first(children)

    describe(constructorName, () => {
      it('extends Component', () => {
        expect(Component.prototype).to.eql(React.Component.prototype)
      })

      it(`constructor name matches filename "${constructorName}"`, () => {
        constructorName.should.equal(filenameWithoutExt)
      })

      it(`has no wrapper elements, first child is "${sdClass}"`, () => {
        // private components may be used as root elements and will not have the sd-* class
        // skip any assertions if the first child is a private component
        // TODO: this excludes private components from conformance, need to find a sane way to get conformance coverage
        // if (META.isPrivate(_.first(children))) {
        //   return
        // }

        if (isDOMComponent(firstChild)) {
          expect(firstChild.getAttribute('class')).to.contain(sdClass)
        } else {
          expect(firstChild.props.className).to.contain(sdClass)
        }
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
              expect(_.pluck(componentInfo, 'constructorName')).to.contain(_meta.parent)
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
          render(<Component {...props} />)
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
        describe('className', () => {
          it(`has props.className after "${sdClass}"`, () => {
            let renderedClasses
            if (isDOMComponent(firstChild)) {
              renderedClasses = firstChild.getAttribute('class')
            } else {
              renderedClasses = firstChild.props.className
            }
            const sdClassIndex = renderedClasses.indexOf(sdClass)
            expect(sdClassIndex).to.equal(0)
          })

          // Determine if this Component is composed of DOM components (div, span, etc)
          // or if it is composed of other components (<Modal />, <textarea />, etc)
          //
          // Components composed of DOM components will have their "sd-*" class listed first:
          //
          //   <Modal /> => <div className='sd-modal...
          //   The "sd-modal" class is first.
          //
          // Components composed of Components will have their "sd-*" classes in an unknown position:
          //
          //   <Confirm /> => <Modal /> => <div className='sd-modal sd-confirm...
          //   The "sd-confirm" class is inherited by Modal, after the "sd-modal" class
          //   It is not practical to assume the position of the "sd-*" for composite components.
          //   There may be intermediate classes such as "ui" and other composite component classes.

          if (isDOMComponent(firstChild)) {
            it(`has "${sdClass}" as the first class`, () => {
              render(<Component />)
                .findClass(sdClass)
                .getAttribute('class')
                .indexOf(sdClass).should.equal(0)
            })
          }
        })
      })
    })
  })
})
