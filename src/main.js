/**
 * main.js contient le script de départ de notre App
 */
import Vue from 'vue'
import App from './App.vue'



Vue.config.productionTip = false

/**
 * Interdiction de monter une autre App que celle définie
 * ci-dessous
 *
 * Ce code ne changera pas. On va toucher directement à App.vue
 */
new Vue({
  render: h => h(App),
}).$mount('#app')

/* La syntaxe ci-dessus correspond à l'ancienne syntaxe que nous
utilisions hier :

const app = new Vue({
  el: '#app',
})

*/
