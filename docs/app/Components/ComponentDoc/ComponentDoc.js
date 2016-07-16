import _ from 'lodash'
import React, { PropTypes } from 'react'

import ComponentDescription from './ComponentDescription'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'
import docgenInfo from '../../docgenInfo.json'

const ComponentDoc = ({ _meta }) => {
  // TODO remove docgetInfo searching in favor of separate docgen.json in each component directory
  // this just parses out a single docgen file based on component path name
  // our current docgen gulp task concats these into one, only for us to split it back out
  const docPath = _.find(_.keys(docgenInfo), path => new RegExp(`${_meta.name}.js$`).test(path))
  const docgen = docgenInfo[docPath]

  return (
    <div>
      <ComponentDescription
        _meta={_meta}
        docgen={docgen}
        docPath={docPath}
      />
      <ComponentProps props={docgen.props} />
      {docgen.props && <ComponentProps props={docgen.props} />}
      <ComponentExamples name={_meta.name} />
    </div>
  )
}

ComponentDoc.propTypes = {
  _meta: PropTypes.object,
}

export default ComponentDoc
