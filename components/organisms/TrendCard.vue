<template lang="pug">
  v-card
    v-card-text
      v-chip.tag(
        v-for="tag in tags"
        :color="tag.color"
        :text-color="tag.textColor"
        :key="tag.title"
      )
        | {{ tag.title }}
      p.comment
        | {{ comment }}
      v-card-text
        ogp-card(
          :href="ogp.href"
          :src="ogp.src"
          :title="ogp.title"
          :description="ogp.description"
        )
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import OgpCard from '../molecules/OgpCard.vue'

export type Tag = {
  title: string
  color: string
  textColor: string
}

export type Ogp = {
  href: string
  src: string
  title: string
  description: string
}

export default defineComponent({
  components: {
    OgpCard,
  },

  props: {
    tags: {
      type: Array as PropType<Tag[]>,
      required: true,
    },
    comment: {
      type: String,
      required: false,
      default: '',
    },
    ogp: {
      type: Object as PropType<Ogp>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.tag {
  margin: 2px;
}
.comment {
  margin: 10px;
}
</style>
