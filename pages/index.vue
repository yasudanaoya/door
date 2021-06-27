<template>
  <div>
    <v-text-field v-model="state.url" @input="hanldeInput" />
    <v-btn @click="hanldeClick">Generate</v-btn>
    <v-spacer />
    <v-progress-circular v-if="state.loading" indeterminate color="primary" />
    <img v-else :src="state.image" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { encodeURL } from 'js-base64'

export default defineComponent({
  setup(_, { root }) {
    const state = reactive({
      image: '',
      url: '',
      loading: false,
    })

    const getURL = async () => {
      try {
        const image = await root.$axios
          .get(`/api/ogp/?url=${encodeURL(state.url)}`)
          .then((res) => res.data)
        state.image = image.image
      } catch (err) {
        console.error(err)
      } finally {
        state.loading = false
      }
    }

    const hanldeInput = (newValue: string) => {
      state.url = newValue
    }

    const hanldeClick = () => {
      if (!state.url) {
        state.image = ''
        state.url = ''
      } else {
        state.loading = true
        getURL()
      }
    }

    return {
      state,
      hanldeInput,
      hanldeClick,
    }
  },
})
</script>
