<style lang="sass">
    @import ../../../sass/imports/_extend

    #sections-base
        +flex(column, flex-start, flex-start)
        height: 100%
        width: 100%
</style>

<template lang="pug">
    #sections-base.column.columns.is-gapless
        tab-top
        router-view(name="subSections")
</template>

<script>
import tabTop from '../../molecules/tab-top'

export default {
    components: {
        tabTop
    }
}
</script>
