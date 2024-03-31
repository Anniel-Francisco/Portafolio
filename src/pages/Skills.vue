<template>
  <div class="skills">
    <div
      class="content__skills max-md:pb-5 grid grid-cols-3 max-md:grid-cols-1 gap-5"
    >
      <div
        class="skill shadow-lg hover:shadow-green-300 duration-300 flex items-center rounded-lg justify-center bg-green-300"
        v-for="(skill, index) of skills"
        :key="index"
      >
        <font-awesome-icon
          v-if="skill.icon.length > 0"
          class="mr-3 text-black"
          :icon="skill.icon"
          size="2xl"
        />
        <!-- Tailwind Icon -->
        <img
          v-if="skill?.name === 'TAILWIND CSS' && skill.img"
          src="../assets/tailwind-css-icon.png"
          class="w-8 mr-3"
        />
        <!-- Quasar Icon -->
        <img
          v-else-if="skill?.name === 'QUASAR FRAMEWORK' && skill.img"
          src="../assets/quasar-framework-icon.png"
          class="w-8 mr-3"
        />
        <!-- Typescript Icon -->
        <img
          v-else-if="skill?.name === 'TYPESCRIPT' && skill.img"
          src="../assets/typescript-icon.png"
          class="w-8 mr-3"
        />
        <span class="font-semibold text-xl uppercase text-black">
          {{ skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        { name: "HTML5", icon: ["fab", "html5"] },
        { name: "CSS3", icon: ["fab", "css3-alt"] },
        { name: "JAVASCRIPT", icon: ["fab", "js"] },
        { name: "SQL SERVER", icon: ["fas", "database"] },
        { name: "GIT", icon: ["fab", "git-alt"] },
        { name: "GITHUB", icon: ["fab", "github"] },
        { name: "REACT.JS", icon: ["fab", "react"] },
        { name: "VUE.JS", icon: ["fab", "vuejs"] },
        { name: "TYPESCRIPT", icon: [], img: true },
        {
          name: "QUASAR FRAMEWORK",
          icon: [],
          img: true,
        },
        {
          name: "TAILWIND CSS",
          icon: [],
          img: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.skills {
  width: 100%;
  height: 100vh;
}
.content__skills {
  padding-top: 20px;
}

.skill {
  padding: 20px 0;
}
@media (min-width: 768px) {
  .skills {
    height: calc(100vh - 70px);
  }
}
</style>
