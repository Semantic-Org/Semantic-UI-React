import faker from 'faker'
import React from 'react'
import { Button, Header, Placeholder, Popup } from 'semantic-ui-react'

const PopupExamplePopperDependencies = () => {
  const [data, setData] = React.useState(null)
  const timer = React.useRef()

  return (
    <Popup
      on='click'
      onClose={() => {
        setData(null)
        clearTimeout(timer.current)
      }}
      onOpen={() => {
        setData(null)

        timer.current = setTimeout(() => {
          setData({
            description: faker.lorem.sentences(5),
            name: faker.name.firstName(),
            title: faker.name.title(),
          })
        }, 2000)
      }}
      popperDependencies={[!!data]}
      trigger={<Button content='Simulate loading' icon='lab' />}
      wide
    >
      {data === null ? (
        <Placeholder style={{ minWidth: '200px' }}>
          <Placeholder.Header>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      ) : (
        <>
          <Header as='h2' content={data.name} subheader={data.title} />
          <p>{data.description}</p>
        </>
      )}
    </Popup>
  )
}

export default PopupExamplePopperDependencies
