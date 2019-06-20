import includes from 'lodash/includes'
import map from 'lodash/map'
import slice from 'lodash/slice'
import PropTypes from 'prop-types'
import React from 'react'

import ComponentPropExtra from './ComponentPropExtra'
import ComponentPropToggle from './ComponentPropEnumToggle'
import ComponentPropValue from './ComponentPropEnumValue'

const ComponentPropEnum = ({ limit, showAll, toggle, type, values }) => {
  if (!includes(type, 'enum') || !values) return null

  const exceeds = values.length > limit
  const sliced = showAll ? values : slice(values, 0, limit)

  return (
    <ComponentPropExtra inline title='Enums: '>
      {exceeds && <ComponentPropToggle toggle={toggle} total={values.length} showAll={showAll} />}

      <div>
        {map(sliced, (value) => (
          <ComponentPropValue key={value}>{value}</ComponentPropValue>
        ))}
        {exceeds && !showAll && '...'}
      </div>
    </ComponentPropExtra>
  )
}

ComponentPropEnum.defaultProps = {
  limit: 50,
}

ComponentPropEnum.propTypes = {
  limit: PropTypes.number,
  showAll: PropTypes.bool,
  toggle: PropTypes.func,
  type: PropTypes.string,
  values: PropTypes.array,
}

export default React.memo(ComponentPropEnum)
