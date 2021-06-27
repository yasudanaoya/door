<template lang="pug">
  a.org-card(
    :href="href"
    target="_blank"
  )
    v-card
      .d-flex.flex-no-wrap.justify-space-between
        v-avatar.img-wrapper(
          class="ma-3"
          size="100"
          tile
        )
          v-img.org-img(
            :src="src"
          )
        div
          v-card-title(v-text="title")
          v-card-subtitle(v-text="description")

</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<style lang="scss">
.org-card {
  text-decoration: none;
}
</style>
