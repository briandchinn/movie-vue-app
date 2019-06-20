<template>
  <div class="actors-index">
    <h3> {{ message }}</h3>

    <div v-for="actor in actors">
      <h4>{{ actor.first_name}} {{ actor.last_name}}</h4>
      <button>
        <router-link v-bind:to="'/actors/' + actor.id">More Info</router-link>
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
      actors: [],
      message: "All actors"
    };
  },
  created: function() {
    axios.get("api/actors").then(response => {
      this.actors = response.data;
    });
  },
  methods: {
  }
};
</script>