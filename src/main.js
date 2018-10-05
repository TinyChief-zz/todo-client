// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Menu from './components/reusable/Menu'
import Toolbar from './components/reusable/Toolbar'
import Icon from './components/reusable/Icon'
import TaskBlock from './components/reusable/TaskBlock'
import router from './router'
import { store } from './store'
import vueCalendar from 'vue2-simple-calendar'
import './assets/vue-calendar.css'

Vue.component('Menu', Menu)
Vue.component('Toolbar', Toolbar)
Vue.component('Icon', Icon)
Vue.component('TaskBlock', TaskBlock)

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
    App, Menu, Toolbar, Icon, TaskBlock
  },
  template: '<App/>'
})
