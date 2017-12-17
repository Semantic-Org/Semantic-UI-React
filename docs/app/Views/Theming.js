import React from 'react'
import { Button, Container, Header, Segment } from 'semantic-ui-react'

const LayoutsExample = () => (
  <Container>
    <Segment basic padded>
      <Header
        as='h1'
        content='Theming'
        subheader='An introduction to theming'
      />
    </Segment>

    <Segment basic padded>
      <Header as='h2' content='Preface' dividing />
      <p>
        Semantic UI React does not have own styling system and fully relies on the theming of Semantic UI. It's really
        powerful, you don't need to know LESS or CSS you can simply update values of variables or use styles from
        predefined themes.
      </p>
      <p>
        In fact, all you know about theming and styling of Semantic UI is fully applicable to Semantic UI React.
      </p>
      <Button
        content='Learn more about theming'
        labelPosition='right'
        href='https://semantic-ui.com/usage/theming.html'
        icon='external link'
        target='_blank'
      />
      <Button
        content='Creating themes'
        labelPosition='right'
        href='http://learnsemantic.com/themes/creating.html'
        icon='external link'
        target='_blank'
      />

      <Header as='h2' content='Quick start' dividing />
      <p>
        Semantic UI offers its own build system that uses Gulp and produces prepared CSS files. It makes sense to use it
        with Create React App as it does not support LESS loader.
      </p>
      <p>
        In all other cases we recommend to use the LESS package and tune it into your build system with Webpack. The
        LESS package also does not depend on Gulp and other cruft things. However, this package is not friendly for
        Webpack and requires additional configuration.
      </p>
      <Button
        content='Semantic UI LESS'
        labelPosition='right'
        href='https://github.com/Semantic-Org/Semantic-UI-LESS'
        icon='github'
        target='_blank'
      />
      <Button
        content='Configuring Webpack'
        labelPosition='right'
        href='https://medium.com/webmonkeys/webpack-2-semantic-ui-theming-a216ddf60daf'
        icon='medium'
        target='_blank'
      />

      <Header as='h2' content='Boilerplate' dividing />
      <p>
        The boilerplate we prepared is powered by the latest Webpack and includes the all required things for quick
        start like preconfigured theming and hot module reload.
      </p>
      <p>
        The boilerplate is optimized for usage with Semantic UI React and Semantic UI LESS, it also contains examples
        of theming usage and custom components.
      </p>
      <Button
        content='Boilerplate'
        labelPosition='right'
        href='https://github.com/Semantic-Org/Semantic-UI-React/tree/master/examples/webpack3'
        icon='github'
        target='_blank'
      />
    </Segment>
  </Container>
)

export default LayoutsExample
