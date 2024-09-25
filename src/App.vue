<template>
  <div style="background-color: #010104;" id="app">
    <!-- Navbar Start -->
    <nav style="background-color: #010104; color: #ebe9fc; " class="navbar navbar-expand-lg  navbar-light py-0 px-4 shadow-navbar sticky-top">
      <router-link to="/" class="navbar-brand d-flex align-items-center text-center">
        <div class="icon p-2 me-2">
          <!-- Icon placeholder -->
        </div>
        <h1 class="m-0 text-primary">Car Wash App</h1>
      </router-link>

      <button style="color: #3a31d8; border-color: #3a31d8; " type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div  class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto ">
          <router-link to="/" class="nav-item nav-link " active-class="active">Home</router-link>
          <router-link to="/services" class="nav-item nav-link" active-class="active">Services</router-link>
          <router-link to="/booking" class="nav-item nav-link" active-class="active">Booking</router-link>
          <router-link to="/aboutus" class="nav-item nav-link" active-class="active">About Us</router-link>
          <router-link to="/contactus" class="nav-item nav-link" active-class="active">Contact Us</router-link>
        </div>
      </div>
    </nav>
    <!-- Navbar End -->

    <!-- Router View -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Navbar with box shadow */
.navbar {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

/* Sticky top */
.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1030; /* Ensure it stays on top of other content */
}

.navbar-nav .nav-link.active {
  font-weight: bold;
  color: #3a31d8;
}

.navbar-nav .nav-link {
  padding: 10px 15px;
  color: #ebe9fc;
}


</style>
