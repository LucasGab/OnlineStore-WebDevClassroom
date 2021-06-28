<template>
  <nav class="menu-navigation w-100">
    <div class="menu-container">
      <div class="menu-header">
        <span class="logo">
          <router-link :to="{ name: 'home' }">BookStore</router-link>
        </span>
      </div>
      <div class="menu-items">
        <ul>
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'books' }">Books</router-link></li>
          <li><router-link :to="{ name: 'about' }">About</router-link></li>
          <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
        </ul>
      </div>
      <div class="menu-options">
        <div v-if="isUserLoggedIn" class="dropdown">
          <button class="profile-button" type="button">
            <i class="fas fa-user"></i>{{ user.name }}
          </button>
          <div class="dropdown-content">
            <ul>
              <li><a>Carrinho</a></li>
              <li><a>Lista de Leitura</a></li>
              <li><a @click.prevent="logout">Logout</a></li>
            </ul>
          </div>
        </div>

        <router-link to="/login" v-else
          ><button type="button">Log in</button></router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TopBar",
  methods: {
    logout() {
      this.$store
        .dispatch("userLogout")
        .then(() => {
          if (!this.$store.getters.isUserLoggedIn) {
            this.$router.push({ name: "home" });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$router.push({ name: "home" });
        });
    },
  },
  computed: {
    ...mapGetters(["isUserLoggedIn", "user"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./topbar.css"></style>
