import React from 'react'
import { Grid, Table, Ref, Segment } from 'semantic-ui-react'

function RefExampleRef() {
  const objectRef = React.useRef(null)
  const [functionalRef, setFunctionalRef] = React.useState(null)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return (
    <Grid>
      <Grid.Column width={6}>
        <Segment.Group>
          <Ref innerRef={setFunctionalRef}>
            <Segment>An example node with functional ref</Segment>
          </Ref>
          <Ref innerRef={objectRef}>
            <Segment>
              An example node with ref via <code>React.useRef()</code>
            </Segment>
          </Ref>
        </Segment.Group>
      </Grid.Column>
      <Grid.Column width={10}>
        {isMounted && (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>
                  <code>nodeName</code>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <code>textContent</code>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell singleLine>
                  Functional ref via <code>React.useState()</code> hook
                </Table.Cell>
                <Table.Cell>{functionalRef.nodeName}</Table.Cell>
                <Table.Cell>{functionalRef.textContent}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell singleLine>
                  From <code>React.useRef()</code> hook
                </Table.Cell>
                <Table.Cell>{objectRef.current.nodeName}</Table.Cell>
                <Table.Cell>{objectRef.current.textContent}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        )}
      </Grid.Column>
    </Grid>
  )
}

export default RefExampleRef
