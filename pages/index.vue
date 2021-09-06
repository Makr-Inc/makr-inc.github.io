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
        title: 'Get paid for your personalized expertise from anywhere, anytime.',
        subtitle: 'Help makers accomplish more specific problems with their projects, right from your device'
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
