import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MoviesNew from './views/Movies/New.vue'
import MoviesIndex from './views/Movies/Index.vue'
import MoviesShow from './views/Movies/Show.vue'
import MoviesEdit from './views/Movies/Edit.vue'
import ActorsIndex from './views/Actors/Index.vue'
import ActorsShow from './views/Actors/Show.vue'
import ActorsEdit from './views/Actors/Edit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movies/new',
      name: 'movies-new',
      component: MoviesNew
    },
    {
      path: '/movies',
      name: 'movies-index',
      component: MoviesIndex
    },
    {
      path: '/movies/:id',
      name: 'movies-show',
      component: MoviesShow
    },
    {
      path: '/movies/:id/edit',
      name: 'movies-edit',
      component: MoviesEdit
    },
    {
      path: '/actors',
      name: 'actors-index',
      component: ActorsIndex
    },
    {
      path: '/actors/:id',
      name: 'actors-show',
      component: ActorsShow
    },
    {
      path: '/actors/:id/edit',
      name: 'actors-edit',
      component: ActorsEdit
    }
  ]
})
