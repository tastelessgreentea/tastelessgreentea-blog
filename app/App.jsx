import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <div styleName='app'>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default CSSModules(App, styles);