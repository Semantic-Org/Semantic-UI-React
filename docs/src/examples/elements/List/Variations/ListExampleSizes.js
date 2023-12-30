import React from 'react'
import {
  ListItem,
  ListHeader,
  ListContent,
  Image,
  List,
} from 'semantic-ui-react'

const ListExampleSizes = () => {
  const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

  return (
    <div>
      {sizes.map((size) => (
        <div key={size}>
          <List divided horizontal size={size}>
            <ListItem>
              <Image avatar src='/images/avatar/small/helen.jpg' />
              <ListContent>
                <ListHeader>Helen</ListHeader>
              </ListContent>
            </ListItem>
            <ListItem>
              <Image avatar src='/images/avatar/small/christian.jpg' />
              <ListContent>
                <ListHeader>Christian</ListHeader>
              </ListContent>
            </ListItem>
            <ListItem>
              <Image avatar src='/images/avatar/small/daniel.jpg' />
              <ListContent>
                <ListHeader>Daniel</ListHeader>
              </ListContent>
            </ListItem>
          </List>

          <br />
        </div>
      ))}
    </div>
  )
}

export default ListExampleSizes
