<template>
    <b-field class="is-inline-block mb-4">
      <b-radio-button id="maker-switch"
                      v-model="switchValue"
                      native-value="maker"
                      type="is-info">
        Makers
      </b-radio-button>

      <b-radio-button id="pro-switch"
                      v-model="switchValue"
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
