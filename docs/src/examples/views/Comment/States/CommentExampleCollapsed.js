import React, { Component } from 'react'
import { Checkbox, Comment } from 'semantic-ui-react'

export default class CommentExampleCollapsed extends Component {
  state = { collapsed: true }

  handleCheckbox = (e, { checked }) => this.setState({ collapsed: checked })

  render() {
    const { collapsed } = this.state

    return (
      <div>
        <Checkbox
          defaultChecked
          label='Collapse comments'
          onChange={this.handleCheckbox}
        />

        <Comment.Group>
          <Comment>
            <Comment.Avatar as='a' src='/images/avatar/small/christian.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Christian Rocha</Comment.Author>
              <Comment.Metadata>
                <span>2 days ago</span>
              </Comment.Metadata>
              <Comment.Text>
                I'm very interested in this motherboard. Do you know if it'd
                work in a Intel LGA775 CPU socket?
              </Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>

            <Comment.Group collapsed={collapsed}>
              <Comment>
                <Comment.Avatar as='a' src='/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Elliot Fu</Comment.Author>
                  <Comment.Metadata>
                    <span>1 day ago</span>
                  </Comment.Metadata>
                  <Comment.Text>No, it wont</Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                  <Comment>
                    <Comment.Avatar
                      as='a'
                      src='/images/avatar/small/jenny.jpg'
                    />
                    <Comment.Content>
                      <Comment.Author as='a'>Jenny Hess</Comment.Author>
                      <Comment.Metadata>
                        <span>20 minutes ago</span>
                      </Comment.Metadata>
                      <Comment.Text>Maybe it would.</Comment.Text>
                      <Comment.Actions>
                        <a>Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>
            </Comment.Group>
          </Comment>
        </Comment.Group>
      </div>
    )
  }
}
