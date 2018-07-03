import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link, withRouteData } from 'react-static'
import universal from 'react-universal-component'
import { Button, Loader } from 'semantic-ui-react'

import { repoURL } from 'docs/src/utils'

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

const LayoutComponent = universal(props => import(`docs/src/layouts/${props.filename}`), {
  loading: () => <Loader active inline='centered' />,
})

class LayoutsLayout extends PureComponent {
  static propTypes = {
    componentFilename: PropTypes.string.isRequired,
  }

  componentDidMount() {
    scrollTo(0, 0)
  }

  componentDidUpdate() {
    scrollTo(0, 0)
  }

  render() {
    const { componentFilename } = this.props

    return (
      <div>
        {style}
        <LayoutComponent filename={componentFilename} />

        <div style={docsButtonStyle}>
          <Button as={Link} to='/layouts' color='teal' icon='left arrow' content='Layouts' />
          <Button
            as={Link}
            to={`${repoURL}/blob/master/docs/src/layouts/${componentFilename}`}
            icon='github'
            content='Source'
            secondary
            target='_blank'
          />
        </div>
      </div>
    )
  }
}

export default withRouteData(LayoutsLayout)
