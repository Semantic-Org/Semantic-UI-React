import React from 'react'
import META from '../../utils/Meta'
import Content from '../../parts/Content'

const StepContent = (props) => <Content {...props} />

StepContent._meta = {
  library: META.library.semanticUI,
  name: 'StepContent',
  parent: 'Step',
  type: META.type.element,
}

export default StepContent
