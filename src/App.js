import React, { Component } from 'react';
import './App.css';

import Counter from './compoment/counter/Counter';
import HookCounter from './compoment/counter/HookCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Hook Counter
        </header>

        <div className="App-counters">
          <div className="App-counter">
            <Counter />
          </div>
          <div className="App-counter">
            <HookCounter />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
