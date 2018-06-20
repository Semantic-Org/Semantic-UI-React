import PropTypes from 'prop-types'
import React from 'react'
import Knobs from 'docs/src/components/Knobs/Knobs'

const ListExampleKnobs: any = props => {
  const { onKnobChange, debug, truncateHeader, truncateContent, width } = props

  return (
    <Knobs>
      <Knobs.Scalar name="width" value={width} onChange={onKnobChange} />
      <Knobs.Boolean name="truncateHeader" value={truncateHeader} onChange={onKnobChange} />
      <Knobs.Boolean name="truncateContent" value={truncateContent} onChange={onKnobChange} />
      <Knobs.Boolean name="debug" value={debug} onChange={onKnobChange} />
    </Knobs>
  )
}

ListExampleKnobs.propTypes = {
  onKnobChange: PropTypes.func.isRequired,
  debug: PropTypes.bool,
  truncateContent: PropTypes.bool,
  truncateHeader: PropTypes.bool,
  width: PropTypes.string,
}

ListExampleKnobs.defaultProps = {
  debug: false,
  truncateContent: true,
  truncateHeader: true,
  width: '25rem',
}

export default ListExampleKnobs
