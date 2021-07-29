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
            <button
              @click.prevent="modifyUser({ name: new_user.name })"
              type="submit"
            >
              Salvar
            </button>
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
            <button
              @click.prevent="modifyUser({ password: new_user.password })"
              type="submit"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import UserService from "../../service/UserService";

export default {
  name: "WishesPage",
  data() {
    return {
      new_user: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    modifyUser(body) {
      console.log(body.password);
      if (body.password) this.new_user.password = "";
      UserService.modifyUser(this.user._id, body, this.token)
        .then((response) => {
          if (response.status === 200) {
            this.$store
              .dispatch("userModify", response.data)
              .then(() => {})
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.new_user.name = this.user.name;
  },
  computed: {
    ...mapGetters(["user", "token"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./profile.css"></style>
