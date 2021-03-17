import {useReducer, useCallback} from 'react'
import useMounted from './useMounted'


function reducer(state, action) {
    switch (action.type) {
      case "pending": return{data:null, error:null, status: 'pending'}
      case "resolved": return{data:action.data, error:null, status: 'resolved'}
      case "rejected": return{data:null, error:action.error, status: 'rejected'}
      default:
        throw Error("this case impossible")
    }
  }

  function useSafedDispatch(dispatch){
    const mounted = useMounted();
    
    return  useCallback((...args) => {
        if(mounted.current){
            dispatch(...args)
        } 
    }, [dispatch, mounted]) 
  }



const useAsync = (initialState) => {
  const [state, unsafedDispatch] = useReducer(reducer, {
      status : 'idle',
    data:null,
    error: null,
    ...initialState
  })

  
  const dispatch = useSafedDispatch(unsafedDispatch)
   
  
  const run = useCallback(promise => {
    if(!promise) {
        return;
    }
    dispatch({type: 'pending'})
    promise.then(
        data => { dispatch({type: 'resolved', data})},
        error => { dispatch({type: 'rejected', error})}
      )
  }, [])

  return {...state, run};
}

export default useAsync
