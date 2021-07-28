<template>
  <main>
    <section class="cover-main-section">
      <h1>Cart</h1>
    </section>

    <section class="cart-container">
      <table>
        <thead>
          <tr>
            <th scope="col">Book</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in cart" :key="book.name">
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
            <td style="width: 10%">${{ book.price }}</td>
            <td style="width: 20%">{{ book.qtd }}</td>
            <td style="width: 10%">{{ book.total }}</td>
            <td style="width: 10%">
              <button
                @click.prevent="removeCart(book)"
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
export default {
  name: "CartPage",
  methods: {
    removeCart(book) {
      this.$store
        .dispatch("removeBookCart", book)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    ...mapGetters(["cart", "imgPrefix"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./cart.css"></style>
