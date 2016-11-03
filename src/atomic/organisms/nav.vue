<style lang="sass">
    @import ../../sass/imports/_extend

    #app-nav
        height: 100%
        background-color: $grey-1
        color: $white-1
        width: $pixel-proportion * 7
        +transition(.2s)

        &:hover
            width: $pixel-proportion * 33
</style>

<template lang="pug">
    #app-nav.column.is-mobile.is-narrow
        | nav
</template>

<script>
    export default {

    };
</script>
