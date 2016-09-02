import React from 'react'
import { Progress, Segment } from 'stardust'

const ProgressInvertedColorExample = () => (
  <Segment inverted>
    <Progress percent={32} inverted color='red' label />
    <Progress percent={59} inverted color='orange' label />
    <Progress percent={13} inverted color='yellow' label />
    <Progress percent={37} inverted color='olive' label />
    <Progress percent={83} inverted color='green' label />
    <Progress percent={23} inverted color='teal' label />
    <Progress percent={85} inverted color='blue' label />
    <Progress percent={38} inverted color='violet' label />
    <Progress percent={47} inverted color='purple' label />
    <Progress percent={29} inverted color='pink' label />
    <Progress percent={68} inverted color='brown' label />
    <Progress percent={36} inverted color='grey' label />
    <Progress percent={72} inverted color='black' label />
  </Segment>
)

export default ProgressInvertedColorExample
