import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }
  
  handleIncrease = () => {
    this.setState(state => ({
      number: state.number + 1
    }))
  }

  handleDecrease = () => {
    this.setState(state => ({
      number: state.number - 1
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}