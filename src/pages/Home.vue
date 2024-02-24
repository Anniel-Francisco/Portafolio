<template>
  <div
    class="flex flex-col justify-between max-md:justify-evenly items-center home"
  >
    <div class="flex items-center max-md:flex-wrap max-md:pt-5">
      <!-- Description -->
      <div class="w-full">
        <div>
          <span class="text-3xl font-bold" id="typing-element"></span>
        </div>
        <div class="mt-5 mb-5">
          <p class="text-xl text-justify max-md:text-2xl">
            I'm studying at the Technological Institute of the Americas(ITLA).
            I'm 19 years old. I am passionate about programming. I can work in a
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
    <div class="links flex justify-end items-end pb-2 w-full">
      <div class="hover:-translate-y-1 duration-150">
        <a
          href="https://github.com/Anniel-Francisco/Portafolio.git"
          target="_blank"
        >
          <font-awesome-icon
            style="font-size: 25px"
            :icon="['fab', 'github']"
          />
        </a>
      </div>
      <div class="hover:-translate-y-1 ml-3 duration-150">
        <a
          href="https://www.linkedin.com/in/anniel-francisco-reyes-javier-b22347274/"
          target="_blank"
        >
          <font-awesome-icon
            style="font-size: 25px"
            :icon="['fab', 'linkedin']"
          />
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
      links: [],
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
.home {
  width: 100%;
}
.image {
  width: 400px;
}

@media (min-width: 768px) {
  .home {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .image {
    max-width: 100%;
  }
}
</style>
