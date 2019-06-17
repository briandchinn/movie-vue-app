<template>
  <div class="home">
    <h1>Add New Actor</h1>
    <div>
      First Name: <input type="text" v-model="newActorFirstName"><br>
      Last Name: <input type="text" v-model="newActorLastName"><br>
      Known For: <input type="text" v-model="newActorKnownFor"><br>
      Gender: <input type="text" v-model="newActorGender"><br>
      Age: <input type="text" v-model="newActorAge"><br>
      Movie ID: <input type="number" v-model="newActorMovieId"><br>
    </div>
    <button v-on:click="createActor()">Create Actor</button>

    <h1>{{ message }}</h1>
    <div v-for=" actor in actors">
      <h2>{{ actor.first_name}} {{ actor.last_name }}</h2>
      <button v-on:click="showActor(actor)">Show More</button>
      <div v-if="currentActor === actor">
        <p>{{ actor.known_for }}</p>
        <p>{{ actor.gender }}</p>
        <p>{{ actor.age }}</p>
        <div>
          First Name: <input type="text" v-model="actor.first_name"><br>
          Last Name: <input type="text" v-model="actor.last_name"><br>
          Known For: <input type="text" v-model="actor.known_for"><br>
          Gender: <input type="text" v-model="actor.gender"><br>
          Age: <input type="text" v-model="actor.age"><br>
          Movie ID: <input type="number" v-model="actor.movie_id"><br>
          <button v-on:click="updateActor(actor)">Update Actor</button>
          <button v-on:click="destroyActor(actor)">Delete Actor</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "All Actors",
      actors: [],
      currentActor: {},
      newActorFirstName: "",
      newActorLastName: "",
      newActorKnownFor: "",
      newActorGender: "",
      newActorAge: "",
      newActorMovieId: "",
    };
  },
  created: function() {
    axios.get('/api/actors').then(response => {
      this.actors = response.data;
    });
  },
  methods: {
    createActor: function(){
      var params = {
        first_name: this.newActorFirstName,
        last_name: this.newActorLastName,
        known_for: this.newActorKnownFor,
        gender: this.newActorGender,
        age: this.newActorAge,
        movie_id: this.newActorMovieId,
      };
      axios.post("/api/actors", params).then(response => {
        this.actors.push(response.data);
        this.newActorFirstName = "";
        this.newActorLastName = "";
        this.newActorKnownFor = "";
        this.newActorGender = "";
        this.newActorAge = "";
        this.newActorMovieId = "";
      });
    },
    showActor: function(actor) {
      if (this.currentActor === actor) {
        this.currentActor = {};
      } else {
        this.currentActor = actor;
      }
    },
    updateActor: function(actor) {
      var params = {
        first_name: actor.first_name,
        last_name: actor.last_name,
        known_for: actor.known_for,
        gender: actor.gender,
        age: actor.age,
        movie_id: actor.movie_id,
      };
      axios
        .patch("/api/actors/" + actor.id, params)
        .then(response => {
          this.currentActor = {};
        });
    },
    destroyActor: function(actor){
      axios
        .delete("/api/actors/" + actor.id)
        .then(response => {
          var index = this.actors.indexOf(actor);
          this.actors.splice(index, 1);
      });
    }
  }
};
</script>