<style lang="sass">
    @import ../../sass/imports/_extend

    #list-app
        height: 100%
        background-color: $grey-2
        color: $white-1
        +transition(.2s)

</style>

<template lang="pug">
    #list-app.column.is-full-mobile.is-full-tablet.is-one-third-desktop
        | list
</template>

<script>
    export default {

    };
</script>
