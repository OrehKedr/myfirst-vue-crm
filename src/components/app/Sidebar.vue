<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">

    <!-- exact-атрибут для того, чтобы не путать активные ссылки.
         Например: значения url="/" для стр. Счёт и url="/history" для стр. История
         обе содержат символ "/", поэтому обе подсвечиваются при переходе на стр. История.
         Чтобы избежать такого поведения, нужен exact-атрибут 
         для проверки на полное совпадение значений url.
    -->
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      {title: 'Счет', url: '/', exact: true},
      {title: 'История', url: '/history'},
      {title: 'Планирование', url: '/planning'},
      {title: 'Новая запись', url: '/record'},
      {title: 'Категории', url: '/categories'}
    ]
  })
}
</script>
