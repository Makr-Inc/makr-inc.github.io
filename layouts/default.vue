<template>
  <div>
    <app-navbar></app-navbar>
    <Nuxt />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter'
import AppNavbar from '~/components/AppNavbar'

export default {
  components: { AppFooter, AppNavbar },
  data() {
    return {}
  }
}
</script>
