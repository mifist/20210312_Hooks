import {useRef, useLayoutEffect} from 'react'

function useMounted(){
    const mounted = useRef(null)

    useLayoutEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        }
    }, [])
    return mounted
}

export default useMounted