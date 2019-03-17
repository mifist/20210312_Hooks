import {Component} from "react"

class PrintScrollToBottom extends Component {
  componentDidMount() {
    this.scroll()
  }

  componentDidUpdate(prevProps, prevState, isScrolledUp) {
    if (!isScrolledUp) this.scroll()
  }

  getSnapshotBeforeUpdate() {
    const {clientHeight, scrollTop, scrollHeight} = document.documentElement
    return clientHeight + scrollTop < scrollHeight
  }

  scroll = () => {
    window.scrollTo(0, document.documentElement.scrollHeight)
  }
  render() {
    return this.props.children
  }
}

export default PrintScrollToBottom
