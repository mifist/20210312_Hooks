import {useState, useLayoutEffect, useEffect} from "react"

const scroll = () => window.scrollTo(0, document.documentElement.scrollHeight)

const PrintScrollToBottom = ({children}) => {
   const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    scroll();
    function onScroll(){
      const {clientHeight, scrollHeight} = document.documentElement
      setIsScrolled(clientHeight + window.pageYOffset < scrollHeight)
      window.addEventListener('scroll', onScroll) 
     }
     return () => window.removeEventListener('scroll', onScroll)
  }, [])


  useLayoutEffect(() => {
    if (!isScrolled) {
      scroll()
    }
  })

  return children
}

export default PrintScrollToBottom;