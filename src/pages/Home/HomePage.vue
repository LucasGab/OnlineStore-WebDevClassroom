<template>
  <main>
    <section class="cover-main-section">
      <h1>BookStore</h1>
      <h2>Here you can find your favorite books</h2>
    </section>

    <section class="books-main-section">
      <h3>Recommended Books</h3>
      <div class="books-container">
        <BookCard v-for="book in books" :key="book.name" :book="book" />
      </div>
    </section>
  </main>
</template>

<script>
import BookService from "../../service/BookService";
import BookCard from "../../components/BookCard/BookCard.vue";

export default {
  name: "HomePage",
  components: {
    BookCard,
  },
  data() {
    return {
      books: [],
    };
  },
  beforeCreate() {
    BookService.getFrontBooks()
      .then((response) => {
        if (response.status === 200) {
          this.books = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./home.css"></style>
