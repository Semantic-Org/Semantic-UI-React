const assert = require('assert')
const fs = require('fs')
const _ = require('lodash')
// const path = require('path')

const config = require('../../../config')
const { getNodes, getInterfaces, hasAnySignature } = require('./tsHelpers')

// const isShorthand = propType =>
//   _.includes(
//     [
//       customPropTypes.collectionShorthand,
//       customPropTypes.contentShorthand,
//       customPropTypes.itemShorthand,
// ],
// propType,
// )
// const shorthandMap = {
//   SemanticShorthandContent: customPropTypes.contentShorthand,
//   SemanticShorthandItem: customPropTypes.itemShorthand,
//   SemanticShorthandCollection: customPropTypes.collectionShorthand,
// }

/**
 * Assert Component has the valid typings.
 * @param {String} infoFileName A path to the component info.
 */
const hasValidTypings = (infoFileName) => {
  const componentInfo = require(config.paths.docsSrc('componentInfo', infoFileName))
  const { displayName, props: componentProps, repoPath } = componentInfo
  const ignoredTypingsProps = []

  const tsFile = config.paths.base(repoPath).replace('.js', '.d.ts')

  describe('structure', () => {
    it(`${displayName}.d.ts exists`, () => {
      assert.ok(fs.existsSync(tsFile))
    })
  })

  const tsNodes = getNodes(tsFile)
  const interfaceName = `${displayName}Props`
  const interfaceObject = _.find(getInterfaces(tsNodes), { name: interfaceName }) || {}

  describe(`interface ${interfaceName}`, () => {
    it('has interface', () => {
      assert(typeof interfaceObject, 'object')
    })

    it('is exported', () => {
      assert.ok(interfaceObject.exported)
    })
  })

  describe('props', () => {
    const { props } = interfaceObject

    it('has any signature', () => {
      assert.ok(hasAnySignature(tsNodes))
    })

    it('match the typings interface', () => {
      const interfaceProps = _.without(_.map(props, 'name'), ...ignoredTypingsProps)

      componentProps.forEach(({ name }) => {
        assert.ok(
          interfaceProps.includes(name),
          `propTypes define "${name}" but it is missing in typings`,
        )
        assert.ok(
          interfaceProps.includes(name),
          `propTypes define "${name}" but its order doesn't match typings`,
        )
      })

      interfaceProps.forEach((name) => {
        assert.ok(
          interfaceProps.includes(name),
          `Typings define prop "${name}" but it is missing in propTypes`,
        )
      })
    })

    // it('isRequired props match required typings', () => {
    //   const componentRequired = _.keys(requiredProps)
    //   const interfaceRequired = _.map(_.filter(props, ['required', true]), 'name')
    //
    //   componentRequired.forEach((propName) => {
    //     interfaceRequired.should.include(
    //       propName,
    //       `Tests require prop "${propName}" but it is optional in typings`,
    //     )
    //   })
    //
    //   interfaceRequired.forEach((propName) => {
    //     componentRequired.should.include(
    //       propName,
    //       `Typings require "${propName}" but it is optional in tests`,
    //     )
    //   })
    // })
  })
  //
  //   describe('shorthands', () => {
  //     const { shorthands } = interfaceObject
  //     const componentPropTypes = _.get(Component, 'propTypes')
  //     const componentShorthands = _.pickBy(componentPropTypes, isShorthand)
  //
  //     _.forEach(componentShorthands, (propType, propName) => {
  //       it(`"${propName}" should have the correct shorthand type `, () => {
  //         const { type } = _.find(shorthands, ['name', propName])
  //
  //         shorthandMap[type].should.to.equal(propType)
  //       })
  //     })
  //   })
  // })
}

module.exports = hasValidTypings
