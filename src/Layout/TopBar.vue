<template>
  <div class="text-black ml-auto mr-auto header">
    <nav class="md:flex justify-evenly p-2">
      <div class="flex justify-between items-center">
        <span class="flex items-center">
          <img src="/src/assets/programmer.png" alt="" class="w-12" />
          <h1 class="uppercase font-bold element ml-2 rounded-xl">AFRJ</h1>
        </span>
        <span class="cursor-pointer md:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon w-10"
            viewBox="0 0 512 512"
            name="menu"
            @click="Menu(this)"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M80 160h352M80 256h352M80 352h352"
            />
          </svg>
        </span>
      </div>
      <ul
        class="left-0 justify-end bg-nav min-w md:flex md:items-center md:static absolute md:pl-0 pl-7 md:opacity-100 opacity-0"
      >
        <li class="mx-4 my-6 md:my-0">
          <router-link
            to="/"
            :class="$route.path == '/' && !contact ? 'bg-green-300' : ''"
            class="font-bold px-3 py-2 rounded-lg hover:bg-green-300 hover:text-black"
          >
            <font-awesome-icon :icon="['fas', 'house']" style="color: black" />
            Home
          </router-link>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <router-link
            to="/projects"
            :class="
              $route.path == '/projects' && !contact ? 'bg-green-300' : ''
            "
            class="font-bold px-3 py-2 rounded-lg hover:bg-green-300 hover:text-black"
          >
            <font-awesome-icon :icon="['fas', 'folder']" style="color: black" />
            Projects
          </router-link>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <button
            class="font-bold px-3 py-2 rounded-lg outline-none hover:bg-green-300 hover:text-black"
            :class="contact ? 'bg-green-300' : ''"
            @click="show"
          >
            <font-awesome-icon :icon="['fas', 'mobile']" style="color: black" />
            Contact
          </button>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a
            @click="downloadMultiplePDFs"
            class="font-bold px-3 py-2 cursor-pointer border-2 border-green-300 rounded-lg hover:bg-green-300 hover:text-black"
          >
            <font-awesome-icon :icon="['fas', 'user']" style="color: black" />
            Resume
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- Modal -->
  <div class="modal">
    <dialog
      ref="modal_contact"
      class="contact p-2 rounded-lg animate__animated animate__zoomIn border-black border-2"
    >
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold">Contact</h1>
        <button
          type="button"
          class="h-7 rounded-full outline-none font-semibold w-7 hover:bg-green-300"
          @click="close"
        >
          X
        </button>
      </div>
      <div
        class="flex text-center mt-2 flex-col justify-center text-lg items-center content-contact"
      >
        <div class="hover:bg-green-300 p-2 rounded-full bg-slate-200">
          annielfranciscoreyes@gmail.com
        </div>
        <div class="hover:bg-green-300 p-2 rounded-full bg-slate-200 mt-2">
          829-574-3179
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
import { PDFDocument } from "pdf-lib";
export default {
  name: "navBar",
  data() {
    return {
      contact: false,
    };
  },

  methods: {
    show() {
      this.contact = true;
      this.$refs.modal_contact.showModal();
    },
    close() {
      const modal = document.querySelector(".contact");
      modal.classList.add("animate__zoomOut");

      setTimeout(() => {
        this.$refs.modal_contact.close();
        modal.classList.remove("animate__zoomOut");
      }, 100);
      this.contact = false;
    },
    async downloadMultiplePDFs() {
      const file1 = "/src/CV/Resume.pdf";
      const file2 = "/src/CV/Currículum Vitae.pdf";

      const data1 = await fetch(file1).then((response) =>
        response.arrayBuffer()
      );
      const data2 = await fetch(file2).then((response) =>
        response.arrayBuffer()
      );

      const pdfDoc1 = await PDFDocument.load(data1);
      const pdfDoc2 = await PDFDocument.load(data2);

      const mergedPdf = await PDFDocument.create();

      const pages1 = await mergedPdf.copyPages(
        pdfDoc1,
        pdfDoc1.getPageIndices()
      );
      pages1.forEach((page) => mergedPdf.addPage(page));

      const pages2 = await mergedPdf.copyPages(
        pdfDoc2,
        pdfDoc2.getPageIndices()
      );
      pages2.forEach((page) => mergedPdf.addPage(page));

      const mergedPdfBytes = await mergedPdf.save();
      const mergedPdfBlob = new Blob([mergedPdfBytes], {
        type: "application/pdf",
      });
      const mergedPdfUrl = URL.createObjectURL(mergedPdfBlob);

      const link = document.createElement("a");
      link.style.display = "none";

      link.href = mergedPdfUrl;
      link.download = "Resume.pdf";

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(mergedPdfUrl);
    },
    Menu(e) {
      let list = document.querySelector("ul");
      e.name === "menu"
        ? ((e.name = "close"),
          list.classList.add("top-[80px]"),
          list.classList.add("opacity-100"))
        : ((e.name = "menu"),
          list.classList.remove("top-[80px]"),
          list.classList.remove("opacity-100"));
    },
  },
};
</script>

<style scoped>
.min-w {
  width: 70%;
}

.modal {
  z-index: 70;
}

.content-contact div {
  width: 100%;
}

.header {
  height: 100%;
}

.contact {
  width: 100%;
  background-color: white;
  z-index: 70;
  max-width: 30%;
}

@media (max-width: 768px) {
  .bg-nav {
    background-color: #fff;
  }
  .min-w {
    min-width: 100%;
  }

  .contact {
    min-width: 90%;
    width: 100%;
  }
}
</style>
