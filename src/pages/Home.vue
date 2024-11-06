<template>
  <div
    class="flex flex-col justify-evenly items-center max-md:pb-5"
    style="height: calc(100vh - 70px)"
  >
    <div class="flex items-center max-md:flex-wrap max-md:pt-5">
      <!-- Description -->
      <div class="w-full">
        <div>
          <span class="text-3xl font-bold" id="typing-element"></span>
        </div>
        <div class="mt-5 mb-5">
          <p class="text-xl text-justify max-md:text-2xl">
            I'm studying at the Technological Institute of the Americas (ITLA).
            I'm 20 years old. I am passionate about programming. I can work in a
            team, in addition, I am organized and responsible. I enjoy learning
            everything related to this area, so my goal is a challenging and
            dynamic position where I can acquire new knowledge.
          </p>
        </div>
      </div>
      <!-- Image -->
      <div class="flex md:justify-end w-full justify-center">
        <img class="image max-w-full" src="../assets/GIF-lenguajes.gif" />
      </div>
    </div>
    <!-- Links -->
    <div class="flex justify-end items-end max-md:pb-2 w-full">
      <div
        v-for="(link, index) in links"
        :key="index"
        class="hover:-translate-y-1 link duration-150"
      >
        <a :href="link.link" target="_blank">
          <font-awesome-icon style="font-size: 25px" :icon="link.icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";
export default {
  name: "Home",
  data() {
    return {
      typed: null,
      links: [
        {
          icon: ["fab", "github"],
          link: "https://github.com/Anniel-Francisco/Portafolio.git",
        },
        {
          icon: ["fab", "linkedin"],
          link: "https://www.linkedin.com/in/anniel-francisco-reyes-javier-b22347274/",
        },
      ],
    };
  },
  mounted() {
    const options = {
      strings: [
        "¡Hi!",
        "My name is Anniel Francisco Reyes Javier",
        "I'm a student of software development",
      ],
      typeSpeed: 50,
      loop: true,
    };

    this.typed = new Typed("#typing-element", options);
  },

  beforeUnmount() {
    if (this.typed) {
      this.typed.destroy();
      this.typed = null;
    }
  },
};
</script>

<style scoped>
.image {
  width: 400px;
}
.link:first-child {
  margin-right: 10px;
}
@media (min-width: 768px) {
  .image {
    max-width: 100%;
  }
}
</style>
