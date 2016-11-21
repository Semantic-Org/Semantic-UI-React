import React, { PropTypes } from 'react'

import { Popup, List } from 'src'

const EnumPopup = ({ values, trigger }) => (
  <Popup trigger={trigger}>
    <List>
      {values.map(value => (
        <List.Item>{value}</List.Item>
      ))}
    </List>
  </Popup>
)

EnumPopup.propTypes = {
  values: PropTypes.array,
  trigger: PropTypes.node,
}

export default EnumPopup
