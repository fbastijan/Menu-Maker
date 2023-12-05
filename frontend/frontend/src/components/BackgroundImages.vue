<template>
  <div class="menu-container" ref="menuContainer"></div>
</template>

<script>
export default {
  mounted() {
    const smallImagePath =
      "https://i.imgur.com/DFWAwnG_d.webp?maxwidth=760&fidelity=grand";
    const numRows = Math.ceil(window.innerHeight / 100);
    const numCols = Math.ceil(window.innerWidth / 100);
    const menuContainer = this.$refs.menuContainer;

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
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  overflow: hidden;
}

.menu-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
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
