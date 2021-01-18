import {useState} from "react"

const HeaderMemo = props => {
  const [inputValue, setInputValue] = useState("")

  const handleInputValue = e => setInputValue(e.target.value)

  const reverseWord = word => {
    console.log("Function reverseWord invoked")
    return word.split("").reverse().join("")
  }

  const title = "Hello world"
  const titleReversed = reverseWord(title)

  return (
    <>
      <h1>{titleReversed}</h1>
      <div className="form-group">
        <input
          value={inputValue}
          onChange={handleInputValue}
          className="form-control"
        />
      </div>
    </>
  )
}

export default HeaderMemo
