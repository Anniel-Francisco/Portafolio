<template>
  <div class="min-h-screen text-black md:mr-auto md:ml-auto svg z-100">
    <div class="width ml-auto mr-auto">
      <TopBar />
      <main class="main">
        <swiper
          :slides-per-view="1"
          :modules="modules"
          :space-between="5"
          effect="autoplay"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          class="swiper-content"
        >
          <swiper-slide
            class="element-swiper uppercase"
            v-for="(project, index) in projects"
            :key="index"
          >
            <div class="content">
              <h2>{{ project.name }}</h2>
              <div class="flex justify-center">
                <a title="Click" :href="project.route">
                  <font-awesome-icon :icon="['fas', 'globe']" size="2xl" />
                </a>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </main>
    </div>
  </div>
</template>

<script>
import TopBar from "../Layout/TopBar.vue";
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
  components: { TopBar, Swiper, SwiperSlide },
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
  methods: {},
};
</script>
<style scoped>
.width {
  width: 70%;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
}
.swiper-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
}

.element-swiper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}

.element-swiper h2 {
  font-size: 50px;
  font-weight: 700;
}

@media (max-width: 1024px) {
  .width {
    width: 90%;
  }
}
</style>
