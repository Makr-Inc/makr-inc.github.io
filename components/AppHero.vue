<template>
  <section class="hero is-medium is-primary-light">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-two-thirds">
            <p class="title">
              {{ title }}
            </p>
            <p class="subtitle">
              {{ subtitle }}
            </p>
          </div>
        <div class="column is-one-third">
          <img :src="require('~/assets/hero-image.png')" alt="fuck you buefy"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    }
  }
}
</script>

<style lang='scss'>
@import "../assets/scss/variables";
//.hero {
//  background-color: $app-primary-background-color;
//}
</style>
