import React, { PropTypes } from 'react'
import Highlight from 'react-highlight'

import pkg from 'package.json'
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Label,
  List,
  Message,
  Segment,
} from 'src'
import Logo from '../Components/Logo/Logo'

const AccordionJSX = `const panels = [{
  title: 'What is a dog?',
  content: '...',
  }, {
  title: 'What kinds are there?',
  content: '...',
}]

<Accordion panels={panels} />`
const AccordionHTML = `<div class="ui accordion">
  <div class="title">
    <i class="dropdown icon"></i></i>
    What is a dog?
  </div>
  <div class="content">
    <p></p...>...</p>
  </div>
  <div class="title">
    <i class="dropdown icon"></i></i>
    What kinds are there?
  </div>
  <div class="content">
    <p></p...>...</p>
  </div>
</div>`

const ButtonJSX = `<Button size='small' color='green'>
  <Icon name='download' />
  Download
</Button>`
const ButtonHTML = `<button class="ui small green button">
  <i class="download icon"></i>
  Download
</button>`
const RatingJSX = '<Rating rating={1} maxRating={5} />'
const RatingHTML = `<div
  class="ui rating"
  data-rating="1"
  data-max-rating="3"
></div>`

const MessageIconJSX = `<Message 
  success 
  icon='thumbs up'
  header='Nice job!'
  content='Your profile is complete.'
/>`
const MessageIconHTML = `<div class="ui success message">
  <i class="thumbs up icon"></i>
  <div class="content">
    <div class="header">
      Nice job!
    </div>
    Your profile is complete.
  </div>
</div>`

const MessageSubComponentsJSX = `<Message icon>
  <Icon name='circle notched' loading />
  <Message.Content>
    <Message.Header>
      Just one second
    </Message.Header>
    We're fetching that content for you.
  </Message.Content>
</Message>`
const MessageSubComponentsHTML = `<div class="ui icon message">
  <i class="loading circle notched icon"></i>
  <div class="content">
    <div class="header">
      Just one second
    </div>
    We're fetching that content for you.
  </div>
</div>`

const Comparison = ({ jsx, html }) => (
  <Segment className='code-example'>
    <Grid columns='equal' centered textAlign='left'>
      <Grid.Column mobile='16' tablet='16' computer='8' largeScreen='7'>
        <Label size='tiny' attached='top left'>JSX</Label>
        <Highlight className='language-xml'>
          {jsx}
        </Highlight>
      </Grid.Column>
      <Grid.Column only='large screen' large='1' textAlign='center'>
        <Divider vertical>
          <Icon name='right arrow circle' />
        </Divider>
      </Grid.Column>
      <Grid.Column mobile='16' tablet='16' computer='8' largeScreen='7'>
        <Label size='tiny' attached='top right'>Rendered HTML</Label>
        <Highlight className='language-html'>
          {html}
        </Highlight>
      </Grid.Column>
    </Grid>
  </Segment>
)

Comparison.propTypes = {
  jsx: PropTypes.string,
  html: PropTypes.string,
}

const Introduction = () => (
  <Container id='introduction-page'>
    <Segment className='center aligned basic'>
      <Logo centered size='small' />
      <Header.H1 textAlign='center'>
        Semantic-UI-React
        <Header.Subheader>
          {pkg.description}
        </Header.Subheader>
      </Header.H1>
    </Segment>

    <Segment className='basic padded'>
      <Header.H2 dividing>Install</Header.H2>
      <Message>
        <pre>$ npm install {pkg.name}</pre>
      </Message>
      <List>
        <List.Item icon='check mark'>jQuery Free</List.Item>
        <List.Item icon='check mark'>Declarative Components</List.Item>
        <List.Item icon='check mark'>Shorthand Props</List.Item>
        <List.Item icon='check mark'>Sub Components</List.Item>
        <List.Item icon='check mark'>Auto Controlled State</List.Item>
      </List>
    </Segment>

    <Segment className='basic padded'>
      <Header.H2 dividing>jQuery Free</Header.H2>
      <p>
        jQuery is a DOM manipulation library. It reads from and writes to the DOM.
        React uses a virtual DOM (a JavaScript representation of the real DOM).
        React only <em>writes</em> patch updates to the DOM, but <em>never reads</em> from it.
      </p>
      <p>
        It is not feasible to keep real DOM manipulations in sync with React's virtual DOM. Because of this, all
        jQuery functionality has been re-implemented in React. There is jQuery nor any direct DOM manipulation.
      </p>
    </Segment>

    <Segment className='basic padded'>
      <Header.H2 dividing>Declarative Components</Header.H2>
      Declarative APIs provide for robust features and prop validation.

      <Comparison jsx={RatingJSX} html={RatingHTML} />
      <Comparison jsx={ButtonJSX} html={ButtonHTML} />
    </Segment>

    <Segment className='basic padded'>
      <Header.H2 dividing>Shorthand Props</Header.H2>
      <p>
        Shorthand props generate markup for you, making many use cases a breeze.
      </p>

      <Header.H3>Child Object Arrays</Header.H3>
      <p>
        Components with repeating children accept arrays of plain objects.
        <a href='https://facebook.github.io/react/docs/context.html#parent-child-coupling' target='_blank'>
          &nbsp;Facebook is fond of this&nbsp;
        </a>
        over using context to handle parent-child coupling and so are we.
      </p>
      <Comparison jsx={AccordionJSX} html={AccordionHTML} />

      <Header.H3>{'icon={...}'}</Header.H3>
      <p>
        The <code>icon</code> prop is standard for many components.
        It can accept an Icon <code>name</code>, an Icon props object, or an <code>{'<Icon />'}</code> instance.
      </p>
      <Comparison jsx={MessageIconJSX} html={MessageIconHTML} />

      <Header.H3>{'image={...}'}</Header.H3>
      <p>
        The <code>image</code> prop is standard for many components.
        It can accept an image <code>src</code>, an Image props object, or an <code>{'<Image />'}</code> instance.
      </p>
    </Segment>

    <Segment className='basic padded'>
      <Header.H2 dividing>Sub Components</Header.H2>
      <p>
        Sub components give you complete access to the markup.
        This is essential for flexibility in customizing components.
      </p>
      <Comparison jsx={MessageSubComponentsJSX} html={MessageSubComponentsHTML} />
    </Segment>

    <Segment className='basic padded'>
      <Header.H2 dividing>Auto Controlled State</Header.H2>

      <p>
        React has the concept of
        <a href='https://facebook.github.io/react/docs/forms.html' target='_blank'>
          &nbsp;controlled and uncontrolled&nbsp;
        </a>
        components.
      </p>

      <p>
        Our stateful components self manage their state out of the box, without wiring. Dropdowns open on click without
        wiring <code>onClick</code> to the <code>open</code> prop. The value is also stored internally, without
        wiring <code>onChange</code> to <code>value</code>.
      </p>
      <p>
        If you add a <code>value</code> prop or an <code>open</code> prop, the Dropdown delegates control for that
        one prop to your value. The other props remain auto controlled. Mix and match any number of controlled and
        uncontrolled props. Add and remove control at any time by adding or removing props. Everything just works.
      </p>
      <p>
        See the docs for more examples.
      </p>
      <Divider hidden section />
      <Divider hidden section />
      <Divider hidden section />
    </Segment>
  </Container>
)

export default Introduction
