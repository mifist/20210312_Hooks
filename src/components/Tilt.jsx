import {useRef, useEffect} from "react"
import VanillaTilt from "vanilla-tilt";

//https://micku7zu.github.io/vanilla-tilt.js/

const Tilt = props => {
  const tiltRef = useRef();

  useEffect(() => {
       const tr = tiltRef.current;
       VanillaTilt.init(tr, {
        glare: true,
        maxGlare: 0.5,
        speed: 400,
        startX: -20,
        startY: -20,
        max: 25
       });
       return () => tr.vanilaTilt.destroy();
  }, [])

  return <div  ref={tiltRef} className="custom-tilt" />
}

export default Tilt
