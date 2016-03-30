import faker from 'faker'
import _ from 'lodash'
import path from 'path'
import React, { createElement } from 'react'

import META from 'src/utils/Meta'
import * as stardust from 'stardust'
import * as consoleUtil from 'test/utils/consoleUtil'

const componentCtx = require.context('../../src/', true, /(addons|collections|elements|modules|views).*\.js$/)

const componentInfo = componentCtx.keys().map(key => {
  const Component = componentCtx(key).default
  const { _meta, prototype } = Component

  const constructorName = prototype.constructor.name
  const filePath = key
  const filename = path.basename(key)
  const filenameWithoutExt = path.basename(key, '.js')
  const subComponentName = _meta.parent ? _meta.name.replace(_meta.parent, '') : null
  // HeaderH1 => sd-header-h1
  const sdClass =
    'sd-' + constructorName
      .replace('_', '')                 // remove underscore
      .replace(/(?!^)([A-Z])/g, '-$1')  // prefix capitals with hyphen
      .toLowerCase()                    // lowercase

  const componentClassName = (subComponentName || constructorName).toLowerCase()

  return {
    _meta,
    Component,
    constructorName,
    sdClass,
    componentClassName,
    subComponentName,
    filePath,
    filename,
    filenameWithoutExt,
  }
})

/**
 * Assert Component conforms to guidelines that are applicable to all components.
 * @param {React.Component|Function} Component A component that should conform.
 * @param {Object} [requiredProps={}] Props required to render Component without errors or warnings.
 */
export const isConformant = (Component, requiredProps = {}) => {
  const info = componentInfo.find(i => i.constructorName === Component.prototype.constructor.name)
  const { _meta, constructorName, componentClassName, filenameWithoutExt, sdClass } = info

  const subComponentName = _meta.parent && _meta.name.replace(_meta.parent, '')

  // ----------------------------------------
  // Class and file name
  // ----------------------------------------
  it(`constructor name matches filename "${constructorName}"`, () => {
    constructorName.should.equal(filenameWithoutExt)
  })

  // ----------------------------------------
  // Is exported or private
  // ----------------------------------------
  const isPrivate = META.isPrivate(constructorName)

  // detect components like: stardust.H1
  const isStardustProp = _.has(stardust, constructorName)

  // detect sub components like: stardust.Form.Field (ie FormField component)
  // only search the 'parent' for the sub component
  // avoid false positives like DropdownItem & MenuItem
  //   which both have sub component names of "Item", and appear
  //   on both Dropdown.Item and Menu.Item (not to mention Stardust.Item)
  const isSubComponent = _.isFunction(_.get(stardust, `[${_meta.parent}][${subComponentName}]`))

  if (isPrivate) {
    it(`is not exported as a component nor sub component`, () => {
      expect(isStardustProp).to.equal(false,
        `"${constructorName}" is private (starts with  "_").` +
        ` It cannot be a key on the stardust object`
      )

      expect(isSubComponent).to.equal(false,
        `"${constructorName}" is private (starts with "_").` +
        ` It cannot be a static prop of another component (sub-component)`
      )
    })
  } else {
    it(`is exported as a component or sub component`, () => {
      expect(isStardustProp || isSubComponent).to.equal(true,
        `"${constructorName}" must be:` +
        ` a key on stardust` +
        ` || key on another component (sub-component)` +
        ` || private (start with "_")`
      )
    })
  }

  // ----------------------------------------
  // Handles props
  // ----------------------------------------
  it('spreads props', () => {
    // JSX does not render custom html attributes so we prefix them with data-*.
    // https://facebook.github.io/react/docs/jsx-gotchas.html#custom-html-attributes
    const props = {
      [`data-${_.kebabCase(faker.hacker.noun())}`]: faker.hacker.verb(),
    }

    shallow(<Component {...requiredProps} {...props} />)
      .should.have.descendants(props)
  })

  // ----------------------------------------
  // Defines _meta
  // ----------------------------------------
  describe('_meta', () => {
    it('is a static object prop', () => {
      expect(_meta).to.be.an('object')
    })

    describe('library', () => {
      it('is defined', () => {
        expect(_meta).to.have.any.keys('library')
      })
      it('is a META.library', () => {
        expect(_.values(META.library)).to.contain(_meta.library)
      })
    })
    describe('name', () => {
      it('is defined', () => {
        expect(_meta).to.have.any.keys('name')
      })
      it('matches the filename', () => {
        expect(_meta.name).to.equal(filenameWithoutExt)
      })
    })
    if ('parent' in _meta) {
      describe('parent', () => {
        it('matches some component name', () => {
          expect(_.map(stardust, c => c.prototype.constructor.name)).to.contain(_meta.parent)
        })
      })
    }
    describe('type', () => {
      it('is defined', () => {
        expect(_meta).to.have.any.keys('type')
      })
      it('is a META.type', () => {
        expect(_.values(META.type)).to.contain(_meta.type)
      })
    })
  })

  // ----------------------------------------
  // Handles className
  // ----------------------------------------
  describe('className', () => {
    it(`has some child with the "${sdClass}" class`, () => {
      render(<Component {...requiredProps} />)
        .should.have.className(sdClass)
    })

    if (META.isSemanticUI(Component)) {
      it(`has the component className "${componentClassName}"`, () => {
        render(<Component {...requiredProps} />)
          .should.have.className(componentClassName)
      })
    }

    it("applies user's className to root component", () => {
      const classes = faker.hacker.phrase()
      shallow(<Component {...requiredProps} className={classes} />)
        .hasClass(classes)
    })
  })
}

