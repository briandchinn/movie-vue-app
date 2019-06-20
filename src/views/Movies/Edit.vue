<template>
  <div class="movies-edit">

    <ul>
      <li v-for="error in errors">Error: {{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Movie Title" v-model="movie.title">
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <input type="text" class="form-control" id="year" placeholder="Movie year was made" v-model="movie.year">
        </div>
        <div class="form-group">
          <label for="plot">Plot</label>
          <input type="text" class="form-control" id="plot" placeholder="Movie plot" v-model="movie.plot">
        </div>
        <div class="form-group">
          <label for="director">Director</label>
          <input type="text" class="form-control" id="director" placeholder="Movie Director" v-model="movie.director">
        </div>
      <button type="submit" class="btn btn-success">Update Movie</button>
    </form>
    
    <div class="text-center">
      <button class="btn btn-danger" v-on:click="destroyMovie()">Destroy</button>
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
      errors: [],
      movie: {}
    };
  },
  created: function() {
    axios.get("api/movies/" + this.$route.params.id).then(response => {
      this.movie = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        title: this.movie.title,
        year: this.movie.year,
        plot: this.movie.plot,
        director: this.movie.director
      };
      axios.patch("/api/movies/" + this.movie.id, params).then(response => {
        this.$router.push("/movies/" + this.movie.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    destroyMovie: function() {
      if(confirm("Do you really want to delete " + this.movie.title + "?"))
        axios.delete("api/movies/" + this.movie.id).then(response => {
          this.$router.push("/movies")
        });
    }
  }
};
</script>