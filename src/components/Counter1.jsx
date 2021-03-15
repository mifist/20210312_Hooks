import {useState, useEffect, useReducer} from "react"

const initState = {count: 0, step: 1}

// tick 
// step
function reducer(state, action){
  switch(action.type){
    case "tick": return{...state, count: state.count + state.step}
    case "step": return{...state, step: action.step}
    default: throw Error('this is impossible')
  }
}

const Counter1 = () => {
  const [{count, step}, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const id = setInterval(() => dispatch({type: 'tick'}), 1000)
    return () => clearInterval(id)
  }, [])

  return <>
  <input type="number" value={step} onChange={e => dispatch({type: 'step', step: Number(e.target.value)})}/>
  <h3>Counter_1: {count}</h3>
  </>
}

export default Counter1
