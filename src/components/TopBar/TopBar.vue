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
        <router-link :to="{ name: 'cart' }">
          <button class="cart-button" type="button">
            <div class="badge-button">{{ totalCart }}</div>
            <i class="fas fa-shopping-cart"></i>
          </button>
        </router-link>
        <div v-if="isUserLoggedIn" class="dropdown">
          <button class="profile-button" type="button">
            <i class="fas fa-user"></i>{{ user.name }}
          </button>

          <div class="dropdown-content">
            <ul>
              <li>
                <router-link :to="{ name: 'profile' }">Profile</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'orders' }">Orders</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'wishes' }">Wish List</router-link>
              </li>
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
    ...mapGetters(["isUserLoggedIn", "user", "totalCart"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./topbar.css"></style>
