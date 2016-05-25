import Accordion from 'src/modules/Accordion/Accordion'
import AccordionPanel from 'src/modules/Accordion/AccordionPanel'
import * as common from 'test/specs/commonTests'

describe('Accordion', () => {
  common.isConformant(Accordion)
  common.hasUIClassName(Accordion)
  common.hasSubComponents(Accordion, [AccordionPanel])
  common.propKeyOnlyToClassName(Accordion, 'fluid')
  common.propKeyOnlyToClassName(Accordion, 'inverted')
  common.propKeyOnlyToClassName(Accordion, 'styled')
})
