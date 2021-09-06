<template>
  <section>
    <b-field class="is-inline-block p-2 has-background-primary">
      <b-radio-button v-model="switchValue"
                      native-value="maker"
                      type="is-primary">
        Makers
      </b-radio-button>

      <b-radio-button v-model="switchValue"
                      native-value="pro"
                      type="is-primary">
        Pros
      </b-radio-button>
    </b-field>
  </section>
</template>

<script>
export default {
  data() {
    return {
      switchValue: ''
    }
  },
  watch: {
    switchValue(newValue) {
      this.$emit('switch-value', newValue)
    }
  }
}
</script>
