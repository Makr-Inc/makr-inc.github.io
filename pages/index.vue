<template>
  <div>
    <app-maker-pro-switch @switch-value="handleSwitchValue"></app-maker-pro-switch>
    <app-hero :title="hero.title" :subtitle="hero.subtitle"></app-hero>
  </div>
</template>

<script>
import AppHero from '~/components/AppHero'
import AppMakerProSwitch from '~/components/AppMakerProSwitch'

export default {
  components: {
    AppHero,
    AppMakerProSwitch
  },
  data() {
    return {
      hero: {
        title: 'Personalized expert assistance to help makers accomplish more',
        subtitle: 'Affordable experts available at anytime to help you get your jobs done with confidence, all from your device'
      }
    }
  },
  methods: {
    handleSwitchValue(value) {
      console.log('emitted value:: ', value)
    }
  }
}
</script>
