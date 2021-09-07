<template>
  <section class="hero is-medium is-primary-light">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-two-thirds">
            <p class="title">
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
                <b-button type="is-primary">Get Started</b-button>
              </b-field>
            </form>
          </div>
        <div class="column is-one-third">
          <img :src="require('~/assets/hero-image.png')" alt="fuck you buefy"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
      default: 'I need help with...'
    },
    selectPlaceholder: {
      type: String,
      default: 'ex. Home renovations'
    },
    selectOptions: {
      type: Array,
      default: () => ['Woodworking', 'Home recording', 'Social media marketing']
    }
  }
}
</script>

<style lang='scss'>
@import "../assets/scss/variables";
//.hero {
//  background-color: $app-primary-background-color;
//}
</style>
