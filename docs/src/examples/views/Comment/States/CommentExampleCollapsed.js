import React, { Component } from 'react'
import {
  CommentText,
  CommentMetadata,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  CommentActions,
  CommentAuthor,
  Checkbox,
  Comment,
} from 'semantic-ui-react'

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

        <CommentGroup>
          <Comment>
            <CommentAvatar as='a' src='/images/avatar/small/christian.jpg' />
            <CommentContent>
              <CommentAuthor as='a'>Christian Rocha</CommentAuthor>
              <CommentMetadata>
                <span>2 days ago</span>
              </CommentMetadata>
              <CommentText>
                I'm very interested in this motherboard. Do you know if it'd
                work in a Intel LGA775 CPU socket?
              </CommentText>
              <CommentActions>
                <a>Reply</a>
              </CommentActions>
            </CommentContent>

            <CommentGroup collapsed={collapsed}>
              <Comment>
                <CommentAvatar as='a' src='/images/avatar/small/elliot.jpg' />
                <CommentContent>
                  <CommentAuthor as='a'>Elliot Fu</CommentAuthor>
                  <CommentMetadata>
                    <span>1 day ago</span>
                  </CommentMetadata>
                  <CommentText>No, it wont</CommentText>
                  <CommentActions>
                    <a>Reply</a>
                  </CommentActions>
                </CommentContent>

                <CommentGroup>
                  <Comment>
                    <CommentAvatar
                      as='a'
                      src='/images/avatar/small/jenny.jpg'
                    />
                    <CommentContent>
                      <CommentAuthor as='a'>Jenny Hess</CommentAuthor>
                      <CommentMetadata>
                        <span>20 minutes ago</span>
                      </CommentMetadata>
                      <CommentText>Maybe it would.</CommentText>
                      <CommentActions>
                        <a>Reply</a>
                      </CommentActions>
                    </CommentContent>
                  </Comment>
                </CommentGroup>
              </Comment>
            </CommentGroup>
          </Comment>
        </CommentGroup>
      </div>
    )
  }
}
