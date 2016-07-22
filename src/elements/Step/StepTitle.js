import React from 'react'
import META from '../../utils/Meta'
import Title from '../../parts/Title'

const StepTitle = (props) => <Title {...props} />

StepTitle._meta = {
  library: META.library.semanticUI,
  name: 'StepTitle',
  parent: 'Step',
  type: META.type.element,
}

export default StepTitle
