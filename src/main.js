import "./style.css";
import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
  faGlobe,
  faEnvelope,
  faDatabase,
  faBars,
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
  faGlobe,
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
  faBars
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
