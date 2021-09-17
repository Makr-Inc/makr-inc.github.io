<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-square">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <p class="is-size-6">Interior Design</p>
      <p class="is-size-7 has-text-primary">
        <b-icon icon="account" size="is-small"></b-icon>
        8 pros available
      </p>
      <p class="is-size-7 has-text-primary">
        <b-icon icon="tag" size="is-small"></b-icon>
        $15 - 30 / avg session\
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
