import _ from 'lodash'
import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

import ComponentDescription from './ComponentDescription'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'
import docgenInfo from '../../docgenInfo.json'

const ComponentDoc = ({ _meta }) => {
  // TODO remove docgetInfo searching in favor of separate docgen.json in each component directory
  // This just parses out a single docgen file based on component path name.
  // Our current docgen gulp task concats these into one, only for us to split it back out.
  // The leading slash in the RegEx is required, some components end with the same name.
  const docPath = _.find(_.keys(docgenInfo), path => new RegExp(`${__PATH_SEP__}${_meta.name}.js$`).test(path))
  const docgen = docgenInfo[docPath]

  return (
    <DocumentTitle title={`${_meta.name} | UI React`}>
      <div>
        <ComponentDescription
          _meta={_meta}
          docgen={docgen}
          docPath={docPath}
        />
        {docgen.props && <ComponentProps props={docgen.props} />}
        <ComponentExamples name={_meta.name} />
      </div>
    </DocumentTitle>
  )
}

ComponentDoc.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  _meta: PropTypes.object,
}

export default ComponentDoc
