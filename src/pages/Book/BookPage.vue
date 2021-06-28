<template>
  <main>
    <section class="book-container">
      <div class="left-container">
        <img :src="book.imgUrl" :alt="book.name" width="250" />
      </div>
      <div class="right-container">
        <h2>{{ book.name }}</h2>
        <h4>{{ book.author }}</h4>
        <div class="book-review">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span>({{ book.qtdReview }} Review)</span>
        </div>
        <button>Add to Cart</button>
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

export default {
  name: "BooksPage",
  data() {
    return {
      book: {},
    };
  },
  created() {
    let name = this.$route.params.name;
    BookService.getBook(name)
      .then((response) => {
        if (response.status === 200) {
          this.book = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./book.css"></style>
