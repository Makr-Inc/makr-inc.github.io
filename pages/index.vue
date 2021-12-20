<template>
  <div>
    <!--    hero block-->
    <div
      class='columns is-centered mb-6'
      :class='[ isMaker ? "has-background-primary" : "has-background-info" ]'
    >
      <div class='column is-9'>
        <app-hero
          :title='isMaker ? heroMaker.title : heroPro.title'
          :subtitle='isMaker ? heroMaker.subtitle : heroPro.subtitle'
          :select-label='isMaker ? heroMaker.selectLabel : heroPro.selectLabel'
          :select-placeholder='isMaker ? heroMaker.selectPlaceholder : heroPro.selectPlaceholder'
          :button-text='isMaker ? heroMaker.buttonText : heroPro.buttonText'
          :button-color='isMaker ? heroMaker.buttonColor : heroPro.buttonColor'
          :coda-form-url='isMaker ? heroMaker.codaFormUrl : heroPro.codaFormUrl'
          @hero-switch-value='handleHeroSwitchValue'
        ></app-hero>
      </div>
    </div>

    <!--    explore projects block-->
    <div v-if='isMaker' class='columns is-centered'>
      <div class='column is-9'>
        <p class='title is-size-5'>Explore popular projects</p>
      </div>
    </div>
    <div v-if='isMaker' class='columns is-centered mb-5'>
      <div class='column is-9 has-background-info-light'>
        <app-explore-projects :explore-project-cards='exploreProjectCards'></app-explore-projects>
      </div>
    </div>

    <!--    meet makr block-->
    <div class='columns is-centered mb-6'>
      <div class='column is-6'>
        <h3 class='mb-3 is-size-3 has-text-weight-bold has-text-centered'>Meet Makr</h3>
        <p class='px-6 mb-2 has-text-centered'>Welcome to Makr, the platform that helps the makers, the doers, and the
          DIYers accomplish more with <span class='has-text-weight-bold'>personalized expert assistance</span> directly
          from your device.</p>
        <p class='px-6 has-text-centered'>We’re on a mission to accomplish more <span class='has-text-weight-bold'>together</span>.
        </p>
        <figure v-if='isMaker' class='image m-auto'>
          <img :src="require('~/assets/meet-makr.png')" alt='Placeholder image'>
        </figure>
      </div>
    </div>

    <!--    testimonial carousel block -->
    <div v-if='isMaker' class='columns is-centered has-background-info'>
      <div class='column is-9'>
        <p class='title is-size-4 has-text-centered has-text-white'>
          Every project has its unique challenges.<br>
          We’re here to help.
        </p>
      </div>
    </div>
    <div v-if='isMaker' class='columns is-centered has-background-info mb-6'>
      <div class='column is-9'>
        <app-testimonial-carousel class='is-hidden-mobile'></app-testimonial-carousel>
        <app-testimonial-card v-for='testimony in testimonies' :key='testimony.title' class='is-hidden-tablet'
                              :testimony='testimony'></app-testimonial-card>
      </div>
    </div>

    <!--    get feedback fast block -->
    <div v-if='isMaker' class='columns is-vcentered'>
      <div class='column is-one-third is-offset-2 has-text-centered'>
        <p class='title is-size-4 mb-4'>
          Get the feedback and confidence you need fast
        </p>
        <p class='mb-6'>
          Whether you need quick answers, project-specific feedback, or step-by-step guidance, our pros are available at
          anytime to get you where you’re going
        </p>
        <b-button tag='a' :href="heroMaker.codaFormUrl" target="_blank" type='is-info'>Start Getting Feedback</b-button>
      </div>
      <div class='column is-one-third'>
        <img class='image' :src="require('~/assets/get-feedback.png')" alt='get-feedback-image' />
      </div>
    </div>

    <!--    how it works maker block-->
    <div v-if='isMaker' class='columns is-centered has-background-primary mb-6'>
      <div class='column is-9'>
        <app-how-it-works :is-maker='isMaker' class='mb-6'></app-how-it-works>
      </div>
    </div>

    <!--    become a makr pro-->
    <div v-if='isMaker' class='columns is-centered'>
      <div class='column is-9'>
        <div class='columns is-centered mb-6'>
          <div class='column is-two-thirds'>
            <p class='title is-size-4-mobile is-spaced'>
              Become a Makr pro
            </p>
            <p class='subtitle is-size-5-mobile pr-6'>
              Help Makrs accomplish more with their projects, right from your device. Earn on your own time, from
              anywhere.
            </p>
            <b-button type='is-info' @click='goToPro'>Learn More</b-button>
          </div>
          <div class='column is-one-third is-flex level'>
            <img class='level-item' :src="require('~/assets/become-a-makr.png')" alt='become a pro' />
          </div>
        </div>
      </div>
    </div>

    <!--    set your own hours pro block-->
    <div v-if='!isMaker' class='columns is-vcentered mb-6'>
      <div class='column is-4 is-offset-2 is-hidden-mobile'>
        <img class='level-item' :src="require('~/assets/become-a-makr.png')" alt='become a pro' />
      </div>
      <div class='column is-4'>
        <p class='title is-size-4 is-spaced'>
          Set your own hours.
          <br>
          Earn on your own terms.
        </p>
        <div class='mb-4'>
          <p class='is-flex is-align-items-center has-text-weight-bold'>
            <b-icon
              class='mr-2'
              icon="cash"
              size="is-medium"
              type="is-black">
          </b-icon>
            Earn anytime
          </p>
          <p>You can work when you want and earn money instantly</p>
        </div>
        <div class='mb-4'>
          <p class='is-flex is-align-items-center has-text-weight-bold'>
            <b-icon
              class='mr-2'
              icon="clock-outline"
              size="is-medium"
              type="is-black">
            </b-icon>
            Set your own schedule
          </p>
          <p>Only work when it’s convenient for you. You own your schedule</p>
        </div>
        <div class='mb-4'>
          <p class='is-flex is-align-items-center has-text-weight-bold'>
            <b-icon
              class='mr-2'
              icon="earth"
              size="is-medium"
              type="is-black">
            </b-icon>
            Help makers from anywhere
          </p>
          <p>Share your expertise with makers from anywhere in the world. All you need is a connection to earn</p>
        </div>
      </div>
    </div>

    <!--    full liability coverage block-->
    <div v-if='!isMaker' class='columns is-centered mb-6'>
      <div class='column is-8'>
        <div class='notification is-info is-light has-text-black'>
          <div class='is-flex is-justify-content-center is-align-items-center'>
            <b-icon
              class='mr-3'
              icon="format-list-bulleted"
              size="is-large"
              type="is-black"
            />
            <p class='has-text-weight-bold is-size-5'>
              Full liability coverage
            </p>
          </div>
          <p class='has-text-centered'>
            We’ve got you covered so you can help makers with ease. We ensure that you’re never liable for projects
            you’re supporting through Makr.
          </p>
        </div>
      </div>
    </div>

    <!--    pro how it works block-->
    <div v-if='!isMaker' class='columns is-centered has-background-primary mb-6'>
      <div class='column is-9'>
        <app-how-it-works :is-maker='isMaker' class='mb-6'></app-how-it-works>
      </div>
    </div>

    <!--    opportunity is waiting for you-->
    <div v-if='!isMaker' class='columns is-centered'>
      <div class='column has-text-centered p-5 mb-6'>
        <p class='title is-size-5 mb-3'>Opportunity is waiting for you</p>
        <p class='mb-3'>Join today to support projects and earn on your own terms</p>
        <b-button tag='a' :href='heroPro.codaFormUrl' target='_blank' type='is-info'>Become a Makr Pro</b-button>
      </div>
    </div>

    <!--    common questions block-->
    <div class='columns is-centered has-background-warning has-text-black'>
      <div class='column is-two-thirds'>
        <p class='title has-text-centered-tablet is-size-4'>Common Questions</p>
        <div v-for='commonQuestion in commonQuestions' :key='commonQuestion.question' class='mb-4'>
          <p class='has-text-weight-bold'>{{ commonQuestion.question }}</p>
          <p>{{ commonQuestion.answer }}</p>
        </div>
        <p class='mb-6'>Still have questions? <a href='mailto:makrhelp@gmail.com' class='has-text-weight-bold is-underlined'>Send us a message</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import AppExploreProjects from '~/components/AppExploreProjects'
