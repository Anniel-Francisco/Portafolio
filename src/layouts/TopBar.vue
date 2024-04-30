<template>
  <div class="content mr-auto ml-auto max-w-full">
    <div
      class="topbar sticky top-0 bg-white z-10 flex items-center justify-between"
    >
      <!-- TopBar Left -->
      <div class="topbar__left flex items-center">
        <img
          class="w-14 cursor-pointer hover:-translate-y-1 duration-300"
          @click="goToPage('/')"
          src="../assets/programmer.png"
          alt=""
        />
        <span class="ml-3 font-bold max-md:text-lg">AFRJ</span>
      </div>
      <!-- TopBar Right -->
      <div class="topbar__right">
        <font-awesome-icon
          size="2xl"
          class="bars cursor-pointer"
          @click="showMenu"
          :icon="['fas', 'bars']"
        />
        <ul class="list md:flex max-md:flex-col list-none items-center">
          <li
            v-for="(item, index) of routes"
            @click="goToPage(item.route)"
            :class="
              $route.path === item.route ? 'bg-green-300' : 'bg-transparent'
            "
            class="md:mr-5 flex p-2 max-md:pl-5 md:rounded-lg font-semibold hover:bg-green-300 items-center last:m-0 cursor-pointer"
            :key="index"
          >
            <font-awesome-icon
              class="mr-1"
              :icon="item.icon"
              style="color: black"
            />
            <span>
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="main__content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      device: false,
      routes: [
        {
          icon: ["fas", "house"],
          name: "Home",
          route: "/",
        },
        {
          icon: ["fas", "folder"],
          name: "Projects",
          route: "/projects",
        },
        {
          icon: ["fas", "code"],
          name: "Skills",
          route: "/skills",
        },
        {
          icon: ["fas", "mobile"],
          name: "Contact",
          route: "/contact",
        },
        {
          icon: ["fas", "user"],
          name: "Resume",
          route: "/resume",
        },
      ],
    };
  },

  methods: {
    goToPage(route) {
      this.$router.push({ path: route });
      if (window.innerWidth <= 768) {
        this.closeMenu();
      }
    },

    showMenu() {
      const list = document.querySelector(".list");

      if (!this.device) {
        list.style.display = "block";
        this.device = true;
      } else {
        this.closeMenu();
      }
    },
    closeMenu() {
      const list = document.querySelector(".list");
      list.style.display = "none";
      this.device = false;
    },
  },
};
</script>

<style scoped>
.topbar {
  height: 70px;
  width: 100%;
}

@media (min-width: 768px) {
  .content {
    width: 80%;
  }
  .bars {
    display: none;
  }
}

@media (max-width: 768px) {
  .list {
    display: none;
    position: absolute;
    left: 0;
    top: 68px;
    background: white;
    width: 100%;
  }

  .topbar {
    padding: 0 15px;
  }
  .main__content {
    padding: 0 15px;
  }
}
</style>
