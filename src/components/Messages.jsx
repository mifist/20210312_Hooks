import {Component} from "react"
import PrintScrollToBottom from "./PrintScrollToBottom"
import {subscribeToMessages, getInitData} from "../data"

class Messages extends Component {
  state = {
    messages: getInitData(),
  }

  componentDidMount() {
    subscribeToMessages(message => {
      this.setState({messages: this.state.messages.concat([message])})
    })
  }

  render() {
    const {messages} = this.state
    return (
      <div className="container pt-5">
        <PrintScrollToBottom>
          <ul className="grid">
            {messages.map(message => (
              <li className="box" key={message.id}>
                <div
                  className="box__avatar"
                  style={{backgroundImage: `url(${message.img})`}}
                />
                <p className="box__content">{message.text}</p>
              </li>
            ))}
          </ul>
        </PrintScrollToBottom>
      </div>
    )
  }
}

export default Messages
