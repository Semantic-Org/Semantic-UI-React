import PropTypes from 'prop-types'
import Head from 'next/head'
import { Fragment } from 'react'

const PageLayout = ({ children, title }) => (
  <Fragment>
    <Head>
      <title>Semantic UI React - {title}</title>

      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

      <link rel='shortcut icon' type='image/x-icon' href='/static/images/logo.png' />
      <link
        rel='stylesheet'
        href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css'
      />

      <script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />
    </Head>

    {children}
  </Fragment>
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default PageLayout
