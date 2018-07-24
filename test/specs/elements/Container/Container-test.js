import Container from 'src/elements/Container/Container'
import * as common from 'test/specs/commonTests'

describe('Container', () => {
  common.isConformant(Container)
  common.rendersChildren(Container)
  common.hasUIClassName(Container)

  common.propKeyOnlyToClassName(Container, 'text')
  common.propKeyOnlyToClassName(Container, 'fluid')

  common.implementsTextAlignProp(Container)
})
