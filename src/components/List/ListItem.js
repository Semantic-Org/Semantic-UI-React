import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { createComponent, rem } from '../../lib'
import Layout from '../Layout'
import listVariables from './listVariables'
import listItemRules from './listItemRules'

class ListItem extends React.Component {
  static propTypes = {
    contentMedia: PropTypes.any,

    /**
     * Shorthand for primary content.
     *
     * Heads up!
     *
     * This is handled slightly differently than the typical `content` prop since
     * the wrapping ListContent is not used when there's no icon or image.
     *
     * If you pass content as:
     * - an element/literal, it's treated as the sibling node to
     * header/description (whether wrapped in Item.Content or not).
     * - a props object, it forces the presence of Item.Content and passes those
     * props to it. If you pass a content prop within that props object, it
     * will be treated as the sibling node to header/description.
     */
    content: PropTypes.any,

    /** Toggle debug mode */
    debug: PropTypes.bool,

    header: PropTypes.any,
    headerMedia: PropTypes.any,

    /** A PropTypes.list,item can appear more important and draw the user's attention. */
    important: PropTypes.bool,
    media: PropTypes.any,
    renderContentArea: PropTypes.any,
    renderHeaderArea: PropTypes.any,
    renderMainArea: PropTypes.any,

    /** A PropTypes.list,item can indicate that it can be selected. */
    selection: PropTypes.bool,
    truncateContent: PropTypes.bool,
    truncateHeader: PropTypes.bool,

    /** InPropTypes.dicates whether,the item has markers (context menu) */
    hasMarkers: PropTypes.bool,
    variables: PropTypes.any,
    styles: PropTypes.object,
    rest: PropTypes.any,
  }

  static defaultProps = {
    renderMainArea: (props, state) => {
      const { renderHeaderArea, renderContentArea } = props

      const headerArea = renderHeaderArea(props, state)
      const contentArea = renderContentArea(props, state)

      return (
        <div
          className='list-item__main'
          // vertical
          // disappearing
          // rootCSS={{
          //   gridTemplateRows: "1fr 1fr"
          // }}
          style={{
            gridTemplateRows: '1fr 1fr',
          }}
          // start={headerArea}
          // end={contentArea}
        >
          {headerArea}
          {contentArea}
        </div>
      )
    },

    renderHeaderArea: (props, state) => {
      const { debug, header, headerMedia, truncateHeader, styles } = props
      const { isHovering } = state

      const classes = classNames('list-item__header', styles.header)
      const mediaClasses = classNames('list-item__headerMedia', styles.headerMedia)

      return !header && !headerMedia ? null : (
        <Layout
          className={classes}
          alignItems='end'
          gap={rem(0.8)}
          debug={debug}
          // disappearing={!truncateHeader}
          truncateMain={truncateHeader}
          rootCSS={isHovering && { color: 'inherit' }}
          main={header}
          end={!isHovering && headerMedia && <span className={mediaClasses}>{headerMedia}</span>}
        />
      )
    },

    renderContentArea: (props, state) => {
      const { debug, content, contentMedia, styles, truncateContent } = props
      const { isHovering } = state

      const classes = classNames('list-item__content', styles.content)

      return !content && !contentMedia ? null : (
        <Layout
          className={classes}
          alignItems='start'
          gap={rem(0.8)}
          debug={debug}
          // disappearing={!truncateContent}
          truncateMain={truncateContent}
          rootCSS={isHovering && { color: 'inherit' }}
          main={content}
          end={!isHovering && contentMedia}
        />
      )
    },
  }

  state = {}

  handleMouseEnter = () => {
    this.setState({ isHovering: true })
  }

  handleMouseLeave = () => {
    this.setState({ isHovering: false })
  }

  render() {
    const { debug, media, renderMainArea, rest, styles, hasMarkers } = this.props

    const { isHovering } = this.state

    const startArea = media
    const mainArea = renderMainArea(this.props, this.state)
    const endArea = hasMarkers && isHovering && <button>&bull&bull&bull</button>

    return (
      <Layout
        alignItems='center'
        gap={rem(0.8)}
        className={classNames('list-item', styles.root)}
        debug={debug}
        reducing
        start={startArea}
        main={mainArea}
        end={endArea}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...rest}
      />
    )
  }
}

export default createComponent(ListItem, {
  rules: listItemRules,
  variables: listVariables,
})
