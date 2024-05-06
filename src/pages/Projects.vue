<template>
  <div class="grid grid-cols-3 max-md:grid-cols-1 gap-2">
    <CardProject
      v-for="(project, index) in projects"
      :key="index"
      :name="project.name"
      :description="project.description"
      :image="project.image"
      :links="project.links"
      :state="project.state"
      :technologies="project.technologies"
      :html="project.html"
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
import weatherAppImage from "@/assets/weather-app.png";
export default {
  name: "Projects",
  components: {
    CardProject,
  },
  data() {
    return {
      projects: [
        // RICK AND MORTY
        {
          name: "RICK AND MORTY",
          image: apiRickAndMorty,
          state: "developing",
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/Anniel-Francisco/RICKANDMORTY-API.git",
            },
            {
              name: "Link",
              icon: ["fas", "link"],
              url: "#",
            },
          ],
          description:
            "Rick and morty cartoon API integration, using characters and locations.",
          technologies: [
            { name: "React.js", color: "1082a7", icon: ["fab", "react"] },
            { name: "TypeScript", color: "377cc8", icon: "co-typescript" },
            { name: "Tailwind", color: "38bdf8", icon: "si-tailwindcss" },
          ],
          html: ``,
        },
        // TO DO LIST
        {
          name: "TO DO LIST",
          image: toDoListBackground,
          state: "done",
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/Anniel-Francisco/TO-DO-LIST.git",
            },
            {
              name: "Link",
              icon: ["fas", "link"],
              url: "https://afrj-to-do-list-gym.netlify.app/",
            },
          ],
          description: "A list where you can write down your gym activities.",
          technologies: [
            { name: "Vue.js", color: "47ba87", icon: ["fab", "vuejs"] },
            { name: "JavaScript", color: "f7e025", icon: ["fab", "js"] },
            { name: "Tailwind", color: "38bdf8", icon: "si-tailwindcss" },
          ],
          html: ``,
        },
        // CALCULATOR
        {
          name: "CALCULATOR",
          image: calculatorBackground,
          state: "done",
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/Anniel-Francisco/Tarea_2_Calculadora_Web.git",
            },
            {
              name: "Link",
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
          html: ``,
        },
        // VALORANT
        {
          name: "VALORANT",
          image: apiValorantBackground,
          state: "done",
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/Anniel-Francisco/API-VALORANT.git",
            },
            {
              name: "Link",
              icon: ["fas", "link"],
              url: "https://afrj-api-valorant.netlify.app/#/",
            },
          ],
          description:
            "Valorant video game API integration, using agents, maps, weapons and game modes.",
          technologies: [
            { name: "Vue.js", color: "47ba87", icon: ["fab", "vuejs"] },
            { name: "JavaScript", color: "f7e025", icon: ["fab", "js"] },
            { name: "Tailwind", color: "38bdf8", icon: "si-tailwindcss" },
          ],
          html: ``,
        },
        // WEATHER APP
        {
          name: "Weather App",
          image: weatherAppImage,
          state: "done",
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/Anniel-Francisco/Weather-App.git",
            },
            {
              name: "Link",
              icon: ["fas", "link"],
              url: "#",
            },
          ],
          description: `This app typically displays data such as current temperature, wind speed and humidity.`,
          technologies: [
            { name: "React.js", color: "1082a7", icon: ["fab", "react"] },
            { name: "TypeScript", color: "377cc8", icon: "co-typescript" },
            { name: "CSS3", color: "306af1", icon: ["fab", "css3-alt"] },
          ],
          html: `<strong> CLICK ON THE MAGNIFYING GLASS. </strong>`,
        },
      ],
    };
  },
};
</script>
