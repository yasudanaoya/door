import { reactive } from '@vue/composition-api'
import { Trend } from '~/assets/types/api'

export type State = {
  trends: Trend[]
}

export default function trendsStore() {
  const state = reactive<State>({
    trends: [
      {
        id: '0',
        org: {
          href: 'https://github.com/',
          src: 'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
          title: 'GitHub',
          description:
            'GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects.',
        },
        tags: [
          {
            id: 'red',
            title: 'red',
            color: 'red',
            textColor: 'white',
          },
          {
            id: 'blue',
            title: 'blue',
            color: 'blue',
            textColor: 'white',
          },
        ],
        comment: 'Nuxt.js is amazing',
      },
      {
        id: '1',
        org: {
          href: 'https://github.com/',
          src: 'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
          title: 'GitHub',
          description:
            'GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects.',
        },
        tags: [
          {
            id: 'red',
            title: 'red',
            color: 'red',
            textColor: 'white',
          },
          {
            id: 'blue',
            title: 'blue',
            color: 'blue',
            textColor: 'white',
          },
        ],
        comment: 'Nuxt.js is amazing',
      },
      {
        id: '2',
        org: {
          href: 'https://github.com/',
          src: 'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
          title: 'GitHub',
          description:
            'GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects.',
        },
        tags: [
          {
            id: 'red',
            title: 'red',
            color: 'red',
            textColor: 'white',
          },
          {
            id: 'blue',
            title: 'blue',
            color: 'blue',
            textColor: 'white',
          },
        ],
        comment: 'Nuxt.js is amazing',
      },
      {
        id: '3',
        org: {
          href: 'https://github.com/',
          src: 'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
          title: 'GitHub',
          description:
            'GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects.',
        },
        tags: [
          {
            id: 'red',
            title: 'red',
            color: 'red',
            textColor: 'white',
          },
          {
            id: 'blue',
            title: 'blue',
            color: 'blue',
            textColor: 'white',
          },
        ],
        comment: 'Nuxt.js is amazing',
      },
    ],
  })

  return {
    get trends() {
      return state.trends
    },
  }
}

export type TrendsStore = ReturnType<typeof trendsStore>
