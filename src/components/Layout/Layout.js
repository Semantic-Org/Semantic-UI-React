import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import createComponent from '../../lib/createComponent'
import layoutRules from './layoutRules'

class Layout extends React.Component {
  static _meta = {
    type: 'component',
    name: 'Layout',
  }

  static propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,
    rest: PropTypes.object,
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

  static defaultProps = {
    startSize: 'auto',
    mainSize: '1fr',
    endSize: 'auto',

    // TODO: when an area is another Layout, do not wrap them in an extra div
    // TODO: option 1) higher value layouts could use start={Layout.create(start)} to ensure Areas are layout root
    renderStartArea({ start, styles }) {
      return start && <div className={classNames('layout__start', styles.start)}>{start}</div>
    },

    renderMainArea({ main, styles }) {
      return main && <div className={classNames('layout__main', styles.main)}>{main}</div>
    },

    renderEndArea({ end, styles }) {
      return end && <div className={classNames('layout__end', styles.end)}>{end}</div>
    },

    // Heads up!
    // IE11 Doesn't support grid-gap, insert virtual columns instead
    renderGap({ gap, styles }) {
      return gap && <span className={classNames('layout__gap', styles.gap)} />
    },
  }

  render() {
    const {
      className,
      reducing,
      disappearing,
      rest,
      start,
      main,
      end,
      renderStartArea,
      renderMainArea,
      renderEndArea,
      renderGap,
      styles,
    } = this.props

    const startArea = renderStartArea(this.props)
    const mainArea = renderMainArea(this.props)
    const endArea = renderEndArea(this.props)

    if (!startArea && !mainArea && !endArea) {
      return null
    }

    const activeAreas = [startArea, mainArea, endArea].filter(Boolean)
    const isSingleArea = activeAreas.length === 1

    // disappear: render the content directly without wrapping layout or area elements
    if (disappearing && isSingleArea) {
      return start || main || end
    }

    if (reducing && isSingleArea) {
      const classes = classNames(
        className,
        styles.root,
        startArea && 'layout--reduced__start',
        mainArea && 'layout--reduced__main',
        endArea && 'layout--reduced__end',
      )

      return (
        <div className={classes} {...rest}>
          {start || main || end}
        </div>
      )
    }

    return (
      <div className={classNames(className, 'layout', styles.root)} {...rest}>
        {startArea}
        {startArea && mainArea && renderGap(this.props)}
        {mainArea}
        {(startArea || mainArea) && endArea && renderGap(this.props)}
        {endArea}
      </div>
    )
  }
}

export default createComponent(Layout, {
  rules: layoutRules,
})
