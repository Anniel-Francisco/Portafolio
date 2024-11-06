<template>
  <div class="grid gap-5 grid-cols-3 max-md:grid-cols-1">
    <div
      class="duration-300 rounded-lg border border-solid border-black flex flex-col justify-center items-start p-5"
      v-for="(contact, index) of data"
      :key="index"
    >
      <div class="flex items-center">
        <font-awesome-icon
          class="mr-1"
          :icon="contact.icon"
          style="color: black"
        />
        <span class="font-semibold">{{ contact.key }}</span>
      </div>
      <div>
        <a
          class="hover:underline"
          :href="
            contact.key == 'Phone' && contact.value
              ? 'https://wa.me/' + contact.value
              : contact.key == 'Email' && contact.value
              ? 'mailto:' + contact.value
              : contact.value
          "
          target="_blank"
          >{{ contact.label ? contact.label : contact.value }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      data: [
        {
          icon: ["fas", "envelope"],
          key: "Email",
          value: "annielfranciscoreyes@gmail.com",
          label: "",
        },
        {
          icon: ["fas", "mobile"],
          key: "Phone",
          value: "8295743179",
          label: "+1 (829) 574-3179",
        },
        {
          icon: ["fab", "linkedin"],
          key: "LinkedIn",
          value:
            "https://www.linkedin.com/in/anniel-francisco-reyes-javier-b22347274/",
          label: "",
        },
        {
          icon: ["fab", "github"],
          key: "GitHub",
          value: "https://github.com/AnnielDev",
          label: "",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
