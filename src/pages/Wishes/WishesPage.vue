<template>
  <main>
    <section class="cover-main-section">
      <h1>Wishes</h1>
    </section>
    <section class="wishes-container">
      <table>
        <thead>
          <tr>
            <th scope="col">Books</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.name">
            <td style="width: 60%">
              <div class="book-item">
                <img
                  :src="imgPrefix + book.imgUrl"
                  :alt="book.name"
                  height="220"
                  width="150"
                />
                <h4>{{ book.name }}</h4>
              </div>
            </td>
            <td style="width: 10%">
              <button
                @click.prevent="deleteBook(book._id)"
                class="erase-button"
                type="button"
              >
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
      books: [],
    };
  },
  methods: {
    deleteBook(book_id) {
      UserService.deleteWishList(book_id, this.$store.state.token)
        .then((response) => {
          if (response.status === 200) {
            this.books = response.data["bookWishList"];
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeCreate() {
    UserService.getWishList(this.$store.state.token)
      .then((response) => {
        if (response.status === 200) {
          this.books = response.data["bookWishList"];
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    ...mapGetters(["imgPrefix"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./wishes.css"></style>
