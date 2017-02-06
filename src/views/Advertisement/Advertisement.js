import React, { PropTypes } from 'react'
import {
  customPropTypes,
  META,
} from '../../lib'

/**
*An ad displays third-party promotional content
*/
function Advertisement(props) {

}

Advertisement._meta = {
  name: 'Advertisement',
  type: META.TYPES.VIEWS,
}

Advertisement.propTypes = {
  as: customPropTypes.as,

  className: PropTypes.string,
}

export default Advertisement
