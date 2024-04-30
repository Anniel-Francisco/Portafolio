<template>
  <div class="pt-2 grid grid-cols-3 max-md:grid-cols-1 gap-2 pb-5">
    <CardProject
      v-for="(project, index) in projects"
      :key="index"
      :name="project.name"
      :description="project.description"
      :image="project.image"
      :links="project.links"
      :technologies="project.technologies"
    />
  </div>
</template>

<script>
import CardProject from "../components/Cards/CardProject.vue";
//
import toDoListBackground from "@/assets/to-do-list.png";
import calculatorBackground from "@/assets/calculator.png";
import apiValorantBackground from "@/assets/api-valorant.png";
import apiRickAndMorty from "@/assets/rickandmorty-api.png";
export default {
  name: "Projects",
  components: {
    CardProject,
  },
  data() {
    return {
      projects: [
        {
          name: "TO DO LIST",
          image: toDoListBackground,
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/Anniel-Francisco/TO-DO-LIST.git",
            },
            {
              name: "URL",
              icon: ["fas", "link"],
              url: "https://afrj-to-do-list-gym.netlify.app/",
            },
          ],
          description: "A list where you can write down your gym activities.",
          technologies: [
            { name: "Vue.js", color: "47ba87", icon: ["fab", "vuejs"] },
            { name: "JavaScript", color: "f7e025", icon: ["fab", "js"] },
          ],
        },
        {
          name: "CALCULATOR",
          image: calculatorBackground,
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/Anniel-Francisco/Tarea_2_Calculadora_Web.git",
            },
            {
              name: "URL",
              icon: ["fas", "link"],
              url: "https://afrj-calculator.netlify.app/",
            },
          ],
          description: "Calculator that has a history of operations.",
          technologies: [
            { name: "HTML5", color: "e96228", icon: ["fab", "html5"] },
            { name: "CSS3", color: "306af1", icon: ["fab", "css3-alt"] },
            { name: "JavaScript", color: "f7e025", icon: ["fab", "js"] },
          ],
        },
        {
          name: "VALORANT",
          image: apiValorantBackground,
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/Anniel-Francisco/API-VALORANT.git",
            },
            {
              name: "URL",
              icon: ["fas", "link"],
              url: "https://afrj-api-valorant.netlify.app/#/",
            },
          ],
          description:
            "Valorant video game API integration, using agents, maps, weapons and game modes.",
          technologies: [
            { name: "Vue.js", color: "47ba87", icon: ["fab", "vuejs"] },
            { name: "JavaScript", color: "f7e025", icon: ["fab", "js"] },
          ],
        },

        {
          name: "RICK AND MORTY",
          image: apiRickAndMorty,
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/Anniel-Francisco/RICKANDMORTY-API.git",
            },
            {
              name: "URL",
              icon: ["fas", "link"],
              url: "https://afrj-api-valorant.netlify.app/#/",
            },
          ],
          description:
            "Rick and morty cartoon API integration, using characters and locations.",
          technologies: [
            { name: "React.js", color: "1082a7", icon: ["fab", "react"] },
            { name: "TypeScript", color: "377cc8", icon: ["fab", "js"] },
          ],
        },
      ],
    };
  },
};
</script>
