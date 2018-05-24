import PropTypes from 'prop-types'
import React from 'react'
import Knobs from 'docs/src/components/Knobs/Knobs'

const ListExampleKnobs = (props) => {
  const { onKnobChange, debug } = props

  return (
    <Knobs>
      <Knobs.Boolean name='debug' value={debug} onChange={onKnobChange} />
    </Knobs>
  )
}

ListExampleKnobs.propTypes = {
  onKnobChange: PropTypes.func.isRequired,
  debug: PropTypes.bool,
}

ListExampleKnobs.defaultProps = {
  debug: false,
}

export default ListExampleKnobs
