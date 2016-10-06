import React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './Root'

const renderApp = () => {
  render(<AppContainer><Root/></AppContainer>, document.querySelector('#root'))
}

renderApp()

if (module.hot) {
  module.hot.accept('./Root', () => {
    const HotApp = require('./Root').default
    renderApp()
    return true
  })
}
