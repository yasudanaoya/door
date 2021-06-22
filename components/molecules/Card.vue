<template lang="pug">
  .card-wrapper
    slot
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.card-wrapper {
  height: 100px;
  width: 200px;
  border: 1px solid black;
  border-radius: 20px;
}
</style>
