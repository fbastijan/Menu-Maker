<template>
  <div class="menu-container" ref="menuContainer">
    <div
      v-for="(item, index) in gridItems"
      :key="index"
      class="background-image"
      :style="{
        top: item.top,
        left: item.left,
        backgroundImage: `url('${this.logo.url}')`,
      }"
    ></div>
  </div>
</template>

<script>
import { logo } from "@/store";
export default {
  data() {
    return {
      gridItems: [],
      windowHeight: window.innerHeight,
      logo,
    };
  },
  mounted() {
    this.generateGrid();
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    generateGrid() {
      const smallImagePath = this.logo;

      const numRows = Math.floor(document.documentElement.scrollHeight / 100);
      const numCols = Math.ceil(window.innerWidth / 100);
      const newGridItems = [];

      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          newGridItems.push({
            top: `${i * 100}px`,
            left: `${j * 100}px`,
            backgroundImage: smallImagePath, // Use the variable in the object
          });
        }
      }

      // Update the reactive data property
      this.gridItems = newGridItems;
    },

    handleResize() {
      this.generateGrid();
    },
    handleScroll() {
      this.generateGrid();
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
html,
body {
  overflow-x: hidden;
}
.menu-container {
  position: absolute;
  width: 100%;
}

.background-image {
  position: absolute;
  width: 100px;
  height: 100px;
  background-image: url("https://i.imgur.com/DFWAwnG_d.webp?maxwidth=760&fidelity=grand");
  background-size: cover;
  filter: grayscale(0.9);
  opacity: 0.3;
}
</style>
