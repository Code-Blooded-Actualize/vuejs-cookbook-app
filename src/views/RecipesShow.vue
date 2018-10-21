<template>
  <div class="recipes-show">
    <h2>{{ recipe.title }}</h2>
    <h4>Ingredients</h4>
    <ul>
      <li v-for="ingredient in recipe.formatted.ingredients">
        {{ingredient}}
      </li>
    </ul>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      recipe: {
        formatted: {
          ingredients: []
        }
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/recipes/" + this.$route.params.id)
    .then(response => {
      this.recipe = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>