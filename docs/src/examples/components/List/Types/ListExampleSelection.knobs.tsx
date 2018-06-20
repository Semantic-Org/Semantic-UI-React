import PropTypes from 'prop-types'
import React from 'react'
import Knobs from 'docs/src/components/Knobs/Knobs'

const ListExampleSelectionKnobs: any = props => {
  const { onKnobChange, selection } = props

  return (
    <Knobs>
      <Knobs.Boolean name="selection" value={selection} onChange={onKnobChange} />
    </Knobs>
  )
}

ListExampleSelectionKnobs.propTypes = {
  onKnobChange: PropTypes.func.isRequired,
  selection: PropTypes.bool,
}

ListExampleSelectionKnobs.defaultProps = {
  selection: true,
}

export default ListExampleSelectionKnobs
