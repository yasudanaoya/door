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
    org: genORG(),
    tags: new Array(2)
      .fill(null)
      .map((_, i) => genTag(i % 2 === 0 ? 'red' : 'blue')),
    comment: 'Nuxt.js is amazing',
  }
}

export const Basic = () => {
  return {
    components: { Trends },
    props: {
      trends: {
        default: object(
          'trends',
          new Array(10).fill(null).map((_, i) => genTrend(i))
        ),
      },
    },
    template: `
      <Trends :trends="trends" />
    `,
  }
}
