import PropTypes from 'prop-types'
import React from 'react'

import logo from '../../logo.png'
import siteData from '../../utils/propTypes/siteData'
import './Document.css'

const Document = ({ Body, children, Head, Html, siteData: { dev, versions } }) => (
  <Html lang='en-US'>
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

      <link rel='shortcut icon' type='image/x-icon' href={logo} />
      <link
        rel='stylesheet'
        href={`https://cdn.jsdelivr.net/npm/semantic-ui-css@${versions.sui}/semantic.min.css`}
      />

      <script src={`//cdn.jsdelivr.net/npm/anchor-js@${versions.anchor}/anchor.min.js`} />
      <script
        src={`//cdn.jsdelivr.net/npm/@babel/standalone@${versions.babel.standalone}/babel.min.js`}
      />
      <script
        src={`//cdn.jsdelivr.net/npm/@babel/preset-env-standalone@${
          versions.babel.standalone
        }/babel-preset-env.min.js`}
      />
      <script src={`//cdn.jsdelivr.net/faker.js/${versions.faker}/faker.min.js`} />
      <script
        src={`//cdn.jsdelivr.net/npm/js-beautify@${versions.jsBeautify}/js/lib/beautify-html.js`}
      />

      <script
        src={`//cdn.jsdelivr.net/npm/prop-types@${versions.propTypes}/prop-types${
          siteData.dev ? '' : '.min'
        }.js`}
      />
      <script
        src={`//cdn.jsdelivr.net/npm/react@${versions.react}/umd/react${
          dev ? '.development' : '.production.min'
        }.js`}
      />
      <script
        src={`//cdn.jsdelivr.net/npm/react-dom@${versions.react}/umd/react-dom${
          dev ? '.development' : '.production.min'
        }.js`}
      />
      <script
        src={`//cdn.jsdelivr.net/npm/react-dom@${versions.react}/umd/react-dom-server.browser${
          dev ? '.development' : '.production.min'
        }.js`}
      />

      <script src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />
    </Head>
    <Body>{children}</Body>
  </Html>
)

Document.propTypes = {
  Body: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  Head: PropTypes.func.isRequired,
  Html: PropTypes.func.isRequired,
  siteData: siteData.isRequired,
}

export default Document
