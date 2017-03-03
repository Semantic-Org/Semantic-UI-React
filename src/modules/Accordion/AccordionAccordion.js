import React from 'react'

import { createShorthandFactory, META } from '../../lib'
import Accordion from './Accordion'

/**
 * An accordion sub-component for Accordion component.
 */
function AccordionAccordion(props) {
  return <Accordion {...props} ui={false} />
}

AccordionAccordion._meta = {
  name: 'AccordionAccordion',
  type: META.TYPES.MODULE,
  parent: 'Accordion',
}

AccordionAccordion.create = createShorthandFactory(AccordionAccordion, content => ({ content }))

export default AccordionAccordion
