<template>
  <div class="movies-show">

    <h4>{{ movie.title}}</h4>
    <p>Year: {{ movie.year}}</p>
    <p>{{ movie.plot}}</p>
    <p>Director: {{ movie.director}}</p>
    <button>
      <router-link v-bind:to="'/movies/' + movie.id + '/edit'">Edit</router-link>
    </button>
    <hr>

  </div>
</template>



  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      movie: {},
    };
  },
  created: function() {
    axios.get("api/movies/" + this.$route.params.id).then(response => {
      this.movie = response.data;
    })
  },
  methods: {
  }
};
</script>