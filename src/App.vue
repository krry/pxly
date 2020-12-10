<template lang="pug">
v-app(dark elevation="1")
  v-navigation-drawer
  v-toolbar(color="primary")
    v-toolbar-items
      v-spacer
      v-btn(flat)
        router-link(to="/prev") Previously
      v-btn(flat)
        router-link(to="/pres") Presently
      v-btn(flat)
        router-link(to="/poss") Possibly
  v-content(elevation="2")
    v-container(fluid fill-height grid-list-lg)
      router-view
  Footer
  CookieDialog
</template>

<script>
import Footer from './components/Footer.vue'
import CookieDialog from './components/CookieDialog.vue'

export default {
  name: 'App',
  components: {
    CookieDialog,
    Footer,
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
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
