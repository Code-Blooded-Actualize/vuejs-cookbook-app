import Vue from 'vue';
import Router from 'vue-router';
import RecipesIndex from './views/RecipesIndex.vue';
import RecipesShow from './views/RecipesShow.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'root', component: RecipesIndex },
    { path: '/recipes', name: 'recipes-index', component: RecipesIndex },
    { path: '/recipes/:id', name: 'recipes-show', component: RecipesShow }
  ]
});
