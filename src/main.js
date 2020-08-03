import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import Navbar from './shared/header/Navbar.vue';
import AboutWeb from './shared/Footer/AboutWeb.vue';
import { RoutNews } from './Routes';


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.component("navbarHead",Navbar)
Vue.component("aboutWeb",AboutWeb)


const router = new VueRouter({
  routes : RoutNews,
  mode : 'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
