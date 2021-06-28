<template>
  <main>
    <section class="signup-container">
      <form @submit.prevent="signup">
        <label for="email_input">Name</label>
        <input type="text" id="text_input" name="text" v-model="user.name" />
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
        <button type="submit">Signup</button>
        <p>
          Already have an account?
          <router-link class="login-link" to="/login"> Login here </router-link>
        </p>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      user: {
        email: "",
        name: "",
        password: "",
      },
    };
  },
  methods: {
    signup() {
      if (
        this.user.name.trim() === "" ||
        this.user.email.trim() === "" ||
        this.user.password.trim() == ""
      )
        return;

      this.$store
        .dispatch("userCreate", this.user)
        .then((response) => {
          if (response.status === 201) {
            this.$router.push({ name: "login" });
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
<style scoped src="./signup.css"></style>
