<template>
  <div>
    <app-navbar :is-maker='isMaker'></app-navbar>
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
    return {
      isMaker: true
    }
  },
  created () {
    this.$nuxt.$on('is-maker', isMaker => {
      this.isMaker = isMaker
    })
  }
}
</script>
