import cx from 'classnames'
import _ from 'lodash'
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

/**
 * An embed displays content from other websites like YouTube videos or Google Maps.
 */
export default class Embed extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** An embed can be active. */
    active: PropTypes.bool,

    /** An embed can specify an alternative aspect ratio. */
    aspectRatio: PropTypes.oneOf(['4:3', '16:9', '21:9']),

     /** Setting to true or false will force autoplay. */
    autoplay: customPropTypes.every([
      customPropTypes.demand(['source']),
      PropTypes.bool,
    ]),

    /** Whether to show networks branded UI like title cards, or after video calls to action. */
    brandedUI: customPropTypes.every([
      customPropTypes.demand(['source']),
      PropTypes.bool,
    ]),

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Specifies a default chrome color with Vimeo or YouTube. */
    color: customPropTypes.every([
      customPropTypes.demand(['source']),
      PropTypes.string,
    ]),

    /** Initial value of active. */
    defaultActive: PropTypes.bool,

    /** Whether to show networks branded UI like title cards, or after video calls to action. */
    hd: customPropTypes.every([
      customPropTypes.demand(['source']),
      PropTypes.bool,
    ]),

     /** Specifies an icon to use with placeholder content. */
    icon: customPropTypes.itemShorthand,

    /** Specifies an id for source. */
    id: customPropTypes.every([
      customPropTypes.demand(['source']),
      PropTypes.string,
    ]),

    /**
     * Сalled on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     */
    onClick: PropTypes.func,

    /** A placeholder image for embed. */
    placeholder: PropTypes.string,

    /** Specifies a source to use. */
    source: customPropTypes.every([
      customPropTypes.disallow(['sourceUrl']),
      PropTypes.oneOf(['youtube', 'vimeo']),
    ]),

    /** Specifies a url to use for embed. */
    url: customPropTypes.every([
      customPropTypes.disallow(['source']),
      PropTypes.string,
    ]),
  }

  static autoControlledProps = [
    'active',
  ]

  static defaultProps = {
    icon: 'video play',
  }

  static _meta = {
    name: 'Embed',
    type: META.TYPES.MODULE,
  }

  state = {}

  getSrc() {
    const {
      autoplay = true,
      brandedUI = false,
      color = '#444444',
      hd = true,
      id,
      source,
      url,
    } = this.props

    if (source === 'youtube') {
      return [
        `//www.youtube.com/embed/${id}`,
        '?autohide=true',
        `&amp;autoplay=${autoplay}`,
        `&amp;color=${encodeURIComponent(color)}`,
        `&amp;hq=${hd}`,
        '&amp;jsapi=false',
        `&amp;modestbranding=${brandedUI}`,
      ].join('')
    }

    if (source === 'vimeo') {
      return [
        `//player.vimeo.com/video/${id}`,
        '?api=false',
        `&amp;autoplay=${autoplay}`,
        '&amp;byline=false',
        `&amp;color=${encodeURIComponent(color)}`,
        '&amp;portrait=false',
        '&amp;title=false',
      ].join('')
    }

    return url
  }

  handleClick = (e) => {
    const { onClick } = this.props
    const { active } = this.state

    if (onClick) onClick(e, { ...this.props, active: true })
    if (!active) this.trySetState({ active: true })
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
    const { children } = this.props
    const { active } = this.state

    if (!active) return null
    if (!_.isNil(children)) return <div className='embed'>{children}</div>

    return (
      <div className='embed'>
        <iframe
          allowFullScreen=''
          frameBorder='0'
          height='100%'
          scrolling='no'
          src={this.getSrc()}
          width='100%'
        />
      </div>
    )
  }
}
