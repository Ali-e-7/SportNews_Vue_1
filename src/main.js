import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';



import { RoutNews } from './Routes';


Vue.use(VueRouter);


const router = new VueRouter({
  routes : RoutNews,
  mode : 'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
