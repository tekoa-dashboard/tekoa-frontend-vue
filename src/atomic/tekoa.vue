<style lang="sass">
    @import ../sass/tekoa

    #app-main
        background-image: linear-gradient(to bottom, $color-1, $color-1 $pixel-proportion * 16, $grey-3 $pixel-proportion * 16)
        background-repeat: no-repeat
        background-size: 100% 100%
        text-rendering: optimizeLegibility
        padding-top: $pixel-proportion * 2
        padding-bottom: $pixel-proportion * 2
        padding-left: 6%
        padding-right: 6%
        height: 100%
        +border-box

    #app-wrapper
        background-color: $white-1
        border-radius: $pixel-proportion / 2
        overflow: hidden
        height: 100%
        box-shadow: 0 0 6px 1px rgba(0, 0, 0, .3)
</style>

<template lang="pug">
    #app-main
        #app-wrapper.columns.is-gapless.is-mobile
            global-nav
            router-view(name="sections")
</template>

<script>
import globalNav from './organisms/nav'

export default {
    components: {
        globalNav
    }
}

</script>
