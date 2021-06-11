import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { mount } from '@xiaobai-world/api'

function render(selector: string) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.querySelector(selector)
  )
}

mount((selector) => {
  render(selector)
}).catch(() => {
  render('#root')
})
