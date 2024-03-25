<template>
  <div class="projects flex items-center">
    <swiper
      :slides-per-view="1"
      :modules="modules"
      :space-between="5"
      navigation
      autoplay
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      class="swiper-content flex rounded-xl justify-center items-center"
    >
      <swiper-slide
        :style="{
          backgroundImage: `url(${project.background})`,
        }"
        class="element-swiper rounded-xl bg-slate-300 uppercase"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="content">
          <h2 class="md:text-5xl max-md:text-2xl font-bold text-center">
            {{ project.name }}
          </h2>
          <span class="flex justify-center mt-2">
            <a target="_blank" title="Click" :href="project.route">
              <font-awesome-icon
                class="text-white"
                :icon="['fas', 'globe']"
                size="2xl"
              />
            </a>
          </span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
//
import toDoListBackground from "@/assets/to-do-list.png";
import calculatorBackground from "@/assets/calculator.png";
import apiValorantBackground from "@/assets/api-valorant.png";

export default {
  name: "Projects",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      projects: [
        {
          name: "GYM TO DO LIST",
          route: "https://afrj-to-do-list-gym.netlify.app/",
          background: toDoListBackground,
        },
        {
          name: "CALCULATOR",
          route: "https://afrj-calculator.netlify.app/",
          background: calculatorBackground,
        },
        {
          name: "API-VALORANT",
          route: "https://afrj-api-valorant.netlify.app/#/",
          background: apiValorantBackground,
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects {
  width: 100%;
  height: 100vh;
}

.swiper-content {
  height: 90%;
  width: 100%;
}

.element-swiper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;
}

.content h2 {
  color: white;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
@media (min-width: 768px) {
  .projects {
    height: calc(100vh - 70px);
  }
}
</style>
