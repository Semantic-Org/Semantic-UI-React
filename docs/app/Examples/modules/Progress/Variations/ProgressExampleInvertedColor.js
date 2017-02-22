import React from 'react'
import { Progress, Segment } from 'semantic-ui-react'

const ProgressExampleInvertedColor = () => (
  <Segment inverted>
    <Progress percent={32} inverted color='red' progress />
    <Progress percent={59} inverted color='orange' progress />
    <Progress percent={13} inverted color='yellow' progress />
    <Progress percent={37} inverted color='olive' progress />
    <Progress percent={83} inverted color='green' progress />
    <Progress percent={23} inverted color='teal' progress />
    <Progress percent={85} inverted color='blue' progress />
    <Progress percent={38} inverted color='violet' progress />
    <Progress percent={47} inverted color='purple' progress />
    <Progress percent={29} inverted color='pink' progress />
    <Progress percent={68} inverted color='brown' progress />
    <Progress percent={36} inverted color='grey' progress />
    <Progress percent={72} inverted color='black' progress />
  </Segment>
)

export default ProgressExampleInvertedColor
