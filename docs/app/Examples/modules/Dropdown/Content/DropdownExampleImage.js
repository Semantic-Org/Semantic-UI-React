import faker from 'faker'
import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'

const DropdownExampleImage = () => (
  <Dropdown text='Add user' floating labeled button className='icon'>
    {/* <i class="add user icon"></i> */}
    <Dropdown.Menu>
      <Dropdown.Header content='People You Might Know' />
      <Dropdown.Item>
        <Image src={faker.image.avatar()} className='avatar' />
        Jenny Hess
      </Dropdown.Item>
      <Dropdown.Item>
        <Image src={faker.image.avatar()} className='avatar' />
        Elliot Fu
      </Dropdown.Item>
      <Dropdown.Item>
        <Image src={faker.image.avatar()} className='avatar' />
        Stevie Feliciano
      </Dropdown.Item>
      <Dropdown.Header content="Your Friends' Friends" />
      <Dropdown.Item>
        <Image src={faker.image.avatar()} className='avatar' />
        Christian
      </Dropdown.Item>
      <Dropdown.Item>
        <Image src={faker.image.avatar()} className='avatar' />
        Matt
      </Dropdown.Item>
      <Dropdown.Item>
        <Image src={faker.image.avatar()} className='avatar' />
        Justen Kitsune
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleImage
