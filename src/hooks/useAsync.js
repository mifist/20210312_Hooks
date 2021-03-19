import {useReducer, useCallback, useRef} from 'react'
import useMounted from './useMounted'


const defaultState = {status: 'idle', data: null, error: null}


function useSafedDispatch(dispatch){
  const mounted = useMounted();

  return useCallback((...args) => {
    if(mounted.current){
      dispatch(...args)
    }
  }, [dispatch, mounted])
}


const useAsync = (initialState) => {
  const initialStateRef = useRef({
    ...defaultState,
    ...initialState
  })

  const [{data, status, error}, unsafedDispatch] = useReducer((s, a) => ({...s, ...a}), initialStateRef.current)

  
  const dispatch = useSafedDispatch(unsafedDispatch)
   
  const setError =  useCallback( error => dispatch({error, status: 'rejected'}), [dispatch])

  const reset = useCallback(() => dispatch(initialState.current), [dispatch, initialState])

  const setData = useCallback(data => dispatch({data, status: 'resolved'}), [dispatch])
  
  const run = useCallback(promise => {
    if(!promise) {
        return;
    }

    dispatch({status: 'pending'})


    promise.then(
        data => { 
          setData(data)
          return data
        },
        error => { 
          setError(error)
          return Promise.reject(error)
        }
      )
  }, [dispatch, setData, setError])

  return {data, run, status, error, setData, setError, reset, 
    isLoading: status ==='pending',
    isError: status ==='error',
    isSuccess: status ==='resolved',
    isIdle: status ==='idle'
  };
}

export default useAsync
