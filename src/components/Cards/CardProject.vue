<template>
  <div class="flex flex-col rounded-sm">
    <div>
      <img
        :src="image"
        alt=""
        style="height: 200px; width: 100%"
        class="rounded-t-sm"
      />
    </div>
    <div class="flex flex-col justify-between mt-2">
      <!-- name and description -->
      <div v-if="name && description">
        <h3 class="flex items-center font-bold uppercase">
          <span class="mr-1"> {{ name }} - </span>
          <span
            class="p-1 rounded-sm font-semibold"
            :style="{
              backgroundColor: state === 'developing' ? '#f7e025' : '#55e0a2',
            }"
          >
            {{ state }}
          </span>
        </h3>
        <p class="text-base">{{ description }} <span v-html="html" /></p>
      </div>
      <!-- technologies  -->
      <div v-if="technologies.length > 0" class="grid grid-cols-3 gap-2 mt-2">
        <div
          class="flex items-center rounded-md w-full text-white font-semibold justify-center p-2"
          v-for="(tech, index) in technologies"
          :key="index"
          :style="`background-color: #${tech.color}`"
        >
          <v-icon v-if="typeof tech.icon == 'string'" :name="tech.icon" />
          <font-awesome-icon
            class="mr-1"
            :icon="tech.icon"
            style="color: white"
            v-else
          />
          {{ tech.name }}
        </div>
      </div>
    </div>
    <div v-if="links.length > 0" class="flex justify-center pt-2 pb-2">
      <span
        class="uri hover:-translate-y-1 duration-300"
        v-for="(link, index) in links"
        :key="index"
        :title="link.name"
      >
        <a :href="link.url" target="_blank" style="outline: none">
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
    state: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
    },
    html: {
      type: String,
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
