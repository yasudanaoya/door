<template lang="pug">
  trends-template(
    :trends="state.trends"
    :options="[]"
    :post-org="state.postORG"
    @click-modal-postOrg="handleClickModalPost"
    @input-modal-url="handleInputModalURL"
  )
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { encodeURL } from 'js-base64'
import TrendsStore from '../store/trends'
import { ORG } from '~/components/organisms/TrendCard.vue'
import TrendsTemplate from '~/components/templates/Trends.vue'
import { Trend } from '~/assets/types/api'

type State = {
  trends: Trend[]
  postORG: ORG
}

export default defineComponent({
  components: {
    TrendsTemplate,
  },

  setup(_, { root }) {
    const store = TrendsStore()

    const state = reactive<State>({
      trends: store.trends,
      postORG: {
        src: '',
        title: '',
        description: '',
        href: '',
      },
    })

    const getORG = async (url: string) => {
      try {
        const response: ORG = await root.$axios
          .get(`/api/ogp/?url=${encodeURL(url)}`)
          .then((res) => res.data)
        state.postORG = response
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
