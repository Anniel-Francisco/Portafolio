<template>
  <div class="projects flex items-center">
    <swiper
      :slides-per-view="1"
      :modules="modules"
      :space-between="5"
      effect="autoplay"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      class="swiper-content flex rounded-xl justify-center items-center"
    >
      <swiper-slide
        class="element-swiper rounded-xl bg-slate-300 uppercase"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="content">
          <h2 class="md:text-5xl max-md:text-2xl font-bold text-center">
            {{ project.name }}
          </h2>
          <div class="flex justify-center mt-2">
            <a target="_blank" title="Click" :href="project.route">
              <font-awesome-icon :icon="['fas', 'globe']" size="2xl" />
            </a>
          </div>
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
export default {
  name: "Projects",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      projects: [
        {
          name: "gym to do list",
          route: "https://github.com/Anniel-Francisco/CRUD-GYM.git",
        },
        {
          name: "CALCULATOR",
          route:
            "https://github.com/Anniel-Francisco/Tarea_2_Calculadora_Web.git",
        },
        {
          name: "API-VALORANT",
          route: "https://github.com/Anniel-Francisco/API-VALORANT.git",
        },
        {
          name: "Muro Interactivo",
          route: "https://github.com/Anniel-Francisco/Muro_Interactivo.git",
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
}

@media (min-width: 768px) {
  .projects {
    height: calc(100vh - 70px);
  }
}
</style>
