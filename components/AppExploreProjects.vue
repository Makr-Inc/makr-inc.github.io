<template>
  <div class="columns p-6">
    <div v-for="projectCard in exploreProjectCards" :key="projectCard.title" class="column mx-2">
      <app-project-card :project-card='projectCard'></app-project-card>
    </div>
  </div>
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
