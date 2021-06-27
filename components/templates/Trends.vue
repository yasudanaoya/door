<template lang="pug">
  v-content.trend-root
    post-trend-modal(
      :options="options"
      :org="postOrg"
      :showModal="showPostModal"
    )
    .trend-list
      trend-card.card(
        v-for="trendCard in trends"
        :key="trendCard.id"
        :tags="trendCard.tags"
        :comment="trendCard.comment"
        :org="trendCard.org"
      )
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import TrendCard, { Tag, ORG } from '../organisms/TrendCard.vue'
import PostTrendModal, { Option } from '../organisms/PostTrendModal.vue'

export type Trend = {
  id: string
  tags: Tag[]
  org: ORG
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
    org: {
      type: Object as PropType<ORG>,
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
    showPostModal: {
      type: Boolean,
      required: false,
      default: false,
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
