function id() {
  return Math.floor(new Date().getTime() + Math.random() * 1e6).toString(36);
}

const data = [
  {
    id: id(),
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "https://avatars0.githubusercontent.com/u/810438?v=4",
  },
  {
    id: id(),
    text: "Sequi aperiam esse obcaecati culpa labore consequuntur nulla!",
    img: "https://avatars2.githubusercontent.com/u/6820?v=4",
  },
  {
    id: id(),
    text: " Tempore numquam consequatur doloremque suscipit voluptates.",
    img: "https://avatars2.githubusercontent.com/u/199471?v=4",
  },
  {
    id: id(),
    text:
      "Cumque vel veritatis assumenda et rerum ea recusandae voluptatem, tempora quasi optio libero quos animi",
    img: "https://avatars0.githubusercontent.com/u/1500684?v=4",
  },
];

function subscribeToMessages(fn) {
  setInterval(() => {
    const msg = { ...data[Math.floor(Math.random() * data.length)] };
    msg.id = id();
    fn(msg);
  }, 6000);
}

export { data, subscribeToMessages };
