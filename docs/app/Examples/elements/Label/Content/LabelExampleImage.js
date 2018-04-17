import React from 'react'
import { Image, Label } from 'semantic-ui-react'

const LabelExampleImage = () => (
  <div>
    <Label as='a'>
      <Image avatar spaced='right' src='/assets/images/avatar/small/elliot.jpg' />
      Elliot
    </Label>
    <Label
      as='a'
      renderImage={({ styles }) => <img className={styles.__img} src='/assets/images/avatar/small/stevie.jpg' />}
      content='Stevie'
    />
  </div>
)

export default LabelExampleImage
