<template lang="pug">
  v-row(
    justify='center'
  )
    v-dialog(
      v-model="showModal"
    )
      template(
        v-slot:activator="{ on, attrs }"
      )
        v-btn(
          color="primary"
          v-bind="attrs"
          v-on="on"
        ) 投稿
      v-card
        v-card-title
          p.text-h5
            | Trend
        v-card-text
          v-container
            v-row
              v-col(
                cols="12"
              )
                v-select(
                  v-model="form.categories"
                  :items="options"
                  label="カテゴリー"
                  multiple
                  chips
                  deletable-chips
                )
              v-col(
                cols="6"
              )
                v-text-field(
                  v-model="form.url"
                  label="URL*"
                  required
                  clearable
                  @input="handleInputURL"
                )
              v-col.org(
                cols="6"
              ) 
                v-progress-circular(
                  v-if="state.isLoading"
                  indeterminate
                )
                org-card(
                  v-else-if="form.url"
                  :href="org.href"
                  :src="org.src"
                  :title="org.title"
                  :description="org.description"
                )
              v-col(
                cols="12"
              )
                v-textarea(
                  v-model="form.comment"
                  solo
                  name="input-comment"
                  label="コメントを入力"
                  clearable
                )
              
        v-card-actions.btn-wrapper
          v-spacer
            v-btn(
              color="green darken-1"
              text
              @click="$emit('click-cancel')"
            ) キャンセル
            v-btn(
              color="green darken-1"
              text
              @click="$emit('click-post')"
            ) 投稿

</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  watch,
} from '@vue/composition-api'
import OrgCard from '../molecules/OrgCard.vue'

export type Option = {
  text: string
  value: string
}

type ORG = {
  href: string
  src: string
  title: string
  description: string
}

type State = {
  isLoading: boolean
}

type Form = {
  categories: string[]
  url: string
  comment: string
}

export default defineComponent({
  components: {
    OrgCard,
  },

  props: {
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
    showModal: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  setup(peops, { emit }) {
    const state = reactive<State>({
      isLoading: false,
    })

    const form = reactive<Form>({
      categories: [],
      url: '',
      comment: '',
    })

    watch(
      () => peops.org.src,
      () => {
        if (peops.org.src) {
          state.isLoading = false
        }
      }
    )

    const handleInputURL = (value: string) => {
      state.isLoading = true
      emit('input-url', value)
    }

    return {
      state,
      form,
      handleInputURL,
    }
  },
})
</script>

<style lang="scss" scoped>
.org {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-wrapper {
  text-align: center;
}
</style>
