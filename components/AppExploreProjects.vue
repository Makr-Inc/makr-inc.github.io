<template>
  <section class="section">
    <div class="columns">
      <div v-for="projectCard in exploreProjectCards" :key="projectCard.title" class="column">
        <app-project-card :project-card='projectCard'></app-project-card>
      </div>
    </div>
  </section>
</template>

<script>
import AppProjectCard from '~/components/AppProjectCard'

export default {
  components: {
    AppProjectCard
  },
  props: {
    exploreProjectCards: {
      type: Array,
      default: () => []
    }
  }
}
</script>
