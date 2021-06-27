<template lang="pug">
  v-row(
    justify='center'
  )
    v-dialog(
      v-model="state.showModal"
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
                  @click:clear="handleClickClear"
                  @input="handleInputURL"
                )
              v-col.ogp(
                cols="6"
              ) 
                v-progress-circular(
                  v-if="state.isLoading"
                  indeterminate
                )
                ogp-card(
                  v-else-if="form.url"
                  :href="ogp.href"
                  :src="ogp.src"
                  :title="ogp.title"
                  :description="ogp.description"
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
              @click="state.showModal = false"
            ) キャンセル
            v-btn(
              color="green darken-1"
              text
              @click="handleClickPost"
            ) 投稿

</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  watch,
} from '@vue/composition-api'
import OgpCard from '../molecules/OgpCard.vue'
import { OGP } from '~/assets/types/app'

export type Option = {
  text: string
  value: string
}

type State = {
  isLoading: boolean
  showModal: boolean
}

type Form = {
  categories: string[]
  url: string
  comment: string
}

export default defineComponent({
  components: {
    OgpCard,
  },

  props: {
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
    ogp: {
      type: Object as PropType<OGP>,
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

  setup(peops, { emit }) {
    const state = reactive<State>({
      isLoading: false,
      showModal: false,
    })

    const form = reactive<Form>({
      categories: [],
      url: '',
      comment: '',
    })

    watch(
      () => peops.ogp.src,
      () => {
        if (peops.ogp.src) {
          state.isLoading = false
        }
      }
    )

    const handleClickClear = () => {
      state.isLoading = false
    }

    const handleClickPost = () => {
      state.showModal = false
      emit('click-post')
    }

    const handleInputURL = (value: string) => {
      state.isLoading = true
      emit('input-url', value)
    }

    return {
      state,
      form,
      handleInputURL,
      handleClickPost,
      handleClickClear,
    }
  },
})
</script>

<style lang="scss" scoped>
.ogp {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-wrapper {
  text-align: center;
}
</style>
