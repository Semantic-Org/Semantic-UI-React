import React from 'react'
import META from '../../utils/Meta'
import Description from '../../parts/Description'

const StepDescription = (props) => <Description {...props} />

StepDescription._meta = {
  library: META.library.semanticUI,
  name: 'StepDescription',
  parent: 'Step',
  type: META.type.element,
}

export default StepDescription
