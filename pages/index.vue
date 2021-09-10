<template>
  <div>
    <div class="columns">
      <div class="column">
        <app-hero
          :title="hero.title"
          :subtitle="hero.subtitle"
          @hero-switch-value="handleHeroSwitchValue"
        ></app-hero>
      </div>
    </div>
    <div class="columns is-centered is-gapless">
      <div class="column is-four-fifths">
        <p class="title is-size-5">Explore popular projects</p>
      </div>
    </div>
    <div class="columns is-centered mb-5">
      <div class="column is-four-fifths has-background-primary-light">
        <app-explore-projects :project-cards="[1,2,3,4]"></app-explore-projects>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-three-fifths">
        <h2 class="mb-3 is-size-3 has-text-weight-bold has-text-centered">Meet Makr</h2>
        <p class="px-6 mb-2 has-text-centered">Welcome to Makr, the platform that helps the makers, the doers, and the DIYers accomplish more with <span class="has-text-weight-bold">personalized expert assistance</span> directly from your device.</p>
        <p class="px-6 has-text-centered">We’re on a mission to accomplish more <span class="has-text-weight-bold">together</span>.</p>
        <figure class="image">
          <img :src="require('~/assets/meet-makr.png')" alt="Placeholder image">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import AppExploreProjects from '~/components/AppExploreProjects'
import AppHero from '~/components/AppHero'

export default {
  components: {
    AppExploreProjects,
    AppHero
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
    handleHeroSwitchValue(value) {
      console.log('emitted value:: ', value)
    }
  }
}
</script>
