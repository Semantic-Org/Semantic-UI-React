import PropTypes from 'prop-types'
import React from 'react'

import siteData from '../utils/docTypes/siteData'

const Document = ({ Body, children, Head, Html, siteData: { dev, versions } }) => (
  <Html lang='en-US'>
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

      <link rel='shortcut icon' type='image/x-icon' href='/logo.png' />
      <link rel='stylesheet' href={`/style.css?${versions.suir}`} />
      <link
        rel='stylesheet'
        href={`https://cdn.jsdelivr.net/npm/semantic-ui-css@${versions.sui}/semantic.min.css`}
      />

      <script
        src={`https://cdnjs.cloudflare.com/ajax/libs/anchor-js/${versions.anchor}/anchor.min.js`}
      />
      <script
        src={`https://cdn.jsdelivr.net/npm/@babel/standalone@${
          versions.babel.standalone
        }/babel.min.js`}
      />
      <script
        src={`https://cdn.jsdelivr.net/npm/@babel/preset-env-standalone@${
          versions.babel.standaloneEnv
        }/babel-preset-env.min.js`}
      />
      <script src={`https://cdn.jsdelivr.net/faker.js/${versions.faker}/faker.min.js`} />

      <script
        crossOrigin='true'
        src={`https://unpkg.com/prettier@${versions.prettier}/standalone.js`}
      />
      <script
        crossOrigin='true'
        src={`https://unpkg.com/prettier@${versions.prettier}/parser-babylon.js`}
      />
      <script
        crossOrigin='true'
        src={`https://unpkg.com/prettier@${versions.prettier}/parser-html.js`}
      />
      <script
        src={`https://cdnjs.cloudflare.com/ajax/libs/prop-types/${versions.propTypes}/prop-types${
          siteData.dev ? '' : '.min'
        }.js`}
      />
      <script
        src={`https://cdn.jsdelivr.net/npm/react@${versions.react}/umd/react${
          dev ? '.development' : '.production.min'
        }.js`}
      />
      <script
        src={`https://cdn.jsdelivr.net/npm/react-dom@${versions.react}/umd/react-dom${
          dev ? '.development' : '.production.min'
        }.js`}
      />
      <script
        src={`https://cdn.jsdelivr.net/npm/react-dom@${
          versions.react
        }/umd/react-dom-server.browser${dev ? '.development' : '.production.min'}.js`}
      />
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
