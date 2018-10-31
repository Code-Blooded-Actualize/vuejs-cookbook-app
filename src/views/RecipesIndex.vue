<template>
  <div class="recipes-index">
    <!-- Section - Services Start -->
    <section id="services" class="bg-gray-dark-2">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h3 class="font-alt font-w-600 letter-spacing-2 title-extra-large text-uppercase text-white">Josh's Cookbook</h3>
                    <p class="mt-3 text-gray text-extra-large"><i>I love what I do. I make horrible cooking decisions.</i></p>
                    <span class="bg-base-color mt-4 mx-auto sep-line-medium-thick-long"></span>
                </div>
                <!-- //.col-lg-8 -->
            </div>
            <!-- //.row -->
            
            <div class="row mt-5 pt-5">
                <div v-for="recipe in recipes" class="col-lg-4 bg-gray-dark-3 border-md-0 border-bottom border-right border-gray-2" data-mh="mh-col-services">
                    <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
                        <i class="icon-Chess text-base-color title-extra-large"></i>
                        <button type="button" class="float-right btn btn-danger" data-toggle="modal" data-target="#exampleModal" v-on:click="setCurrentRecipe(recipe)">
                                Details
                              </button>
                        <span class="d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-white">{{ recipe.title }}</span>
                        <span class="text-white">Prep Time: {{ recipe.formatted.prep_time }}</span>
                        <span class="bg-base-color ml-lg-0 mt-3 mx-auto sep-line-thick"></span>
                        <p class="m-0 mt-3 text-gray text-medium">{{ recipe.directions }}</p>
                    </div>
                    <!-- //.px-lg-3 -->
                </div>
                <!-- //.col-lg-4 -->
            </div>
            <!-- //.row -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ currentRecipe.title }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <img class="img-thumbnail" v-bind:src="currentRecipe.image_url">
                        <ul>
                          <li v-for="ingredient in currentRecipe.formatted.ingredients">{{ ingredient }}</li>
                        </ul>
                        <ol>
                          <li v-for="direction in currentRecipe.formatted.directions">{{ direction }}</li>
                        </ol>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        <!-- //.container -->
    </section>
    <!-- //Section - Services End -->
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      recipes: [],
      currentRecipe: {
        formatted: {}
      }
    };
  },
  created: function() {
    axios
    .get("/api/recipes")
    .then(function(response) {
      this.recipes = response.data;
    }.bind(this));
  },
  methods: {
    setCurrentRecipe: function(inputRecipe) {
      this.currentRecipe = inputRecipe;
    }
  },
  computed: {}
};
</script>














