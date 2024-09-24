<template>
  <div class="posts-list">
    <h2>Posts</h2>
    <ul v-if="paginatedPosts.length">
      <li v-for="(post, index) in paginatedPosts" :key="post.id">
        <h3>{{ index + 1 }}. {{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <p v-else>No posts available.</p>

    <!-- Pagination Controls -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      currentPage: 1,
      itemsPerPage: 5, // Set the number of posts per page
    };
  },
  computed: {
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.posts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.posts.length / this.itemsPerPage);
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.posts = await response.json();
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
h1,
h2 {
  color: #2c3e50;
  text-transform: capitalize;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  margin: 10px 5px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 350px;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
