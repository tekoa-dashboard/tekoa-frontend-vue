<style scoped lang="sass">
    @import ../../sass/imports/_extend

    #tab-top
        padding-top: $pixel-proportion * 2
        height: 36 + ($pixel-proportion * 2)
        margin: 0 !important
        background-color: $black-5
        > ul
            padding-left: $pixel-proportion * 2
</style>

<template lang="pug">
    #tab-top.column.is-full.tabs.is-boxed.is-hidden-mobile
        mixin tabItem(tabRoute, tabIcon, tabText)
            tab-item-component(tab-route= tabRoute, tab-icon= tabIcon, tab-text= tabText)

        ul
            +tabItem('dashboard', 'tachometer', 'Visão Geral')
            +tabItem('records', 'archive', 'Registros')
            +tabItem('statistics', 'pie-chart', 'Estatísticas')
            +tabItem('reports', 'file-text-o', 'Relatórios')
            +tabItem('map', 'map-marker', 'Mapa')
</template>

<script>
    import tabItemComponent from '../atoms/tab-top-item'

    export default {
        components: {
            tabItemComponent
        }
    }
</script>
