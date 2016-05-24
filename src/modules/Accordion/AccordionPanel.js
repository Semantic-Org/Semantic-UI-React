import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes } from '../../utils/propUtils'

// This is an abstract component
// it is only used to generate Accordion children
function AccordionPanel() {
  return <noscript />
}

AccordionPanel.displayName = 'AccordionPanel'

AccordionPanel.propTypes = {
  /** The panel title.  */
  title: PropTypes.func.isRequired,

  /** The primary content, same as children. */
  content: customPropTypes.mutuallyExclusive(['children']),

  /** The primary content, same as content. */
  children: PropTypes.string,
}

AccordionPanel._meta = {
  library: META.library.semanticUI,
  name: 'AccordionPanel',
  type: META.type.module,
  parent: 'Accordion',
}

export default AccordionPanel
