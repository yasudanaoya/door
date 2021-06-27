<template lang="pug">
  v-main.trend-root
    post-trend-modal(
      :options="options"
      :ogp="postOgp"
      @click-cancel="$emit('click-modal-cancel')"
      @click-post="$emit('click-modal-post')"
      @input-url="$emit('input-modal-url', $event)"
    )
    .trend-list
      trend-card.card(
        v-for="trendCard in trends"
        :key="trendCard.id"
        :tags="trendCard.tags"
        :comment="trendCard.comment"
        :ogp="trendCard.ogp"
      )
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import TrendCard, { Tag, Ogp } from '../organisms/TrendCard.vue'
import PostTrendModal, { Option } from '../organisms/PostTrendModal.vue'

export type Trend = {
  id: string
  tags: Tag[]
  ogp: Ogp
  comment: string
}

export default defineComponent({
  components: {
    TrendCard,
    PostTrendModal,
  },

  props: {
    trends: {
      type: Array as PropType<Trend[]>,
      required: false,
      default: () => [],
    },
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
    postOgp: {
      type: Object as PropType<Ogp>,
      required: false,
      default: () => {
        return {
          href: '',
          src: '',
          title: '',
          description: '',
        }
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.trend-root {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  .trend-list {
    max-width: 60%;
    margin: 0 auto;
    .card {
      margin: 20px;
    }
  }
}
</style>
