import React from 'react'
import { Accordion } from 'semantic-ui-react'

const ShortContent = (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius,
    nulla quis ornare suscipit, lacus diam lacinia tellus, quis pharetra
    odio nulla nec erat. Nulla odio tortor, convallis vitae purus a,
  </div>
)

const LongContent = (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius,
    nulla quis ornare suscipit, lacus diam lacinia tellus, quis pharetra
    odio nulla nec erat. Nulla odio tortor, convallis vitae purus a,
    finibus commodo mauris. Proin in tristique ipsum, sit amet suscipit
    nulla. Nullam sed felis nec sem pharetra venenatis. Sed porta nunc vitae
    ipsum feugiat, quis faucibus velit iaculis. Nam vel lacus feugiat, gravida
    sapien quis, cursus nisl. Etiam mattis semper justo tincidunt fringilla.
    Mauris sodales,
  </div>
)

const rootPanels = [
  {
    title: 'Short Content',
    content: {
      content: ShortContent,
      key: 'content-1',
    },
  },
  {
    title: 'Long Content',
    content: {
      content: LongContent,
      key: 'content-2',
    },
  },
]

const AccordionExampleTransition = () => (
  <Accordion.Animated
    animated
    defaultActiveIndex={0}
    panels={rootPanels}
    styled
  />
)

export default AccordionExampleTransition
