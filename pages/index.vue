<template>
  <div>
    <div class='columns'>
      <div class='column'>
        <app-hero
          :title='hero.title'
          :subtitle='hero.subtitle'
          @hero-switch-value='handleHeroSwitchValue'
        ></app-hero>
      </div>
    </div>
    <div class='columns is-centered is-gapless'>
      <div class='column is-four-fifths'>
        <p class='title is-size-5'>Explore popular projects</p>
      </div>
    </div>
    <div class='columns is-centered mb-5'>
      <div class='column is-four-fifths has-background-primary-light'>
        <app-explore-projects :explore-project-cards='exploreProjectCards'></app-explore-projects>
      </div>
    </div>
    <div class='columns is-centered'>
      <div class='column is-three-fifths'>
        <h3 class='mb-3 is-size-3 has-text-weight-bold has-text-centered'>Meet Makr</h3>
        <p class='px-6 mb-2 has-text-centered'>Welcome to Makr, the platform that helps the makers, the doers, and the
          DIYers accomplish more with <span class='has-text-weight-bold'>personalized expert assistance</span> directly
          from your device.</p>
        <p class='px-6 has-text-centered'>We’re on a mission to accomplish more <span class='has-text-weight-bold'>together</span>.
        </p>
        <figure class='image m-auto' style='width: 500px'>
          <img :src="require('~/assets/meet-makr.png')" alt='Placeholder image'>
        </figure>
      </div>
    </div>
    <div class='columns'>
      <div class='column'>
        <h3 class='is-size-4 has-text-weight-bold has-text-centered'>
          Every project has its unique challenges.<br>
          We’re here to help.
        </h3>
      </div>
    </div>
    <div class="carousel-container">
      <app-testimonial-carousel></app-testimonial-carousel>
    </div>
    <!--    get feedback fast block -->
    <div class="columns is-vcentered">
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
    <!--    how it works block-->
    <app-how-it-works class='mb-6'></app-how-it-works>
    <!--    become a makr pro-->
    <div class='become-a-pro columns'>
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
        <img class="level-item" :src="require('~/assets/become-a-makr.png')" alt="hero-image"/>
      </div>
    </div>
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
      hero: {
        title: 'Personalized expert assistance to help makers accomplish more',
        subtitle: 'Affordable experts available at anytime to help you get your jobs done with confidence, all from your device'
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
      }]
    }
  },
  methods: {
    handleHeroSwitchValue(value) {
      console.log('emitted value:: ', value)
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
