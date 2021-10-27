<template>
  <section class="hero is-medium is-primary-light">
    <div class="hero-body px-0 py-6">
      <div class="columns">
        <div class="column is-two-thirds">
            <app-maker-pro-switch @switch-value="handleSwitchValue"></app-maker-pro-switch>
            <p class="title is-spaced is-size-4-mobile">
              {{ title }}
            </p>
            <p class="subtitle is-hidden-mobile">
              {{ subtitle }}
            </p>
            <div class='select-and-button-container'>
              <b-field :label="selectLabel">
                <b-select :placeholder="selectPlaceholder" expanded>
                  <option
                    v-for="option in selectOptions"
                    :key="option"
                    :value="option">
                    {{ option }}
                  </option>
                </b-select>
              </b-field>
              <b-button class='mb-3' type="is-primary">{{ buttonText }}</b-button>
            </div>
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

<style lang='scss' scoped>
@import "~bulma/sass/utilities/_all.sass";

.select-and-button-container {
  display: flex;
  align-items: flex-end;
}
.field {
  .control {
    margin-right: 1rem;
  }
}

@include mobile {
  .select-and-button-container {
    flex-direction: column;
    align-items: stretch;
  }
  .field {
    .control {
      margin-right: 0;
    }
  }
}
</style>
