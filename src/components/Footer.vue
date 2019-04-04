<template lang="pug">
v-footer(app).pa-3
    .sock
        span Made of ☯︎ with ❤︎ for ⚧
    v-spacer
    .shoe
        span.copyleft &copy;
        span.year {{ new Date().getFullYear() }}
        span  ATMNT
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
footer {
    position: static;
}
.copyleft {
    display: inline-block;
    text-align: right;
    margin: 0;
    padding-left: 0.125em;
    transform: scaleX(-1);
    filter: FlipH;
}
</style>

