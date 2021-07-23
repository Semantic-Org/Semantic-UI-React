import _ from 'lodash'

import { customPropTypes } from 'src/lib'
import { componentInfoContext } from 'docs/src/utils'
import { getComponentName, getComponentProps } from 'test/utils'
import { getNodes, getInterfaces, hasAnySignature, requireTs } from './tsHelpers'

const isShorthand = (propType) =>
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
 * @param {Object} [componentInfo] The *.info.json for the Component
 * @param {Object} [options={}]
 * @param {array} [options.ignoredTypingsProps=[]] Props that will be ignored in tests.
 * @param {Object} [options.requiredProps={}] Props required to render Component without errors or warnings.
 */
export default function hasValidTypings(Component, componentInfo, options = {}) {
  const { displayName, repoPath } = componentInfoContext.byDisplayName[getComponentName(Component)]
  const { ignoredTypingsProps = [], requiredProps } = options

  const tsFile = repoPath.replace('src/', '').replace('.js', '.d.ts')
  const tsContent = requireTs(tsFile)

  describe('typings', () => {
    describe('structure', () => {
      it(`${tsFile} exists`, () => {
        tsContent.should.to.not.equal(false)
      })
    })

    const tsNodes = getNodes(tsFile, tsContent)

    const propsInterfaceName = `${displayName}Props`
    const strictInterfaceName = `Strict${displayName}Props`

    const propsInterfaceObject = _.find(getInterfaces(tsNodes), { name: propsInterfaceName })
    const strictInterfaceObject = _.find(getInterfaces(tsNodes), { name: strictInterfaceName })

    describe(`interface ${propsInterfaceName}`, () => {
      it('has interface', () => {
        propsInterfaceObject.should.to.be.an('object')
      })

      it('is exported', () => {
        const { exported } = propsInterfaceObject
        exported.should.to.equal(true)
      })
    })

    describe(`interface ${strictInterfaceName}`, () => {
      it('has interface', () => {
        strictInterfaceObject.should.to.be.an('object')
      })

      it('is exported', () => {
        const { exported } = strictInterfaceObject
        exported.should.to.equal(true)
      })
    })

    describe('props', () => {
      const { props } = strictInterfaceObject

      it('has any signature', () => {
        hasAnySignature(tsNodes).should.to.equal(true)
      })

      it('match the typings interface', () => {
        const componentPropTypes = getComponentProps(Component).propTypes
        const componentProps = _.keys(componentPropTypes)
        const interfaceProps = _.without(_.map(props, 'name'), ...ignoredTypingsProps)

        componentProps.forEach((propName, index) => {
          interfaceProps.should.include(
            propName,
            `propTypes define "${propName}" but it is missing in typings`,
          )
          interfaceProps[index].should.equal(
            propName,
            `propTypes define "${propName}" but its order doesn't match typings`,
          )
        })

        interfaceProps.forEach((propName) => {
          componentProps.should.include(
            propName,
            `Typings define prop "${propName}" but it is missing in propTypes`,
          )
        })
      })

      it('isRequired props match required typings', () => {
        const componentRequired = _.keys(requiredProps)
        const interfaceRequired = _.map(_.filter(props, ['required', true]), 'name')

        componentRequired.forEach((propName) => {
          interfaceRequired.should.include(
            propName,
            `Tests require prop "${propName}" but it is optional in typings`,
          )
        })

        interfaceRequired.forEach((propName) => {
          componentRequired.should.include(
            propName,
            `Typings require "${propName}" but it is optional in tests`,
          )
        })
      })
    })

    describe('shorthands', () => {
      const { shorthands } = strictInterfaceObject
      const componentPropTypes = _.get(Component, 'propTypes')
      const componentShorthands = _.pickBy(componentPropTypes, isShorthand)

      _.forEach(componentShorthands, (propType, propName) => {
        it(`"${propName}" should have the correct shorthand type `, () => {
          const { type } = _.find(shorthands, ['name', propName])

          shorthandMap[type].should.to.equal(propType)
        })
      })
    })
  })
}
