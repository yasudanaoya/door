import { object, text, withKnobs } from '@storybook/addon-knobs'
import TrendCard from '../../components/organisms/TrendCard.vue'

export default {
  title: 'Organisms/TrendCard',
  decorators: [withKnobs],
}

export const Basic = () => {
  return {
    components: { TrendCard },
    props: {
      tags: {
        default: object('tags', [
          { title: '開発者', color: 'red', textColor: 'white' },
          { title: 'コード管理', color: 'blue', textColor: 'white' },
        ]),
      },
      comment: {
        default: text('comment', 'とてもお勧めできるサイトです。'),
      },
      org: {
        default: object('org', {
          href: 'https://github.com/',
          src: 'https://github.githubassets.com/images/modules/open_graph/github-logo.png',
          title: 'GitHub',
          description:
            'GitHub is where people build software. More than 65 million people use GitHub to discover, fork, and contribute to over 200 million projects.',
        }),
      },
    },
    template: `
      <TrendCard :tags="tags" :comment="comment" :org="org" />
    `,
  }
}
