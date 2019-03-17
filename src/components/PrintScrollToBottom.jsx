import {lifecycle} from "recompose"

const scroll = () => window.scrollTo(0, document.documentElement.scrollHeight)

const PrintScrollToBottom = ({children}) => children

const enhance = lifecycle({
  componentDidMount() {
    scroll()
  },
  getSnapshotBeforeUpdate() {
    const {clientHeight, scrollTop, scrollHeight} = document.documentElement
    return clientHeight + scrollTop < scrollHeight
  },
  componentDidUpdate(prevProps, prevState, isScrolledUp) {
    if (!isScrolledUp) scroll()
  },
})

export default enhance(PrintScrollToBottom)
