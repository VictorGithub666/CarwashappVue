<template>
  <div style="color: #ebe9fc; background-color: #010104; height: 100vh;"  class="d-flex flex-column ">
    <h2 class="d-block text-white">Services</h2>

    <div class="d-flex flex-wrap justify-content-center my-5">
     
        <SplideSlide v-for="(service, index) in services" :key="index" class="card mx-2 my-5">
          <div  class="card" style="width: 18rem; background-color: #0600c2;">
            <img :src="service.pic" class="card-img-top" alt="Service Image" />
            <div class="card-body">
              <h5 class="card-text" v-if="service.title">{{ service.title }}</h5>
            </div>
            <ul style="background-color: #0600c2;" class="list-group list-group-flush">
              <li style="background-color: #0600c2; color: #ebe9fc;"  class="list-group-item">{{ service.body }}</li>
            </ul>
            <div class="card-body">
              <router-link to="/booking" class="btn btn-primary" active-class="active">Book Your Wash Now</router-link>
            </div>
          </div>
        </SplideSlide>
     
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarwashServices',
  data() {
    return {
      services: [
        {
          userId: 1,
          id: 1,
          title: "Full Car Wash",
          body: "Comprehensive cleaning of both the interior and exterior of your vehicle.",
          pic: "/full-car-wash.jpg" // Replace with actual image URL
        },
        {
          userId: 1,
          id: 2,
          title: "Exterior Car Wash",
          body: "Thorough cleaning of the exterior of your car, including wash, wax, and polish.",
          pic: "/exterior-car-wash.jpg" // Replace with actual image URL
        },
        {
          userId: 1,
          id: 3,
          title: "Interior Car Wash",
          body: "Detailed cleaning of the car's interior, including seats, carpets, and dashboard.",
          pic: "/interior-car-wash.jpg" // Replace with actual image URL
        }
      ]
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
