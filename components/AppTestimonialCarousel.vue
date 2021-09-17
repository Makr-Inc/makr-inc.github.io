<template>
  <b-carousel-list v-model='showing' :data='testimonies' :items-to-show='2' :arrow-hover="false" icon-size="is-large">
    <template #item='list'>
      <div class='card'>
        <div class="card-content">
          <blockquote class="is-size-5 has-text-weight-medium">
            “{{ list.quote }}”
          </blockquote>
          <p class="is-italic">
            - {{ list.author }} | {{ list.location }}
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
          quote: 'We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.',
          author: 'Jamie',
          location: 'Detroit, MI'
        },{
          quote: 'We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.',
          author: 'Jamie',
          location: 'Detroit, MI'
        },{
          quote: 'We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.',
          author: 'Jamie',
          location: 'Detroit, MI'
        },{
          quote: 'We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.',
          author: 'Jamie',
          location: 'Detroit, MI'
        },{
          quote: 'We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.',
          author: 'Jamie',
          location: 'Detroit, MI'
        },{
          quote: 'We watched hours of YouTube, read countless articles, joined Facebook groups and Reddit threads. None of them gave us the specific answers we were looking for with our plumbing system.',
          author: 'Jamie',
          location: 'Detroit, MI'
        }
      ]
    }
  },
  methods: {
    info(value) {
      this.test = value
    }
  },
  watch: {
    test(value) {
      console.log('value: ', value)
    }
  }
}
</script>
