import _ from 'lodash'
import React, { Component } from 'react'

export const props = (deprecated) => (Decorated) => {
  return process.env.NODE_ENV === 'production' ? Decorated : class Deprecate extends Component {
    static _meta = Decorated._meta;

    componentDidMount() {
      this.warnAboutDeprecated()
    }

    componentDidUpdate(prevProps, prevState) {
      this.warnAboutDeprecated()
    }

    warnAboutDeprecated() {
      const warnings = _.pick(deprecated, _.keys(this.props))
      _.each(warnings, (val, key) => {
        /* eslint-disable no-console */
        console.warn(`${Decorated.name} prop "${key}" is deprecated. ${val}`)
        /* eslint-enable no-console */
      })
    }

    render() {
      return <Decorated {...this.props} />
    }
  }
}
