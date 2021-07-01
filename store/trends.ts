import { reactive } from '@vue/composition-api'
import { Trend } from '~/assets/types/app'
import { ResponseTrend } from '~/assets/types/api'

export type State = {
  trends: Trend[]
}

export type Payload = ResponseTrend[]

export default function trendsStore() {
  const state = reactive<State>({
    trends: [],
  })

  return {
    get trends() {
      return state.trends
    },
    setTrends(state: State, payload: Payload) {
      if (!payload) return
      const appTrends: Trend[] = payload.map((trend) => {
        return {
          id: trend.id,
          comment: trend.comment,
          ogp: {
            href: trend.ogp.href,
            src: trend.ogp.src,
            title: trend.ogp.title,
            description: trend.ogp.description,
          },
          tags: trend.tags.map((tag) => {
            return {
              id: tag.id,
              title: tag.title,
              color: tag.color,
              textColor: tag.textColor,
            }
          }),
        }
      })
      state.trends.concat(appTrends)
    },
  }
}

export type TrendsStore = ReturnType<typeof trendsStore>
