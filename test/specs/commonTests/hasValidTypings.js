import _ from 'lodash'
import path from 'path'

import componentInfo from './componentInfo'
import {
  getNodes,
  getInterfaces,
  hasAnySignature,
  requireTs,
} from './tsHelpers'

/**
 * Assert Component has the valid typings.
 * @param {React.Component|Function} Component A component that should conform.
 * @param {Object} [extractedInfo={}]
 * @param {Object} [extractedInfo._meta={}] The meta information about Component
 * @param {Object} [options={}]
 * @param {array} [options.ignoredTypingsProps=[]] Props that will be ignored in tests.
 * @param {Object} [options.requiredProps={}] Props required to render Component without errors or warnings.
 */
export default (Component, extractedInfo, options = {}) => {
  const {
    _meta: { name: componentName },
    filenameWithoutExt,
    filePath,
  } = extractedInfo || _.find(componentInfo, i => i.constructorName === Component.prototype.constructor.name)
  const { ignoredTypingsProps = [], requiredProps } = options

  const tsFile = filenameWithoutExt + '.d.ts'
  const tsContent = requireTs(path.join(path.dirname(filePath), tsFile))

  describe('typings', () => {
    describe('structure', () => {
      it(`${tsFile} exists`, () => {
        tsContent.should.to.not.equal(false)
      })
    })

    const tsNodes = getNodes(tsFile, tsContent)
    const interfaceName = `${componentName}Props`
    const interfaceObject = _.find(getInterfaces(tsNodes), { name: interfaceName }) || {}

    describe(`interface ${interfaceName}`, () => {
      it('has interface', () => {
        interfaceObject.should.to.be.an('object')
      })

      it('is exported', () => {
        const { exported } = interfaceObject
        exported.should.to.equal(true)
      })
    })

    describe('props', () => {
      const { props } = interfaceObject

      it('has any signature', () => {
        hasAnySignature(tsNodes).should.to.equal(true)
      })

      it('are correctly defined', () => {
        const componentPropTypes = _.get(Component, 'propTypes')
        const componentProps = _.keys(componentPropTypes)
        const interfaceProps = _.without(_.map(props, 'name'), ...ignoredTypingsProps)

        componentProps.should.to.deep.equal(interfaceProps)
      })

      it('only necessary are required', () => {
        const componentRequired = _.keys(requiredProps)
        const interfaceRequired = _.filter(props, ['required', true])

        componentRequired.should.to.deep.equal(_.map(interfaceRequired, 'name'))
      })
    })
  })
}
