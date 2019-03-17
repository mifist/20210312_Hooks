import React, { Component } from "react";

class CounterCls extends Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`);
    }, 3000);
  }
  componentDidUpdate() {
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`);
    }, 3000);
  }
  render() {
    return (
      <>
        <h3>Class Counter: {this.state.count}</h3>

        <button
          className="btn btn-primary"
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Click me
        </button>
      </>
    );
  }
}

export default CounterCls;
