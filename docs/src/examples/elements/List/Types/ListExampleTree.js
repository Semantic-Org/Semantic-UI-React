import React from 'react'
import {
  ListList,
  ListItem,
  ListIcon,
  ListHeader,
  ListDescription,
  ListContent,
  List,
} from 'semantic-ui-react'

const ListExampleTree = () => (
  <List>
    <ListItem>
      <ListIcon name='folder' />
      <ListContent>
        <ListHeader>src</ListHeader>
        <ListDescription>Source files for project</ListDescription>
        <ListList>
          <ListItem>
            <ListIcon name='folder' />
            <ListContent>
              <ListHeader>site</ListHeader>
              <ListDescription>Your site's theme</ListDescription>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListIcon name='folder' />
            <ListContent>
              <ListHeader>themes</ListHeader>
              <ListDescription>Packaged theme files</ListDescription>
              <ListList>
                <ListItem>
                  <ListIcon name='folder' />
                  <ListContent>
                    <ListHeader>default</ListHeader>
                    <ListDescription>Default packaged theme</ListDescription>
                  </ListContent>
                </ListItem>
                <ListItem>
                  <ListIcon name='folder' />
                  <ListContent>
                    <ListHeader>my_theme</ListHeader>
                    <ListDescription>
                      Packaged themes are also available in this folder
                    </ListDescription>
                  </ListContent>
                </ListItem>
              </ListList>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListIcon name='file' />
            <ListContent>
              <ListHeader>theme.config</ListHeader>
              <ListDescription>
                Config file for setting packaged themes
              </ListDescription>
            </ListContent>
          </ListItem>
        </ListList>
      </ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='folder' />
      <ListContent>
        <ListHeader>dist</ListHeader>
        <ListDescription>Compiled CSS and JS files</ListDescription>
        <ListList>
          <ListItem>
            <ListIcon name='folder' />
            <ListContent>
              <ListHeader>components</ListHeader>
              <ListDescription>Individual component CSS and JS</ListDescription>
            </ListContent>
          </ListItem>
        </ListList>
      </ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='file' />
      <ListContent>
        <ListHeader>semantic.json</ListHeader>
        <ListDescription>Contains build settings for gulp</ListDescription>
      </ListContent>
    </ListItem>
  </List>
)

export default ListExampleTree
