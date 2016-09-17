import { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
     render() {
          return <h1>Hey it worked</h1>;
     }
}
render(<App/>, document.querySelector('#root'));
