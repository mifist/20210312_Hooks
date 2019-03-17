import React from "react"
import PrintScrollToBottom from "./PrintScrollToBottom"
import {data, subscribeToMessages} from "../data"

class Messages extends React.Component {
  state = {
    messages: data,
  }

  componentDidMount() {
    subscribeToMessages(message =>
      this.setState(({messages}) => ({
        messages: [...messages, message],
      })),
    )
  }
  componentDidUpdate(prevProps, prevState) {
    document.title = this.state.messages.length
  }

  render() {
    const {messages} = this.state
    return (
      <div className="container pt-5">
        <span className="info">{messages.length}</span>
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
