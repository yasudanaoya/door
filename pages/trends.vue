<template lang="pug">
  trends-template(
    :trends="trends"
    :options="[]"
  )
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import TrendsStore from '../store/trends'
import TrendsTemplate from '~/components/templates/Trends.vue'
import { Trend } from '~/assets/types/api'

type State = {
  trends: Trend[]
}

export default defineComponent({
  components: {
    TrendsTemplate,
  },

  setup() {
    const store = TrendsStore()

    const state = reactive<State>({
      trends: store.trends,
    })

    return {
      ...state,
    }
  },
})
</script>
