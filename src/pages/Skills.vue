<template>
  <div class="skills">
    <div class="content__skills grid grid-cols-3 max-md:grid-cols-1 gap-5">
      <div
        class="skill shadow-lg flex items-center rounded-lg justify-center bg-green-300"
        v-for="(skill, index) of skills"
        :key="index"
      >
        <font-awesome-icon
          v-if="skill.icon.length > 0"
          class="mr-3 text-black"
          :icon="skill.icon"
          size="2xl"
        />

        <img v-if="skill.img" :src="skill.img" class="w-8 mr-3" />
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
        { name: "SQL", icon: ["fas", "database"] },
        { name: "GIT", icon: ["fab", "git-alt"] },
        { name: "GITHUB", icon: ["fab", "github"] },
        { name: "REACT.JS", icon: ["fab", "react"] },
        { name: "VUE.JS", icon: ["fab", "vuejs"] },
        {
          name: "QUASAR FRAMEWORK",
          icon: [],
          img: "../assets/quasar-framework-icon.png",
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
