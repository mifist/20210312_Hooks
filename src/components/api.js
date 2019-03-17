export default {
  subscribe(id, handler) {
    const ob = { id, title: "User " + id };
    handler(ob);
    return function () {};
  },
};
