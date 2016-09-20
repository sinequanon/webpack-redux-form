import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
     render(<App/>, document.querySelector('#root'));
}

renderApp();

if (module.hot) {
     module.hot.accept('./App', () => {
          const HotApp = require('./App').default;
          renderApp();
          return true;
     })
}