/**
 * Assert a component adds the Semantic UI "ui" className.
 * @param {React.Component|Function} Component The Component.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const hasUIClassName = (Component, requiredProps = {}) => {
  it('has the "ui" className', () => {
    shallow(createElement(Component, requiredProps))
      .should.have.className('ui')
  })
}

/**
 * Assert a component exposes other components as (static properties).
 * @param {React.Component|Function} Component The Component.
 * @param {React.Component[]} subComponents Array of components that should exist on Component.
 */
export const hasSubComponents = (Component, subComponents) => {
  const staticValues = _.values(Component)

  _.each(subComponents, subComponent => {
    it(`has sub component ${subComponent._meta.name}`, () => {
      staticValues.should.contain(subComponent)
    })
  })
}

/**
 * Assert a component renders children somewhere in the tree.
 * @param {React.Component|Function} Component A component that should render children.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const rendersChildren = (Component, requiredProps = {}) => {
  it('renders child text', () => {
    const text = faker.hacker.phrase()
    shallow(createElement(Component, requiredProps, text))
      .should.contain.text(text)
  })

  it('renders child components', () => {
    const child = <div data-child={faker.hacker.noun()} />
    shallow(createElement(Component, requiredProps, child))
      .should.contain(child)
  })
}

// ----------------------------------------
// className from prop
// ----------------------------------------
const _definesPropOptions = (Component, propKey) => {
  it(`defines ${propKey} options in Component._meta.props`, () => {
    Component.should.have.any.keys('_meta')
    Component._meta.should.have.any.keys('props')
    Component._meta.props.should.have.any.keys(propKey)
    Component._meta.props[propKey].should.be.an('array')
  })
}

const _noDefaultClassNameFromProp = (Component, propKey, requiredProps = {}) => {
  it('is not included in className when not defined', () => {
    const wrapper = shallow(<Component {...requiredProps} />)
    wrapper.should.not.have.className(propKey)
    _.each(Component._meta.props[propKey], propVal => {
      wrapper.should.not.have.className(propVal)
    })
  })
}

const _noClassNameFromBoolProps = (Component, propKey, requiredProps) => {
  const booleans = [true, false]

  _.each(booleans, bool => it(`does not add any className when ${bool}`, () => {
    // silence propType warnings
    consoleUtil.disableOnce()

    const wrapper = shallow(createElement(Component, { ...requiredProps, [propKey]: bool }))

    wrapper.should.not.have.className(propKey)
    wrapper.should.not.have.className('true')
    wrapper.should.not.have.className('false')

    _.each(Component._meta.props[propKey], propVal => {
      wrapper.should.not.have.className(propVal)
    })
  }))
}

const _classNamePropValueBeforePropName = (Component, propKey, requiredProps) => {
  it('adds "${value} ${name}" to className', () => {
    const sample = _.sample(Component._meta.props[propKey])
    shallow(createElement(Component, { ...requiredProps, [propKey]: sample }))
      .should.have.className(`${sample} ${propKey}`)
  })
}

/**
 * Assert that only a Component prop's name is converted to className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const propKeyOnlyToClassName = (Component, propKey, requiredProps = {}) => {
  describe(propKey, () => {
    _noDefaultClassNameFromProp(Component, propKey, requiredProps)

    it(`adds prop name to className`, () => {
      shallow(createElement(Component, { ...requiredProps, [propKey]: true }))
        .should.have.className(propKey)
    })

    it(`does not add prop value to className`, () => {
      // silence propType warnings
      consoleUtil.disableOnce()

      const value = faker.hacker.noun()
      shallow(createElement(Component, { ...requiredProps, [propKey]: value }))
        .should.not.have.className(value)
    })
  })
}

/**
 * Assert that only a Component prop's value is converted to className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const propValueOnlyToClassName = (Component, propKey, requiredProps = {}) => {
  describe(propKey, () => {
    _definesPropOptions(Component, propKey)
    _noDefaultClassNameFromProp(Component, propKey, requiredProps)
    _noClassNameFromBoolProps(Component, propKey, requiredProps)

    it('adds prop value to className', () => {
      const sample = _.sample(Component._meta.props[propKey])
      shallow(createElement(Component, { ...requiredProps, [propKey]: sample }))
        .should.have.className(sample)
    })

    it('does not add prop name to className', () => {
      // silence propType warnings
      consoleUtil.disableOnce()

      const sample = _.sample(Component._meta.props[propKey])
      shallow(createElement(Component, { ...requiredProps, [propKey]: sample }))
        .should.not.have.className(propKey)
    })
  })
}

/**
 * Assert that a Component prop's name and value are required to create a className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const propKeyAndValueToClassName = (Component, propKey, requiredProps = {}) => {
  describe(propKey, () => {
    _definesPropOptions(Component, propKey)
    _noDefaultClassNameFromProp(Component, propKey)
    _noClassNameFromBoolProps(Component, propKey, requiredProps)
    _classNamePropValueBeforePropName(Component, propKey, requiredProps)
  })
}

/**
 * Assert that a Component prop name or value convert to a className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const propKeyOrValueToClassName = (Component, propKey, requiredProps = {}) => {
  describe(propKey, () => {
    _definesPropOptions(Component, propKey)
    _noDefaultClassNameFromProp(Component, propKey, requiredProps)
    _classNamePropValueBeforePropName(Component, propKey, requiredProps)
    beforeEach(() => {
      // silence propType warnings
      consoleUtil.disableOnce()
    })

    it(`adds only the name to className when true`, () => {
      shallow(createElement(Component, { ...requiredProps, [propKey]: true }))
        .should.have.className(propKey)
    })

    it(`adds no className when false`, () => {
      const wrapper = shallow(createElement(Component, { ...requiredProps, [propKey]: false }))

      wrapper.should.not.have.className(propKey)
      wrapper.should.not.have.className('true')
      wrapper.should.not.have.className('false')

      _.each(Component._meta.props[propKey], propVal => {
        wrapper.should.not.have.className(propVal)
      })
    })
  })
}
