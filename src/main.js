// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Cell, Field, Header, Tabbar, TabItem, CellSwipe } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/reset.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Field.name, Field)
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(CellSwipe.name, CellSwipe);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



