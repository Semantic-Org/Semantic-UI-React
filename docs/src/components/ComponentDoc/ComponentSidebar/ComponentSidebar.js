import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Accordion, Sticky } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'
import { docTypes } from 'docs/src/utils'
import ComponentSidebarSection from './ComponentSidebarSection'

const sidebarStyle = {
  background: '#fff',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
  paddingLeft: '1em',
  paddingBottom: '0.1em',
  paddingTop: '0.1em',
}

const ComponentSidebar = ({ activePath, examplesRef, onItemClick, sections }) => (
  <Sticky context={examplesRef} offset={15}>
    <Accordion className='fluid vertical text menu' style={sidebarStyle}>
      {_.map(sections, ({ examples, sectionName }) => (
        <ComponentSidebarSection
          activePath={activePath}
          examples={examples}
          key={sectionName}
          sectionName={sectionName}
          onItemClick={onItemClick}
        />
      ))}
    </Accordion>
  </Sticky>
)

ComponentSidebar.propTypes = {
  activePath: PropTypes.string,
  examplesRef: PropTypes.object,
  onItemClick: PropTypes.func.isRequired,
  sections: docTypes.sidebarSections.isRequired,
}

export default updateForKeys(['activePath'])(ComponentSidebar)
