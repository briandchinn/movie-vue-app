<template>
  <div class="actors-index">
    <h3> {{ message }}</h3>

    Search by name: <input v-model="nameFilter" list="names">

    <datalist id="names">
      <option v-for="actor in actors"> {{ actor.last_name }}</option>
    </datalist>
    
    <transition-group appear enter-active-class="animated bounce" leave-active-class="animated fadeOut">
      <div v-for="actor in orderBy(filterBy(actors, nameFilter, 'last_name'),'last_name')" v-bind:key="actor.id">
        <h4>{{ actor.first_name}} {{ actor.last_name}}</h4>
        <button>
          <router-link v-bind:to="'/actors/' + actor.id">More Info</router-link>
        </button>
        <hr>
      </div>
    </transition-group>

  </div>
</template>



  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      actors: [],
      message: "All actors",
      nameFilter:''
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