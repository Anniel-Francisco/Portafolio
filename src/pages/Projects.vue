<template>
  <div class="flex flex-col">
    <div class="flex max-md:flex-col md:items-center gap-2 my-4">
      <!-- DEVELOPING-->
      <div>
        <span
          :style="{
            backgroundColor: '#f7e025',
          }"
          class="p-1 rounded-sm font-semibold"
        >
          DEVELOPING
        </span>
        <span> - project is in development process</span>
      </div>
      <!-- DONE-->
      <div>
        <span
          :style="{
            backgroundColor: '#55e0a2',
          }"
          class="p-1 rounded-sm font-semibold"
        >
          DONE
        </span>
        <span> - finished project</span>
      </div>
    </div>
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
import crudOperationsAppImage from "@/assets/crud-operations.png";
import gashupAppImage from "@/assets/gashup.png";
import converterAppImage from "@/assets/converter.png";
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
          state: "done",
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/AnnielDev/RICKANDMORTY-API.git",
            },
            {
              name: "Link",
              icon: ["fas", "link"],
              url: "https://afrj-api-rickandmorty.netlify.app/",
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
              url: "https://github.com/AnnielDev/TO-DO-LIST.git",
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
              url: "https://github.com/AnnielDev/Tarea_2_Calculadora_Web.git",
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
              url: "https://github.com/AnnielDev/API-VALORANT.git",
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
              url: "https://github.com/AnnielDev/Weather-App.git",
            },
            {
              name: "Link",
              icon: ["fas", "link"],
              url: "https://afrj-weather-app.netlify.app/",
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
        // GASHUP
        {
          name: "GASHUP",
          image: gashupAppImage,
          state: "DONE",
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/AnnielDev/gashup-frontend.git",
            },
            {
              name: "Link",
              icon: ["fas", "link"],
              url: "",
            },
          ],
          description:
            "This project is a web application that allows users to create and join communities based on various topics of interest.",
          technologies: [
            { name: "Next.js", color: "000", icon: "co-next-js" },
            { name: "TypeScript", color: "377cc8", icon: "co-typescript" },
            { name: "Tailwind", color: "38bdf8", icon: "si-tailwindcss" },
            { name: "NodeJS", color: "72a863", icon: ["fab", "node-js"] },
            { name: "MongoDB", color: "4ca74b", icon: "si-mongodb" },
            { name: "Express.js", color: "383838", icon: "si-express" },
          ],
          html: ``,
        },
        // CRUD OPERATIONS
        {
          name: "CRUD OPERATIONS",
          image: crudOperationsAppImage,
          state: "done",
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/AnnielDev/crud-frontend.git",
            },
            {
              name: "Link",
              icon: ["fas", "link"],
              url: "https://afrj-crud-operations.netlify.app",
            },
          ],
          description:
            "This is a web app with sign in and sign up, and all crud operations. Also, this application was built using MERN.",
          technologies: [
            { name: "React.js", color: "1082a7", icon: ["fab", "react"] },
            { name: "TypeScript", color: "377cc8", icon: "co-typescript" },
            { name: "Tailwind", color: "38bdf8", icon: "si-tailwindcss" },
            { name: "NodeJS", color: "72a863", icon: ["fab", "node-js"] },
            { name: "MongoDB", color: "4ca74b", icon: "si-mongodb" },
            { name: "Express.js", color: "383838", icon: "si-express" },
          ],
          html: ``,
        },
        // CONVERTER
        {
          name: "CONVERTER",
          image: converterAppImage,
          state: "developing",
          links: [
            {
              name: "GitHub",
              icon: ["fab", "github"],
              url: "https://github.com/AnnielDev/converter.git",
            },
            {
              name: "Link",
              icon: ["fas", "link"],
              url: "",
            },
          ],
          description:
            "Converter is an application that allows you to convert various units, as well as currencies, starting from the US dollar.",
          technologies: [
            { name: "Angular JS", color: "dd0031", icon: "co-angular" },
            { name: "TypeScript", color: "377cc8", icon: "co-typescript" },
            { name: "Tailwind", color: "38bdf8", icon: "si-tailwindcss" },
          ],
          html: ``,
        },
      ],
    };
  },
};
</script>
