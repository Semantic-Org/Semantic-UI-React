import React, { Component, PropTypes } from 'react'
import { Segment } from 'stardust'

import ComponentDescription from './ComponentDescription'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'
import getComponentDocInfo from 'docs/app/utils/getComponentDocInfo'

export default class ComponentDoc extends Component {
  static propTypes = {
    meta: PropTypes.object,
  };

  render() {
    const doc = getComponentDocInfo(this.props.meta)

    return (
      <Segment id={doc.name}>
        <ComponentDescription
          path={doc.path}
          name={doc.name}
          parent={doc.parent}
          type={doc.type}
          description={doc.docBlock.description}
        />
        <ComponentProps props={doc.props} />
        <ComponentExamples name={doc.name} />
      </Segment>
    )
  }
}
