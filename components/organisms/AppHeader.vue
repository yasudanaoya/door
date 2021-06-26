<template lang="pug">
  v-toolbar
    v-spacer
    .tabs
      .tab
        v-btn(
          @click="$emit('on-click')"
        )
          v-icon(left) mdi-home
          | Home
    v-spacer
    v-icon(
      large
      color="green darken-2"
    ) mdi-account-circle
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;

  .tab {
    margin: 0;
  }
}
</style>
