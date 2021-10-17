<template>
  <section class="hero is-medium is-primary-light">
    <div class="hero-body pb-6">
      <div class="columns">
        <div class="column is-two-thirds">
            <app-maker-pro-switch @switch-value="handleSwitchValue"></app-maker-pro-switch>
            <p class="title is-spaced">
              {{ title }}
            </p>
            <p class="subtitle">
              {{ subtitle }}
            </p>
            <form>
              <b-field :label="selectLabel" grouped>
                <b-select :placeholder="selectPlaceholder">
                  <option
                    v-for="option in selectOptions"
                    :key="option"
                    :value="option">
                    {{ option }}
                  </option>
                </b-select>
                <b-button type="is-primary">{{ buttonText }}</b-button>
              </b-field>
            </form>
          </div>
        <div class="column is-one-third is-flex level">
          <img class="level-item" :src="require('~/assets/hero-image.png')" alt="hero-image"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppMakerProSwitch from '~/components/AppMakerProSwitch'

export default {
  components: {
    AppMakerProSwitch
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    },
    selectLabel: {
      type: String,
      default: 'Select Label'
    },
    selectPlaceholder: {
      type: String,
      default: 'Select Placeholder'
    },
    buttonText: {
      type: String,
      default: 'Button Text'
    },
    selectOptions: {
      type: Array,
      default: () => ['Woodworking', 'Home recording', 'Social media marketing']
    }
  },
  methods: {
    handleSwitchValue(value) {
      this.$emit('hero-switch-value', value)
    }
  }
}
</script>

<style lang='scss'>
@import "../assets/scss/variables";
.hero-body {
  margin: 0 5rem;
}
</style>
