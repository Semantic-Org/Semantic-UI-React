import React from 'react'
import { Accordion, List, Image, Button } from 'stardust'
import { render } from 'react-dom'

class AccordionExampleList extends React.Component {
  imgStyle = { display: 'block', width: '2rem' }
  getAvatar = () => <Image src="//placehold.it/100" style={this.imgStyle} />

  firstGroupList = [
    { key: 'g11', media: this.getAvatar(), header: 'cat' },
    { key: 'g12', media: this.getAvatar(), header: 'dog' },
    { key: 'g13', media: this.getAvatar(), header: 'mouse' },
  ]

  render() {
    const buttonStyle = { marginLeft: '1.3rem' }
    const accContent = [
      <List key="firstGroupList" items={this.firstGroupList} />,
      <Button key="firstButton" style={buttonStyle}>
        Add pet
      </Button>,
    ]

    const panels = [{ title: 'Pets', content: accContent }]

    return <Accordion panels={panels} />
  }
}

export default AccordionExampleList
