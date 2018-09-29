// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Menu from './components/reusable/Menu'
import Toolbar from './components/reusable/Toolbar'
import router from './router'
import { store } from './store'
import vueCalendar from 'vue2-simple-calendar'
import './assets/vue-calendar.css'

Vue.component('Menu', Menu)
Vue.component('Toolbar', Toolbar)

Vue.config.productionTip = false

Vue.use(vueCalendar, {
  firstDay: 0,
  showLimit: 3,
  locale: 'en',
  fullDayNames: false,
  fullMonthNames: false,
  componentName: 'vue-calendar',
  languages: {},
  disableDays: [],
  highlightDays: []
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App, Menu, Toolbar
  },
  template: '<App/>'
})
