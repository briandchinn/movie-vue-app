<template>
  <div class="movies-index">
    <h3> {{ message }}</h3>

    <ul>
      <li v-for="error in errors">Error: {{ error }}</li>
    </ul>

    <div v-for="movie in movies">
      <h4>{{ movie.title}}</h4>
      <p>{{ movie.year}}</p>
      <button>
        <router-link v-bind:to="'/movies/' + movie.id">More Info</router-link>
      </button>
      <hr>
    </div>

  </div>
</template>



  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      movies: [],
      errors: [],
      message: "All Movies"
    };
  },
  created: function() {
    axios.get("api/movies").then(response => {
      this.movies = response.data;
    })
  },
  methods: {
  }
};
</script>