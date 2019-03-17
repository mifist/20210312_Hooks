import {useRef, useEffect} from "react"
import VanillaTilt from "vanilla-tilt"

//https://micku7zu.github.io/vanilla-tilt.js/

const Tilt = props => {
  const tiltRef = useRef()

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      speed: 400,
      max: 25,
      startX: -25,
      startY: 25,
      perspective: 500,
      glare: true,
      "max-glare": 0.5,
    })
    return () => tiltRef.current.vanillaTilt.destroy()
  }, [])

  return <div ref={tiltRef} className="custom-tilt" />
}

export default Tilt
