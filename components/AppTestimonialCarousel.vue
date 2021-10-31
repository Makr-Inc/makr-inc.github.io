<template>
  <b-carousel-list v-model='showing' :data='testimonies' :items-to-show='2' :arrow-hover="false" icon-size="is-large">
    <template #item='testimony'>
      <app-testimonial-card :testimony='testimony'></app-testimonial-card>
    </template>
  </b-carousel-list>
</template>

<script>
import AppTestimonialCard from '~/components/AppTestimonialCard'
export default {
  components: { AppTestimonialCard },
  data() {
    return {
      showing: 0,
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
        },
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
  }
}
</script>

<style lang='scss'>
.carousel-arrow .icon.has-icons-right {
  right: 0;
}
.carousel-arrow .icon.has-icons-left {
  left: 0;
}
</style>
