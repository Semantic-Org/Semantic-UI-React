import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Provider as RendererProvider, ThemeProvider } from 'react-fela'

import { felaRenderer as felaLtrRenderer, felaRtlRenderer } from '../../lib'
import ProviderConsumer from './ProviderConsumer'

/**
 * The Provider passes the CSS in JS renderer and theme down context.
 */
class Provider extends Component<any, any> {
  static propTypes = {
    fontFaces: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        paths: PropTypes.arrayOf(PropTypes.string),
        style: PropTypes.shape({
          fontStretch: PropTypes.string,
          fontStyle: PropTypes.string,
          fontVariant: PropTypes.string,
          fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          localAlias: PropTypes.string,
          unicodeRange: PropTypes.string,
        }),
      }),
    ),
    siteVariables: PropTypes.object,
    componentVariables: PropTypes.object,
    staticStyles: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
    ),
    rtl: PropTypes.bool,
    children: PropTypes.element.isRequired,
  }

  static Consumer = ProviderConsumer

  renderStaticStyles = felaRenderer => {
    const { siteVariables, staticStyles } = this.props

    if (!staticStyles) return

    const renderObject = object => {
      _.forEach(object, (style, selector) => {
        felaRenderer.renderStatic(style, selector)
      })
    }

    const staticStylesArr = [].concat(staticStyles)

    staticStylesArr.forEach(staticStyle => {
      if (_.isString(staticStyle)) {
        felaRenderer.renderStatic(staticStyle)
      } else if (_.isPlainObject(staticStyle)) {
        renderObject(staticStyle)
      } else if (_.isFunction(staticStyle)) {
        renderObject(staticStyle(siteVariables))
      } else {
        throw new Error(
          `staticStyles array must contain CSS strings, style objects, or rule functions, got: ${typeof staticStyle}`,
        )
      }
    })
  }

  renderFontFaces = felaRenderer => {
    const { siteVariables, fontFaces } = this.props

    if (!fontFaces) return

    const renderFontObject = font => {
      if (!_.isPlainObject(font)) {
        throw new Error(`fontFaces must be objects, got: ${typeof font}`)
      }
      felaRenderer.renderFont(font.name, font.path, font.style)
    }

    const fontFaceArr = [].concat(_.isFunction(fontFaces) ? fontFaces(siteVariables) : fontFaces)

    fontFaceArr.forEach(fontObject => {
      renderFontObject(fontObject)
    })
  }

  componentDidMount() {
    const felaRenderer = this.props.rtl ? felaRtlRenderer : felaLtrRenderer
    this.renderStaticStyles(felaRenderer)
    this.renderFontFaces(felaRenderer)
  }

  render() {
    const { componentVariables, siteVariables, children } = this.props

    // ensure we don't assign `undefined` values to the theme context
    // they will override values down stream
    const theme: any = {}
    if (siteVariables) {
      theme.siteVariables = siteVariables
    }
    if (componentVariables) {
      theme.componentVariables = componentVariables
    }

    return (
      <RendererProvider renderer={this.props.rtl ? felaRtlRenderer : felaLtrRenderer}>
        {siteVariables || componentVariables ? (
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        ) : (
          children
        )}
      </RendererProvider>
    )
  }
}

export default Provider
