import React, { PropTypes } from 'react'

import ComponentDescription from './ComponentDescription'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'
import getComponentDocInfo from 'docs/app/utils/getComponentDocInfo'

const ComponentDoc = ({ _meta }) => {
  // TODO remove util in favor of separate docgen.json in each component directory
  // this util just parses out a single docgen file based on component path name
  // our current docgen gulp task concats these into one, only for us to split it back out
  const doc = getComponentDocInfo(_meta)

  return (
    <div>
      <ComponentDescription
        _meta={_meta}
        docgen={doc.docgen}
        docPath={doc.docPath}
      />
      <ComponentProps props={doc.docgen.props} />
      <ComponentExamples name={_meta.name} />
    </div>
  )
}

ComponentDoc.propTypes = {
  _meta: PropTypes.object,
}

export default ComponentDoc
