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
          {{ file.name }}
        </div>
        <div class="mt-3">
          <button
            class="btn__download bg-red-700 text-white font-semibold uppercase text-center w-full"
            @click="downloadPDF(file.file, file.name)"
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
          name: "Resume(Spanish)",
          file: "/src/assets/pdfs/Currículum Vitae.pdf",
        },
        {
          name: "Resume(English)",
          file: "/src/assets/pdfs/Resume.pdf",
        },
      ],
    };
  },
  methods: {
    async downloadPDF(fileUrl, fileName) {
      try {
        const response = await fetch(fileUrl);

        if (!response.ok) {
          throw new Error(
            `Error al descargar el archivo: ${response.statusText}`
          );
        }

        const blob = await response.blob();

        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error(error);
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
