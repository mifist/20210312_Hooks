import {Component} from "react"

class CounterCls extends Component {
  state = {
    count: 0,
  }
  increment = () => this.setState(({count}) => ({count: count + 1}))

  handleAlertClick = () => {
    setTimeout(() => {
      console.log("You clicked on: " + this.state.count)
    }, 3000)
  }
  render() {
    return (
      <>
        <h1>Counter class</h1>
        <h3>clicked: {this.state.count} times</h3>
        <button onClick={this.increment} className="btn btn-primary mr-3">
          Click me
        </button>
        <button className="btn btn-success" onClick={this.handleAlertClick}>
          Show alert
        </button>
      </>
    )
  }
}

export default CounterCls
