<template>
  <main>
    <section class="login-container">
      <form @submit.prevent="login">
        <label for="email_input">Email</label>
        <input
          type="email"
          id="email_input"
          name="email"
          v-model="user.email"
        />
        <label for="password_input">Password</label>
        <input
          type="password"
          name="password"
          id="password_input"
          v-model="user.password"
        />
        <button type="submit">Login</button>
        <p>
          Don’t have an account?
          <router-link class="signup-link" to="/signup">
            Sign Up here</router-link
          >
        </p>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("userLogin", this.user)
        .then((response) => {
          if (response.status === 200 && this.$store.getters.isUserLoggedIn) {
            this.$router.push({ name: "home" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./login.css"></style>
