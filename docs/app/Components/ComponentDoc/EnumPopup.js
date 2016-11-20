import React, { PropTypes } from 'react'

import { Popup, Icon, List } from 'src'

const EnumPopup = ({ values }) => (
  <Popup trigger={<Icon name='list' />}>
    <List>
      {values.map(value => (
        <List.Item>{value}</List.Item>
      ))}
    </List>
  </Popup>
)

EnumPopup.propTypes = {
  values: PropTypes.array,
}

export default EnumPopup
