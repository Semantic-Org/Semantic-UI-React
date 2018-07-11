import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { customPropTypes, UIComponent } from '../../lib'
import layoutRules from './layoutRules'

class Layout extends UIComponent<any, any> {
  static className = 'ui-layout'

  static displayName = 'Layout'

  static rules = layoutRules

  static propTypes = {
    as: customPropTypes.as,
    className: PropTypes.string,
    debug: PropTypes.bool,

    renderStartArea: PropTypes.func,
    renderMainArea: PropTypes.func,
    renderEndArea: PropTypes.func,
    renderGap: PropTypes.func,

    /** Styled applied to the root element of the rendered component. */
    rootCSS: PropTypes.object,

    start: PropTypes.any,
    startCSS: PropTypes.object,
    startSize: PropTypes.string,

    main: PropTypes.any,
    mainCSS: PropTypes.object,
    mainSize: PropTypes.string,

    end: PropTypes.any,
    endCSS: PropTypes.object,
    endSize: PropTypes.string,

    /** How to align items on-axis within the layout (i.e. vertical or not). */
    justifyItems: PropTypes.any,

    /** How to align cross-axis items within the layout (i.e. vertical or not). */
    alignItems: PropTypes.any,

    /** A layout can have gaps of whitespace between areas. */
    gap: PropTypes.string,

    /** A layout can reduce to the minimum required areas. */
    reducing: PropTypes.bool,

    /** A layout can render its content directly if only one piece of content exists. */
    disappearing: PropTypes.bool,

    truncateStart: PropTypes.bool,
    truncateMain: PropTypes.bool,
    truncateEnd: PropTypes.bool,

    vertical: PropTypes.bool,
  }

  static handledProps = [
    'alignItems',
    'as',
    'className',
    'debug',
    'disappearing',
    'end',
    'endCSS',
    'endSize',
    'gap',
    'justifyItems',
    'main',
    'mainCSS',
    'mainSize',
    'reducing',
    'renderEndArea',
    'renderGap',
    'renderMainArea',
    'renderStartArea',
    'rootCSS',
    'start',
    'startCSS',
    'startSize',
    'truncateEnd',
    'truncateMain',
    'truncateStart',
    'vertical',
  ]

  static defaultProps = {
    as: 'div',
    startSize: 'auto',
    mainSize: '1fr',
    endSize: 'auto',

    // TODO: when an area is another Layout, do not wrap them in an extra div
    // TODO: option 1) higher value layouts could use start={Layout.create(start)} to ensure Areas are layout root
    renderStartArea({ start, classes }) {
      return start && <div className={cx('ui-layout__start', classes.start)}>{start}</div>
    },

    renderMainArea({ main, classes }) {
      return main && <div className={cx('ui-layout__main', classes.main)}>{main}</div>
    },

    renderEndArea({ end, classes }) {
      return end && <div className={cx('ui-layout__end', classes.end)}>{end}</div>
    },

    // Heads up!
    // IE11 Doesn't support grid-gap, insert virtual columns instead
    renderGap({ gap, classes }) {
      return gap && <span className={cx('ui-layout__gap', classes.gap)} />
    },
  }

  renderComponent({ ElementType, classes, rest }) {
    const {
      reducing,
      disappearing,
      start,
      main,
      end,
      renderStartArea,
      renderMainArea,
      renderEndArea,
      renderGap,
    } = this.props

    const startArea = renderStartArea({ ...this.props, classes })
    const mainArea = renderMainArea({ ...this.props, classes })
    const endArea = renderEndArea({ ...this.props, classes })

    if (!startArea && !mainArea && !endArea) {
      return <ElementType {...rest} className={classes.root} />
    }

    const activeAreas = [startArea, mainArea, endArea].filter(Boolean)
    const isSingleArea = activeAreas.length === 1

    // disappear: render the content directly without wrapping layout or area elements
    if (disappearing && isSingleArea) {
      return start || main || end
    }

    if (reducing && isSingleArea) {
      const composedClasses = cx(
        classes.root,
        startArea && 'ui-layout--reduced__start',
        mainArea && 'ui-layout--reduced__main',
        endArea && 'ui-layout--reduced__end',
      )
      return (
        <ElementType {...rest} className={composedClasses}>
          {start || main || end}
        </ElementType>
      )
    }

    return (
      <ElementType {...rest} className={classes.root}>
        {startArea}
        {startArea && mainArea && renderGap({ ...this.props, classes })}
        {mainArea}
        {(startArea || mainArea) && endArea && renderGap({ ...this.props, classes })}
        {endArea}
      </ElementType>
    )
  }
}

export default Layout
