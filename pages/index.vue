<template>
  <div>
    <div class='columns'>
      <div class='column'>
        <app-hero
          :title='isMaker ? heroMaker.title : heroPro.title'
          :subtitle='isMaker ? heroMaker.subtitle : heroPro.subtitle'
          :select-label='isMaker ? heroMaker.selectLabel : heroPro.selectLabel'
          :select-placeholder='isMaker ? heroMaker.selectPlaceholder : heroPro.selectPlaceholder'
          :button-text='isMaker ? heroMaker.buttonText : heroPro.buttonText'
          @hero-switch-value='handleHeroSwitchValue'
        ></app-hero>
      </div>
    </div>
    <div v-if='isMaker' class='columns is-centered is-gapless'>
      <div class='column is-four-fifths'>
        <p class='title is-size-5'>Explore popular projects</p>
      </div>
    </div>
    <div v-if='isMaker' class='columns is-centered mb-5'>
      <div class='column is-four-fifths has-background-primary-light'>
        <app-explore-projects :explore-project-cards='exploreProjectCards'></app-explore-projects>
      </div>
    </div>
    <div class='columns is-centered mb-6'>
      <div class='column is-three-fifths'>
        <h3 class='mb-3 is-size-3 has-text-weight-bold has-text-centered'>Meet Makr</h3>
        <p class='px-6 mb-2 has-text-centered'>Welcome to Makr, the platform that helps the makers, the doers, and the
          DIYers accomplish more with <span class='has-text-weight-bold'>personalized expert assistance</span> directly
          from your device.</p>
        <p class='px-6 has-text-centered'>We’re on a mission to accomplish more <span class='has-text-weight-bold'>together</span>.
        </p>
        <figure v-if='isMaker' class='image m-auto' style='width: 500px'>
          <img :src="require('~/assets/meet-makr.png')" alt='Placeholder image'>
        </figure>
      </div>
    </div>
    <div v-if='isMaker' class='columns'>
      <div class='column'>
        <h3 class='is-size-4 has-text-weight-bold has-text-centered'>
          Every project has its unique challenges.<br>
          We’re here to help.
        </h3>
      </div>
    </div>
    <div v-if='isMaker' class="carousel-container">
      <app-testimonial-carousel></app-testimonial-carousel>
    </div>
    <!--    get feedback fast block -->
    <div v-if='isMaker' class="columns is-vcentered">
      <div class="column"></div>
      <div class="column is-one-third">
        <img class="image" :src="require('~/assets/get-feedback.png')" alt="get-feedback-image"/>
      </div>
      <div class="column is-one-third">
        <p class="mb-4 is-size-3 has-text-weight-bold">
          Get the feedback and confidence you need fast
        </p>
        <p class="mb-6">
          Whether you need quick answers, project-specific feedback, or step-by-step guidance, our pros are available at anytime to get you where you’re going
        </p>
        <b-button type="is-primary">Start Getting Feedback</b-button>
      </div>
      <div class="column"></div>
    </div>

    <!--    how it works maker block-->
    <app-how-it-works v-if='isMaker' :is-maker='isMaker' class='mb-6'></app-how-it-works>

<!--    become a makr pro-->
    <div v-if='isMaker' class='become-a-pro columns mb-6'>
      <div class='column is-two-thirds'>
        <p class="title is-spaced">
          Become a Makr pro
        </p>
        <p class="subtitle">
          Help Makrs accomplish more with their projects, right from your device. Earn on your own time, from anywhere.
        </p>
        <b-button type="is-primary">Learn More</b-button>
      </div>
      <div class="column is-one-third is-flex level">
        <img class="level-item" :src="require('~/assets/become-a-makr.png')" alt="become a pro"/>
      </div>
    </div>

<!--    set your own hours pro block-->
    <div v-if='!isMaker' class='columns is-vcentered mb-6'>
      <div class='column is-4 is-offset-2'>
        <img class="level-item" :src="require('~/assets/become-a-makr.png')" alt="become a pro"/>
      </div>
      <div class='column is-4'>
        <p class="title is-spaced">
          Set your own hours.
          <br>
          Earn on your own terms.
        </p>
        <div class='mb-4'>
          <p class='has-text-weight-bold'>Earn anytime</p>
          <p>You can work when you want and earn money instantly</p>
        </div>
        <div class='mb-4'>
          <p class='has-text-weight-bold'>Set your own schedule</p>
          <p>Only work when it’s convenient for you. You own your schedule</p>
        </div>
        <div class='mb-4'>
          <p class='has-text-weight-bold'>Help makers from anywhere</p>
          <p>Share your expertise with makers from anywhere in the world. All you need is a connection to earn</p>
        </div>
      </div>
    </div>

