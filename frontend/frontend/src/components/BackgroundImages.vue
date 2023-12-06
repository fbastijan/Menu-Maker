<template>
  <div class="menu-container" ref="menuContainer"></div>
</template>

<script>
export default {
  mounted() {
    this.generateGrid(); // Generate grid on initial mount

    // Listen for the window scroll event

    window.addEventListener("load", this.handleLoad);
  },
  updated() {},
  methods: {
    generateGrid() {
      const smallImagePath =
        "https://i.imgur.com/DFWAwnG_d.webp?maxwidth=760&fidelity=grand";
      const numRows = Math.floor(document.body.scrollHeight / 100);
      const numCols = Math.ceil(window.innerWidth / 100);
      const menuContainer = this.$refs.menuContainer;

      // Clear existing content
      menuContainer.innerHTML = "";

      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          const backgroundImage = document.createElement("img");
          backgroundImage.className = "background-image";
          backgroundImage.src = smallImagePath;
          backgroundImage.style.top = `${i * 100}px`;
          backgroundImage.style.left = `${j * 100}px`;
          menuContainer.appendChild(backgroundImage);
        }
      }
    },

    handleLoad() {
      this.generateGrid(); // Regenerate grid on scroll
    },
  },
  beforeUnmount() {
    // Remove the scroll event listener to prevent memory leaks
    window.removeEventListener("load", this.handleLoad);
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
}

.background-image {
  position: absolute;
  width: 100px;
  height: 100px;
  object-fit: cover;
  filter: grayscale(0.9);
  opacity: 0.3;
  transform: rotate(45deg);
}
</style>
