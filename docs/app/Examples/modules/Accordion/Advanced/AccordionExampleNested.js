import React from 'react'
import { Accordion } from 'semantic-ui-react'

const level1Panels = [
  { title: 'Level 1A', content: 'Level 1A Contents' },
  { title: 'Level 1B', content: 'Level 1B Contents' },
]

const Level1Content = (
  <div>
    Welcome to level 1
    <Accordion.Accordion panels={level1Panels} />
  </div>
)

const level2Panels = [
  { title: 'Level 2A', content: 'Level 2A Contents' },
  { title: 'Level 2B', content: 'Level 2B Contents' },
]

const Level2Content = (
  <div>
    Welcome to level 2
    <Accordion.Accordion panels={level2Panels} />
  </div>
)

const rootPanels = [
  { title: 'Level 1', content: { content: Level1Content, key: 'content-1' } },
  { title: 'Level 2', content: { content: Level2Content, key: 'content-2' } },
]

const AccordionExampleNested = () => (
  <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
)

export default AccordionExampleNested
