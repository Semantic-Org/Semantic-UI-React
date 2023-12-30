import faker from 'faker'
import React from 'react'
import {
  PlaceholderParagraph,
  PlaceholderLine,
  PlaceholderHeader,
  Button,
  Header,
  Placeholder,
  Popup,
} from 'semantic-ui-react'

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
          <PlaceholderHeader>
            <PlaceholderLine />
            <PlaceholderLine />
          </PlaceholderHeader>
          <PlaceholderParagraph>
            <PlaceholderLine length='medium' />
            <PlaceholderLine length='short' />
          </PlaceholderParagraph>
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
