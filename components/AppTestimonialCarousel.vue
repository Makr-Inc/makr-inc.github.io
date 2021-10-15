<template>
  <b-carousel-list v-model='showing' :data='testimonies' :items-to-show='2' :arrow-hover="false" icon-size="is-large">
    <template #item='testimony'>
      <div class='card'>
        <div class="card-content">
          <p class='title is-size-5'>{{ testimony.title }}</p>
          <blockquote class="is-size-6 has-text-weight-medium">
            “{{ testimony.quote }}”
          </blockquote>
          <br>
          <p class="is-italic">
            - {{ testimony.author }} | {{ testimony.location }}
          </p>
        </div>
      </div>
    </template>
  </b-carousel-list>
</template>

<script>
export default {
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

<style lang='scss' scoped>
.card-content {
  padding: 1.5rem 4.5rem;
}
</style>
