import Vue from 'nativescript-vue'
import App from './App'
import store from './store';
import apolloProvider from './plugins/apolloProvider';

import VueDevtools from 'nativescript-vue-devtools'

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel)
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem)

new Vue({
  store,
  apolloProvider,
  render: h => h('frame', [h(App)])
}).$start()
