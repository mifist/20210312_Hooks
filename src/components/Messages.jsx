import {useState, useEffect} from "react"
import PrintScrollToBottom from "./PrintScrollToBottom"
import {subscribeToMessages, getInitData} from "../data"

const  Messages  = () =>  {
  const [messages, setMessages] = useState(getInitData)
 
  useEffect(() => {
    const fn = subscribeToMessages(message => {
      setMessages(x => [...x, message])
    })
    return () => fn()
  }, [])

  useEffect(()=> {
    document.title =  messages.length
  })

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


export default Messages
