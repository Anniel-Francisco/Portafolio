import "./style.css";
import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import router from "./router/router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faUser,
  faHouse,
  faFolder,
  faMobile,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faHouse, faFolder, faMobile, faGlobe);
import { createApp } from "vue";
import App from "./App.vue";

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
