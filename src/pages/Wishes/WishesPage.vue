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
          <tr v-for="book in cart" :key="book.name">
            <td style="width: 60%">
              <div class="book-item">
                <img
                  :src="book.imgUrl"
                  :alt="book.name"
                  height="220"
                  width="150"
                />
                <h4>{{ book.name }}</h4>
              </div>
            </td>
            <td style="width: 10%">
              <button class="erase-button" type="button">
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
export default {
  name: "WishesPage",
  computed: {
    ...mapGetters(["cart"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./wishes.css"></style>
