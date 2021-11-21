<template>
  <b-navbar :class='[ isMaker ? "has-background-orange" : "has-background-warning" ]' spaced>
    <template #brand>
      <b-navbar-item>
        <figure class='image'>
          <img :src="require('~/assets/makr-logo-black.png')" alt='Maker logo'>
        </figure>
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item class="button is-primary" href='http://eepurl.com/hNXWtT'>
        Join the mailing list
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  props: {
    isMaker: {
      type: Boolean,
      default: true,
    }
  }
}
</script>

<style lang='scss' scoped>
@import "assets/scss/main";

.navbar-item img {
  max-height: 3rem;
}
.has-background-orange {
  background-color: lighten($orange, 10%);
}
</style>
