<template>
  <div style="color: #ebe9fc; background-color: #010104; height: 100vh;" class="home-page">
    <div class="video-container">
      <video autoplay muted loop class="background-video">
        <source src="/CarwashVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
        <h1>Welcome to Our Car Wash App</h1>
        <p>Experience the ultimate in convenience and cleanliness for your vehicle.</p>
        <router-link to="/booking" class="btn btn-primary" active-class="active">Book Your Wash Now</router-link>
      </div>
      <div class="content">
        <h2 style="color: #ebe9fc;">About Our App</h2>
        <p>
          Our app offers a seamless car wash booking experience right at your fingertips. Easily schedule appointments, choose from a variety of wash options, and track your booking status.
        </p>
        <p>
          We use eco-friendly products and state-of-the-art equipment to ensure your car is meticulously cleaned and cared for. Our dedicated team is committed to providing exceptional customer service.
        </p>
        <h2 style="color: #ebe9fc;">Features:</h2>
        <ul style="color: #ebe9fc;">
          <li>Easy online booking</li>
          <li>Variety of wash options</li>
          <li>Real-time booking status</li>
          <li>Eco-friendly products</li>
          <li>Exceptional customer service</li>
        </ul>
       
      </div>
    
  </div>
</template>


<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.video-container {
  position: relative;
  width: 100%; /* Adjust as needed */
  height: 300px; /* Adjust as needed */
  z-index: 99;
  overflow: hidden; /* Ensure any overflow is hidden */
  border-radius: 6cap;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1; /* Place video behind content */
  transform: translate(-50%, -50%); /* Center the video */
}

.content {
  position: relative; /* Ensure content stays above the video */
  z-index: 1; /* Ensure content appears above video */
  text-align: left;
  margin: 20px auto;
  max-width: 600px;
}

/* Additional styles for the content */
.content h2 {
  font-size: 22px;
  color: #2c3e50;
  margin-top: 20px;
}

.content ul {
  list-style-type: disc;
  margin-left: 20px;
  color: #555;
}

.content li {
  margin: 8px 0;
  font-size: 16px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  margin-top: 20px;
}

.btn-primary:hover {
  background-color: #0056b3;
}

</style>
