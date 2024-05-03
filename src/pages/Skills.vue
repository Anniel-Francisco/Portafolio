<template>
  <div class="pt-2 w-full pb-5 grid grid-cols-3 max-md:grid-cols-1 gap-5">
    <div
      class="shadow-lg hover:shadow-green-300 duration-300 flex items-center rounded-lg justify-center bg-green-300"
      style="padding: 20px 0"
      v-for="(skill, index) of skills"
      :key="index"
    >
      <v-icon
        v-if="typeof skill.icon == 'string'"
        :name="skill.icon"
        class="mr-3"
        scale="2"
      />
      <font-awesome-icon
        v-else
        class="mr-3 text-black"
        :icon="skill.icon"
        size="2xl"
      />
      <span class="font-semibold text-xl uppercase text-black">
        {{ skill.name }}
      </span>
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
        { name: "NODE.JS", icon: ["fab", "node"] },
        { name: "TYPESCRIPT", icon: "co-typescript" },
        {
          name: "QUASAR FRAMEWORK",
          icon: "si-quasar",
        },
        {
          name: "TAILWIND CSS",
          icon: "si-tailwindcss",
        },
      ],
    };
  },
};
</script>
