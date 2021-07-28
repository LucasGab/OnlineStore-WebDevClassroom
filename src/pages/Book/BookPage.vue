<template>
  <main>
    <section class="book-container">
      <div class="left-container">
        <img :src="imgPrefix + book.imgUrl" :alt="book.name" width="250" />
      </div>
      <div class="right-container">
        <h2>{{ book.name }}</h2>
        <h4>{{ book.author }}</h4>
        <h2>${{ book.price }}</h2>
        <div class="book-review">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span>({{ book.qtdReview }} Review)</span>
        </div>
        <button @click.prevent="addCart">Add to Cart</button>
        <button @click.prevent="">Add to Wish List</button>
      </div>
    </section>
    <section class="specification-container">
      <div class="description">
        <h3>Description</h3>
        <p>{{ book.description }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import BookService from "../../service/BookService";
import { mapGetters } from "vuex";
export default {
  name: "BooksPage",
  data() {
    return {
      book: {},
    };
  },
  methods: {
    addCart() {
      this.$store
        .dispatch("addBookCart", this.book)
        .then(() => {
          this.$router.push({ name: "books" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    let name = this.$route.params.name;
    BookService.getBook(name)
      .then((response) => {
        if (response.status === 200) {
          this.book = response.data;
          this.book.price = this.book.price.toFixed(2);
          this.book.qtd = 1;
          this.book.total = this.book.price;
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
<style scoped src="./book.css"></style>
