<template lang="pug">
  trends-template(
    :trends="state.trends"
    :options="state.options"
    :post-ogp="state.postOgp"
    @click-modal-post="handleClickModalPost"
    @input-modal-url="handleInputModalURL"
  )
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { encodeURL } from 'js-base64'
import { Param } from '../../components/organisms/PostTrendModal.vue'
import { convertAppTrend, convertOptions } from './presenter'
import { OGP, Trend, TagOption } from '~/assets/types/app'
import TrendsTemplate from '~/components/templates/Trends.vue'
import { ResponseTag, ResponseTrend } from '~/assets/types/api'

type State = {
  trends: Trend[]
  postOgp: OGP
  options: TagOption[]
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
      options: [],
    })

    const getTags = async () => {
      try {
        const response: ResponseTag[] = await root.$axios
          .get(`/api/tags`)
          .then((res) => res.data)
        state.options = convertOptions(response)
      } catch (err) {
        console.error(err)
      }
    }

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
    getTags()

    const getOGP = async (url: string) => {
      try {
        const response: OGP = await root.$axios
          .get(`/api/ogp/?url=${encodeURL(url)}`)
          .then((res) => res.data)
        state.postOgp = response
      } catch (err) {
        console.error(err)
      }
    }

    const postOGP = async (param: Param) => {
      const requestParam = {
        trend: {
          comment: param.comment,
        },
        tags: param.tags,
        ogp: param.ogp,
      }
      try {
        await root.$axios.post(`/api/trends`, requestParam)
        getTrends()
      } catch (err) {
        console.error(err)
      }
    }

    const handleClickModalPost = (param: Param) => {
      postOGP(param)
    }

    const handleInputModalURL = (url: string) => {
      if (url) {
        getOGP(url)
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
