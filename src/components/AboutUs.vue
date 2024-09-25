<template>
  <div style="color: #ebe9fc; height: 100vh;" class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h2>About Us</h2>
        <p>
          Established in 2010, we provide top-quality car washing and detailing services. Our experienced team ensures your vehicle shines, offering everything from full washes to interior and exterior detailing with precision and care.
        </p>
        <p>We understand the importance of maintaining a clean and well-maintained car. Not only does it look good, but it also helps protect your investment and extend the life of your vehicle.</p>
        <p>We use only the highest quality products and equipment to ensure a safe and effective wash for your car. Our team is passionate about cars and takes pride in delivering exceptional service.</p>
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <img src="/exterior-car-wash.jpg" alt="Car Wash Service" class="img-fluid rounded">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      comments: [],
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    paginatedComments() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.comments.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.comments.length / this.itemsPerPage);
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.comments = await response.json();
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
.comments-list {
  padding: 1em;
}

.comments-list ul {
  list-style-type: none;
  padding: 0;
}

.comments-list li {
  background-color: #ffffff;
  margin-bottom: 1em;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.comments-list h3 {
  margin: 0 0 5px 0;
  font-size: 18px;
}

.comments-list p {
  font-size: 16px;
  color: #444;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
