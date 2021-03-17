import {useState, useEffect} from "react"


const Form = ({title: parentTitle, onSubmit}) => {
  const [title, setTitle] = useState(parentTitle || "")

  useEffect(() => {
    if(parentTitle === '') {
      setTitle('')
    }
  }, [parentTitle])


  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(title)
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  const handleSelect = title => {
    setTitle(title)
    onSubmit(title)
  }

  return (
    <div className="form">
      <div className="form__buttons">
        <button onClick={() => handleSelect("films")}>Films</button>
        <button onClick={() => handleSelect("people")}>People</button>
        <button onClick={() => handleSelect("planets")}>Planets</button>
      </div>
      <form onSubmit={handleSubmit} className="my-3 inline-form md-4">
        <div className="form-group">
          <input value={title} onChange={handleChange} />
        </div>
        <div>
          <button className="btn btn-primary mr-3">Click</button>
          <button onClick={() => setTitle("")} className="btn btn-success">
            Clean
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
