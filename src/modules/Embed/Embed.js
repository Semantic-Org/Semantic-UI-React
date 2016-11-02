import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import Icon from '../../elements/Icon'

const _meta = {
  name: 'Embed',
  type: META.TYPES.MODULE,
  props: {
    aspectRatio: ['4:3', '16:9', '21:9'],
    source: ['youtube', 'vimeo'],
  },
}

/**
 * An embed displays content from other websites like YouTube videos or Google Maps.
 */
export default class Embed extends Component {
  static autoControlledProps = [
    'active',
  ]

  static defaultProps = {
    icon: 'video play',
  }

  static _meta = _meta

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** An embed can be active. */
    active: PropTypes.bool,

    /** An embed can specify an alternative aspect ratio. */
    aspectRatio: PropTypes.oneOf(_meta.props.aspectRatio),

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Initial value of active. */
    defaultActive: PropTypes.bool,

    /** Specifies an icon to use with placeholder content. */
    icon: customPropTypes.itemShorthand,

    /** Сalled with event on Embed click with (event, props). */
    onClick: PropTypes.func,

    /** A placeholder image for embed. */
    placeholder: PropTypes.string,

    /** Specifies a source to use. */
    source: customPropTypes.every([
      customPropTypes.disallow(['sourceUrl']),
      PropTypes.oneOf(_meta.props.source),
    ]),

    /** Setting to true or false will force autoplay. */
    sourceAutoPlay: customPropTypes.every([
      customPropTypes.demand(['source']),
      PropTypes.bool,
    ]),

    /** Whether to show networks branded UI like title cards, or after video calls to action. */
    sourceBrandedUI: customPropTypes.every([
      customPropTypes.demand(['source']),
      PropTypes.bool,
    ]),

    /** Specifies a default chrome color with Vimeo or YouTube. */
    sourceColor: customPropTypes.every([
      customPropTypes.demand(['source']),
      PropTypes.string,
    ]),

    /** Whether to show networks branded UI like title cards, or after video calls to action. */
    sourceHd: customPropTypes.every([
      customPropTypes.demand(['source']),
      PropTypes.bool,
    ]),

    /** Specifies an id for source. */
    sourceId: customPropTypes.every([
      customPropTypes.demand(['source']),
      PropTypes.string,
    ]),

    /** Specifies a url to use for embed. */
    sourceUrl: customPropTypes.every([
      customPropTypes.disallow(['source']),
      PropTypes.string,
    ]),
  }

  state = {}

  handleClick = (e) => {
    const { onClick } = this.props
    const { active } = this.state

    if (onClick) onClick(e, this.props)
    if (!active) this.trySetState({ active: true })
  }

  getSource() {
    const {
      source,
      sourceAutoPlay = true,
      sourceBrandedUI = false,
      sourceColor = '#444444',
      sourceHd = true,
      sourceId,
      sourceUrl,
    } = this.props

    if (source === 'youtube') {
      return [
        `//www.youtube.com/embed/${sourceId}`,
        '?autohide=true',
        `&amp;autoplay=${sourceAutoPlay}`,
        `&amp;color=${encodeURIComponent(sourceColor)}`,
        `&amp;hq=${sourceHd}`,
        '&amp;jsapi=false',
        `&amp;modestbranding=${sourceBrandedUI}`,
      ].join('')
    }

    if (source === 'vimeo') {
      return [
        `//player.vimeo.com/video/${sourceId}`,
        '?api=false',
        `&amp;autoplay=${sourceAutoPlay}`,
        '&amp;byline=false',
        `&amp;color=${encodeURIComponent(sourceColor)}`,
        '&amp;portrait=false',
        '&amp;title=false',
      ].join('')
    }

    return sourceUrl
  }

  render() {
    const { aspectRatio, className, icon, placeholder } = this.props
    const { active } = this.state

    const classes = cx(
      'ui',
      aspectRatio,
      useKeyOnly(active, 'active'),
      'embed',
      className,
    )
    const rest = getUnhandledProps(Embed, this.props)
    const ElementType = getElementType(Embed, this.props)

    return (
      <ElementType {...rest} className={classes} onClick={this.handleClick}>
        {Icon.create(icon)}
        {placeholder && <img className='placeholder' src={placeholder} />}
        {this.renderEmbed()}
      </ElementType>
    )
  }

  renderEmbed() {
    const { active, children } = this.props

    if (!active) return null
    if (children) return <div className='embed'>{children}</div>

    return (
      <div className='embed'>
        <iframe
          allowFullScreen=''
          frameBorder='0'
          height='100%'
          scrolling='no'
          src={this.getSource()}
          width='100%'
        />
      </div>
    )
  }
}
