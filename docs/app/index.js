import React from 'react'
import { render } from 'react-dom'
import App from './App'

const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

render(<App />, mountNode)
