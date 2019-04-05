<template lang="pug">
v-flex(xs12 sm6 md4 order-xs-1 order-md-2).roles
    h2.pxly.display-3.text-xs-center.mb-3 Presently

    // github pull
    // codez logoz
    // atmanaut pull
    // goodreads pull
    // links to:
    //  - gyrosco.pe
    //  - instagram
    //  - twitter

    v-card.mb-3(color="pink darken-2")
        v-card-title
            .subheading Devsigning with:
        v-card-text
            v-img(contain max-height="240" max-width="100%"
            :src="require('../assets/images/atmanautica.png')")
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
export default {
    name: "Presently"
}
</script>

<style lang="stylus">
.pxly {
}
.v-card__title {
    align-items: baseline;
    .subheading {
        flex-basis: 100%;
    }
}
</style>