import AppHero from '~/components/AppHero'
import AppTestimonialCarousel from '~/components/AppTestimonialCarousel'
import AppHowItWorks from '~/components/AppHowItWorks'
import AppTestimonialCard from '~/components/AppTestimonialCard'

export default {
  components: {
    AppTestimonialCard,
    AppHowItWorks,
    AppExploreProjects,
    AppHero,
    AppTestimonialCarousel
  },
  data() {
    return {
      commonQuestions: [{
        question: 'Am I liable for consulting on maker projects?',
        answer: 'No, all pros under the Makr network are covered under our liability waiver'
      }, {
        question: 'How will I know when I get booked with a maker?',
        answer: 'We’ll send you a message with your maker’s project details and timing for the booked session'
      }, {
        question: 'How long is each personalized session?',
        answer: 'Each session is 30 minutes long. Makers can request additional time pending your approval.'
      }],
      heroMaker: {
        title: 'Personalized expert assistance to help makers accomplish more',
        subtitle: 'Affordable experts available at anytime to help you get your jobs done with confidence, all from your device',
        selectLabel: 'I need help with...',
        selectPlaceholder: 'ex. Home renovations',
        buttonText: 'Get Started',
        buttonColor: 'has-background-info has-text-white',
        codaFormUrl: 'https://coda.io/form/Makr_duLAuqP2XlW'
      },
      heroPro: {
        title: 'Get paid for your personalized expertise from anywhere, anytime.',
        subtitle: 'Help makers accomplish more specific problems with their projects, right from your device',
        selectLabel: 'I can help makers with...',
        selectPlaceholder: 'Select your area of expertise',
        buttonText: 'Start Earning',
        buttonColor: 'has-background-primary',
        codaFormUrl: 'https://coda.io/form/Makr_dRtypX1uRDH'
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
      isMaker: true,
      testimonies: [
        {
          title: 'Home Renovation Issues',
          quote: 'We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.',
          author: 'Jamie',
          location: 'Detroit, MI'
        }, {
          title: 'Step-by-step walk through',
          quote: 'Makr helped us find an affordable pro that guided us through our exact problems in under 30 minutes with confidence. Its like telehealth but for the DIYers and their projects.',
          author: 'Robert',
          location: 'Greenville, SC'
        }
      ]
    }
  },
  methods: {
    goToPro() {
      const proSwitch = document.querySelector("#pro-switch .radio.button");
      proSwitch.click()
      window.scrollTo(0, 0)
    },
    handleHeroSwitchValue(value) {
      this.isMaker = value === 'maker'
      this.$nuxt.$emit('is-maker', this.isMaker);
    }
  }
}
</script>

<style lang='scss'>
@import "assets/scss/main";
.carousel-container {
  margin: 0 6rem 2rem;
}
</style>
