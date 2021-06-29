import { ResponseTrend } from '~/assets/types/api'
import { Trend } from '~/assets/types/app'

export const convertAppTrend = (apiTrends: ResponseTrend[]): Trend[] => {
  return apiTrends.map((trend) => {
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
}
