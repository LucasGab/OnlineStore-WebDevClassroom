<template>
  <div class="book-item">
    <div class="book-card">
      <router-link :to="{ name: 'book', params: { name: book.name } }"
        ><img :src="imgPrefix + book.imgUrl" :alt="book.name" width="200"
      /></router-link>
      <router-link :to="{ name: 'book', params: { name: book.name } }"
        ><h4>{{ book.name }}</h4></router-link
      >
      <h5>{{ book.author }}</h5>
      <div class="book-info">
        <div class="book-review">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <p>({{ book.qtdReview }} Review)</p>
        </div>
        <span class="book-price"> ${{ book.price }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BookCard",
  props: {
    book: Object,
  },
  computed: {
    ...mapGetters(["imgPrefix"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./bookcard.css"></style>
