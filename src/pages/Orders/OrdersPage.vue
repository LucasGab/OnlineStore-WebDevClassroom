<template>
  <main>
    <section class="cover-main-section">
      <h1>Orders</h1>
    </section>
    <section class="orders-container">
      <table>
        <thead>
          <tr>
            <th scope="col">Orders</th>
            <th scope="col">Status</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr class="order-item">
            <td style="width: 60%">ID: 3123559120</td>
            <td style="width: 10%">APROVED</td>
            <td style="width: 10%">$100.00</td>
          </tr>
          <tr class="order-item">
            <td style="width: 60%">ID: 3123559120</td>
            <td style="width: 10%">WAITING</td>
            <td style="width: 10%">$250.00</td>
          </tr>
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
export default {
  name: "OrdersPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./orders.css"></style>
