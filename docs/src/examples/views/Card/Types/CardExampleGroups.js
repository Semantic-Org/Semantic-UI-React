import React from 'react'
import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from 'semantic-ui-react'

const CardExampleGroups = () => (
  <CardGroup>
    <Card>
      <CardContent>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <CardHeader>Steve Sanders</CardHeader>
        <CardMeta>Friends of Elliot</CardMeta>
        <CardDescription>
          Steve wants to add you to the group <strong>best friends</strong>
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/molly.png'
        />
        <CardHeader>Molly Thomas</CardHeader>
        <CardMeta>New User</CardMeta>
        <CardDescription>
          Molly wants to add you to the group <strong>musicians</strong>
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/jenny.jpg'
        />
        <CardHeader>Jenny Lawrence</CardHeader>
        <CardMeta>New User</CardMeta>
        <CardDescription>
          Jenny requested permission to view your contact details
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>
  </CardGroup>
)

export default CardExampleGroups
