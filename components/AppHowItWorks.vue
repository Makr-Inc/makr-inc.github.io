<template>
  <div class='how-it-works'>
    <div class='columns'>
      <div class='column'>
        <h3 class='is-size-4 has-text-weight-bold'>
          How it works
        </h3>
      </div>
    </div>
    <div class='columns'>
      <div v-for='item in howItWorks' :key='item.title' class='column is-flex is-flex-grow-1'>
        <div class='card'>
          <div class='card-content'>
            <b-icon
              :icon="item.icon"
              size="is-medium"
              type="is-black">
            </b-icon>
            <p class='has-text-weight-bold'>{{ item.title }}</p>
            <br>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMaker: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      howItWorksMaker: [{
        icon: 'lightning-bolt',
        title: '1. Get matched with a pro',
        description: 'We can help with any project. Find a pro that works for your schedule and budget.'
      }, {
        icon: 'comment-text',
        title: '2. Share your project details',
        description: 'Let your pro see your project’s specific challenges so they can effectively guide you to a solution.'
      }, {
        icon: 'tooltip-account',
        title: '3. Receive personalized guidance to achieve your project’s goals',
        description: 'Get the feedback and confidence you need on your project all from interactive video or real-time chat with your pro.'
      }],
      howItWorksPro: [{
        icon: 'wrench',
        title: '1. Tell us your skill set',
        description: 'Sign up to share your expertise with our makers and their projects. Set your own rate and availability.'
      }, {
        icon: 'cellphone-wireless',
        title: '2. Share your expertise',
        description: 'Based on your skills, makers will book video sessions on your schedule to get your expert guidance.'
      }, {
        icon: 'currency-usd',
        title: '3. Earn cash from anywhere',
        description: 'Get paid for helping makers accomplish more with their projects!'
      }]
    }
  },
  computed: {
    howItWorks() {
      return this.isMaker ? this.howItWorksMaker : this.howItWorksPro
    }
  }
}
</script>

<style lang='scss' scoped>
.how-it-works {
  margin: 0 7.5rem;
}
.icon {
  margin-bottom: 0.5rem;
}
</style>
