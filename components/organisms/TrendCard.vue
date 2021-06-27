<template lang="pug">
  v-card
    template(slot="progress")
      v-progress-linear(
        height="10"
        indeterminate
      )
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
        org-card(
          :href="org.href"
          :src="org.src"
          :title="org.title"
          :description="org.description"
        )
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import OrgCard from '../molecules/OrgCard.vue'

type Tag = {
  title: string
  color: string
  textColor: string
}

type ORG = {
  href: string
  src: string
  title: string
  description: string
}

export default defineComponent({
  components: {
    OrgCard,
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
    org: {
      type: Object as PropType<ORG>,
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
