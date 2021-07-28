<template>
  <main>
    <section class="cover-main-section">
      <h1>Profile</h1>
    </section>
    <section class="profile-container">
      <div class="header-container">
        Name: {{ user.name }}
        <br />
        Email: {{ user.email }}
      </div>
      <div class="main-container">
        <div class="form-container">
          <form @submit.prevent="">
            <label for="email_input">Alterar Nome</label>
            <input
              type="text"
              id="text_input"
              name="text"
              v-model="new_user.name"
            />
            <button type="submit">Salvar</button>
          </form>
        </div>
        <div class="form-container">
          <form @submit.prevent="">
            <label for="email_input">Alterar Senha</label>
            <input
              type="password"
              id="password_input"
              name="password"
              v-model="new_user.password"
            />
            <label for="email_input">Confirmação de Senha</label>
            <input
              type="password"
              id="confirm_password_input"
              name="confirm_password"
              v-model="new_user.confirm_password"
            />
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WishesPage",
  data() {
    return {
      new_user: {
        name: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  created() {
    this.new_user.name = this.user.name;
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./profile.css"></style>
