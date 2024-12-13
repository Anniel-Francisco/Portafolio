import "./style.css";
import "animate.css";
import router from "./router/router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { createApp } from "vue";
import App from "./App.vue";
// Oh Vue Icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  SiTailwindcss,
  CoTypescript,
  SiQuasar,
  CoNextJs,
  SiExpress,
  FaNodeJs,
  FaFigma,
  SiMongodb,
  CoPostman,
  ViFileTypeMongo,
  ViFileTypeReactjs,
  ViFileTypePlsql,
  ViFileTypeHtml,
  ViFileTypeCss,
  ViFileTypeTypescriptOfficial,
  ViFileTypeVue,
  ViFileTypeLightQuasar,
  ViFileTypeTailwind,
  ViFileTypeNode,
  ViFileTypeGit,
  ViFileTypeJsOfficial,
  ViFileTypeVscode,
  ViFileTypeAngular,
} from "oh-vue-icons/icons";

// FontAwesomeIcons
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
  faNode,
  faGitAlt,
  faJs,
  faNodeJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

addIcons(
  SiTailwindcss,
  CoTypescript,
  SiQuasar,
  CoNextJs,
  SiExpress,
  FaNodeJs,
  FaFigma,
  CoPostman,
  ViFileTypeMongo,
  ViFileTypeReactjs,
  ViFileTypePlsql,
  ViFileTypeHtml,
  ViFileTypeCss,
  ViFileTypeTypescriptOfficial,
  ViFileTypeVue,
  ViFileTypeLightQuasar,
  ViFileTypeTailwind,
  ViFileTypeNode,
  ViFileTypeGit,
  ViFileTypeJsOfficial,
  ViFileTypeVscode,
  SiMongodb,
  ViFileTypeAngular
);
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
  faNodeJs,
  faHtml5,
  faNode,
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
  .component("v-icon", OhVueIcon)
  .mount("#app");
