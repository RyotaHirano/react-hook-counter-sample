import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="Counter">
        <b>Counter</b>
        <button onClick={() => this.setState({
          count: this.state.count + 1
        })}>
          Click Me
        </button>
        <span className="Counter-count">{this.state.count}</span>
      </div>
    )
  }
}

export default Counter;