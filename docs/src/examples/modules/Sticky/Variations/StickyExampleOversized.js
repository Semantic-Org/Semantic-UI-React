import _ from 'lodash'
import React, { Component, createRef } from 'react'
import {
  ItemMeta,
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemContent,
  GridColumn,
  Grid,
  Header,
  Image,
  Item,
  Rail,
  Segment,
  Sticky,
} from 'semantic-ui-react'

const Placeholder = () => <Image src='/images/wireframe/paragraph.png' />

export default class StickyExampleOversized extends Component {
  state = {}
  contextRef = createRef()

  render() {
    return (
      <Grid centered columns={3}>
        <GridColumn>
          <Segment ref={this.contextRef}>
            {_.times(15, (i) => (
              <Placeholder key={i} />
            ))}

            <Rail position='left'>
              <Sticky context={this.contextRef}>
                <ItemGroup divided>
                  {_.times(12, (i) => (
                    <Item key={i}>
                      <ItemImage
                        size='tiny'
                        src='/images/wireframe/image.png'
                      />
                      <ItemContent>
                        <ItemHeader as='a'>Followup Article</ItemHeader>
                        <ItemMeta>By Author</ItemMeta>
                      </ItemContent>
                    </Item>
                  ))}
                </ItemGroup>
              </Sticky>
            </Rail>

            <Rail position='right'>
              <Sticky context={this.contextRef}>
                <Header as='h3'>Stuck Content</Header>
                <Image src='/images/wireframe/image.png' />
              </Sticky>
            </Rail>
          </Segment>
        </GridColumn>
      </Grid>
    )
  }
}
