import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'

describe('AccordionTitle', () => {
  common.isConformant(AccordionTitle)
  common.rendersChildren(AccordionTitle)

  common.implementsCreateMethod(AccordionTitle)

  common.propKeyOnlyToClassName(AccordionTitle, 'active')
})
