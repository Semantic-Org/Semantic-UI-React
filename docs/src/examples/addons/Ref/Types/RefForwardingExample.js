import React from 'react'
import { Grid, Ref, Segment } from 'semantic-ui-react'

const ExampleButton = React.forwardRef((props, ref) => (
  <div>
    <button {...props} ref={ref} />
  </div>
))

function RefForwardingExample() {
  const forwardedRef = React.useRef(null)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return (
    <Grid columns={2}>
      <Grid.Column>
        <Segment>
          <p>
            A button below uses <code>React.forwardRef()</code> API.
          </p>

          <Ref innerRef={forwardedRef}>
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
                  nodeName: forwardedRef.current.nodeName,
                  nodeType: forwardedRef.current.nodeType,
                  textContent: forwardedRef.current.textContent,
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

export default RefForwardingExample
