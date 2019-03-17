import {useState, useEffect} from "react"
import api from "./api"

const Users = () => {
  const [users, setUsers] = useState([])
  const [id, setId] = useState(1)

  console.log("Render interface for ID: ", id)

  useEffect(() => {
    const unsubscribed = api.subscribe(id, function (user) {
      setUsers(x => [user, ...x])
    })
    console.log("Effect for ID", id)
    return () => {
      unsubscribed()
      console.log("Clean for ID: ", id)
    }
  }, [id])

  return (
    <>
      <button onClick={() => setId(x => x + 1)} className="btn btn-primary">
        Add user{" "}
      </button>
      <ul className="list-group mt-3">
        {users.map(user => (
          <li key={user.id} className="list-group-item">
            id: {user.id} - {user.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Users
