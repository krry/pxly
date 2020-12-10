<template lang="pug">
v-dialog(
    v-model="dialog"
    max-width="360"
    dark
    lazy
    origin="25% center"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    persistent
    elevation="20")
    v-card.pa-4.text-xs-center(dark color="secondary").hello
        v-card-title.title(primary-title)
            v-icon $vuetify.icons.hiya
            | &nbsp;Greetings {{visitorName}}
        v-card-text
            .headline.pb-2
                |  I'm Kerry&nbsp;
                v-avatar
                    img(src="../assets/images/avatar-kerry.jpg" alt="Kerry")
            .body-2.mb-4 Welcome to my Home ◎
            v-text-field(
                box
                v-model="visitorName"
                label="May I ask your name?"
                color="primary"
                clearable
                autofocus
                prepend-icon="$vuetify.icons.who?"
                v-on:keyup.enter="persist"
                )
        v-card-actions
            v-layout(row wrap justify-center)
                v-tooltip(
                    color="info"
                    bottom)
                    template(v-slot:activator="{ on }")
                        v-btn(
                            v-on="on"
                            :disabled="!visitorName"
                            color="success"
                            @click="persist")
                            | Nice to meet you
                            v-icon(right) $vuetify.icons.cookie
                    span Take a cookie, I'll remember you.
                v-btn(
                    color="error"
                    @click="dismiss"
                    flat).mt-2
                    v-icon(left) $vuetify.icons.nope
                    | Anonymity Rules!
</template>

<script>
export default {
    name: 'CookieDialog',
    data () {
        return {
            visitorName: "",
            dialog: false,
        }
    },
    mounted () {
        if (localStorage.visitorName) {
            this.visitorName = localStorage.visitorName
            this.$cookies.set('visitor', this.visitorName);
            this.dialog = false
        } else {
            this.dialog = true
        }
    },
    methods: {
        persist () {
            localStorage.visitorName = this.visitorName
            this.$cookies.set('visitor', this.visitorName);
            this.dialog = false
        },
        clear () {
            this.visitorName = ""
        },
        dismiss () {
            this.dialog = false
        }
    }
}
</script>
<style lang="stylus">
@import '~vuetify/src/stylus/settings/_colors.styl'
.hello {
    border: 1px inner white;
    .v-btn .v-icon--left {
        margin-left: 8px;
    }
}
.hello .v-card__text {
    padding-bottom: 0;
}
</style>

