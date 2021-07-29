<template>
  <main>
    <section class="cover-main-section">
      <h1>Books</h1>
    </section>

    <section class="books-container">
      <div class="categories-left-container">
        <h2 class="categories-header">Categories</h2>
        <ul>
          <li>
            <a href="#"><h3 class="categories-item">Business</h3></a>
          </li>
          <li>
            <a href="#"><h3 class="categories-item">Technology</h3></a>
          </li>
          <li>
            <a href="#"><h3 class="categories-item">Engineering</h3></a>
          </li>
          <li>
            <a href="#"
              ><h3 class="categories-item">Health, Fitness & Dieting</h3></a
            >
          </li>
          <li>
            <a href="#"><h3 class="categories-item">Law</h3></a>
          </li>
        </ul>
      </div>
      <div class="books-right-container">
        <div class="books-list-container">
          <BookCard v-for="book in books" :key="book.name" :book="book" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import BookService from "../../service/BookService";
import BookCard from "../../components/BookCard/BookCard.vue";

export default {
  name: "BooksPage",
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
<style scoped src="./books.css"></style>
