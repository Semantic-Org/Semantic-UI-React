import AccordionPanel from 'src/modules/Accordion/AccordionPanel'
import * as common from 'test/specs/commonTests'

describe('AccordionPanel', () => {
  common.isConformant(AccordionPanel, { rendersChildren: false })

  // TODO: Reenable tests in future
  // https://github.com/airbnb/enzyme/issues/1553
  //
  // common.implementsShorthandProp(AccordionPanel, {
  //   assertExactMatch: false,
  //   propKey: 'content',
  //   ShorthandComponent: AccordionContent,
  //   mapValueToProps: content => ({ content }),
  // })
  // common.implementsShorthandProp(AccordionPanel, {
  //   propKey: 'title',
  //   ShorthandComponent: AccordionTitle,
  //   mapValueToProps: content => ({ content }),
  // })
})
