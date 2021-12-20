<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-square">
        <img :src="projectCardImage" :alt="projectCard.title">
      </figure>
    </div>
    <div class="card-content">
      <p class="is-size-6">{{ projectCard.title }}</p>
      <p class="is-size-7 has-text-info">
        <b-icon icon="account" size="is-small"></b-icon>
        {{ projectCard.prosAvailable }} pros available
      </p>
      <p class="is-size-7 has-text-info">
        <b-icon icon="tag" size="is-small"></b-icon>
        {{ projectCard.priceRange }} / avg session
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectCard: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    projectCardImage() {
      return require(`~/assets/explore-project-images/${this.projectCard.image}.png`)
    }
  }
}
</script>
