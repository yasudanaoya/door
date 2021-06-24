<template lang="pug">
  card
    .tag-wrapper
      v-chip.tag(
        v-for="tag in tags"
        :color="tag.color"
        :text-color="tag.textColor"
      )
        | {{ tag.title }}
    p.comment
      | {{ comment }}
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Card from '../molecules/Card.vue'

type Tag = {
  title: string
  color: string
  textColor: string
}

export default defineComponent({
  components: {
    Card,
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
