<template lang="pug">
  a.ogp-card(
    :href="href"
    target="_blank"
  )
    v-card
      .d-flex.flex-no-wrap.justify-space-between
        .img-wrapper
          v-avatar(
            class="ma-3"
            size="100"
            tile
          )
            v-img.ogp-img(
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
.ogp-card {
  text-decoration: none;

  .img-wrapper {
    display: flex;
    align-items: center;
  }
}
</style>
