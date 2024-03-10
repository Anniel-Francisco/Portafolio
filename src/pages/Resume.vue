<template>
  <div class="resume pt-5">
    <ul class="grid grid-cols-4 max-md:grid-cols-1 list-none gap-5">
      <li
        class="flex flex-col shadow-lg hover:shadow-red-700 duration-300 rounded-xl rounded-b-lg justify-between border-2 pt-5 border-solid border-red-700"
        v-for="(file, index) in files"
        :key="index"
      >
        <div>
          <img
            class="pdf__icon ml-auto mr-auto"
            src="/src/assets/pdf-icon.png"
            alt=""
          />
        </div>
        <div class="text-center font-medium">
          {{ file.label }}
        </div>
        <div class="mt-3">
          <button
            class="btn__download bg-red-700 text-white font-semibold uppercase text-center w-full"
            @click="downloadFile(file.file, file.name)"
          >
            Download
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      files: [
        {
          label: "Resume(Spanish)",
          name: "Currículum Vitae.pdf",
          file: "/src/assets/pdfs/Currículum Vitae.pdf",
        },
        {
          label: "Resume(English)",
          name: "Resume.pdf",
          file: "/src/assets/pdfs/Resume.pdf",
        },
      ],
    };
  },
  methods: {
    async downloadFile(fileUrl, fileName) {
      try {
        const res = await fetch(fileUrl, {
          method: "get",
          mode: "no-cors",
          referrerPolicy: "no-referrer",
        });

        const blob = await res.blob();

        const aElement = document.createElement("a");
        aElement.href = URL.createObjectURL(blob);
        aElement.download = fileName;
        document.body.appendChild(aElement);
        aElement.click();
        document.body.removeChild(aElement);
      } catch (error) {
        console.error("Error downloading file:", error);
      }
    },
  },
};
</script>

<style scoped>
.resume {
  height: calc(100vh - 70px);
}
.pdf__icon {
  width: 30%;
}
</style>
