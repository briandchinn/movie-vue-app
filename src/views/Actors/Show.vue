<template>
  <div class="actors-show">

    <h4>{{ actor.first_name}} {{ actor.last_name }}</h4>
    <p>Gender: {{ actor.gender }}</p>
    <p>Age: {{ actor.age }}</p>
    <p>Known For: {{ actor.known_for}}</p>
    <button>
      <router-link v-bind:to="'/actors/' + actor.id + '/edit'">Edit</router-link>
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
      actor: {},
    };
  },
  created: function() {
    axios.get("api/actors/" + this.$route.params.id).then(response => {
      this.actor = response.data;
    })
  },
  methods: {
  }
};
</script>