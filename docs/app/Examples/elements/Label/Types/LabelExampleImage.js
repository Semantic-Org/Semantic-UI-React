import React from 'react'
import { Label } from 'semantic-ui-react'

const LabelExampleImage = () => (
  <div>
    <Label
      as='a'
      image
      renderImage={({ styles }) => (
        <img className={styles.__img} src='/assets/images/avatar/small/joe.jpg' />
      )}
      content='Joe'
    />
    <Label
      as='a'
      image
      renderImage={({ styles }) => (
        <img className={styles.__img} src='/assets/images/avatar/small/elliot.jpg' />
      )}
      content='Elliot'
    />
    <Label
      as='a'
      image
      renderImage={({ styles }) => (
        <img className={styles.__img} src='/assets/images/avatar/small/stevie.jpg' />
      )}
      content='Stevie'
    />
  </div>
)

export default LabelExampleImage
