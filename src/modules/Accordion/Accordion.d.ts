import * as React from 'react'

import AccordionAccordion, { StrictAccordionAccordionProps } from './AccordionAccordion'
import AccordionContent from './AccordionContent'
import AccordionPanel from './AccordionPanel'
import AccordionTitle from './AccordionTitle'

export interface AccordionProps extends StrictAccordionProps {
  [key: string]: any
}

export interface StrictAccordionProps extends StrictAccordionAccordionProps {
  /** Additional classes. */
  className?: string

  /** Format to take up the width of its container. */
  fluid?: boolean

  /** Format for dark backgrounds. */
  inverted?: boolean

  /** Adds some basic styling to accordion panels. */
  styled?: boolean
}

interface AccordionComponent extends React.ComponentClass<AccordionProps> {
  Accordion: typeof AccordionAccordion
  Content: typeof AccordionContent
  Panel: typeof AccordionPanel
  Title: typeof AccordionTitle
}

declare const Accordion: AccordionComponent

export default Accordion
