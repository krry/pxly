<template lang="pug">
v-flex(xs12 sm6 md4 order-xs3 order-md3)
    h2.pxly.display-3.text-xs-center.mb-3 Previously
    v-card.mb-3(color="white" light).pa-3
        v-card-text
            a(href="http://mandarin9.net/")
                v-img(contain max-height="64"
                :src="require('../assets/images/plogos/mandarin9.png')")
        v-card-title
            .subheading Learning Mandarin Made Fun
            .caption as Tech Consultant
    v-card.mb-3(color="black").pa-3
        v-card-text
            a(href="https://www.arrivo-loop.com/")
                <!-- v-img(contain max-width="100%" -->
                <!-- :src="require('../assets/images/prev/arrivo-pod.png')") -->
                v-img(contain max-height="64" max-width="100%"
                :src="require('../assets/images/plogos/arrivo-longo.png')")
        v-card-title.justify-center.text-xs-center
            .subheading Ending Traffic
            .caption as Major Domo
    v-card.mb-3(color="white" light).pa-3
        v-card-text
            a(href="https://www.tesla.com/solarpanels")
                <!-- v-img(contain max-width="100%" -->
                <!-- :src="require('../assets/images/prev/scty-van.png')") -->
                v-img(contain max-width="100%" max-height="60"
                :src="require('../assets/images/plogos/solarcity.png')")
        v-card-title.justify-end.text-xs-right
            .subheading Basking in the Savings
            .caption as Lead XP Designer
    v-card.mb-3(color="blue darken-3").pa-3
        v-card-text
            a(href="https://techcrunch.com/2011/02/23/disney-acquires-social-network-for-kids-togetherville/")
                v-img(contain max-height="72"
                :src="require('../assets/images/plogos/disney.png')")
        v-card-title.justify-center.text-xs-center
            .subheading Saluting the Mouse
            .caption as Left Hand Glove
    v-card.mb-3(color="cyan darken-2").pa-3
        v-card-text
            a(href="https://www.crunchbase.com/organization/togetherville")
                v-img(contain max-height="84"
                :src="require('../assets/images/plogos/togetherville.png')")
        v-card-title
            .subheading Building a Trust Circle
            .caption as Content Lead
    v-card.mb-3(color="lime lighten-1" light).pa-3
        v-card-text
            a(href="http://www.thirdprime.com/")
                v-img(contain max-height="64"
                :src="require('../assets/images/plogos/thirdprime.png')")
        v-card-title.justify-end.text-xs-right
            .subheading Consulting firm design
            .caption as General Counsel
</template>

<script>
export default {
    name: "Previously",
    data () {
        return {
            links: {
                arrivo: "https://www.tiki-toki.com/timeline/entry/994066/The-Path-to-Arrival-copy/"
            }
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

