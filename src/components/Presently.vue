<template lang="pug">
v-layout(row wrap)
  v-flex(xs12 sm6 md4 lg4 order-xs-1 order-md-2).pxly
    h2.display-3.text-xs-center.mb-3 Presently
    v-card(v-for="gift in gifts"
        :key="gift.id"
        :color="gift.bgColor"
        :class="gift.color+'--text'").mb-3.pa-3
      v-card-title
        .headline {{ gift.title }}
      v-card-text
        .body-1 {{ gift.description }}
        a(:href="gift.link")
    v-card.mb-3(color="pink darken-2")
      v-card-text
        v-img(contain max-height="240" max-width="100%"
          :src="require('../assets/images/atmanautica.png')")
      v-card-title
        .subheading Spelunking the Essential
        .caption as CXO
    v-card.mb-3(color="purple darken-2")
      v-card-text
        v-img(contain max-height="360" max-width="100%"
          :src="require('../assets/images/blueberries.jpg')")
      v-card-title
        .subheading 2019: the year for berries
        .caption srsly, try some
</template>

<script>
// ideas for content
    // github pull
    // codez logoz
    // atmanaut pull
    // goodreads pull
    // links to:
    //  - gyrosco.pe
    //  - instagram
    //  - twitter
import gifts from '../data/gifts.js'
export default {
    name: "Presently",
    data () {
        return {
            gifts: gifts
        }
    }
}
</script>

<style lang="stylus">
.pxly .display-3 {
    font-size: 1rem;
}
.v-card__title {
    align-items: baseline;
    .subheading {
        flex-basis: 100%;
    }
}
</style>

