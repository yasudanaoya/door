import { object, withKnobs } from '@storybook/addon-knobs'
import Trends from '../../components/templates/Trends.vue'

export default {
  title: 'Templates/Trends',
  decorators: [withKnobs],
  parameters: {
    layout: 'fullscreen',
  },
}

export const genTag = (color: string) => {
  return {
    title: color,
    color,
    textColor: 'white',
  }
}

export const genORG = () => {
  return {
    href: 'https://github.com/',
    src: 'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
    title: 'GitHub',
    description:
      'GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects.',
  }
}

export const genTrend = (id: number) => {
  return {
    id: String(id),
    ogp: genORG(),
    tags: new Array(2)
      .fill(null)
      .map((_, i) => genTag(i % 2 === 0 ? 'red' : 'blue')),
    comment: 'Nuxt.js is amazing',
  }
}

export const genTrends = (length: number) => {
  return new Array(length).fill(null).map((_, i) => genTrend(i))
}

export const Basic = () => {
  return {
    components: { Trends },
    props: {
      trends: {
        default: object('trends', genTrends(10)),
      },
      options: {
        default: object('options', [
          { text: 'front', value: 'front' },
          { text: 'server', value: 'server' },
        ]),
      },
      ogp: {
        default: object('ogp', {
          href: 'https://github.com/',
          src: 'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
          title: 'GitHub',
          description:
            'GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects.',
        }),
      },
    },
    template: `
      <Trends :trends="trends" />
    `,
  }
}
