import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import { NavLink, Route } from 'react-router-dom'

import { Button } from 'src'
import { getUnhandledProps } from 'src/lib'
import { repoURL } from 'docs/app/utils'

const docsButtonStyle = {
  position: 'fixed',
  margin: '2em',
  bottom: 0,
  left: 0,
  animation: 'back-to-docs 1.5s ease-in-out infinite',
  zIndex: 6,
}

const style = (
  <style>{`
    @keyframes back-to-docs {
        0% { transform: translateY(0); }
        50% { transform: translateY(0.35em); }
        100% { transform: translateY(0); }
    }
  `}</style>
)

export default class LayoutsLayout extends Component {
  static propTypes = {
    component: PropTypes.func,
    render: PropTypes.func,
    computedMatch: PropTypes.object,
  }

  componentDidMount() {
    scrollTo(0, 0)
  }

  componentDidUpdate() {
    scrollTo(0, 0)
  }

  renderChildren = (props) => {
    const { component: Children, computedMatch, render } = this.props

    if (render) return render()

    const filename = `${_.startCase(computedMatch.params.name).replace(' ', '')}Layout.js`

    return (
      <div>
        {style}
        <Children {...props} />
        <div style={docsButtonStyle}>
          <Button
            as={NavLink}
            to='/layouts'
            color='teal'
            icon='left arrow'
            content='Layouts'
          />
          <Button
            as={NavLink}
            to={`${repoURL}/blob/master/docs/app/Layouts/${filename}`}
            color='secondary'
            icon='github'
            content='Source'
            target='_blank'
          />
        </div>
      </div>
    )
  }

  render() {
    const rest = getUnhandledProps(LayoutsLayout, this.props)

    return <Route {...rest} render={this.renderChildren} />
  }
}
