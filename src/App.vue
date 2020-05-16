<template>
  <div id="app">
    <!-- Generic компонент <component></component> позволяет динамически
         (в зависимости от значения :is) подставлять нужный vue-компонент.
    -->
    <component :is="layout">
      <router-view/>
    </component>    
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
  computed: {
    layout() {
      // статическое значение '-layout' необходимо для работы vue
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style lang="scss">
// Псевдоним '~' прописывает путь к папке node_modules 
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
