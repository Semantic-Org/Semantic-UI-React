import _ from 'lodash'
import path from 'path'

import componentInfo from './componentInfo'
import {
  getNodes,
  getInterfaces,
  requireTs,
} from './tsHelpers'

/**
 * Assert Component has the valid typings.
 * @param {React.Component|Function} Component A component that should conform.
 * @param {Object} [extractedInfo={}]
 * @param {Object} [extractedInfo._meta={}] The meta information about Component
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render Component without errors or warnings.
 */
export default (Component, extractedInfo, options = {}) => {
  const {
    _meta: { name: componentName },
    filenameWithoutExt,
    filePath,
  } = extractedInfo || _.find(componentInfo, i => i.constructorName === Component.prototype.constructor.name)
  const { requiredProps } = options

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
      const { props: interfaceProps } = interfaceObject

      it('are correctly defined', () => {
        const componentPropTypes = _.get(Component, 'propTypes')
        const componentProps = _.keys(componentPropTypes)

        componentProps.should.to.deep.equal(_.map(interfaceProps, 'name'))
      })

      it('only necessary are required', () => {
        const componentRequired = _.keys(requiredProps)
        const interfaceRequired = _.filter(interfaceProps, ['required', true])

        componentRequired.should.to.deep.equal(_.map(interfaceRequired, 'name'))
      })
    })
  })
}
