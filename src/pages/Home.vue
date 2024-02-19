<template>
  <div class="min-h-screen text-black md:mr-auto md:ml-auto svg">
    <div class="width ml-auto mr-auto">
      <NavBar />

      <main class="md:mt-16">
        <div
          class="flex p-5 flex-wrap items-center max-lg:justify-center md:justify-evenly"
        >
          <div class="text-lg">
            <h2 class="md:w-96">
              <span class="text-2xl font-bold" id="typing-element"></span>
            </h2>
            <p class="mt-4 text-justify md:w-96">
              I'm studying at the Technological Institute of the Americas(ITLA).
              I'm 19 years old. I am passionate about programming. I can work in
              a team, in addition, I am organized and responsible. I enjoy
              learning everything related to this area, so my goal is a
              challenging and dynamic position where I can acquire new
              knowledge.
            </p>
          </div>
          <div
            class="w-80 max-lg:flex max-lg:justify-center lg:justify-end max-lg:mt-5"
          >
            <img
              class="max-lg:w-72 animate__animated animate__fadeIn transition-all duration-300 bg-slate-400 hover:shadow-lg hover:shadow-green-300 shadow-slate-400"
              src="/src/assets/GIF-lenguajes.gif"
              alt=""
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";
import NavBar from "../Layout/NavBar.vue";

export default {
  name: "Home",

  components: { NavBar },
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

  methods: {
    Menu(e) {
      let list = document.querySelector("ul");
      e.name === "menu"
        ? ((e.name = "close"),
          list.classList.add("top-[80px]"),
          list.classList.add("opacity-100"))
        : ((e.name = "menu"),
          list.classList.remove("top-[80px]"),
          list.classList.remove("opacity-100"));
    },
  },
};
</script>

<style>
.width {
  width: 70%;
}

@media (max-width: 1024px) {
  .width {
    width: 90%;
  }
}
</style>
