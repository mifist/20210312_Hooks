import React, {useState} from "react"

function Form({handleSubmit}) {
  const [value, setValue] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    handleSubmit(value)
  }

  return (
    <form onSubmit={onSubmit} className="form-inline mr-5">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        className="form-control mr-2"
      />
      <button className="btn btn-success">Click me</button>
    </form>
  )
}

export default Form
