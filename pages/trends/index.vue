<template lang="pug">
  trends-template(
    :trends="state.trends"
    :options="[]"
    :post-ogp="state.postOgp"
    @click-modal-postOgp="handleClickModalPost"
    @input-modal-url="handleInputModalURL"
  )
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { encodeURL } from 'js-base64'
import { convertAppTrend } from './presenter'
import { OGP, Trend } from '~/assets/types/app'
import TrendsTemplate from '~/components/templates/Trends.vue'
import { ResponseTrend } from '~/assets/types/api'

type State = {
  trends: Trend[]
  postOgp: OGP
}

export default defineComponent({
  components: {
    TrendsTemplate,
  },

  setup(_, { root }) {
    const state = reactive<State>({
      trends: [],
      postOgp: {
        src: '',
        title: '',
        description: '',
        href: '',
      },
    })

    const getTrends = async () => {
      try {
        const response: ResponseTrend[] = await root.$axios
          .get(`/api/trends`)
          .then((res) => res.data)
        state.trends = convertAppTrend(response)
      } catch (err) {
        console.error(err)
      }
    }

    getTrends()

    const getORG = async (url: string) => {
      try {
        const response: OGP = await root.$axios
          .get(`/api/ogp/?url=${encodeURL(url)}`)
          .then((res) => res.data)
        state.postOgp = response
      } catch (err) {
        console.error(err)
      }
    }

    const handleClickModalPost = () => {
      // TODO
    }

    const handleInputModalURL = (url: string) => {
      if (url) {
        getORG(url)
      }
    }

    return {
      state,
      handleClickModalPost,
      handleInputModalURL,
    }
  },
})
</script>
