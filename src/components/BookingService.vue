<template>
  <div style="height: 100vh;">
    <div style="background-color: #0600c2; color: #ebe9fc; " class="container">
    <h2>Carwash Booking Form</h2>
    <form  @submit.prevent="submitBooking">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          id="name"
          v-model="bookingData.name"
          required
        />
      </div>

      <div class="mb-3">
        <label for="phone" class="form-label">Phone Number</label>
        <input
          type="tel"
          name="phone"
          class="form-control"
          id="phone"
          v-model="bookingData.phone"
          required
        />
      </div>

      <div class="mb-3">
        <label for="carType" class="form-label">Car Type</label>
        <input
          type="text"
          name="carType"
          class="form-control"
          id="carType"
          v-model="bookingData.carType"
          required
        />
      </div>

      <div class="mb-3">
        <label for="carwashType" class="form-label">Carwash Type</label>
        <select
          name="carwashType"
          id="carwashType"
          class="form-control"
          v-model="bookingData.carwashType"
          required
        >
          <option value="">-- Select Carwash Type --</option>
          <option value="full">Full Wash</option>
          <option value="exterior">Exterior Wash</option>
          <option value="interior">Interior Wash</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Submit Booking</button>
    </form>
  </div>

  </div>
  
</template>

<script>
export default {
  data() {
    return {
      bookingData: {
        name: '',
        phone: '',
        carType: '',
        carwashType: '',
      },
    };
  },
  methods: {
    submitBooking() {
      // Handle form submission logic here
      // You could send the data to an API or display a confirmation message
      console.log('Booking submitted:', this.bookingData);
      // Clear the form after submission
      this.bookingData = {
        name: '',
        phone: '',
        carType: '',
        carwashType: '',
      };
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 100px;
  margin-top: 50px;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
}

.form-label {
  font-weight: 500;
}

button {
  margin-top: 15px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
