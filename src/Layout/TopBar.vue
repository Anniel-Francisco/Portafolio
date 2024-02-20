<template>
  <div class="content mr-auto ml-auto">
    <div class="topbar flex items-center justify-between">
      <!-- TopBar Left -->
      <div class="flex items-center">
        <img class="w-14" src="../assets/programmer.png" alt="" />
        <span class="ml-3 font-bold">AFRJ</span>
      </div>
      <!-- TopBar Right -->
      <div>
        <ul class="flex list-none items-center">
          <li
            v-for="(item, index) of routes"
            @click="goToPage(item.route)"
            :class="
              $route.path === item.route ? 'bg-green-300' : 'bg-transparent'
            "
            class="mr-5 flex p-2 rounded-lg font-semibold hover:bg-green-300 items-center last:m-0 cursor-pointer"
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

    <router-view />
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      routes: [
        {
          icon: ["fas", "house"],
          name: "Home",
          route: "/home",
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
  mounted() {
    this.$router.push({ path: "/home" });
  },
  methods: {
    goToPage(route) {
      this.$router.push({ path: route });
    },
  },
};
</script>

<style scoped>
.content {
  width: 80%;
}
.topbar {
  height: 70px;
  width: 100%;
}
</style>
