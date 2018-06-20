import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { createComponent, customPropTypes, getUnhandledProps, rem } from '../../lib'
import Layout from '../Layout'
import listVariables from './listVariables'
import listItemRules from './listItemRules'

class ListItem extends React.Component<any, any> {
  static propTypes = {
    as: customPropTypes.as,

    /** Additional classes. */
    className: PropTypes.string,

    contentMedia: PropTypes.any,

    /** Shorthand for primary content. */
    content: PropTypes.any,

    /** Toggle debug mode */
    debug: PropTypes.bool,

    header: PropTypes.any,
    endMedia: PropTypes.any,
    headerMedia: PropTypes.any,

    /** A list item can appear more important and draw the user's attention. */
    important: PropTypes.bool,
    media: PropTypes.any,
    renderContentArea: PropTypes.any,
    renderHeaderArea: PropTypes.any,
    renderMainArea: PropTypes.any,

    /** A list item can indicate that it can be selected. */
    selection: PropTypes.bool,
    truncateContent: PropTypes.bool,
    truncateHeader: PropTypes.bool,

    variables: PropTypes.any,
    styles: PropTypes.object,
  }

  static handledProps = [
    'as',
    'className',
    'contentMedia',
    'content',
    'debug',
    'header',
    'endMedia',
    'headerMedia',
    'important',
    'media',
    'renderContentArea',
    'renderHeaderArea',
    'renderMainArea',
    'selection',
    'truncateContent',
    'truncateHeader',
    'variables',
    'styles',
  ]

  static defaultProps = {
    as: 'li',

    renderMainArea: (props, state) => {
      const { renderHeaderArea, renderContentArea } = props

      const headerArea = renderHeaderArea(props, state)
      const contentArea = renderContentArea(props, state)

      return (
        <div
          className="list-item__main"
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

      const classes = cx('ui-list__item__header', styles.header)
      const mediaClasses = cx('ui-list__item__headerMedia', styles.headerMedia)

      return !header && !headerMedia ? null : (
        <Layout
          className={classes}
          alignItems="end"
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

      const classes = cx('ui-list__item__content', styles.content)

      return !content && !contentMedia ? null : (
        <Layout
          className={classes}
          alignItems="start"
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

  state: any = {}

  handleMouseEnter = () => {
    this.setState({ isHovering: true })
  }

  handleMouseLeave = () => {
    this.setState({ isHovering: false })
  }

  render() {
    const { as, className, debug, endMedia, media, renderMainArea, styles } = this.props
    const { isHovering } = this.state

    const rest = getUnhandledProps(ListItem, this.props)

    const startArea = media
    const mainArea = renderMainArea(this.props, this.state)
    const endArea = isHovering && endMedia

    return (
      <Layout
        as={as}
        alignItems="center"
        gap={rem(0.8)}
        className={cx('ui-list__item', styles.root, className)}
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
  shorthand: main => ({ main }),
})
