// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapJS from 'bootstrap/dist/js/bootstrap.min.js'
import FontAwesome from '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Bootstrap,
  BootstrapJS,
  FontAwesome,
  components: { App },
  template: '<App/>'
})
