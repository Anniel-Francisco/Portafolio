<template>
  <div class="flex flex-col justify-evenly items-center home">
    <div class="flex items-center max-md:flex-wrap">
      <!-- Description -->
      <div class="w-full">
        <div class="mb-5">
          <span class="text-3xl font-bold" id="typing-element"></span>
        </div>
        <div>
          <p class="text-xl text-justify">
            I'm studying at the Technological Institute of the Americas(ITLA).
            I'm 19 years old. I am passionate about programming. I can work in a
            team, in addition, I am organized and responsible. I enjoy learning
            everything related to this area, so my goal is a challenging and
            dynamic position where I can acquire new knowledge.
          </p>
        </div>
      </div>
      <!-- Image -->
      <div class="flex md:justify-end w-full">
        <img class="image" src="../assets/GIF-lenguajes.gif" />
      </div>
    </div>
    <!-- Links -->
    <div class="links flex justify-end items-end w-full">
      <div class="hover:translate-y-1 duration-150">
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
      <div class="ml-3 hover:translate-y-1 duration-150">
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
    height: calc(100vh - 70px);
  }
}
</style>
