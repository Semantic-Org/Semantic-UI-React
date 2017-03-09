import 'semantic-ui-css/semantic.css'
import AnchorJS from 'anchor-js'
import React, { Component, PropTypes } from 'react'

import Sidebar from 'docs/app/Components/Sidebar/Sidebar'
import style from 'docs/app/Style'
import TAAttribution from 'docs/app/Components/TAAttribution/TAAttribution'

const anchors = new AnchorJS({
  icon: '#',
})

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    this.resetPage()
  }

  componentDidUpdate(prevProps, prevState) {
    this.resetPage()
  }

  componentWillUnmount() {
    clearTimeout(this.scrollStartTimeout)
  }

  resetPage = () => {
    clearTimeout(this.scrollStartTimeout)

    scrollTo(0, 0)

    anchors
      .add('h2, h3, h4, h5, h6')
      .remove([1, 2, 3, 4, 5, 6].map(n => `.rendered-example h${n}`).join(', '))
      .remove('.no-anchor')

    this.scrollStartTimeout = setTimeout(this.scrollToAnchor, 500)
  }

  scrollToAnchor = () => {
    const anchor = location.hash && document.querySelector(location.hash)

    // no scroll to target, stop
    if (!anchor) return

    const elementTop = Math.round(anchor.getBoundingClientRect().top)

    // scrolled to element, stop
    if (elementTop === 0) return

    // hit max scroll boundaries, stop
    const isScrolledToTop = scrollY === 0
    const isScrolledToBottom = scrollY + document.body.clientHeight === document.body.scrollHeight
    const scrollStep = Math.ceil((Math.abs(elementTop / 8))) * Math.sign(elementTop)

    if (isScrolledToBottom && scrollStep > 0 || isScrolledToTop && scrollStep < 0) return

    // more scrolling to do!
    scrollBy(0, scrollStep)
    requestAnimationFrame(this.scrollToAnchor)
  }

  render() {
    return (
      <div style={style.container}>
        <Sidebar style={style.menu} />
        <div style={style.main}>
          {this.props.children}
          <TAAttribution />
        </div>
      </div>
    )
  }
}
