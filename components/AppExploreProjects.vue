<template>
  <section class="section">
    <div class="columns">
      <div class="column" v-for="projectCard in projectCards" :key="projectCard">
        <app-project-card></app-project-card>
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
    projectCards: {
      type: Array,
      default: () => []
    }
  }
}
</script>
