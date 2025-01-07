<template>
  <div class="w-full grid grid-cols-3 max-md:grid-cols-1 gap-5 py-4">
    <CardSkill name="Frontend" :data="frontendSkills" />
    <CardSkill name="backend" :data="backendSkills" />
    <CardSkill name="database" :data="databaseSkills" />
    <CardSkill name="Others" :data="otherSkills" />
  </div>
</template>

<script>
import CardSkill from "../components/Cards/CardSkill.vue";
export default {
  name: "Skills",
  components: {
    CardSkill,
  },
  data() {
    return {
      frontendSkills: [
        { name: "HTML5", icon: "vi-file-type-html" },
        { name: "CSS3", icon: "vi-file-type-css" },
        { name: "JAVASCRIPT", icon: "vi-file-type-js-official" },
        { name: "REACT.JS", icon: "vi-file-type-reactjs" },
        { name: "VUE.JS", icon: "vi-file-type-vue" },
        { name: "ANGULAR JS", icon: "vi-file-type-angular" },
        { name: "REACT-NATIVE", icon: "vi-file-type-reactts" },
        { name: "TYPESCRIPT", icon: "vi-file-type-typescript-official" },
        {
          name: "QUASAR FRAMEWORK",
          icon: "vi-file-type-light-quasar",
        },
        {
          name: "TAILWIND CSS",
          icon: "vi-file-type-tailwind",
        },
        {
          name: "NEXT.JS",
          icon: "co-next-js",
        },
      ],
      backendSkills: [
        {
          name: "EXPRESS.JS",
          icon: "si-express",
        },
        { name: "NODE.JS", icon: "vi-file-type-node" },
      ],
      databaseSkills: [
        { name: "SQL SERVER", icon: "vi-file-type-plsql" },
        {
          name: "MONGODB",
          icon: "vi-file-type-mongo",
        },
      ],
      otherSkills: [
        { name: "GIT", icon: "vi-file-type-git" },
        { name: "GITHUB", icon: ["fab", "github"] },
        { name: "Figma", icon: "fa-figma" },
        { name: "Postman", icon: "co-postman" },
        { name: "VSCode", icon: "vi-file-type-vscode" },
      ],
    };
  },
};
</script>
