<template>
  <section class="hero is-medium is-primary-light">
    <div class="columns">
      <div class="column is-two-thirds">
        <div class="hero-body">
          <p class="title">
            {{ title }}
          </p>
          <p class="subtitle">
            {{ subtitle }}
          </p>
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
.hero {
  background-color: $app-primary-background-color;
}
</style>
