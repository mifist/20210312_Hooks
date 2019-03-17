function id() {
  return Math.floor(new Date().getTime() + Math.random() * 1e6).toString(36)
}

const data = [
  {
    id: id(),
    text:
      "Dan Abramov got into programming after he accidentally discovered Visual Basic inside Microsoft PowerPoint. He has found his true calling in turning Sebastian’s tweets into long-form blog posts.",
    img: "https://avatars0.githubusercontent.com/u/810438?v=4",
  },
  {
    id: id(),
    text:
      "Ryan Florence. Ryan is the creator and co-author of React Router, and a handful of other React components. He works as the Frontend Infrastructure lead at Instructure.",
    img: "https://avatars0.githubusercontent.com/u/100200?v=4",
  },
  {
    id: id(),
    text:
      "Michael Jackson. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.",
    img: "https://avatars0.githubusercontent.com/u/92839?v=4",
  },
  {
    id: id(),
    text:
      "Luna Ruan learned programming because she thought it meant creating video games. Instead, she ended up working on the Pinterest web app, and now on React itself",
    img: "https://avatars0.githubusercontent.com/u/2735514?v=4",
  },
  {
    id: id(),
    text:
      "Rachel Nabors. Rachel wrote a book about UI animation once and worked with MDN and the W3C on the web animations API.",
    img: "https://avatars1.githubusercontent.com/u/236306?v=4",
  },
  {
    id: id(),
    text:
      "Brian studied art in college and did programming on the side to pay for his education. Eventually, he realized that he enjoys working on open source",
    img: "https://avatars0.githubusercontent.com/u/29597?v=4",
  },
  {
    id: id(),
    text:
      "Kent C. Dodds is a world renowned speaker, teacher, and trainer and he’s actively involved in the open source community as a maintainer and contributor of hundreds of popular npm packages.",
    img: "https://avatars0.githubusercontent.com/u/1500684?v=4",
  },
  {
    id: id(),
    text:
      "Andrew Clark.  got started with web development by making sites with WordPress, and eventually tricked himself into doing JavaScript. His favorite pastime is karaoke",
    img: "https://avatars0.githubusercontent.com/u/3624098?v=4",
  },
]

function getInitData() {
  const randomItems = []
  const len = data.length
  const usedNums = []
  for (let i = 0; i < 3; i++) {
    let idx
    do {
      idx = Math.floor(Math.random() * len)
    } while (usedNums.includes(idx))
    usedNums.push(idx)
    randomItems.push(data[idx])
  }
  return randomItems
}

function subscribeToMessages(fn) {
  const interval = setInterval(() => {
    const msg = {...data[Math.floor(Math.random() * data.length)]}
    msg.id = id()
    fn(msg)
  }, 6000)
  return () => clearInterval(interval)
}

export {data, subscribeToMessages, getInitData}
