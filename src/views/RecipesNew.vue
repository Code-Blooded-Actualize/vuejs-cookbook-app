<template>
  <div class="recipes-new">

    <!-- Section - Contact Start -->
    <section id="contact" class="bg-gray-dark-2">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h3 class="font-alt font-w-600 letter-spacing-2 title-extra-large text-uppercase text-white">Add Recipe</h3>
                    <p class="mt-3 text-gray text-extra-large"><i>tell us about something delicious</i></p>
                    <span class="bg-base-color mt-4 mx-auto sep-line-medium-thick-long"></span>
                </div>
                <!-- //.col-lg-8 -->
            </div>
            <!-- //.row -->
            
            
            <div class="row justify-content-center mt-5 pt-lg-5">
                <div class="col-lg-8">
                    <ul>
                      <li class="text-danger text-gray" v-for="error in errors">{{ error }}</li>
                    </ul>
                    <form v-on:submit.prevent="submit()">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text"  v-model="title" class="font-alt form-control required" id="name" placeholder="Title">
                                </div>
                                <!-- //.form-group -->
                            </div>
                            <!-- //.col-lg-6 -->
                            
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" v-model="prepTime" class="font-alt form-control required email" id="email" placeholder="Prep Time">
                                </div>
                                <!-- //.form-group -->
                            </div>
                            <!-- //.col-lg-6 -->
                            
                            <div class="col-12">
                                <div class="form-group">
                                    <input type="text" v-model="ingredients" class="font-alt form-control required" id="subject" placeholder="Ingredients">
                                </div>
                                <span class="d-block font-alt letter-spacing-1 text-gray text-small text-uppercase">Input ingredients as a list seperated by comma and a space</span>
                                <!-- //.form-group -->
                            </div>
                            <!-- //.col-12 -->

                            <div class="col-12">
                                <div class="form-group">
                                    <input type="text" v-model="directions" class="font-alt form-control required" id="subject" placeholder="Directions">
                                </div>
                                <span class="d-block font-alt letter-spacing-1 text-gray text-small text-uppercase">Input directions as a list seperated by comma and a space</span>
                                <!-- //.form-group -->
                            </div>
                            <!-- //.col-12 -->

                            <div class="col-12">
                                <div class="form-group">
                                    <input type="text" v-model="imageURL" class="font-alt form-control required" id="subject" placeholder="Image URL">
                                </div>
                                <!-- //.form-group -->
                            </div>
                            <!-- //.col-12 -->
                            
                            
                            <div class="col-12">
                                <button type="submit" class="btn btn-base-color btn-block btn-large box-shadow-wide mt-5 mx-0 text-white" id="btn-form-contact">Submit</button>
                            </div>
                            <!-- //.col-12 -->
                        </div>
                        <!-- //.row -->
                    </form>
                </div>
                <!-- //.col-lg-8 -->
            </div>
            <!-- //.row -->
        </div>
        <!-- //.container -->
    </section>
    <!-- //Section - Contact End -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: "",
      ingredients: "",
      directions: "",
      prepTime: "",
      imageURL: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        ingredients: this.ingredients,
        directions: this.directions,
        prep_time: this.prepTime,
        image_url: this.imageURL
      };
      axios
        .post("/api/recipes", params)
        .then(response => {
          this.$router.push("/recipes/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
