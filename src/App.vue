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
  beforeCreate() {
    this.$store.dispatch("getCartLocalStorage");
  },
};
</script>

<style src="./assets/css/base.css"></style>
