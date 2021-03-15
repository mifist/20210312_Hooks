import frontend from "./img/frontend.jpg";
import react from "./img/react.png";
import php from "./img/php.jpg";


const courses = [
  {
    id: "1",
    title: "Front-End",
    img: frontend,
    description:
      "Мы учим делать сайты: объясняем как работает браузер, как применять на практике HTML, CSS и JavaScript",
    tags: ["html", "css", "javascript"],
    related: [],
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    img: react,
    description:
      "Если ты уже работаешь с JavaScript, пришло время для React/Redux. Библиотека React JS решает проблемы, связанные с интерфейсом – товары в корзине, списки пользователей.",
    tags: ["react", "redux", "javascript"],
    related: [{ title: "Front-End", id: "1" }],
  },
  {
    id: "3",
    title: "Backend",
    img: php,
    description:
      "Как создать масштабный сайт, не используя готовые системы? Как работают интернет-магазины и соцсети? На эти вопросы отвечает наш курс по Back-End разработке.",
    tags: ["php", "backend"],
    related: [{ title: "Front-End", id: "1" }],
  },
  {
    id: "4",
    title: "Word Press",
    img: php,
    description:
      "На WordPress можно создавать сайты любой сложности. Платформа используется для продающих сайтов, новостных систем с аналитикой, сайтов с множеством событий, продуктов, проектов, портфолио, услуг компании.",
    tags: ["cms", "wordpress", "php"],
    related: [
      { title: "Front-End", id: "1" },
      { title: "Backend", id: "3" },
    ],
  },
];

async function getCourse(courseId) {
  return courses.find(({ id }) => id === courseId);
}

async function getCourses() {
  return courses.map(({ id, title }) => ({ id, title }));
}

export { getCourse, getCourses };
