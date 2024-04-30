<template>
  <div class="flex flex-col justify-between rounded-sm">
    <div>
      <img
        :src="image"
        alt=""
        style="height: 200px; width: 100%"
        class="rounded-t-sm"
      />
    </div>
    <div class="flex flex-col justify-between p-2">
      <!-- description -->
      <div class="mt-2">
        <h3 class="font-bold">{{ name }}</h3>
        <p class="text-base">
          {{ description }}
        </p>
      </div>
      <!-- technologies  -->
      <div v-if="technologies.length > 0" class="grid grid-cols-3 gap-2 mt-2">
        <div
          class="flex items-center rounded-md w-full text-white font-semibold justify-center p-2"
          v-for="(tech, index) in technologies"
          :key="index"
          :style="`background-color: #${tech.color}`"
        >
          <font-awesome-icon
            class="mr-1"
            :icon="tech.icon"
            style="color: white"
            size="md"
          />
          {{ tech.name }}
        </div>
      </div>
    </div>
    <div v-if="links.length > 0" class="flex justify-center p-2">
      <span
        class="uri hover:-translate-y-1 duration-300"
        v-for="(link, index) in links"
        :key="index"
      >
        <a :href="link.url" target="_blank">
          <font-awesome-icon :icon="link.icon" size="2xl" />
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProject",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.uri:first-child {
  margin-right: 10px;
}
</style>