<!--    full liability coverage block-->
    <div v-if='!isMaker' class='columns is-centered mb-6'>
      <div class='column is-8'>
        <div class='notification is-warning is-light has-text-centered px-6 has-text-black'>
          <p class='has-text-weight-bold is-size-5'>
            Full liability coverage
          </p>
          <p>We’ve got you covered so you can help makers with ease. We ensure that you’re never liable for projects you’re supporting through Makr.</p>
        </div>
      </div>
    </div>

<!--    pro how it works block-->
    <app-how-it-works v-if='!isMaker' :is-maker='isMaker' class='mb-6'></app-how-it-works>

<!--    opportunity is waiting for you-->
    <div class='columns is-centered'>
      <div class='column has-text-centered p-5 mb-6 has-background-primary-light'>
        <p class='title is-size-5 mb-3'>Opportunity is waiting for you</p>
        <p class='mb-3'>Join today to support projects and earn on your own terms</p>
        <b-button type='is-primary'>Become a Makr Pro</b-button>
      </div>
    </div>

<!--    common questions block-->
    <div class='columns is-centered'>
      <div class='column is-two-thirds'>
        <p class='title has-text-centered is-size-4'>Common Questions</p>
        <div v-for='commonQuestion in commonQuestions' :key='commonQuestion.question' class='mb-4'>
          <p class='has-text-weight-bold'>{{ commonQuestion.question }}</p>
          <p>{{ commonQuestion.answer }}</p>
        </div>
        <p class='mb-6'>Still have questions?  <a href="mailto:mikeulvila@me.com">Send us a message</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import AppExploreProjects from '~/components/AppExploreProjects'
import AppHero from '~/components/AppHero'
import AppTestimonialCarousel from '~/components/AppTestimonialCarousel'
import AppHowItWorks from '~/components/AppHowItWorks'

export default {
  components: {
    AppHowItWorks,
    AppExploreProjects,
    AppHero,
    AppTestimonialCarousel
  },
  data() {
    return {
      commonQuestions: [{
        question: 'Am I liable for consulting on maker projects?',
        answer: 'No, all pros under the Makr network are covered under our liability waiver',
      }, {
        question: 'How will I know when I get booked with a maker?',
        answer: 'We’ll send you a message with your maker’s project details and timing for the booked session',
      }, {
        question: 'How long is each personalized session?',
        answer: 'Each session is 30 minutes long. Makers can request additional time pending your approval.',
      }],
      heroMaker: {
        title: 'Personalized expert assistance to help makers accomplish more',
        subtitle: 'Affordable experts available at anytime to help you get your jobs done with confidence, all from your device',
        selectLabel: 'I need help with...',
        selectPlaceholder: 'ex. Home renovations',
        buttonText: 'Get Started'
      },
      heroPro: {
        title: 'Get paid for your personalized expertise from anywhere, anytime.',
        subtitle: 'Help makers accomplish more specific problems with their projects, right from your device',
        selectLabel: 'I can help makers with...',
        selectPlaceholder: 'Select your area of expertise',
        buttonText: 'Start Earning'
      },
      exploreProjectCards: [{
        title: 'Interior Design',
        image: 'interior-design',
        prosAvailable: 10,
        priceRange: '$55 - 70'
      }, {
        title: 'Home Renovation',
        image: 'home-renovation',
        prosAvailable: 8,
        priceRange: '$15 - 30'
      }, {
        title: 'Van Builds',
        image: 'van-builds',
        prosAvailable: 15,
        priceRange: '$15 - 30'
      }, {
        title: 'Wood Working',
        image: 'wood-working',
        prosAvailable: 5,
        priceRange: '$15 - 40'
      }],
      isMaker: true
    }
  },
  methods: {
    handleHeroSwitchValue(value) {
      this.isMaker = value === 'maker'
    }
  }
}
</script>

<style lang='scss'>
.carousel-container {
  margin: 0 6rem 2rem;
}
.become-a-pro {
  margin: 0 10rem;
}
</style>
