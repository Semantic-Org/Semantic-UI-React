import React from 'react'
import pkg from 'package.json'
import {
  Container,
  Header,
  Segment,
} from 'src'
import Logo from '../Components/Logo/Logo'
import { semanticUIDocsURL, semanticUIRepoURL, semanticUICSSRepoURL } from 'docs/app/utils'

const suiCSSVersion = pkg.devDependencies['semantic-ui-css'].replace(/[~^]/, '')

const Usage = () => (
  <Container id='usage-page'>
    <Segment basic textAlign='center'>
      <Logo centered size='small' />
      <Header as='h1' textAlign='center'>
        Semantic-UI-React
        <Header.Subheader>
          {pkg.description}
        </Header.Subheader>
      </Header>
    </Segment>

    <Segment basic padded>
      <Header as='h2' dividing>JavaScript</Header>
      <p>
        The Semantic UI React package can be installed via NPM:
      </p>
      <Segment>
        <pre>$ npm install {pkg.name} --save</pre>
      </Segment>
      <p>
        Installing Semantic UI React provides the JavaScript for your components.
        You'll also need to include a stylesheet to provide the styling for your components.
        This is the typical pattern for component frameworks, such as Semantic UI or Bootstrap.
      </p>
      <p>
        The method you choose to include the stylesheet in your project will depend on the level
        of customisation you require.
      </p>
    </Segment>

    <Segment basic padded>
      <Header as='h2' dividing>CSS</Header>

      {/* ----------------------------------------
       *  Content Delivery Network (CDN)
       * -------------------------------------- */}
      <Header as='h3'>Content Delivery Network (CDN)</Header>
      <p>
        You can use the default Semantic UI stylesheet by including a Semantic UI CDN link in your
        <em>index.html</em> file.
      </p>
      <p>
        This is the quickest way to get started with Semantic UI React. You won't be able to use
        custom themes with this method.
      </p>
      <Segment>
        <pre>
          {'<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/'}
          {suiCSSVersion}
          {'/semantic.min.css"></link>'}
        </pre>
      </Segment>

      {/* ----------------------------------------
       *  Semantic-UI-CSS package
       * -------------------------------------- */}
      <Header as='h3'>Semantic UI CSS package</Header>
      <p>
        The <a href={semanticUICSSRepoURL}>Semantic UI CSS package</a> is automatically synced with the
        main Semantic UI repository to provide a lightweight CSS only version of Semantic UI.
      </p>
      <p>
        Semantic UI CSS can be installed as a package in your project using NPM. You won't be able to
        use custom themes with this method.
      </p>
      <Segment>
        <pre>
          $ npm install semantic-ui-css --save
        </pre>
      </Segment>

      {/* ----------------------------------------
       *  Semantic-UI package
       * -------------------------------------- */}
      <Header as='h3'>Semantic UI package</Header>
      <p>
        Install the full <a href={semanticUIRepoURL}>Semantic UI package</a>.
      </p>
      <p>
        Semantic UI includes Gulp build tools so your project can preserve its own theme changes,
        allowing you to customise the style variables.
      </p>
      <p>
        Detailed documentation on theming in Semantic UI is
        provided <a href={`${semanticUIDocsURL}usage/theming.html`}>here</a>.
      </p>
      <Segment>
        <pre>
          $ npm install semantic-ui --save-dev
        </pre>
      </Segment>
      <p>
        After building the project with Gulp, you'll need to include the minified CSS file
        in your <em>index.js</em> file:
      </p>
      <Segment>
        <pre>
          import '.../semantic/dist/semantic.min.css';
        </pre>
      </Segment>
    </Segment>
  </Container>
)

export default Usage
