import { createRenderer } from 'fela'
import felaPluginFallbackValue from 'fela-plugin-fallback-value'
import felaPluginPlaceholderPrefixer from 'fela-plugin-placeholder-prefixer'
import felaPluginPrefixer from 'fela-plugin-prefixer'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Provider as RendererProvider, ThemeProvider } from 'react-fela'

import { META } from '../../lib'

class Provider extends Component {
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
    staticStyles: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
    ),
    children: PropTypes.element.isRequired,
  }

  static _meta = {
    name: 'Provider',
    type: META.TYPES.ADDON,
  }

  renderer = createRenderer({
    plugins: [],
    middleware: [
      felaPluginPlaceholderPrefixer(),
      felaPluginPrefixer(),
      // Heads up!
      // This is required after fela-plugin-prefixer to resolve the array of fallback values prefixer produces.
      felaPluginFallbackValue(),
    ],
    enhancers: [],
  })

  renderStaticStyles = () => {
    const { siteVariables, staticStyles } = this.props

    if (!staticStyles) return

    const renderObject = (object) => {
      _.forEach(object, (style, selector) => {
        this.renderer.renderStatic(style, selector)
      })
    }

    const staticStylesArr = [].concat(staticStyles)

    staticStylesArr.forEach((staticStyle) => {
      if (_.isString(staticStyle)) {
        this.renderer.renderStatic(staticStyle)
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

  renderFontFaces = () => {
    const { siteVariables, fontFaces } = this.props

    if (!fontFaces) return

    const renderFontObject = (font) => {
      if (!_.isPlainObject(font)) {
        throw new Error(`fontFaces must be objects, got: ${typeof font}`)
      }
      this.renderer.renderFont(font.name, font.path, font.style)
    }

    const fontFaceArr = [].concat(_.isFunction(fontFaces) ? fontFaces(siteVariables) : fontFaces)

    fontFaceArr.forEach((fontObject) => {
      renderFontObject(fontObject)
    })
  }

  componentDidMount() {
    this.renderStaticStyles()
    this.renderFontFaces()
  }

  render() {
    const { siteVariables, children } = this.props

    return (
      <RendererProvider renderer={this.renderer}>
        <ThemeProvider theme={siteVariables}>{children}</ThemeProvider>
      </RendererProvider>
    )
  }
}

export default Provider
