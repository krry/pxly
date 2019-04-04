<template lang="pug">
v-flex(xs12 sm6 md4 order-xs1 order-md2).roles
    h2.font-weight-thin.text-xs-center.mb-2 Presently
    v-card.mb-3(color="purple darken-2")
        v-card-text
            v-img(contain max-height="240" max-width="100%"
            :src="require('../assets/images/atmanautica.png')")
        v-card-title
            .subheading Spelunking the Essential
            .caption as CXO
</template>

<script>
export default {
    name: "Presently"
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

