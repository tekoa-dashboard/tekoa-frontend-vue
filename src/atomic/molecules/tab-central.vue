<style scoped lang="sass">
    @import ../../sass/imports/_extend

    #tab-app
        height: 100%
</style>

<template lang="pug">
    #tab-app.column.is-full-mobile.is-hidden-tablet.is-hidden-desktop
        a.button
            span.icon
                i.fa.fa-tachometer
            span Visão geral

        a.button
            span.icon
                i.fa.fa-archive
            span Registros

        a.button
            span.icon
                i.fa.fa-pie-chart
            span Estatísticas

        a.button
            span.icon
                i.fa.fa-file-text-o
            span Relatórios

        a.button
            span.icon
                i.fa.fa-map-marker
            span Mapa
</template>

<script>
    export default {

    }
</script>
