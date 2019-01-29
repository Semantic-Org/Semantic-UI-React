import React, { Component } from 'react'
import { Grid, Ref, Segment } from 'semantic-ui-react'

const ExampleButton = React.forwardRef((props, ref) => (
  <div>
    <button {...props} ref={ref} />
  </div>
))

export default class RefForwardingExample extends Component {
  forwardedRef = React.createRef()
  state = { isMounted: false }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ isMounted: true })
  }

  render() {
    const { isMounted } = this.state
    const buttonNode = this.forwardedRef.current

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Segment>
            <p>
              A button below uses <code>forwardRef</code> API.
            </p>

            <Ref innerRef={this.forwardedRef}>
              <ExampleButton>A button</ExampleButton>
            </Ref>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          {isMounted && (
            <Segment secondary>
              <pre>
                {JSON.stringify(
                  {
                    nodeName: buttonNode.nodeName,
                    nodeType: buttonNode.nodeType,
                    textContent: buttonNode.textContent,
                  },
                  null,
                  2,
                )}
              </pre>
            </Segment>
          )}
        </Grid.Column>
      </Grid>
    )
  }
}
