import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Calendar from '@/components/Calendar'
import Overview from '@/components/Overview'
import Groups from '@/components/Groups'
import Lists from '@/components/Lists'
import Profile from '@/components/Profile'
import Timeline from '@/components/Timeline'
import New from '@/components/New'
import Settings from '@/components/Settings'
import StartPage from '@/components/StartPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/groups',
      name: 'Groups',
      component: Groups
    },
    {
      path: '/lists/:type',
      name: 'Lists',
      component: Lists
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
