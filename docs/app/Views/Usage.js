import React from 'react'
import pkg from 'package.json'
import {
  Button,
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
      <Header as='h3'>Examples</Header>
      <p>
          For examples on how to import and use Semantic UI React components,
          click the code icon next to any example. Here are a few direct links:
      </p>
      <ul>
          <li>
              <a href='http://react.semantic-ui.com/elements/button#button'>Button</a>
          </li>
          <li>
              <a href='http://react.semantic-ui.com/elements/list#list'>List</a>
          </li>
          <li>
              <a href='http://react.semantic-ui.com/views/card#card'>Card</a>
          </li>
          <li>
              <a href='http://react.semantic-ui.com/modules/modal#modal'>Modal</a>
          </li>
      </ul>
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
          import '../semantic/dist/semantic.min.css';
        </pre>
      </Segment>
    </Segment>

    <Segment basic padded>
      <Header as='h2' dividing>Bundlers</Header>
      <p>
        Semantic UI React is fully supported by all modern JavaScript bundlers. We made some example recipes with some
        of them. You can use them as start point for your projects.
      </p>

      <Header as='h3'>Webpack 1</Header>
      <p>
        Webpack 1 fully supports Semantic UI React, however we don't recommend to use it because it's deprecated.
        Please ensure that you build your app in production mode before release, it will strip <code>propTypes</code>
        from your build.
      </p>
      <p>
        Because Webpack 1 doesn't support tree shaking we recommend to use <code>babel-plugin-lodash</code> in your
        builds. You can find example configuration in <code>examples</code> directory of Semantic UI React.
      </p>

      <Button
        content='Example configuration'
        href='https://github.com/Semantic-Org/Semantic-UI-React/tree/master/examples/webpack1'
        icon='github'
        labelPosition='left'
      />
      <Button
        content='babel-plugin-lodash'
        href='https://github.com/lodash/babel-plugin-lodash'
        icon='github'
        labelPosition='left'
      />
    </Segment>
  </Container>
)

export default Usage
