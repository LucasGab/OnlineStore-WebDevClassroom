<template>
  <main>
    <section class="cover-main-section">
      <h1>Contact</h1>
    </section>

    <section class="contact-main-section">
      <form class="contact-form" action="#">
        <h2>Get in Touch</h2>
        <textarea required placeholder="Enter message"></textarea>
        <div class="input-group">
          <input
            required
            class="input-half"
            type="text"
            placeholder="Enter your name"
          />
          <input required class="input-half" type="email" placeholder="Email" />
        </div>
        <div class="input-group">
          <input required type="text" placeholder="Subject" />
        </div>
        <div class="input-group">
          <button required type="submit">Send</button>
        </div>
      </form>
      <aside class="contact-info">
        <div class="contact-item">
          <i class="fas fa-home"></i>
          <div>
            <h3>São Paulo, City</h3>
            <p>Neigborhood, 1111</p>
          </div>
        </div>
        <div class="contact-item">
          <i class="far fa-envelope"></i>
          <div>
            <h3>support@bookstore.com</h3>
            <p>Send us your query anytime!</p>
          </div>
        </div>
        <div class="contact-item">
          <i class="fas fa-mobile-alt"></i>
          <div>
            <h3>+1 (61) 2345-6789</h3>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
        </div>
      </aside>
    </section>
  </main>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./contact.css"></style>
