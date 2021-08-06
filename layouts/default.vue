<template>
  <div>
    <b-navbar spaced>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <div class="title is-4">Makr</div>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="button" class="button is-primary">
          Join as a pro
        </b-navbar-item>

        <b-navbar-item tag="a">
          Sign up
        </b-navbar-item>

        <b-navbar-item tag="a">
          Login
        </b-navbar-item>
      </template>
    </b-navbar>

    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
@import '../assets/scss/main';

.navbar {
  border-bottom: 1px solid #333;
}
</style>
