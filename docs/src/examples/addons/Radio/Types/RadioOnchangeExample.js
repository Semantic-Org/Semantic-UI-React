import React, { useState } from 'react'
import { Radio } from 'semantic-ui-react'

const RadioOnChange = () => {
  const [profileState, setProfileState] = useState(false)

  const handleChange = () => setProfileState(!profileState)

  return (
    <>
      <p>{profileState ? 'Profile is visible' : 'Profile is invisible'}</p>
      <Radio
        id='profile-radio'
        toggle
        label='Make my profile visible'
        onChange={handleChange}
      />
    </>
  )
}

export default RadioOnChange
