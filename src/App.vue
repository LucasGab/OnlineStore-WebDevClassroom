<template>
  <TopBar />
  <router-view></router-view>
  <FootBar />
</template>

<script>
import TopBar from "./components/TopBar/TopBar.vue";
import FootBar from "./components/FootBar/FootBar.vue";

export default {
  name: "App",
  components: {
    TopBar,
    FootBar,
  },
};
</script>

<style src="./assets/css/base.css"></style>
