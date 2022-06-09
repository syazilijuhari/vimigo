<template>
  <NavbarVue title="Dashboard"/>
  <router-view></router-view>
</template>

<script>
import NavbarVue from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavbarVue
  }
}
</script>

<style>

</style>
