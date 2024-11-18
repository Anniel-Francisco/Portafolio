<template>
  <div class="border-2 rounded-lg border-black p-2">
    <div class="text-center">
      <span class="font-semibold text-xl capitalize">
        {{ name }}
      </span>
    </div>
    <div class="flex flex-wrap gap-2 justify-center mt-4">
      <div
        v-for="(skill, index) of data"
        class="flex items-center border-2 border-black px-4 py-2 rounded-lg"
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
        <span>
          {{ skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSkill",
  props: {
    name: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
