<template>
  <b-navbar spaced>
    <template #brand>
      <b-navbar-item>
        <figure class='image'>
          <img :src="require('~/assets/makr-logo-black.png')" alt='Maker logo'>
        </figure>
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
</template>

<style lang='scss' scoped>
.navbar-item img {
  max-height: 3rem;
}
</style>
