import _ from 'lodash'
import React, { Component, createRef } from 'react'
import {
  Button,
  Checkbox,
  Divider,
  Grid,
  Image,
  Label,
  Ref,
  Segment,
  Sticky,
  Visibility,
} from 'semantic-ui-react'

export default class VisibilityExampleCallbackFrequency extends Component {
  state = {
    continuous: false,
    log: [],
    logCount: 0,
    once: true,
  }
  contextRef = createRef()

  updateLog = (eventName) => () =>
    this.setState((prevState) => ({
      log: [
        `${new Date().toLocaleTimeString()}: ${eventName}`,
        ...prevState.log,
      ].slice(0, 20),
      logCount: prevState.logCount + 1,
    }))

  clearLog = () => this.setState({ log: [], logCount: 0 })

  toggleOnce = () => this.setState((prevState) => ({ once: !prevState.once }))

  toggleContinuous = () =>
    this.setState((prevState) => ({ continuous: !prevState.continuous }))

  render() {
    const { continuous, log, logCount, once } = this.state

    return (
      <Ref innerRef={this.contextRef}>
        <Grid columns={2}>
          <Grid.Column>
            <Visibility
              continuous={continuous}
              once={once}
              onTopVisible={this.updateLog('onTopVisible')}
              onTopPassed={this.updateLog('onTopPassed')}
              onBottomVisible={this.updateLog('onBottomVisible')}
              onBottomPassed={this.updateLog('onBottomPassed')}
              onTopVisibleReverse={this.updateLog('onTopVisibleReverse')}
              onTopPassedReverse={this.updateLog('onTopPassedReverse')}
              onBottomVisibleReverse={this.updateLog('onBottomVisibleReverse')}
              onBottomPassedReverse={this.updateLog('onBottomPassedReverse')}
              onPassing={this.updateLog('onPassing')}
              onPassingReverse={this.updateLog('onPassingReverse')}
              onOnScreen={this.updateLog('onOnScreen')}
              onOffScreen={this.updateLog('onOffScreen')}
            >
              <Segment>
                {_.map(
                  [
                    '/images/wireframe/centered-paragraph.png',
                    '/images/wireframe/short-paragraph.png',
                    '/images/wireframe/media-paragraph.png',
                    '/images/wireframe/paragraph.png',
                    '/images/wireframe/centered-paragraph.png',
                    '/images/wireframe/short-paragraph.png',
                    '/images/wireframe/media-paragraph.png',
                    '/images/wireframe/paragraph.png',
                    '/images/wireframe/centered-paragraph.png',
                    '/images/wireframe/short-paragraph.png',
                    '/images/wireframe/media-paragraph.png',
                    '/images/wireframe/paragraph.png',
                  ],
                  (src, index, images) => (
                    <React.Fragment key={index}>
                      <Image src={src} />
                      {index !== images.length - 1 && <Divider />}
                    </React.Fragment>
                  ),
                )}
              </Segment>
            </Visibility>
          </Grid.Column>

          <Grid.Column>
            <Sticky context={this.contextRef}>
              <Segment.Group>
                <Segment>
                  <Checkbox
                    checked={once}
                    label='Once'
                    onChange={this.toggleOnce}
                    toggle
                  />
                  <Divider />
                  <Checkbox
                    checked={continuous}
                    label='Continuous'
                    onChange={this.toggleContinuous}
                    toggle
                  />
                </Segment>
                <Segment>
                  <Button
                    compact
                    size='small'
                    floated='right'
                    onClick={this.clearLog}
                  >
                    Clear
                  </Button>
                  Event Log <Label circular>{logCount}</Label>
                </Segment>
                <Segment secondary>
                  <pre>
                    {log.map((e, i) => (
                      <div key={i}>{e}</div>
                    ))}
                  </pre>
                </Segment>
              </Segment.Group>
            </Sticky>
          </Grid.Column>
        </Grid>
      </Ref>
    )
  }
}
