import React, { Component } from 'react';

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  }

  sayHello() {
    console.log("Hello! Counter incremented.");
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterComponent;
