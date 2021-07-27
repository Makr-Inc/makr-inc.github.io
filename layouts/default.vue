<template>
  <div>
    <b-navbar spaced shadow>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <div class="title is-4">Makr</div>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
            <a class="button is-primary">
              Join as a pro
            </a>
        </b-navbar-item>
        <b-navbar-item>
          <a class="is-link">
            Sign up
          </a>
        </b-navbar-item>
        <b-navbar-item>
          <a class="is-link">
            Login
          </a>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="container column is-10">
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
