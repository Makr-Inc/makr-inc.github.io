<template>
  <div class='card has-background-info has-text-white'>
    <div class="card-content">
      <p class='title is-size-5 has-text-white'>{{ testimony.title }}</p>
      <blockquote class="is-size-6 has-text-weight-medium">
        “{{ testimony.quote }}”
      </blockquote>
      <br>
      <p class="is-italic">
        - {{ testimony.author }} | {{ testimony.location }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimony: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
.card {
  min-height: 100%;
}
.card-content {
  padding: 1.5rem 3.5rem;
}
</style>
