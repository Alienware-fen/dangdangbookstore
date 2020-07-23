import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import router from './assets/js/router/index'
import './assets/js/iconfont'

//aioxs
import axios from 'axios'
Vue.prototype.$http = axios

//mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import { Toast } from 'mint-ui';
Vue.use(Toast)

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// lazyload
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

// vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// element-ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)

var store = new Vuex.Store({
  state:{
    msg:"商品"
  }
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
