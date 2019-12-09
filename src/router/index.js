import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Events from '@/components/Events'
import Favorites from '@/components/Favorites'
import Navbar from '@/components/Navbar'
import EventCard from '@/components/EventCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Events',
      name: 'Events',
      component: Events
    },
    {
      path: '/Favorites',
      name: 'Favorites',
      component: Favorites
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/EventCard',
      name: 'EventCard',
      component: EventCard
    },
  ]
})
