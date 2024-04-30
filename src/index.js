import "./style.css";
import "animate.css";
import router from "./router/router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { createApp } from "vue";
import App from "./App.vue";

import {
  faUser,
  faHouse,
  faFolder,
  faMobile,
  faCode,
  faLink,
  faEnvelope,
  faDatabase,
  faBars,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUser,
  faHouse,
  faFolder,
  faMobile,
  faCode,
  faLink,
  faGithub,
  faLinkedin,
  faEnvelope,
  faHtml5,
  faCss3Alt,
  faDatabase,
  faGitAlt,
  faJs,
  faReact,
  faVuejs,
  faBars,
  faTriangleExclamation
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
