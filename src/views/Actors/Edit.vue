<template>
  <div class="actors-edit">

    <ul>
      <li v-for="error in errors">Error: {{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input type="text" class="form-control" id="first_name" placeholder="" v-model="actor.first_name">
        </div>
        <div class="form-group">
          <label for="last_name">Last Name</label>
          <input type="text" class="form-control" id="last_name" placeholder="" v-model="actor.last_name">
        </div>
        <div class="form-group">
          <label for="gender">Gender</label>
          <input type="text" class="form-control" id="gender" placeholder="" v-model="actor.gender">
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="text" class="form-control" id="age" placeholder="" v-model="actor.age">
        </div>
        <div class="form-group">
          <label for="known_for">Known For</label>
          <input type="text" class="form-control" id="known_for" placeholder="" v-model="actor.known_for">
        </div>
      <button type="submit" class="btn btn-success">Update actor</button>
    </form>
    
    <div class="text-center">
      <button class="btn btn-danger" v-on:click="destroyactor()">Destroy</button>
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
      actor: {}
    };
  },
  created: function() {
    axios.get("api/actors/" + this.$route.params.id).then(response => {
      this.actor = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.actor.first_name,
        last_name: this.actor.last_name,
        plot: this.actor.plot,
        director: this.actor.director
      };
      axios.patch("/api/actors/" + this.actor.id, params).then(response => {
        this.$router.push("/actors/" + this.actor.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    destroyactor: function() {
      if(confirm("Do you really want to delete " + this.actor.title + "?"))
        axios.delete("api/actors/" + this.actor.id).then(response => {
          this.$router.push("/actors")
        });
    }
  }
};
</script>