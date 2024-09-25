<template>
  <div style="color: #ebe9fc; height: 100vh;" class="container mt-5">
    <div class="row">
      <div style="background-color: #0600c2; border-radius: 2cap;" class="col-md-8">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitContact">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              v-model="contactData.name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone Number</label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              name="phone"
              v-model="contactData.phone"
              required
            />
          </div>
          <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <input
              type="text"
              class="form-control"
              id="subject"
              name="subject"
              v-model="contactData.subject"
              required
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea
              class="form-control"
              id="message"
              name="message"
              rows="5"
              v-model="contactData.message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">Contact Information</h5>
            <p class="card-text">
              <i class="fas fa-envelope-square mr-2"></i>
              <a href="mailto:kivungijr@gmail.com">kivungijr@gmail.com</a>
            </p>
            <p class="card-text">
              <i class="fas fa-phone-square mr-2"></i>
              <a  href="tel:0793049705">0793049705</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactData: {
        name: '',
        phone: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    submitContact() {
      // Handle form submission logic here
      // You could send the data to an API or display a confirmation message
      console.log('Contact form submitted:', this.contactData);
      // Clear the form after submission
      this.contactData = {
        name: '',
        phone: '',
        subject: '',
        message: '',
      };
    },
  },
};
</script>

<style scoped>
.container {
  padding: 1em;
}

.card {
  background-color: #0600c2;
  color: #ebe9fc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-body h5 {
  margin: 0 0 10px 0;
  font-size: 18px;
}

.card-text {
  font-size: 14px;
  color: #555;
}

.btn-primary {
  background-color: #3498db;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>
