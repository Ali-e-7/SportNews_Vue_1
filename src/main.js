import Vue from 'vue'
import App from './App.vue'
import Navbar from './component/Navbar.vue'
import Ticket from './component/Ticket.vue'
import LiveGame from './component/LiveGame'
import BestGame from './component/BestGame'
import DateGame from './component/DateGame'
import SpecialGame from './component/SpecialGame.vue'
import NewsGame from './component/NewsGame.vue'
import CommentsUser from './component/CommentsUser.vue'
import SponserWeb from './component/SponserWeb.vue'
import SubscribeWeb from './component/SubscribeWeb.vue'
import AboutWeb from './component/AboutWeb.vue'


Vue.component('navbar-head',Navbar);
Vue.component('ticket-about',Ticket);
Vue.component('live-game',LiveGame);
Vue.component('best-game', BestGame);
Vue.component('data-game', DateGame);
Vue.component('special-game',SpecialGame);
Vue.component('news-game',NewsGame);
Vue.component('comments-user',CommentsUser);
Vue.component('sponser-web',SponserWeb);
Vue.component('subscribe-web',SubscribeWeb);
Vue.component('about-web',AboutWeb);




new Vue({
  el: '#app',
  render: h => h(App)
})
