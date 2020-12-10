<template lang="pug">
v-layout(row wrap)
  v-flex(xs12 sm6 md4 lg3 order-xs3 order-md3).pxly
    h2.display-3.text-xs-center.mb-3 Previously
    v-card(v-for="job in jobs"
          :key="job.id"
          :id="job.title"
          :color="job.color"
          :light="job.light").mb-3.pa-3
      v-card-text
        a(:href="job.links[0]"
          :title="job.title"
          target="_blank"
          rel="noopener")
          v-img(contain
                :alt="job.title"
                :max-height="job.maxHeight"
                :max-width="job.maxWidth"
                :src="require(`@/assets/images/logos/${job.logoFile}`)")
      v-card-title
        .subheading {{ job.description }}
        .caption as {{ job.role }}
</template>

<script>
import jobs from '../data/jobs.js'

export default {
    name: "Previously",
    data () {
        return {
            jobs: jobs
        }
    }
}
</script>

<style lang="stylus" scoped>
.v-card__title {
    align-items: baseline;
    .subheading {
        flex-basis: 100%;
    }
}
</style>

