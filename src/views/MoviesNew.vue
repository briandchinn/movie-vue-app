<template>
  <div class="movies-new">
    <h3> {{ newMovie }}</h3>

    <ul>
      <li v-for="error in errors">Error: {{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Movie Title" v-model="newMovieTitle">
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <input type="text" class="form-control" id="year" placeholder="Movie year was made" v-model="newMovieYear">
        </div>
        <div class="form-group">
          <label for="plot">Plot</label>
          <input type="text" class="form-control" id="plot" placeholder="Movie plot" v-model="newMoviePlot">
        </div>
        <div class="form-group">
          <label for="director">Director</label>
          <input type="text" class="form-control" id="director" placeholder="Movie Director" v-model="newMovieDirector">
        </div>
      <button type="submit" class="btn btn-success">Create Movie</button>
    </form>

  </div>
</template>



  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newMovie: "New Movie",
      newMovieTitle:"",
      newMovieYear:"",
      newMoviePlot:"",
      newMovieDirector:"",
      errors: []
    };
  },
  created: function() {
  },
  methods: {
    submit: function() {
      var params = {
        title: this.newMovieTitle,
        year: this.newMovieYear,
        plot: this.newMoviePlot,
        director: this.newMovieDirector
      };
      axios.post("/api/movies", params).then(response => {
        console.log("Success!", response.data);
        this.$router.push("/");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>