<template>  <ul class="sidenav app-sidenav" :class="{open: isOpen}">
    <router-link
      tag="li"
      active-class="active"
      v-for="link of links"
      :key="link.url"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="/" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      links: [
        {title: 'Счет', url: '/', exact: true},
        {title: 'История', url: '/history'},
        {title: 'Планирование', url: '/planning'},
        {title: 'Новая запись', url: '/record'},
        {title: 'Категории', url: '/categories'},
      ]
    }
  },
  props:{
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
