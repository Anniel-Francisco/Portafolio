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
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faUser,
  faHouse,
  faFolder,
  faMobile,
  faCode,
  faGlobe,
  faGithub,
  faLinkedin,
  faEnvelope
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
