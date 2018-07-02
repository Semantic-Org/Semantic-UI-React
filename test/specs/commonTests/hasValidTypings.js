import fs from 'fs'
import _ from 'lodash'

import { customPropTypes } from 'src/lib'
import { componentInfo } from 'test/utils'
import { getNodes, getInterfaces, hasAnySignature } from './tsHelpers'

const isShorthand = propType =>
  _.includes(
    [
      customPropTypes.collectionShorthand,
      customPropTypes.contentShorthand,
      customPropTypes.itemShorthand,
    ],
    propType,
  )
const shorthandMap = {
  SemanticShorthandContent: customPropTypes.contentShorthand,
  SemanticShorthandItem: customPropTypes.itemShorthand,
  SemanticShorthandCollection: customPropTypes.collectionShorthand,
}

/**
 * Assert Component has the valid typings.
 * @param {React.Component|Function} Component A component that should conform.
 * @param {Object} [options={}]
 * @param {array} [options.ignoredTypingsProps=[]] Props that will be ignored in tests.
 * @param {Object} [options.requiredProps={}] Props required to render Component without errors or warnings.
 */
export default (Component, options = {}) => {
  const { displayName, repoPath } = componentInfo(Component.name)
  const { ignoredTypingsProps = [], requiredProps } = options

  const tsFile = repoPath.replace('.js', '.d.ts')
  const tsContent = fs.readFileSync(tsFile).toString()

  describe('typings', () => {
    describe('structure', () => {
      it(`${tsFile} exists`, () => {
        expect(tsContent).not.toBeFalsy()
      })
    })

    const tsNodes = getNodes(tsFile, tsContent)
    const interfaceName = `${displayName}Props`
    const interfaceObject = _.find(getInterfaces(tsNodes), { name: interfaceName }) || {}

    describe(`interface ${interfaceName}`, () => {
      it('has interface', () => {
        expect(typeof interfaceObject).toBe('object')
      })

      it('is exported', () => {
        const { exported } = interfaceObject
        expect(exported).toBe(true)
      })
    })

    describe('props', () => {
      const { props } = interfaceObject

      it('has any signature', () => {
        expect(hasAnySignature(tsNodes)).toBe(true)
      })

      it('match the typings interface', () => {
        const componentPropTypes = _.get(Component, 'propTypes')
        const componentProps = _.keys(componentPropTypes)
        const interfaceProps = _.without(_.map(props, 'name'), ...ignoredTypingsProps)

        componentProps.forEach((propName, index) => {
          expect(interfaceProps).toContain(propName)
          expect(interfaceProps[index]).toBe(propName)
        })

        interfaceProps.forEach((propName) => {
          expect(componentProps).toContain(propName)
        })
      })

      it('isRequired props match required typings', () => {
        const componentRequired = _.keys(requiredProps)
        const interfaceRequired = _.map(_.filter(props, ['required', true]), 'name')

        componentRequired.forEach((propName) => {
          expect(interfaceRequired).toContain(propName)
        })

        interfaceRequired.forEach((propName) => {
          expect(componentRequired).toContain(propName)
        })
      })
    })

    describe('shorthands', () => {
      const { shorthands } = interfaceObject
      const componentPropTypes = _.get(Component, 'propTypes')
      const componentShorthands = _.pickBy(componentPropTypes, isShorthand)

      _.forEach(componentShorthands, (propType, propName) => {
        it(`"${propName}" should have the correct shorthand type `, () => {
          const { type } = _.find(shorthands, ['name', propName])

          expect(shorthandMap[type]).toBe(propType)
        })
      })
    })
  })
}
