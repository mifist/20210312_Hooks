import {useState, useEffect, useRef} from 'react'

const useLocalStorage = (
    key, 
    initVal = '',
    {serialize = JSON.stringify, deserialize = JSON.parse} = {}
    ) => {
    const [state, setState] = useState(
        () => {
            const val = localStorage.getItem(key)
            if(val){
                return deserialize(val)
            }
            return  typeof initVal === 'function' ? initVal() : initVal
        }
    )
        const keyRef = useRef(key);


        useEffect(() => {
            const prevKey = keyRef.current;
            if(prevKey !== key) {
                localStorage.remove(prevKey)
            }
            keyRef.current = key
             localStorage.setItem(key, serialize(state))   
        }, [key, serialize, state])

    return [state, setState]
}

export default useLocalStorage
