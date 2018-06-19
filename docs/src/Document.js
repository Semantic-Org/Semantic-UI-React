import PropTypes from 'prop-types'
import React from 'react'

import logo from './logo.png'

const Document = ({ Body, children, Head, Html, siteData }) => (
  <Html lang='en-US'>
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

      <link rel='shortcut icon' type='image/x-icon' href={logo} />
      <link
        rel='stylesheet'
        href={`//cdnjs.cloudflare.com/ajax/libs/semantic-ui/${
          siteData.versions.sui
        }/semantic.min.css`}
      />
    </Head>
    <style>
      {`
      html, body {
        background: #f7f7f7;
      }

      .anchorjs-link {
        position: absolute;
        transition: margin-left .25s, color .25s, opacity 0.25s;
        margin-left: -0.2em;
        color: #777;
        opacity: 0;
      }

      h1:hover > .anchorjs-link:not(:hover),
      h2:hover > .anchorjs-link:not(:hover),
      h3:hover > .anchorjs-link:not(:hover),
      h4:hover > .anchorjs-link:not(:hover),
      h5:hover > .anchorjs-link:not(:hover),
      h6:hover > .anchorjs-link:not(:hover) {
        margin-left: 0em;
        opacity: 0.5;
      }

      .anchorjs-link:hover {
        margin-left: 0em;
        color: cornflowerblue;
        opacity: 1;
      }

      #introduction-page p {
        font-size: 1.125em;
        margin: 1.5em 0;
      }

      pre {
        margin: 0;
      }

      code:not(.hljs) {
        font-size: 87.5%;
        background-color: rgba(0, 0, 0, 0.04);
        border-radius: 3px;
        white-space: pre;
        display: inline-block;
      }

      code:not(.hljs)::before {
        letter-spacing: -0.2em;
        content: "\00a0";
      }

      code:not(.hljs)::after {
        letter-spacing: -0.2em;
        content: "\00a0";
      }

      .docs-icon-set-column {
        cursor: pointer;
      }

      .docs-icon-set-column .icon {
        font-size: 2em;
        color: #555;
        transform: scale(1);
        transition: opacity 0.2s, color 0.2s, transform 0.2s;
      }

      .docs-icon-set-column .name {
        display: block;
        margin: 1em 0;
        color: #777;
      }

      .docs-icon-set-column:hover > .icon,
      .docs-icon-set-column:hover > .name {
        color: #000;
      }

      .docs-icon-set-column:hover > .icon {
        transform: scale(1.5);
      }

      #carbonads {
        display: block;
      }

      #carbonads span {
        display: block;
      }

      .carbon-img {
        display: block;
      }

      .carbon-img img {
        display: block;
      }

      .carbon-text {
        display: block;
        margin-top: 1em;
      }

      .carbon-poweredby {
        display: block;
        margin-top: 0.5em;
        font-size: 0.8em;
        color: #ffffff;
        opacity: 0.5;
      }
   `}
    </style>
    <Body>{children}</Body>
  </Html>
)

Document.propTypes = {
  Body: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  Head: PropTypes.func.isRequired,
  Html: PropTypes.func.isRequired,
  siteData: PropTypes.shape({
    versions: PropTypes.shape({
      sui: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Document
