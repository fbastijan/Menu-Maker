<template>
  <div class="menu-container" ref="menuContainer">
    <div
      v-for="(item, index) in gridItems"
      :key="index"
      class="background-image"
      :style="{ top: item.top, left: item.left }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridItems: [],
      windowHeight: window.innerHeight,
    };
  },
  mounted() {
    this.generateGrid(); // Generate grid on initial mount
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    generateGrid() {
      const smallImagePath =
        "https://i.imgur.com/DFWAwnG_d.webp?maxwidth=760&fidelity=grand";
      const numRows = Math.floor(window.innerHeight / 100);
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
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  overflow-x: hidden;
}

.menu-container {
  position: absolute;
  width: 100%;
  height: 90%;
  overflow: hidden; /* Prevent items from overflowing */
}

.background-image {
  position: absolute;
  width: 50px;
  height: 50px;
  background-image: url("https://i.imgur.com/DFWAwnG_d.webp?maxwidth=760&fidelity=grand");
  background-size: cover;
  filter: grayscale(0.9);
  opacity: 0.3;
  transform: rotate(45deg);
}
</style>
