<template lang="pug">
v-app(dark elevation="1")
    v-content(elevation="2")
        v-container(fluid fill-height grid-list-lg)
            v-layout(row wrap)
                Possibly
                Presently
                Previously
        CookieDialog
        Footer
</template>

<script>
import Previously from './components/Previously.vue'
import Presently from './components/Presently.vue'
import Possibly from './components/Possibly.vue'
import Footer from './components/Footer.vue'
import CookieDialog from './components/CookieDialog.vue'

export default {
    name: 'app',
    components: {
        CookieDialog,
        Previously,
        Presently,
        Possibly,
        Footer,
    }
}
</script>

<style>
body {
    background-color: #303030;
    background-image: url('./assets/images/atmanaut-white.png');
    background-repeat: no-repeat;
    background-size: 320px 320px;
    background-position: center 20%;
}
#app.theme--dark.application {
    background-color: hsla(0, 0%, 12%, 0.92);
}
</style>
