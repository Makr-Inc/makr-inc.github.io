<template>
    <b-field class="is-inline-block p-2">
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
</template>

<script>
export default {
  data() {
    return {
      switchValue: 'maker'
    }
  },
  watch: {
    switchValue(newValue) {
      this.$emit('switch-value', newValue)
    }
  }
}
</script>
