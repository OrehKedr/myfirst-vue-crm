import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Подключаем скрипты для различных плагинов, анимаций, и т.д.
// В этом импорте не используем псевдоним '~', 
// такой импорт на стороне сервера по умолчанию ищет файлы в папке node_modules.
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
