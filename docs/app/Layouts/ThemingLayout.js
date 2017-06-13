import React from 'react'
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'

const ThemingLayout = () => (
  <Container style={{ marginTop: '3em' }}>
    <Header as='h1'>Theming Examples</Header>

    <Header as='h2' dividing>Site</Header>

    <Grid columns={3} stackable>
      <Grid.Column>
        <Header as='h1'>Heading 1</Header>
        <Header as='h2'>Heading 2</Header>
        <Header as='h3'>Heading 3</Header>
        <Header as='h4'>Heading 4</Header>
        <Header as='h5'>Heading 5</Header>

        <p>
          Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
        </p>
      </Grid.Column>

      <Grid.Column>
        <Header as='h2'>Example body text</Header>

        <p>
          Nullam quis risus eget <a href='#'>urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
        </p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
        <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
        <p>An abbreviation of the word attribute is <abbr title='attribute'>attr</abbr>.</p>
      </Grid.Column>

      <Grid.Column>
        <Grid
          centered
          columns={3}
          padded
          stackable
          style={{ margin: '-1.5em', width: 400 }}
          textAlign='middle'
        >
          <Grid.Column color='red' style={{ margin: '0.5em', height: 50 }}>Red</Grid.Column>
          <Grid.Column color='orange' style={{ margin: '0.5em', height: 50 }}>Orange</Grid.Column>
          <Grid.Column color='yellow' style={{ margin: '0.5em', height: 50 }}>Yellow</Grid.Column>
          <Grid.Column color='olive' style={{ margin: '0.5em', height: 50 }}>Olive</Grid.Column>
          <Grid.Column color='green' style={{ margin: '0.5em', height: 50 }}>Green</Grid.Column>
          <Grid.Column color='teal' style={{ margin: '0.5em', height: 50 }}>Teal</Grid.Column>
          <Grid.Column color='blue' style={{ margin: '0.5em', height: 50 }}>Blue</Grid.Column>
          <Grid.Column color='violet' style={{ margin: '0.5em', height: 50 }}>Violet</Grid.Column>
          <Grid.Column color='purple' style={{ margin: '0.5em', height: 50 }}>Purple</Grid.Column>
          <Grid.Column color='pink' style={{ margin: '0.5em', height: 50 }}>Pink</Grid.Column>
          <Grid.Column color='brown' style={{ margin: '0.5em', height: 50 }}>Brown</Grid.Column>
          <Grid.Column color='grey' style={{ margin: '0.5em', height: 50 }}>Grey</Grid.Column>
          <Grid.Column color='black' style={{ margin: '0.5em', height: 50 }}>Black</Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>

    <Header as='h2' dividing>Menu</Header>

    {/* <div class="ui menu">*/}
      {/* <div class="header item">Brand</div>*/}
      {/* <a class="active item">Link</a>*/}
      {/* <a class="item">Link</a>*/}
      {/* <div class="ui dropdown item">*/}
        {/* Dropdown*/}
        {/* <i class="dropdown icon"></i>*/}
        {/* <div class="menu">*/}
          {/* <div class="item">Action</div>*/}
          {/* <div class="item">Another Action</div>*/}
          {/* <div class="item">Something else here</div>*/}
          {/* <div class="divider"></div>*/}
          {/* <div class="item">Separated Link</div>*/}
          {/* <div class="divider"></div>*/}
          {/* <div class="item">One more separated link</div>*/}
        {/* </div>*/}
      {/* </div>*/}
      {/* <div class="right menu">*/}
        {/* <div class="item">*/}
          {/* <div class="ui action left icon input">*/}
            {/* <i class="search icon"></i>*/}
            {/* <input type="text" placeholder="Search">*/}
              {/* <button class="ui button">Submit</button>*/}
          {/* </div>*/}
        {/* </div>*/}
        {/* <a class="item">Link</a>*/}
      {/* </div>*/}
    {/* </div>*/}

    {/* <div class="ui inverted menu">*/}
      {/* <div class="header item">Brand</div>*/}
      {/* <div class="active item">Link</div>*/}
      {/* <a class="item">Link</a>*/}
      {/* <div class="ui dropdown item">*/}
        {/* Dropdown*/}
        {/* <i class="dropdown icon"></i>*/}
        {/* <div class="menu">*/}
          {/* <div class="item">Action</div>*/}
          {/* <div class="item">Another Action</div>*/}
          {/* <div class="item">Something else here</div>*/}
          {/* <div class="divider"></div>*/}
          {/* <div class="item">Separated Link</div>*/}
          {/* <div class="divider"></div>*/}
          {/* <div class="item">One more separated link</div>*/}
        {/* </div>*/}
      {/* </div>*/}
      {/* <div class="right menu">*/}
        {/* <div class="item">*/}
          {/* <div class="ui transparent inverted icon input">*/}
            {/* <i class="search icon"></i>*/}
            {/* <input type="text" placeholder="Search">*/}
          {/* </div>*/}
        {/* </div>*/}
        {/* <a class="item">Link</a>*/}
      {/* </div>*/}
    {/* </div>*/}

    {/* <div class="ui secondary menu">*/}
      {/* <div class="active item">Link</div>*/}
      {/* <a class="item">Link</a>*/}
      {/* <div class="ui dropdown item">*/}
        {/* Dropdown*/}
        {/* <i class="dropdown icon"></i>*/}
        {/* <div class="menu">*/}
          {/* <div class="item">Action</div>*/}
          {/* <div class="item">Another Action</div>*/}
          {/* <div class="item">Something else here</div>*/}
          {/* <div class="divider"></div>*/}
          {/* <div class="item">Separated Link</div>*/}
          {/* <div class="divider"></div>*/}
          {/* <div class="item">One more separated link</div>*/}
        {/* </div>*/}
      {/* </div>*/}
      {/* <div class="right menu">*/}
        {/* <div class="item">*/}
          {/* <div class="ui action left icon input">*/}
            {/* <i class="search icon"></i>*/}
            {/* <input type="text" placeholder="Search">*/}
              {/* <button class="ui button">Submit</button>*/}
          {/* </div>*/}
        {/* </div>*/}
        {/* <a class="item">Link</a>*/}
      {/* </div>*/}
    {/* </div>*/}

    <Grid columns={3} doubling>
      <Grid.Column>
            <Menu
              items={[
                { key: '1', name: 'link-1', content: 'Link' },
                { key: '2', name: 'link-2', content: 'Link' },
                { key: '3', name: 'link-3', content: 'Link' },
              ]}
              pointing
              secondary
            />
      </Grid.Column>

      <Grid.Column>
            <Menu
              items={[
                { key: '1', name: 'link-1', content: 'Link' },
                { key: '2', name: 'link-2', content: 'Link' },
                { key: '3', name: 'link-3', content: 'Link' },
              ]}
              pointing
              tabular
            />
      </Grid.Column>

      <Grid.Column>
            <Menu
              items={[
                { key: 'l1', name: 'link-1', content: 'Link' },
                { key: 'l2', name: 'link-2', content: 'Link' },
                { key: 't1', name: 'text-1', content: 'Right text', position: 'right' },
              ]}
              pointing
            />
      </Grid.Column>
    </Grid>

    <Header as='h2' dividing>Buttons</Header>

    <Grid columns='equal'>
      <Grid.Column>
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button basic>Basic</Button>
        <Button compact>Compact</Button>

        <Divider />

        <Button icon='heart' />
        <Button content='Labeled' icon='heart' labelPosition='left' />
        <Button content='Labeled' icon='heart' labelPosition='right' />

        <Divider />

        <Button.Group>
          <Button>Combo</Button>
          {/* <div class="ui floating dropdown icon button">*/}
          {/* <i class="dropdown icon"></i>*/}
          {/* <div class="menu">*/}
          {/* <div class="item">Choice 1</div>*/}
          {/* <div class="item">Choice 2</div>*/}
          {/* <div class="item">Choice 3</div>*/}
          {/* </div>*/}
          {/* </div>*/}
        </Button.Group>

        {/* <div class="ui floating search dropdown button">*/}
        {/* <span class="text">Search Dropdown</span>*/}
        {/* <div class="menu">*/}
        {/* <div class="item">Arabic</div>*/}
        {/* <div class="item">Chinese</div>*/}
        {/* <div class="item">Danish</div>*/}
        {/* <div class="item">Dutch</div>*/}
        {/* <div class="item">English</div>*/}
        {/* <div class="item">French</div>*/}
        {/* <div class="item">German</div>*/}
        {/* <div class="item">Greek</div>*/}
        {/* <div class="item">Hungarian</div>*/}
        {/* <div class="item">Italian</div>*/}
        {/* <div class="item">Japanese</div>*/}
        {/* <div class="item">Korean</div>*/}
        {/* <div class="item">Lithuanian</div>*/}
        {/* <div class="item">Persian</div>*/}
        {/* <div class="item">Polish</div>*/}
        {/* <div class="item">Portuguese</div>*/}
        {/* <div class="item">Russian</div>*/}
        {/* <div class="item">Spanish</div>*/}
        {/* <div class="item">Swedish</div>*/}
        {/* <div class="item">Turkish</div>*/}
        {/* <div class="item">Vietnamese</div>*/}
        {/* </div>*/}
        {/* </div>*/}

        <Divider />

        <Button animated>
          <Button.Content visible>Horizontal</Button.Content>
          <Button.Content hidden>Hidden</Button.Content>
        </Button>
        <Button animated='vertical'>
          <Button.Content visible>Vertical</Button.Content>
          <Button.Content hidden>Hidden</Button.Content>
        </Button>
        <Button animated='fade'>
          <Button.Content visible>Fade In</Button.Content>
          <Button.Content hidden>Hidden</Button.Content>
        </Button>

        <Divider />

        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>

        <Divider />

        <Button.Group>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </Button.Group>

        <Button.Group>
          <Button icon='align left icon' />
          <Button icon='align center icon' />
          <Button icon='align right icon' />
          <Button icon='align justify icon' />
        </Button.Group>

        <Button.Group>
          <Button>1</Button>
          <Button.Or />
          <Button>2</Button>
        </Button.Group>

        <Divider />

        <Button.Group attached='top' widths={2}>
          <Button>One</Button>
          <Button>Two</Button>
        </Button.Group>
        <Segment attached>
          <Image src='/assets/images/wireframe/paragraph.png' />
        </Segment>
        <Button.Group attached='bottom' widths={2}>
          <Button>One</Button>
          <Button>Two</Button>
        </Button.Group>
      </Grid.Column>

      <Grid.Column>
      <Button size='mini'>Mini</Button>
      <Button size='tiny'>Tiny</Button>
      <Button size='small'>Small</Button>
      <Button size='large'>Large</Button>
      <Button size='big button'>Big</Button>
      <Button size='huge button'>Huge</Button>
      <Button size='massive'>Massive</Button>

        <Divider />

      <Button color='yellow' style={{ marginBottom: '1em' }}>Yellow</Button>
      <Button color='orange' style={{ marginBottom: '1em' }}>Orange</Button>
      <Button color='green' style={{ marginBottom: '1em' }}>Green</Button>
      <Button color='teal' style={{ marginBottom: '1em' }}>Teal</Button>
      <Button color='blue' style={{ marginBottom: '1em' }}>Blue</Button>
      <Button color='purple' style={{ marginBottom: '1em' }}>Purple</Button>
      <Button color='pink' style={{ marginBottom: '1em' }}>Pink</Button>
      <Button color='red' style={{ marginBottom: '1em' }}>Red</Button>
      <Button color='black' style={{ marginBottom: '1em' }}>Black</Button>

        <Divider />

      <Segment inverted>
      <Button inverted>Inverted</Button>
      <Button basic inverted>Basic</Button>
      <Button color='blue' inverted>Colored</Button>
      <Button basic color='blue' inverted>Basic Colored</Button>
      </Segment>
      </Grid.Column>
    </Grid>
  </Container>
)

export default ThemingLayout
