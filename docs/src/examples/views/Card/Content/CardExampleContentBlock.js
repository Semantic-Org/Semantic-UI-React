import React from 'react'
import {
  FeedSummary,
  FeedLabel,
  FeedEvent,
  FeedDate,
  FeedContent,
  CardHeader,
  CardContent,
  Card,
  Feed,
} from 'semantic-ui-react'

const CardExampleContentBlock = () => (
  <Card>
    <CardContent>
      <CardHeader>Recent Activity</CardHeader>
    </CardContent>
    <CardContent>
      <Feed>
        <FeedEvent>
          <FeedLabel image='/images/avatar/small/jenny.jpg' />
          <FeedContent>
            <FeedDate content='1 day ago' />
            <FeedSummary>
              You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </FeedSummary>
          </FeedContent>
        </FeedEvent>

        <FeedEvent>
          <FeedLabel image='/images/avatar/small/molly.png' />
          <FeedContent>
            <FeedDate content='3 days ago' />
            <FeedSummary>
              You added <a>Molly Malone</a> as a friend.
            </FeedSummary>
          </FeedContent>
        </FeedEvent>

        <FeedEvent>
          <FeedLabel image='/images/avatar/small/elliot.jpg' />
          <FeedContent>
            <FeedDate content='4 days ago' />
            <FeedSummary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </FeedSummary>
          </FeedContent>
        </FeedEvent>
      </Feed>
    </CardContent>
  </Card>
)

export default CardExampleContentBlock
