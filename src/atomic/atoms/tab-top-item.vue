<template lang="pug">
    li(:class="{'is-active' : computedRoute == tabRoute}")
        router-link(:to="tabRoute")
            span.icon.is-small
                i(class="fa", :class="'fa-' + tabIcon")
            span {{tabText}}
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        computedTabId (state) {
            return state.tabId
        },

        computedRoute () {
            return this.$route.name
        }
    }),
    methods: {
        changeTab: function (tabId) {
            this.$store.commit('changeTabId', tabId)
        }
    },
    props: ['tabId', 'tabRoute', 'tabIcon', 'tabText']
}
</script>
