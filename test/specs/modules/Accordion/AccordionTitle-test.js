import * as common from 'test/specs/commonTests'

import AccordionTitle from 'src/modules/Accordion/AccordionTitle'

describe('AccordionTitle', () => {
  common.isConformant(AccordionTitle)
  common.rendersChildren(AccordionTitle)
  common.propKeyOnlyToClassName(AccordionTitle, 'active')
  common.implementsCreateMethod(AccordionTitle)
})
