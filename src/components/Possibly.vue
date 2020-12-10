<template lang="pug">
v-layout(row wrap)
  v-flex(xs12 sm12 md4 lg5 order-xs2 order-md1)
    h2.pxly.display-3.text-xs-center.mb-3 Possibly
    v-card(v-for="idea in ideas"
          :key="idea.id"
          :color="idea.color").mb-3.pa-3
      v-card-title
        .headline {{ idea.title }}
      v-card-text
        .body-1 {{ idea.description }}
        a(:href="idea.link")
</template>

<script>
import IDEAS from '../data/ideas.js'
export default {
    name: 'Possibly',
    components: {
    },
    data () {
        return {
            ideas: IDEAS
        }
    }
}
</script>
