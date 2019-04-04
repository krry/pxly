<template lang="pug">
v-flex(xs12 sm6 md4 order-xs2 order-md1)
    h2.pxly.display-3.text-xs-center.mb-3 Possibly
    v-card(v-for="idea in ideas" :key="idea.id" :color="idea.color").mb-3.pa-3
        v-card-title
            .headline {{ idea.title }}
        v-card-text
            .body-1 {{ idea.description }}
            a(:href="idea.link")
</template>

<script>
export default {
    name: 'Possibly',
    components: {
    },
    data () {
        return {
            ideas: [
                {
                    title: "Pleasance",
                    description: "A modular, distributed community focused \
                    on holistic health and well-being for our elders, while \
                    helping them preserve their legacy, wisdom, and opinions.",
                    color: "light-blue lighten-2"
                },
                {
                    title: "MiaB",
                    description: "Take this magic bottle. Seal away (encrypt) \
                    a message, schedule its delivery for a future moment, and \
                    send the key separately. Time capsule meets magic carpet \
                    meets Santa Claus.",
                    color: "blue-grey darken-1"
                },
                {
                    title: "Surprise Club",
                    description: "An actual-reality members-only surprise \
                    party exchange experience. Throw a bash or two and ye \
                    shall receive a shock full of cake and glitter signifying \
                    belonging and camaraderie.",
                    color: "pink accent-3"
                },
                {
                    title: "Teralance McWatkenas",
                    description: "The minds and voices of two of the farthest \
                    out oratavataeor-philosophers of our era at your service and \
                    ready for questions. A conjoined artificial intelligence \
                    with a co-synthesized voice. AKA Teran McWatken",
                    color: "brown"
                },
                {
                    title: "Feelers",
                    description: "Microdiaries for feelings, aggregrated \
                    into a global emotion map. Be the Tamagotchi! \
                    Pings y'all for feelings, forecasts the mood.",
                    color: "deep-purple darken-1"
                },
                {
                    title: "buenomap",
                    description: "A 4-D map of good spacetimes for digital \
                    nomads, arctic terns and world travelers who love good \
                    feels. AKA Bontom, AKA #nicehere, AKA Vaykay",
                    link:
                    "https://atmanaut.us/2019/03/how-to-go-where-it-is-nice/",
                    color: "light-blue"
                },
                {
                    title: "Cuppa",
                    description: "Perfecting your taste in joe one cup at a \
                    time. Let the machine learning guide you toward your \
                    brown elixir, or dive deep into the artisanal morning \
                    mud.",
                    color: "brown darken-4"
                }
            ]
        }
    }
}
</script>
