<template>
  <div>
    <app-hero :title="hero.title" :subtitle="hero.subtitle"></app-hero>
  </div>
</template>

<script>
import AppHero from '~/components/AppHero'
export default {
  components: {
    AppHero
  },
  data() {
    return {
      hero: {
        title: 'Get paid for your personalized expertise from anywhere, anytime.',
        subtitle: 'Help makers accomplish more specific problems with their projects, right from your device'
      }
    }
  }
}
</script>
