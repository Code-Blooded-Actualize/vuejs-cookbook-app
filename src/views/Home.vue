<template>
  <div class="home">
    <div v-for="recipe in recipes">
      {{ recipe }}
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      recipes: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/recipes")
    .then(function(response) {
      this.recipes = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>














